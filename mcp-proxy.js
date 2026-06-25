const http = require("http");

const PORT = Number(process.env.MCP_PROXY_PORT || 8787);
const MAX_BODY_SIZE = 10 * 1024 * 1024;

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, Authorization, X-Requested-With, X-MCP-Proxy"
  );
  res.setHeader("Access-Control-Max-Age", "86400");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
}

function sendJson(res, statusCode, payload) {
  setCorsHeaders(res);
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_SIZE) {
        reject(new Error("请求体过大。"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function normalizeHeaders(headers) {
  const result = {};
  if (!headers || typeof headers !== "object" || Array.isArray(headers)) {
    return result;
  }

  Object.entries(headers).forEach(([name, value]) => {
    const key = String(name || "").trim();
    if (!key) return;
    const lowerKey = key.toLowerCase();
    if (["host", "connection", "content-length", "origin", "referer"].includes(lowerKey)) {
      return;
    }
    if (value == null) return;
    result[key] = String(value);
  });
  return result;
}

function buildTargetUrl(serverUrl, path) {
  const base = String(serverUrl || "").trim().replace(/\/+$/, "");
  const suffix = String(path || "/").startsWith("/") ? String(path || "/") : `/${path}`;
  const url = new URL(`${base}${suffix}`);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("MCP 服务器地址只支持 http 或 https。");
  }
  return url;
}

async function proxyMcpRequest(req, res) {
  const rawBody = await readRequestBody(req);
  const payload = rawBody ? JSON.parse(rawBody) : {};
  const method = String(payload.method || "GET").toUpperCase();
  const targetUrl = buildTargetUrl(payload.serverUrl, payload.path);
  const headers = normalizeHeaders(payload.headers);
  const body = method === "GET" || method === "HEAD" ? undefined : payload.body || "";

  const upstream = await fetch(targetUrl, {
    method,
    headers,
    body,
  });
  const responseText = await upstream.text();
  const contentType = upstream.headers.get("content-type") || "text/plain; charset=utf-8";

  setCorsHeaders(res);
  res.writeHead(upstream.status, {
    "Content-Type": contentType,
    "X-MCP-Proxy-Target": targetUrl.origin,
  });
  res.end(responseText);
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/health") {
    sendJson(res, 200, { ok: true, service: "talk2vl-mcp-proxy" });
    return;
  }

  if (req.url !== "/mcp" || req.method !== "POST") {
    sendJson(res, 404, { error: "Not found. Use POST /mcp." });
    return;
  }

  try {
    await proxyMcpRequest(req, res);
  } catch (error) {
    console.error("MCP proxy error:", error);
    sendJson(res, 502, {
      error: true,
      message: error.message || "MCP proxy request failed.",
    });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`MCP proxy is running at http://localhost:${PORT}`);
});
