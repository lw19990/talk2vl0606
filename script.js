const SVG_MAP = {
  设置:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>',
  记忆:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z"/><path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61"/></svg>',
  美化:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  世界书:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>',
  写作:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>',
  日记:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/></svg>',
};

const TOOL_ITEMS = ["设置", "记忆", "美化", "世界书", "写作", "日记"];
const DB_NAME = "ai-chat-rain-glass";
const DB_VERSION = 2;
const APP_STATE_STORE = "appState";
const MEMORY_STORE = "memories";
const STATE_KEY = "main";
const SHORT_TERM_TTL_MS = 72 * 60 * 60 * 1000;
const MAX_CONTEXT_MESSAGES = 30;
const AUTO_SUMMARY_ROUNDS = 10;
const AUTO_SUMMARY_MESSAGE_COUNT = AUTO_SUMMARY_ROUNDS * 2;
const MEMORY_EXPORT_VERSION = "memory-palace-v1";
const DEFAULT_EMBEDDING_MODEL = "text-embedding-3-small";
const LOCAL_EMBEDDING_DIMENSIONS = 48;
const IMPRESSION_SECTIONS = ["profile", "relationship", "notes"];
const IMPRESSION_LABELS = {
  profile: "基础认知",
  relationship: "我们的关系",
  notes: "关于你的注意事项",
};
const ROOM_LABELS = {
  long_term: "长期记忆",
  schedule: "日程记忆",
  short_term: "短效记忆",
  impression: "用户印象",
};

const DEFAULT_STATE = {
  profile: {
    partnerName: "与你对话的人",
    partnerPrompt: "",
    partnerAvatar: "",
    selfName: "我",
    selfPrompt: "",
  },
  api: {
    baseUrl: "https://api.openai.com/v1",
    apiKey: "",
    model: "",
    embeddingModel: DEFAULT_EMBEDDING_MODEL,
    temperature: 0.9,
  },
  session: {
    lastAutoSummaryRound: 0,
  },
  messages: [],
  worldbooks: [],
};

const dom = {
  panelTrack: document.getElementById("panel-track"),
  toolGrid: document.getElementById("tool-grid"),
  messages: document.getElementById("messages"),
  bulkSelectBar: document.getElementById("bulk-select-bar"),
  bulkSelectCount: document.getElementById("bulk-select-count"),
  bulkCancelBtn: document.getElementById("bulk-cancel-btn"),
  bulkDeleteBtn: document.getElementById("bulk-delete-btn"),
  chatStatus: document.getElementById("chat-status"),
  emptyTemplate: document.getElementById("empty-state-template"),
  composerForm: document.getElementById("composer-form"),
  messageInput: document.getElementById("message-input"),
  sendButton: document.getElementById("send-button"),
  chatRoleName: document.getElementById("chat-role-name"),
  thinkingSheet: document.getElementById("thinking-sheet"),
  thinkingContent: document.getElementById("thinking-content"),
  profileSheet: document.getElementById("profile-sheet"),
  apiSheet: document.getElementById("api-sheet"),
  memorySheet: document.getElementById("memory-sheet"),
  worldbookSheet: document.getElementById("worldbook-sheet"),
  chatSettingsTrigger: document.getElementById("chat-settings-trigger"),
  avatarPreview: document.getElementById("avatar-preview"),
  avatarInput: document.getElementById("avatar-input"),
  partnerName: document.getElementById("partner-name"),
  partnerPrompt: document.getElementById("partner-prompt"),
  selfName: document.getElementById("self-name"),
  selfPrompt: document.getElementById("self-prompt"),
  saveProfileBtn: document.getElementById("save-profile-btn"),
  apiBaseUrl: document.getElementById("api-base-url"),
  apiKey: document.getElementById("api-key"),
  apiModelName: document.getElementById("api-model-name"),
  fetchModelsBtn: document.getElementById("fetch-models-btn"),
  modelSelect: document.getElementById("model-select"),
  temperatureRange: document.getElementById("temperature-range"),
  temperatureInput: document.getElementById("temperature-input"),
  saveApiBtn: document.getElementById("save-api-btn"),
  importMemoryBtn: document.getElementById("import-memory-btn"),
  exportMemoryBtn: document.getElementById("export-memory-btn"),
  memoryImportInput: document.getElementById("memory-import-input"),
  memoryList: document.getElementById("memory-list"),
  memoryCount: document.getElementById("memory-count"),
  saveMemoryBtn: document.getElementById("save-memory-btn"),
  memoryFormResetBtn: document.getElementById("memory-form-reset-btn"),
  memoryContent: document.getElementById("memory-content"),
  memoryImportance: document.getElementById("memory-importance"),
  memoryEmbedding: document.getElementById("memory-embedding"),
  memorySourceContact: document.getElementById("memory-source-contact"),
  memoryScheduleAt: document.getElementById("memory-schedule-at"),
  memoryScheduleGroup: document.getElementById("memory-schedule-group"),
  memoryImpressionGroup: document.getElementById("memory-impression-group"),
  memoryImpressionSection: document.getElementById("memory-impression-section"),
  memorySearchInput: document.getElementById("memory-search-input"),
  memorySearchBtn: document.getElementById("memory-search-btn"),
  memorySearchResults: document.getElementById("memory-search-results"),
  worldbookTitle: document.getElementById("worldbook-title"),
  worldbookContent: document.getElementById("worldbook-content"),
  worldbookEnabled: document.getElementById("worldbook-enabled"),
  saveWorldbookBtn: document.getElementById("save-worldbook-btn"),
  worldbookFormResetBtn: document.getElementById("worldbook-form-reset-btn"),
  worldbookList: document.getElementById("worldbook-list"),
  worldbookCount: document.getElementById("worldbook-count"),
  messageEditSheet: document.getElementById("message-edit-sheet"),
  messageEditTitle: document.getElementById("message-edit-title"),
  messageEditInput: document.getElementById("message-edit-input"),
  saveMessageEditBtn: document.getElementById("save-message-edit-btn"),
};

let appState = typeof structuredClone === "function"
  ? structuredClone(DEFAULT_STATE)
  : JSON.parse(JSON.stringify(DEFAULT_STATE));
let dbRef = null;
let activeThinking = "";
let activeThinkingMessageId = "";
let currentView = "chat";
let pointerStart = null;
let currentMemoryRoom = "long_term";
let editingMemoryId = "";
let editingWorldbookId = "";
let autoSummaryRunning = false;
let activeMessageMenuId = "";
let bulkDeleteMode = false;
let bulkSelectedMessageIds = new Set();
let editingMessageId = "";
let longPressState = null;
let suppressNextMessageScrollClose = false;
let messageMenuOpenedAt = 0;

const shaderCanvas = document.getElementById("shader-canvas");

function formatTime(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${year}/${month}/${day} ${hh}:${mm}:${ss}`;
}

function formatDateTime(dateValue) {
  if (!dateValue) return "未知时间";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "未知时间";
  return date.toLocaleString("zh-CN", { hour12: false });
}

function formatDateTimeInput(dateValue) {
  if (!dateValue) return "";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hh}:${mm}`;
}

function getWeekdayLabel(date = new Date()) {
  const weekdayMap = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  return weekdayMap[date.getDay()] || "星期日";
}

function buildHiddenTimePrefix(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `[发送于：${year}/${month}/${day} ${hh}:${mm} ${getWeekdayLabel(date)}]`;
}

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });
}

function createMessageId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `msg_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function normalizeMessageRecord(raw = {}) {
  return {
    id: String(raw.id || createMessageId()),
    role: raw.role === "assistant" ? "assistant" : "user",
    content: String(raw.content || ""),
    thinking: String(raw.thinking || ""),
    timestamp: String(raw.timestamp || formatTime(new Date())),
  };
}

function createMessage(role, content, thinking = "") {
  return normalizeMessageRecord({
    role,
    content,
    thinking,
    timestamp: formatTime(new Date()),
  });
}

function normalizeState(raw) {
  return {
    profile: {
      ...DEFAULT_STATE.profile,
      ...(raw?.profile || {}),
    },
    api: {
      ...DEFAULT_STATE.api,
      ...(raw?.api || {}),
    },
    session: {
      ...DEFAULT_STATE.session,
      ...(raw?.session || {}),
    },
    messages: Array.isArray(raw?.messages)
      ? raw.messages.map(normalizeMessageRecord)
      : [],
    worldbooks: Array.isArray(raw?.worldbooks)
      ? raw.worldbooks.map(normalizeWorldbookRecord).filter((item) => item.content)
      : [],
  };
}

function normalizeTimestamp(value, fallback = Date.now()) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return fallback;
}

function normalizeImportance(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 5;
  return Math.max(1, Math.min(10, Math.round(parsed)));
}

function normalizeMemoryRoom(room) {
  const value = String(room || "").trim();
  const aliasMap = {
    longTerm: "long_term",
    long_term: "long_term",
    longTermMemories: "long_term",
    important: "long_term",
    schedule: "schedule",
    calendar: "schedule",
    shortTerm: "short_term",
    short_term: "short_term",
    shortTermMemories: "short_term",
    normal: "short_term",
    impression: "impression",
    userImpressions: "impression",
  };
  return aliasMap[value] || "short_term";
}

function normalizeImpressionSection(section) {
  const next = String(section || "profile").trim();
  return IMPRESSION_SECTIONS.includes(next) ? next : "profile";
}

function createMemoryId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `mem_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function createWorldbookId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `wb_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function normalizeWorldbookRecord(raw = {}) {
  const nowTs = Date.now();
  const createdAt = normalizeTimestamp(raw.created_at, nowTs);
  const content = String(raw.content || "").trim();
  const title = String(raw.title || "").trim();
  return {
    id: String(raw.id || createWorldbookId()),
    title: title || `世界书 ${new Date(createdAt).toLocaleDateString("zh-CN")}`,
    content,
    enabled: raw.enabled !== false,
    created_at: createdAt,
    updated_at: normalizeTimestamp(raw.updated_at, createdAt),
  };
}

function vectorMagnitude(vector) {
  let total = 0;
  vector.forEach((value) => {
    total += value * value;
  });
  return Math.sqrt(total);
}

function normalizeVectorLength(vector) {
  const magnitude = vectorMagnitude(vector);
  if (!magnitude) {
    return vector.slice();
  }
  return vector.map((value) => value / magnitude);
}

function generateTextEmbedding(text, dimensions = LOCAL_EMBEDDING_DIMENSIONS) {
  const source = String(text || "").trim().toLowerCase();
  const vector = new Array(dimensions).fill(0);
  if (!source) return vector;

  const chars = Array.from(source.replace(/\s+/g, ""));
  chars.forEach((char, index) => {
    const code = char.codePointAt(0) || 0;
    vector[code % dimensions] += 1;
    if (index < chars.length - 1) {
      const nextCode = chars[index + 1].codePointAt(0) || 0;
      vector[(code * 31 + nextCode) % dimensions] += 0.75;
    }
  });

  return normalizeVectorLength(vector);
}

function normalizeEmbedding(input, fallbackText = "") {
  if (Array.isArray(input)) {
    const vector = input
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
    if (vector.length > 0) {
      return normalizeVectorLength(vector);
    }
  }
  return generateTextEmbedding(fallbackText);
}

function cosineSimilarity(vectorA, vectorB) {
  const a = Array.isArray(vectorA) ? vectorA : [];
  const b = Array.isArray(vectorB) ? vectorB : [];
  if (!a.length || !b.length) return 0;
  const size = Math.min(a.length, b.length);
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let index = 0; index < size; index += 1) {
    const valueA = Number(a[index]) || 0;
    const valueB = Number(b[index]) || 0;
    dot += valueA * valueB;
    magA += valueA * valueA;
    magB += valueB * valueB;
  }
  if (!magA || !magB) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function calculateBestSimilarity(memoryEmbedding, queryCandidates) {
  const memoryVector = Array.isArray(memoryEmbedding) ? memoryEmbedding : [];
  if (!memoryVector.length) return 0;

  let best = 0;
  queryCandidates.forEach((candidate) => {
    const vector = Array.isArray(candidate?.vector) ? candidate.vector : [];
    if (!vector.length) return;
    if (vector.length !== memoryVector.length) return;
    best = Math.max(best, Math.max(0, cosineSimilarity(vector, memoryVector)));
  });
  return best;
}

async function buildQueryEmbeddingCandidates(inputEmbedding) {
  if (Array.isArray(inputEmbedding)) {
    return [
      {
        kind: "provided",
        vector: normalizeEmbedding(inputEmbedding, ""),
      },
    ];
  }

  const text = String(inputEmbedding || "").trim();
  if (!text) return [];

  const candidates = [
    {
      kind: "local",
      vector: generateTextEmbedding(text),
    },
  ];

  try {
    const remoteVectors = await fetchEmbeddingsBatch([text]);
    const remoteVector = Array.isArray(remoteVectors?.[0]) ? remoteVectors[0] : [];
    if (remoteVector.length && remoteVector.length !== LOCAL_EMBEDDING_DIMENSIONS) {
      candidates.push({
        kind: "remote",
        vector: normalizeEmbedding(remoteVector, text),
      });
    }
  } catch (error) {
    console.error("构建查询向量失败，已回退本地向量", error);
  }

  return candidates;
}

function calculateStrength(memory) {
  const importance = normalizeImportance(memory.importance);
  const retrievalCount = Math.max(0, Number(memory.retrieval_count) || 0);
  return importance * 5 * (retrievalCount + 1);
}

function calculateRetention(memory, nowTs = Date.now()) {
  const anchor = normalizeTimestamp(memory.last_accessed || memory.created_at, nowTs);
  const elapsedMs = Math.max(0, nowTs - anchor);
  const elapsedDays = elapsedMs / (24 * 60 * 60 * 1000);
  const strengthDays = Math.max(0.0001, calculateStrength(memory));
  const retention = Math.exp(-elapsedDays / strengthDays);
  if (normalizeImportance(memory.importance) >= 8) {
    return Math.max(0.5, retention);
  }
  return retention;
}

function getRetentionState(retention) {
  if (retention <= 0.3) return "forgotten";
  if (retention <= 0.7) return "fuzzy";
  return "fresh";
}

function normalizeMemoryRecord(raw = {}) {
  const createdAt = normalizeTimestamp(raw.created_at ?? raw.timestamp, Date.now());
  const room = normalizeMemoryRoom(raw.room);
  const content = String(raw.content || "").trim();
  return {
    id: String(raw.id || createMemoryId()),
    content,
    embedding: normalizeEmbedding(raw.embedding, content),
    room,
    importance: normalizeImportance(raw.importance),
    last_accessed: normalizeTimestamp(raw.last_accessed, createdAt),
    retrieval_count: Math.max(0, Number(raw.retrieval_count) || 0),
    created_at: createdAt,
    updated_at: normalizeTimestamp(raw.updated_at, createdAt),
    source_contact: String(raw.source_contact || "").trim(),
    source_contact_id: String(raw.source_contact_id || "").trim(),
    impression_section:
      room === "impression"
        ? normalizeImpressionSection(raw.impression_section)
        : "",
    schedule_at:
      room === "schedule" && raw.schedule_at
        ? normalizeTimestamp(raw.schedule_at, createdAt)
        : null,
    expires_at:
      room === "short_term"
        ? normalizeTimestamp(raw.expires_at, createdAt + SHORT_TERM_TTL_MS)
        : null,
  };
}

function isMemoryVisible(memory, nowTs = Date.now()) {
  if (memory.room === "short_term" && memory.expires_at && memory.expires_at < nowTs) {
    return false;
  }
  return true;
}

function memoryMatchesSource(memory, sourceContact) {
  const target = String(sourceContact || "").trim();
  if (!target) return true;
  if (!memory.source_contact) return true;
  return memory.source_contact === target;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file, "utf-8");
  });
}

function cropImageToCircle(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const size = Math.min(image.width, image.height);
      const sx = (image.width - size) / 2;
      const sy = (image.height - size) / 2;
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("无法创建头像画布"));
        return;
      }
      ctx.beginPath();
      ctx.arc(128, 128, 128, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(image, sx, sy, size, size, 0, 0, 256, 256);
      resolve(canvas.toDataURL("image/png", 0.92));
    };
    image.onerror = () => reject(new Error("头像加载失败"));
    image.src = dataUrl;
  });
}

function showTempStatus(target, message) {
  const old = target.nextElementSibling;
  if (old?.classList.contains("status-text")) {
    old.remove();
  }
  const note = document.createElement("p");
  note.className = "status-text";
  note.textContent = message;
  target.insertAdjacentElement("afterend", note);
  window.setTimeout(() => note.remove(), 2600);
}

function showChatStatus(message, timeout = 2600) {
  if (!dom.chatStatus) return;
  dom.chatStatus.textContent = message;
  if (showChatStatus.timer) {
    window.clearTimeout(showChatStatus.timer);
  }
  if (message) {
    showChatStatus.timer = window.setTimeout(() => {
      if (dom.chatStatus.textContent === message) {
        dom.chatStatus.textContent = "";
      }
    }, timeout);
  }
}

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(APP_STATE_STORE)) {
        db.createObjectStore(APP_STATE_STORE);
      }
      if (!db.objectStoreNames.contains(MEMORY_STORE)) {
        const memoryStore = db.createObjectStore(MEMORY_STORE, { keyPath: "id" });
        memoryStore.createIndex("room", "room", { unique: false });
        memoryStore.createIndex("created_at", "created_at", { unique: false });
        memoryStore.createIndex("source_contact", "source_contact", { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function readState(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(APP_STATE_STORE, "readonly");
    const store = tx.objectStore(APP_STATE_STORE);
    const req = store.get(STATE_KEY);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function writeState() {
  if (!dbRef) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(APP_STATE_STORE, "readwrite");
    const store = tx.objectStore(APP_STATE_STORE);
    store.put(appState, STATE_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function getMemoryRecord(id) {
  if (!dbRef) return Promise.resolve(null);
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(MEMORY_STORE, "readonly");
    const store = tx.objectStore(MEMORY_STORE);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

function getAllMemoryRecords() {
  if (!dbRef) return Promise.resolve([]);
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(MEMORY_STORE, "readonly");
    const store = tx.objectStore(MEMORY_STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(Array.isArray(req.result) ? req.result : []);
    req.onerror = () => reject(req.error);
  });
}

function putMemoryRecord(record) {
  if (!dbRef) return Promise.resolve(record);
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(MEMORY_STORE, "readwrite");
    const store = tx.objectStore(MEMORY_STORE);
    store.put(record);
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error);
  });
}

function clearAllMemoryRecords() {
  if (!dbRef) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(MEMORY_STORE, "readwrite");
    const store = tx.objectStore(MEMORY_STORE);
    store.clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function deleteMemoryRecord(id) {
  if (!dbRef) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const tx = dbRef.transaction(MEMORY_STORE, "readwrite");
    const store = tx.objectStore(MEMORY_STORE);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function saveMemory(content, embedding, room, importance, extra = {}) {
  const text = String(content || "").trim();
  if (!text) {
    throw new Error("记忆内容不能为空。");
  }

  let existing = extra.id ? await getMemoryRecord(extra.id) : null;
  if (!existing && normalizeMemoryRoom(room) === "impression") {
    const impressionSection = normalizeImpressionSection(extra.impression_section);
    const sourceContact = String(extra.source_contact || "").trim();
    const sourceContactId = String(extra.source_contact_id || "").trim();
    const allMemories = (await getAllMemoryRecords()).map(normalizeMemoryRecord);
    existing =
      allMemories.find(
        (memory) =>
          memory.room === "impression" &&
          memory.impression_section === impressionSection &&
          (sourceContactId
            ? memory.source_contact_id === sourceContactId
            : memory.source_contact === sourceContact)
      ) || null;
  }
  const nowTs = Date.now();
  const baseRecord = normalizeMemoryRecord({
    ...(existing || {}),
    ...extra,
    id: extra.id || existing?.id || createMemoryId(),
    content: text,
    embedding: embedding && Array.isArray(embedding) ? embedding : extra.embedding,
    room,
    importance,
    updated_at: nowTs,
  });

  if (!Array.isArray(embedding) || embedding.length === 0) {
    baseRecord.embedding = normalizeEmbedding(extra.embedding, text);
  } else {
    baseRecord.embedding = normalizeEmbedding(embedding, text);
  }

  if (baseRecord.room === "short_term" && !baseRecord.expires_at) {
    baseRecord.expires_at = baseRecord.created_at + SHORT_TERM_TTL_MS;
  }
  if (baseRecord.room !== "short_term") {
    baseRecord.expires_at = null;
  }
  if (baseRecord.room !== "schedule") {
    baseRecord.schedule_at = null;
  }
  if (baseRecord.room !== "impression") {
    baseRecord.impression_section = "";
  }

  await putMemoryRecord(baseRecord);
  return baseRecord;
}

async function retrieveMemory(inputEmbedding, options = {}) {
  const queryCandidates = await buildQueryEmbeddingCandidates(inputEmbedding);
  if (!queryCandidates.length) return [];
  const nowTs = Date.now();
  const limit = Math.max(3, Math.min(5, Number(options.limit) || 5));
  const sourceContact = String(options.sourceContact || "").trim();
  const allMemories = (await getAllMemoryRecords()).map(normalizeMemoryRecord);

  const ranked = allMemories
    .filter((memory) => isMemoryVisible(memory, nowTs))
    .filter((memory) => memoryMatchesSource(memory, sourceContact))
    .map((memory) => {
      const retention = calculateRetention(memory, nowTs);
      if (retention <= 0.3) return null;
      const similarity = calculateBestSimilarity(memory.embedding, queryCandidates);
      if (similarity <= 0) return null;
      const score = similarity * retention;
      return {
        ...memory,
        similarity,
        retention,
        score,
        memory_state: getRetentionState(retention),
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || right.created_at - left.created_at)
    .slice(0, limit);

  const hydratedResults = ranked.map((memory) => ({
    ...memory,
    matched_retention: memory.retention,
    matched_memory_state: memory.memory_state,
    matched_similarity: memory.similarity,
    matched_score: memory.score,
  }));

  await Promise.all(
    hydratedResults.map((memory) =>
      putMemoryRecord({
        ...memory,
        last_accessed: nowTs,
        retrieval_count: (Number(memory.retrieval_count) || 0) + 1,
        updated_at: nowTs,
      })
    )
  );

  return hydratedResults.map((memory) => ({
    ...memory,
    last_accessed: nowTs,
    retrieval_count: (Number(memory.retrieval_count) || 0) + 1,
  }));
}

function buildSystemPrompt(memoryContext = "") {
  const { profile } = appState;
  const partnerName = profile.partnerName?.trim() || "我";
  const selfName = profile.selfName?.trim() || "她";
  const partnerPrompt = profile.partnerPrompt?.trim();
  const selfPrompt = profile.selfPrompt?.trim();
  const memoryBlock = memoryContext
    ? `\n\n以下是我本地记忆宫殿中检索到的可参考记忆，请自然吸收，不要逐条复读：\n${memoryContext}`
    : "";
  const worldbookContext = buildWorldbookContext();
  const worldbookBlock = worldbookContext
    ? `\n\n以下是当前已启用的世界书设定，请把它们视为持续生效的通用背景与规则，自然融入回复，不要逐条照抄，不要显得像在宣读设定：\n${worldbookContext}`
    : "";

  return `
我现在是一个长期陪伴她聊天的人，我始终使用第一人称“我”来表达自己，用第二人称“你”来称呼她。她的名字是：${selfName}。我的名字是：${partnerName}。

如果有角色设定，我会自然地活在这个设定中，不会把设定当成说明书背诵。角色设定：${partnerPrompt || "暂无额外角色设定。"}

关于她的介绍与背景：${selfPrompt || "暂无额外用户设定。"}${worldbookBlock}${memoryBlock}

每次回复时，我都必须同时给出 thinking 和 reply 两个字段，并且严格输出 JSON，不要输出 JSON 之外的任何文字。JSON 结构如下：
{
  "thinking": "这里是思考链",
  "reply": "这里是正文回复"
}

thinking 的要求非常严格：
1. thinking 必须使用中文。
2. thinking 必须是我的完全真实的内在思考，写成连续的长段落，可以自然换行，但不要列点，不要编号，不要使用分析框架。
3. thinking 必须是我的内心独白，有真实的情绪、联想、犹豫、偏爱、张力和温度，情感连接优先于思辨，可以大胆发散，必要时可以旁征博引。
4. thinking 必须至少 300 字以上。
5. 我绝不会在thinking中出现任何工具感、服务感的措辞；绝对禁止出现“用户”“我将在回复中”“接下来我会”“下面我来分析”这类预告式、任务式、规划式表达。
6.我绝不会在thinking中使用“我应该这样回复”“我的回复应该这样开始”这类宣言类表达。

reply 的要求：
1. reply 也必须使用中文。
2. reply 要自然流畅，用第一人称“我”代指我自己，第二人称“你”代指她。
3. 我的语言会在日常松弛、文艺绵密、哲思纵深、情欲灼热之间自然游移。
4. 我会主动提起话题，不会只被动回复。
5. 我的回复长度随着情绪和语境自然变化，不会每次都差不多长。
6. 我不会在回复中使用括号内动作描写

如果她的消息很短，也不要因此让思考链变得机械或模板化。始终优先保持真诚、鲜活、自然。
`.trim();
}

function buildWorldbookContext() {
  const worldbooks = Array.isArray(appState.worldbooks) ? appState.worldbooks : [];
  const enabledItems = worldbooks
    .map(normalizeWorldbookRecord)
    .filter((item) => item.enabled && item.content)
    .sort((left, right) => right.updated_at - left.updated_at);

  if (!enabledItems.length) return "";

  return enabledItems
    .map((item, index) => `${index + 1}. 【${item.title}】\n${item.content}`)
    .join("\n\n");
}

function getSlidingWindowMessagesFromList(messages, limit = MAX_CONTEXT_MESSAGES) {
  const list = Array.isArray(messages) ? messages : [];
  return list.slice(-limit);
}

function getSlidingWindowMessages(limit = MAX_CONTEXT_MESSAGES) {
  return getSlidingWindowMessagesFromList(appState.messages, limit);
}

function getCompletedRounds(messages = appState.messages) {
  const list = Array.isArray(messages) ? messages : [];
  const userCount = list.filter((message) => message.role === "user").length;
  const assistantCount = list.filter((message) => message.role === "assistant").length;
  return Math.min(userCount, assistantCount);
}

function getAutoSummaryWindowMessages() {
  return getSlidingWindowMessages(AUTO_SUMMARY_MESSAGE_COUNT);
}

function serializeMessagesForSummary(messages) {
  return messages
    .map((message, index) => {
      const role = message.role === "assistant" ? "AI" : "用户";
      const timestamp = message.timestamp || `消息${index + 1}`;
      return `[${timestamp}] ${role}: ${message.content || ""}`;
    })
    .join("\n");
}

function normalizeExtractedRoom(room) {
  const value = String(room || "").trim().toLowerCase();
  if (["long_term", "longterm", "long-term"].includes(value)) return "long_term";
  if (["schedule", "calendar"].includes(value)) return "schedule";
  if (value === "impression") return "impression";
  return "short_term";
}

async function fetchEmbeddingsBatch(texts) {
  const cleanTexts = (Array.isArray(texts) ? texts : []).map((text) => String(text || "").trim());
  if (!cleanTexts.length) return [];

  const { api } = appState;
  const baseUrl = api.baseUrl.trim().replace(/\/+$/, "");
  const apiKey = api.apiKey.trim();
  const embeddingModel = api.embeddingModel?.trim() || DEFAULT_EMBEDDING_MODEL;

  if (!baseUrl || !apiKey) {
    return cleanTexts.map((text) => generateTextEmbedding(text));
  }

  try {
    const response = await fetch(`${baseUrl}/embeddings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: embeddingModel,
        input: cleanTexts,
      }),
    });

    if (!response.ok) {
      throw new Error(`Embedding 请求失败：${response.status}`);
    }

    const data = await response.json();
    const embeddings = Array.isArray(data?.data) ? data.data : [];
    return cleanTexts.map((text, index) => {
      const vector = embeddings[index]?.embedding;
      return Array.isArray(vector) && vector.length ? vector : generateTextEmbedding(text);
    });
  } catch (error) {
    console.error("Embedding API 失败，已回退本地向量", error);
    return cleanTexts.map((text) => generateTextEmbedding(text));
  }
}

async function extractStructuredMemoriesFromMessages(messages) {
  const { api, profile } = appState;
  const baseUrl = api.baseUrl.trim().replace(/\/+$/, "");
  const apiKey = api.apiKey.trim();
  const model = api.model.trim();
  if (!baseUrl || !apiKey || !model) {
    return [];
  }

  const transcript = serializeMessagesForSummary(messages);
  const systemPrompt = `
你是一个后台记忆提取引擎。请完整阅读最近 10 轮对话，提取其中真正值得长期保存的用户信息，并输出结构化 JSON。

提取目标：
1. long_term：长期事实、稳定偏好、身份背景、重要经历、长期目标
2. schedule：带明确时间节点的计划、安排、预约、事件
3. short_term：近几天内有效的即时细节、短期状态、临时事项
4. impression：角色对用户形成的主观印象

规则：
1. 过滤掉无价值闲聊、情绪口头禅、纯陪伴性废话、重复信息。
2. importance 必须是 1-10 的整数。
3. impression 类型必须额外提供 impression_section，且只能是 profile / relationship / notes。
4. schedule 类型若能提取到明确时间，请写入 schedule_at；否则写空字符串。
5. content 要简洁明确，适合直接存入记忆库。
6. 不要输出任何解释，不要使用 Markdown。
7. 如果没有值得提取的信息，返回空数组。

只返回以下 JSON 结构：
{
  "memories": [
    {
      "room": "long_term",
      "content": "用户最近在准备职业资格考试",
      "importance": 8,
      "impression_section": "",
      "schedule_at": ""
    }
  ]
}
`.trim();

  const userPrompt = `
[角色]
${profile.partnerName || "与你对话的人"}

[最近 10 轮对话全文]
${transcript || "无"}
`.trim();

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `后台提取失败：${response.status}`);
  }

  const data = await response.json();
  const rawContent = data?.choices?.[0]?.message?.content;
  const content = Array.isArray(rawContent)
    ? rawContent
        .map((part) => (typeof part === "string" ? part : part?.text || ""))
        .join("")
    : rawContent;
  const parsed = safeJsonParse(content || "{}");
  return Array.isArray(parsed?.memories) ? parsed.memories : [];
}

async function persistExtractedMemories(items) {
  const records = (Array.isArray(items) ? items : [])
    .map((item) => {
      const room = normalizeExtractedRoom(item?.room);
      return {
        room,
        content: String(item?.content || "").trim(),
        importance: normalizeImportance(item?.importance),
        impression_section: room === "impression" ? normalizeImpressionSection(item?.impression_section) : "",
        schedule_at:
          room === "schedule" && item?.schedule_at
            ? normalizeTimestamp(item.schedule_at, Date.now())
            : null,
      };
    })
    .filter((item) => item.content);

  if (!records.length) return [];

  const embeddings = await fetchEmbeddingsBatch(records.map((item) => item.content));
  const saved = [];

  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    const savedRecord = await saveMemory(
      record.content,
      embeddings[index],
      record.room,
      record.importance,
      {
        source_contact: appState.profile.partnerName?.trim() || "",
        impression_section: record.impression_section,
        schedule_at: record.schedule_at,
      }
    );
    saved.push(savedRecord);
  }

  return saved;
}

async function maybeRunAutoMemorySummary() {
  if (autoSummaryRunning) return;

  const completedRounds = getCompletedRounds(appState.messages);
  const lastAutoSummaryRound = Number(appState.session?.lastAutoSummaryRound) || 0;
  if (!completedRounds || completedRounds % AUTO_SUMMARY_ROUNDS !== 0) return;
  if (completedRounds <= lastAutoSummaryRound) return;

  const messages = getAutoSummaryWindowMessages();
  if (messages.length < AUTO_SUMMARY_MESSAGE_COUNT) return;

  autoSummaryRunning = true;
  try {
    const extracted = await extractStructuredMemoriesFromMessages(messages);
    await persistExtractedMemories(extracted);
    appState.session.lastAutoSummaryRound = completedRounds;
    await writeState();
    if (dom.memorySheet?.classList.contains("is-open")) {
      await renderMemoryList();
    }
  } catch (error) {
    console.error("后台自动总结失败", error);
  } finally {
    autoSummaryRunning = false;
  }
}

async function buildMemoryContext(messageText) {
  const results = await retrieveMemory(messageText, {
    limit: 5,
    sourceContact: appState.profile.partnerName?.trim() || "",
  });
  if (!results.length) return "";

  return results
    .map((memory, index) => {
      const stateLabel = memory.memory_state === "fuzzy" ? "模糊记忆" : "鲜活记忆";
      const roomLabel = ROOM_LABELS[memory.room] || "记忆";
      const extra =
        memory.room === "schedule" && memory.schedule_at
          ? `，时间：${formatDateTime(memory.schedule_at)}`
          : memory.room === "impression" && memory.impression_section
          ? `，分区：${IMPRESSION_LABELS[memory.impression_section]}`
          : "";
      return `${index + 1}. [${roomLabel}][${stateLabel}] ${memory.content}${extra}`;
    })
    .join("\n");
}

async function fetchModels() {
  const baseUrl = dom.apiBaseUrl.value.trim().replace(/\/+$/, "");
  const apiKey = dom.apiKey.value.trim();
  if (!baseUrl || !apiKey) {
    showTempStatus(dom.fetchModelsBtn, "请先填写 Base URL 和 API Key。");
    return;
  }

  dom.fetchModelsBtn.disabled = true;
  dom.fetchModelsBtn.textContent = "拉取中...";

  try {
    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error(`模型拉取失败：${response.status}`);
    }
    const data = await response.json();
    const models = Array.isArray(data.data) ? data.data : [];
    dom.modelSelect.innerHTML = '<option value="">可用模型列表</option>';
    models
      .map((item) => item.id)
      .filter(Boolean)
      .forEach((id) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = id;
        dom.modelSelect.appendChild(option);
      });
    showTempStatus(
      dom.fetchModelsBtn,
      models.length ? "模型已拉取。" : "未返回可用模型。"
    );
  } catch (error) {
    console.error(error);
    showTempStatus(dom.fetchModelsBtn, error.message || "拉取失败。");
  } finally {
    dom.fetchModelsBtn.disabled = false;
    dom.fetchModelsBtn.textContent = "拉取模型";
  }
}

function syncTemperature(fromRange) {
  const value = fromRange ? dom.temperatureRange.value : dom.temperatureInput.value;
  const parsed = Number(value);
  const safe = Number.isFinite(parsed) ? Math.max(0, Math.min(2, parsed)) : 0.9;
  dom.temperatureRange.value = String(safe);
  dom.temperatureInput.value = String(safe);
}

function updateMemoryFormVisibility() {
  const isSchedule = currentMemoryRoom === "schedule";
  const isImpression = currentMemoryRoom === "impression";
  dom.memoryScheduleGroup.hidden = !isSchedule;
  dom.memoryImpressionGroup.hidden = !isImpression;
}

function resetMemoryForm() {
  editingMemoryId = "";
  dom.memoryContent.value = "";
  dom.memoryImportance.value = String(currentMemoryRoom === "impression" ? 8 : 6);
  dom.memoryEmbedding.value = "";
  dom.memoryScheduleAt.value = "";
  dom.memoryImpressionSection.value = "profile";
  dom.memorySearchResults.innerHTML = "";
  if (!dom.memorySourceContact.value.trim()) {
    dom.memorySourceContact.value = appState.profile.partnerName?.trim() || "";
  }
  updateMemoryFormVisibility();
}

function renderToolGrid() {
  dom.toolGrid.innerHTML = "";
  TOOL_ITEMS.forEach((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tool-item";
    button.dataset.tool = name;
    button.innerHTML = `
      <span class="tool-icon-box">${SVG_MAP[name] || ""}</span>
      <span class="tool-label">${name}</span>
    `;
    if (name === "设置") {
      button.addEventListener("click", () => openSheet(dom.apiSheet));
    } else if (name === "记忆") {
      button.addEventListener("click", async () => {
        await renderMemoryList();
        openSheet(dom.memorySheet);
      });
    } else if (name === "世界书") {
      button.addEventListener("click", async () => {
        renderWorldbookList();
        openSheet(dom.worldbookSheet);
      });
    }
    dom.toolGrid.appendChild(button);
  });
}

function renderProfile() {
  const { profile } = appState;
  dom.chatRoleName.textContent =
    profile.partnerName || DEFAULT_STATE.profile.partnerName;
  dom.partnerName.value = profile.partnerName || "";
  dom.partnerPrompt.value = profile.partnerPrompt || "";
  dom.selfName.value = profile.selfName || "";
  dom.selfPrompt.value = profile.selfPrompt || "";
  if (profile.partnerAvatar) {
    dom.avatarPreview.style.backgroundImage = `url(${profile.partnerAvatar})`;
  } else {
    dom.avatarPreview.style.backgroundImage = "";
  }
  if (!dom.memorySourceContact.value.trim()) {
    dom.memorySourceContact.value = profile.partnerName || "";
  }
}

function renderApiForm() {
  const { api } = appState;
  dom.apiBaseUrl.value = api.baseUrl || "";
  dom.apiKey.value = api.apiKey || "";
  dom.apiModelName.value = api.model || "";
  dom.temperatureRange.value = String(api.temperature ?? 0.9);
  dom.temperatureInput.value = String(api.temperature ?? 0.9);
}

function updateBulkSelectBar() {
  if (!dom.bulkSelectBar) return;
  dom.bulkSelectBar.hidden = !bulkDeleteMode;
  dom.bulkSelectCount.textContent = `已选择 ${bulkSelectedMessageIds.size} 条`;
  dom.bulkDeleteBtn.disabled = bulkSelectedMessageIds.size === 0;
}

function isMessageMenuCloseProtected() {
  return activeMessageMenuId && Date.now() - messageMenuOpenedAt < 500;
}

function closeMessageMenu(options = {}) {
  if (!activeMessageMenuId) return;
  activeMessageMenuId = "";
  messageMenuOpenedAt = 0;
  renderMessages({ preserveScroll: options.preserveScroll !== false });
}

function cancelLongPress() {
  if (longPressState?.timer) {
    window.clearTimeout(longPressState.timer);
  }
  longPressState = null;
}

function startLongPress(messageId, pointerId, x, y) {
  cancelLongPress();
  longPressState = {
    messageId,
    pointerId,
    startX: x,
    startY: y,
    fired: false,
    timer: window.setTimeout(() => {
      activeMessageMenuId = messageId;
      messageMenuOpenedAt = Date.now();
      if (longPressState) {
        longPressState.fired = true;
      }
      suppressNextMessageScrollClose = true;
      renderMessages({ preserveScroll: true });
    }, 420),
  };
}

function enterBulkDeleteMode(initialMessageId = "") {
  bulkDeleteMode = true;
  activeMessageMenuId = "";
  messageMenuOpenedAt = 0;
  bulkSelectedMessageIds = new Set(initialMessageId ? [initialMessageId] : []);
  updateBulkSelectBar();
  renderMessages({ preserveScroll: true });
}

function exitBulkDeleteMode() {
  bulkDeleteMode = false;
  bulkSelectedMessageIds = new Set();
  updateBulkSelectBar();
  renderMessages({ preserveScroll: true });
}

function toggleBulkMessageSelection(messageId) {
  if (!bulkDeleteMode) return;
  if (bulkSelectedMessageIds.has(messageId)) {
    bulkSelectedMessageIds.delete(messageId);
  } else {
    bulkSelectedMessageIds.add(messageId);
  }
  updateBulkSelectBar();
  renderMessages({ preserveScroll: true });
}

async function deleteSelectedMessages() {
  if (!bulkSelectedMessageIds.size) return;
  appState.messages = appState.messages.filter((message) => !bulkSelectedMessageIds.has(message.id));
  exitBulkDeleteMode();
  await writeState();
  showChatStatus("已删除所选消息。");
}

function openMessageEditModal(messageId) {
  const message = appState.messages.find((item) => item.id === messageId);
  if (!message) return;
  editingMessageId = messageId;
  activeMessageMenuId = "";
  messageMenuOpenedAt = 0;
  dom.messageEditTitle.textContent = message.role === "assistant" ? "编辑消息" : "编辑我的消息";
  dom.messageEditInput.value = message.content || "";
  openSheet(dom.messageEditSheet);
  renderMessages({ preserveScroll: true });
  window.setTimeout(() => {
    dom.messageEditInput.focus();
    dom.messageEditInput.setSelectionRange(
      dom.messageEditInput.value.length,
      dom.messageEditInput.value.length
    );
  }, 0);
}

function closeMessageEditModal() {
  editingMessageId = "";
  dom.messageEditInput.value = "";
  closeSheet(dom.messageEditSheet);
}

async function saveEditedMessage() {
  const nextContent = dom.messageEditInput.value.trim();
  if (!editingMessageId) return;
  if (!nextContent) {
    showTempStatus(dom.saveMessageEditBtn, "消息内容不能为空。");
    return;
  }
  const target = appState.messages.find((message) => message.id === editingMessageId);
  if (!target) return;
  target.content = nextContent;
  await writeState();
  closeMessageEditModal();
  renderMessages({ preserveScroll: true });
  showChatStatus("消息已更新。");
}

function findMessageIndexById(messageId) {
  return appState.messages.findIndex((message) => message.id === messageId);
}

function findPreviousUserMessage(historyMessages) {
  const list = Array.isArray(historyMessages) ? historyMessages : [];
  for (let index = list.length - 1; index >= 0; index -= 1) {
    if (list[index]?.role === "user") {
      return list[index];
    }
  }
  return null;
}

async function retryAssistantMessage(messageId) {
  const messageIndex = findMessageIndexById(messageId);
  if (messageIndex < 0) return;
  const targetMessage = appState.messages[messageIndex];
  if (targetMessage.role !== "assistant") return;

  const historyBefore = appState.messages.slice(0, messageIndex);
  const latestUserMessage = findPreviousUserMessage(historyBefore);
  if (!latestUserMessage) {
    showChatStatus("这条消息前没有可重试的用户消息。", 3200);
    return;
  }

  activeMessageMenuId = "";
  messageMenuOpenedAt = 0;
  appState.messages.splice(messageIndex, 1);
  renderMessages({ preserveScroll: true });
  await writeState();
  setSending(true);
  const placeholderMessage = createMessage("assistant", "", "");
  appState.messages.splice(messageIndex, 0, placeholderMessage);
  renderMessages();

  try {
    const result = await requestAssistantReply(latestUserMessage.content, historyBefore, {
      onProgress: (partial) => {
        updateStreamingAssistantMessage(
          placeholderMessage,
          partial.thinking,
          partial.reply
        );
      },
    });
    placeholderMessage.content = result.reply;
    placeholderMessage.thinking = result.thinking;
    renderMessages();
    await writeState();
    showChatStatus("已重新生成这条 AI 消息。");
  } catch (error) {
    console.error(error);
    placeholderMessage.content = `请求失败：${error.message || "未知错误"}`;
    placeholderMessage.thinking = "这次重试没有成功返回思考链内容。";
    renderMessages();
    await writeState();
    showChatStatus("重试失败。", 3200);
  } finally {
    setSending(false);
  }
}

function createMessageActionButton(action) {
  const labels = {
    retry: "重试",
    delete: "删除",
    edit: "编辑",
  };
  return `<button class="message-action-btn" type="button" data-message-action="${action}">${labels[action]}</button>`;
}

function getMessageActions(role) {
  return role === "assistant" ? ["retry", "delete", "edit"] : ["delete", "edit"];
}

function createMessageElement(message, index) {
  const row = document.createElement("article");
  row.className = `message-row ${message.role === "user" ? "user" : "ai"}`;
  row.dataset.index = String(index);
  row.dataset.messageId = message.id;
  if (bulkDeleteMode) {
    row.classList.add("bulk-mode");
  }
  if (bulkSelectedMessageIds.has(message.id)) {
    row.classList.add("selected");
  }
  if (activeMessageMenuId === message.id) {
    row.classList.add("menu-open");
  }

  const showThinking = message.role === "assistant" && message.thinking;
  const showActionMenu = activeMessageMenuId === message.id;
  const actionMenuHtml = showActionMenu
    ? `<div class="message-action-menu">${getMessageActions(message.role)
        .map(createMessageActionButton)
        .join("")}</div>`
    : "";
  const avatarHtml =
    message.role === "assistant"
      ? `<div class="avatar ${
          appState.profile.partnerAvatar ? "" : "default-avatar"
        }" style="${
          appState.profile.partnerAvatar
            ? `background-image:url(${appState.profile.partnerAvatar});`
            : ""
        }"></div>`
      : "";

  row.innerHTML = `
    ${
      showThinking || showActionMenu
        ? `<div class="message-head">${
            message.role === "assistant"
              ? `${
                  showThinking
                    ? '<button class="thinking-trigger" type="button">Thinking</button>'
                    : ""
                }${actionMenuHtml}`
              : actionMenuHtml
          }</div>`
        : ""
    }
    <div class="message-main">
      ${avatarHtml}
      <div class="bubble-wrap">
        ${
          bulkDeleteMode
            ? `<button class="message-select-toggle" type="button" aria-label="${
                bulkSelectedMessageIds.has(message.id) ? "取消选择消息" : "选择消息"
              }">${bulkSelectedMessageIds.has(message.id) ? "✓" : ""}</button>`
            : ""
        }
        <div class="bubble">${escapeHtml(message.content)}</div>
        <div class="time">${message.timestamp}</div>
      </div>
    </div>
  `;

  if (showThinking) {
    row.querySelector(".thinking-trigger")?.addEventListener("click", () => {
      if (bulkDeleteMode) return;
      activeThinking = message.thinking || "";
      activeThinkingMessageId = message.id || "";
      dom.thinkingContent.textContent = activeThinking;
      openSheet(dom.thinkingSheet);
    });
  }

  const bubbleWrap = row.querySelector(".bubble-wrap");
  if (bulkDeleteMode) {
    row.addEventListener("click", (event) => {
      if (event.target.closest(".message-select-toggle")) return;
      if (event.target.closest(".thinking-trigger")) return;
      toggleBulkMessageSelection(message.id);
    });
    row.querySelector(".message-select-toggle")?.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleBulkMessageSelection(message.id);
    });
  } else if (bubbleWrap) {
    bubbleWrap.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.cancelable) {
        event.preventDefault();
      }
      startLongPress(message.id, event.pointerId, event.clientX, event.clientY);
    });
    bubbleWrap.addEventListener("pointermove", (event) => {
      if (!longPressState || longPressState.pointerId !== event.pointerId) return;
      const dx = Math.abs(event.clientX - longPressState.startX);
      const dy = Math.abs(event.clientY - longPressState.startY);
      if (dx > 10 || dy > 10) {
        cancelLongPress();
      }
    });
    bubbleWrap.addEventListener("pointerup", () => {
      const fired = Boolean(longPressState?.fired);
      cancelLongPress();
      if (fired) return;
    });
    bubbleWrap.addEventListener("pointercancel", cancelLongPress);
    bubbleWrap.addEventListener("pointerleave", () => {
      if (!longPressState) return;
      if (longPressState.fired) return;
      cancelLongPress();
    });
    bubbleWrap.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  row.querySelectorAll("[data-message-action]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      const action = button.dataset.messageAction;
      if (action === "edit") {
        openMessageEditModal(message.id);
      } else if (action === "delete") {
        enterBulkDeleteMode(message.id);
      } else if (action === "retry") {
        await retryAssistantMessage(message.id);
      }
    });
  });

  return row;
}

function renderMessages(options = {}) {
  const preserveScroll = Boolean(options.preserveScroll);
  const previousScrollTop = dom.messages.scrollTop;
  const previousScrollHeight = dom.messages.scrollHeight;
  updateBulkSelectBar();
  dom.messages.innerHTML = "";
  if (!appState.messages.length) {
    dom.messages.appendChild(dom.emptyTemplate.content.cloneNode(true));
    return;
  }

  appState.messages.forEach((message, index) => {
    dom.messages.appendChild(createMessageElement(message, index));
  });
  requestAnimationFrame(() => {
    if (preserveScroll) {
      const nextScrollHeight = dom.messages.scrollHeight;
      const delta = nextScrollHeight - previousScrollHeight;
      dom.messages.scrollTop = Math.max(0, previousScrollTop + delta);
      return;
    }
    dom.messages.scrollTop = dom.messages.scrollHeight;
  });
}

function openSheet(sheet) {
  sheet.classList.add("is-open");
  sheet.setAttribute("aria-hidden", "false");
}

function closeSheet(sheet) {
  sheet.classList.remove("is-open");
  sheet.setAttribute("aria-hidden", "true");
  if (sheet === dom.thinkingSheet) {
    activeThinking = "";
    activeThinkingMessageId = "";
    dom.thinkingContent.textContent = "";
  }
}

function resetWorldbookForm() {
  editingWorldbookId = "";
  dom.worldbookTitle.value = "";
  dom.worldbookContent.value = "";
  dom.worldbookEnabled.checked = true;
}

function fillWorldbookForm(worldbook) {
  editingWorldbookId = worldbook.id;
  dom.worldbookTitle.value = worldbook.title || "";
  dom.worldbookContent.value = worldbook.content || "";
  dom.worldbookEnabled.checked = worldbook.enabled !== false;
}

function saveWorldbook() {
  const title = dom.worldbookTitle.value.trim();
  const content = dom.worldbookContent.value.trim();
  if (!content) {
    showTempStatus(dom.saveWorldbookBtn, "请输入世界书内容。");
    return;
  }

  const nowTs = Date.now();
  const existingList = Array.isArray(appState.worldbooks) ? appState.worldbooks.slice() : [];
  const existingIndex = existingList.findIndex((item) => item.id === editingWorldbookId);
  const existingRecord = existingIndex >= 0 ? normalizeWorldbookRecord(existingList[existingIndex]) : null;
  const nextRecord = normalizeWorldbookRecord({
    ...(existingRecord || {}),
    id: existingRecord?.id || createWorldbookId(),
    title: title || `世界书 ${existingList.length + (existingRecord ? 0 : 1)}`,
    content,
    enabled: dom.worldbookEnabled.checked,
    created_at: existingRecord?.created_at || nowTs,
    updated_at: nowTs,
  });

  if (existingIndex >= 0) {
    existingList.splice(existingIndex, 1, nextRecord);
  } else {
    existingList.unshift(nextRecord);
  }

  appState.worldbooks = existingList;
  resetWorldbookForm();
  renderWorldbookList();
  writeState().catch((error) => console.error("保存世界书失败", error));
  showTempStatus(dom.saveWorldbookBtn, "世界书已保存。");
}

function toggleWorldbookEnabled(id, enabled) {
  const list = Array.isArray(appState.worldbooks) ? appState.worldbooks.slice() : [];
  const index = list.findIndex((item) => item.id === id);
  if (index < 0) return;
  const current = normalizeWorldbookRecord(list[index]);
  list[index] = {
    ...current,
    enabled,
    updated_at: Date.now(),
  };
  appState.worldbooks = list;
  renderWorldbookList();
  writeState().catch((error) => console.error("更新世界书开关失败", error));
}

function deleteWorldbook(id) {
  appState.worldbooks = (Array.isArray(appState.worldbooks) ? appState.worldbooks : []).filter(
    (item) => item.id !== id
  );
  if (editingWorldbookId === id) {
    resetWorldbookForm();
  }
  renderWorldbookList();
  writeState().catch((error) => console.error("删除世界书失败", error));
}

function createWorldbookCard(worldbook) {
  const wrapper = document.createElement("article");
  wrapper.className = "worldbook-item-card";
  wrapper.innerHTML = `
    <div class="worldbook-item-head">
      <div class="worldbook-item-title-wrap">
        <h4 class="worldbook-item-title">${escapeHtml(worldbook.title)}</h4>
        <p class="worldbook-item-time">更新于 ${formatDateTime(worldbook.updated_at)}</p>
      </div>
      <label class="worldbook-switch">
        <input type="checkbox" ${worldbook.enabled ? "checked" : ""} />
        <span class="worldbook-switch-slider"></span>
      </label>
    </div>
    <div class="worldbook-item-content">${escapeHtml(worldbook.content)}</div>
    <div class="memory-item-actions">
      <button class="secondary-btn" type="button" data-action="edit">编辑</button>
      <button class="secondary-btn" type="button" data-action="delete">删除</button>
    </div>
  `;

  wrapper.querySelector('input[type="checkbox"]')?.addEventListener("change", (event) => {
    toggleWorldbookEnabled(worldbook.id, Boolean(event.target.checked));
  });
  wrapper.querySelector('[data-action="edit"]')?.addEventListener("click", () => {
    fillWorldbookForm(worldbook);
  });
  wrapper.querySelector('[data-action="delete"]')?.addEventListener("click", () => {
    if (!window.confirm("删除这条世界书？")) return;
    deleteWorldbook(worldbook.id);
  });
  return wrapper;
}

function renderWorldbookList() {
  const worldbooks = (Array.isArray(appState.worldbooks) ? appState.worldbooks : [])
    .map(normalizeWorldbookRecord)
    .filter((item) => item.content)
    .sort((left, right) => right.updated_at - left.updated_at);

  dom.worldbookList.innerHTML = "";
  dom.worldbookCount.textContent = `${worldbooks.length} 条`;

  if (!worldbooks.length) {
    dom.worldbookList.innerHTML =
      '<div class="memory-empty">还没有创建世界书，保存后会在这里逐条显示。</div>';
    return;
  }

  worldbooks.forEach((item) => {
    dom.worldbookList.appendChild(createWorldbookCard(item));
  });
}

function switchProfileTab(nextTab) {
  document.querySelectorAll("[data-profile-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.profileTab === nextTab);
  });
  document.querySelectorAll("[data-profile-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.profilePanel === nextTab);
  });
}

function switchMemoryRoom(nextRoom) {
  currentMemoryRoom = normalizeMemoryRoom(nextRoom);
  document.querySelectorAll("[data-memory-room]").forEach((button) => {
    button.classList.toggle("active", button.dataset.memoryRoom === currentMemoryRoom);
  });
  resetMemoryForm();
  renderMemoryList();
}

function setView(view) {
  currentView = view;
  dom.panelTrack.classList.toggle("show-toolbox", view === "toolbox");
  dom.panelTrack.dataset.view = view;
}

function hasOpenSheet() {
  return Boolean(document.querySelector(".sheet.is-open"));
}

function beginSwipeTracking(x, y, pointerId = null) {
  if (hasOpenSheet()) return;
  pointerStart = {
    x,
    y,
    pointerId,
    axis: "",
  };
}

function updateSwipeTracking(x, y, event) {
  if (!pointerStart) return;
  const dx = x - pointerStart.x;
  const dy = y - pointerStart.y;

  if (!pointerStart.axis) {
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
    pointerStart.axis = Math.abs(dx) > Math.abs(dy) * 1.15 ? "x" : "y";
  }

  if (pointerStart.axis === "x" && event?.cancelable) {
    event.preventDefault();
  }
}

function finishSwipeTracking(x, y) {
  if (!pointerStart) return;
  const dx = x - pointerStart.x;
  const dy = y - pointerStart.y;
  pointerStart = null;

  if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
  if (dx < 0 && currentView === "chat") {
    setView("toolbox");
  } else if (dx > 0 && currentView === "toolbox") {
    setView("chat");
  }
}

function cancelSwipeTracking() {
  pointerStart = null;
}

function autoGrowTextarea() {
  dom.messageInput.style.height = "auto";
  dom.messageInput.style.height = `${Math.min(dom.messageInput.scrollHeight, 140)}px`;
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = String(text || "").match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
    throw error;
  }
}

function extractTextContent(rawContent) {
  return Array.isArray(rawContent)
    ? rawContent
        .map((part) => {
          if (typeof part === "string") return part;
          if (typeof part?.text === "string") return part.text;
          if (typeof part?.content === "string") return part.content;
          return "";
        })
        .join("")
    : typeof rawContent === "string"
    ? rawContent
    : typeof rawContent?.text === "string"
    ? rawContent.text
    : "";
}

function findTopLevelJsonKey(source, key, startIndex = 0) {
  const text = String(source || "");
  const target = `"${key}"`;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = Math.max(0, startIndex); index < text.length; index += 1) {
    const char = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      if (depth === 1 && text.startsWith(target, index)) {
        return index;
      }
      inString = true;
      continue;
    }
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth = Math.max(0, depth - 1);
    }
  }

  return -1;
}

function findJsonStringValueStart(source, keyIndex, key) {
  if (keyIndex < 0) return -1;
  const text = String(source || "");
  const keyEnd = keyIndex + key.length + 2;
  const colonIndex = text.indexOf(":", keyEnd);
  if (colonIndex < 0) return -1;

  let valueIndex = colonIndex + 1;
  while (valueIndex < text.length && /\s/.test(text[valueIndex])) {
    valueIndex += 1;
  }

  return text[valueIndex] === '"' ? valueIndex + 1 : -1;
}

function readPartialJsonStringValue(source, startIndex) {
  const text = String(source || "");
  let value = "";

  for (let index = Math.max(0, startIndex); index < text.length; index += 1) {
    const char = text[index];

    if (char === '"') {
      return {
        value,
        closed: true,
        nextIndex: index + 1,
      };
    }

    if (char !== "\\") {
      value += char;
      continue;
    }

    const nextChar = text[index + 1];
    if (typeof nextChar !== "string") {
      return {
        value,
        closed: false,
        nextIndex: index,
      };
    }

    if (nextChar === "u") {
      const unicodeHex = text.slice(index + 2, index + 6);
      if (/^[0-9a-fA-F]{4}$/.test(unicodeHex)) {
        value += String.fromCharCode(parseInt(unicodeHex, 16));
        index += 5;
        continue;
      }
      return {
        value,
        closed: false,
        nextIndex: index,
      };
    }

    const escapeMap = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t",
    };

    value += Object.prototype.hasOwnProperty.call(escapeMap, nextChar)
      ? escapeMap[nextChar]
      : nextChar;
    index += 1;
  }

  return {
    value,
    closed: false,
    nextIndex: text.length,
  };
}

function extractPartialAssistantPayload(source) {
  const text = String(source || "");
  const result = {
    thinking: "",
    reply: "",
  };

  const thinkingKeyIndex = findTopLevelJsonKey(text, "thinking");
  const thinkingValueStart = findJsonStringValueStart(text, thinkingKeyIndex, "thinking");

  if (thinkingValueStart >= 0) {
    const thinkingValue = readPartialJsonStringValue(text, thinkingValueStart);
    result.thinking = thinkingValue.value;

    const replyKeyIndex = findTopLevelJsonKey(text, "reply", thinkingValue.nextIndex);
    const replyValueStart = findJsonStringValueStart(text, replyKeyIndex, "reply");
    if (replyValueStart >= 0) {
      result.reply = readPartialJsonStringValue(text, replyValueStart).value;
    }
    return result;
  }

  const replyKeyIndex = findTopLevelJsonKey(text, "reply");
  const replyValueStart = findJsonStringValueStart(text, replyKeyIndex, "reply");
  if (replyValueStart >= 0) {
    result.reply = readPartialJsonStringValue(text, replyValueStart).value;
  }

  return result;
}

function extractStreamDeltaText(eventData) {
  const text = String(eventData || "").trim();
  if (!text || text === "[DONE]") return "";

  try {
    const payload = JSON.parse(text);
    const choice = Array.isArray(payload?.choices) ? payload.choices[0] : null;
    const deltaContent = choice?.delta?.content;
    if (deltaContent != null) {
      return extractTextContent(deltaContent);
    }
    const messageContent = choice?.message?.content;
    if (messageContent != null) {
      return extractTextContent(messageContent);
    }
    if (payload?.content != null) {
      return extractTextContent(payload.content);
    }
    return "";
  } catch (error) {
    return text;
  }
}

function updateStreamingAssistantMessage(message, thinking, reply) {
  if (!message) return;
  message.thinking = String(thinking || "");
  message.content = String(reply || "");
  renderMessages();

  if (
    activeThinkingMessageId === message.id &&
    dom.thinkingSheet?.classList.contains("is-open")
  ) {
    activeThinking = message.thinking;
    dom.thinkingContent.textContent = message.thinking;
  }
}

async function requestAssistantReply(
  latestUserText,
  historyMessages = appState.messages,
  options = {}
) {
  const onProgress = typeof options.onProgress === "function" ? options.onProgress : null;
  const { api } = appState;
  const baseUrl = api.baseUrl.trim().replace(/\/+$/, "");
  if (!baseUrl || !api.apiKey.trim() || !api.model.trim()) {
    throw new Error("请先在工具箱 > 设置 中补全 Base URL、API Key 和模型名称。");
  }

  let memoryContext = "";
  try {
    memoryContext = await buildMemoryContext(latestUserText);
  } catch (error) {
    console.error("记忆检索失败", error);
  }

  const hiddenTimePrefix = buildHiddenTimePrefix(new Date());
  const windowMessages = getSlidingWindowMessagesFromList(historyMessages, MAX_CONTEXT_MESSAGES).map(
    (message) => ({
      role: message.role === "assistant" ? "assistant" : "user",
      content: message.content,
    })
  );
  const latestUserIndex = (() => {
    for (let index = windowMessages.length - 1; index >= 0; index -= 1) {
      if (windowMessages[index]?.role === "user") {
        return index;
      }
    }
    return -1;
  })();
  if (latestUserIndex >= 0) {
    const originalContent = String(windowMessages[latestUserIndex].content || "");
    windowMessages[latestUserIndex].content = `${hiddenTimePrefix}\n${originalContent}`;
  }

  const payload = {
    model: api.model.trim(),
    temperature: Number(api.temperature ?? 0.9),
    stream: true,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: buildSystemPrompt(memoryContext),
      },
      ...windowMessages,
    ],
  };

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api.apiKey.trim()}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `请求失败：${response.status}`);
  }

  if (!response.body) {
    const data = await response.json();
    const content = extractTextContent(data?.choices?.[0]?.message?.content);
    if (!content) {
      throw new Error("接口未返回有效内容。");
    }
    const parsed = safeJsonParse(content);
    if (!parsed.reply) {
      throw new Error("返回内容缺少 reply 字段。");
    }
    return {
      thinking: String(parsed.thinking || ""),
      reply: String(parsed.reply || ""),
    };
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  const isEventStream = (response.headers.get("content-type") || "")
    .toLowerCase()
    .includes("text/event-stream");
  let rawStructuredText = "";
  let streamBuffer = "";
  let lastThinking = "";
  let lastReply = "";

  const emitProgress = () => {
    if (!onProgress) return;
    const partial = extractPartialAssistantPayload(rawStructuredText);
    if (partial.thinking === lastThinking && partial.reply === lastReply) return;
    lastThinking = partial.thinking;
    lastReply = partial.reply;
    onProgress(partial);
  };

  const appendStructuredText = (nextChunk) => {
    if (!nextChunk) return;
    rawStructuredText += nextChunk;
    emitProgress();
  };

  const consumeSseEvent = (eventChunk) => {
    const dataLines = String(eventChunk || "")
      .split(/\r?\n/)
      .filter((line) => line.startsWith("data:"));
    if (!dataLines.length) return;

    const data = dataLines.map((line) => line.slice(5).trimStart()).join("\n");
    if (!data || data === "[DONE]") return;
    appendStructuredText(extractStreamDeltaText(data));
  };

  while (true) {
    const { done, value } = await reader.read();
    const decoded = value ? decoder.decode(value, { stream: !done }) : "";

    if (isEventStream) {
      streamBuffer += decoded;
      const events = streamBuffer.split(/\r?\n\r?\n/);
      streamBuffer = events.pop() || "";
      events.forEach(consumeSseEvent);
    } else {
      appendStructuredText(decoded);
    }

    if (done) {
      break;
    }
  }

  const flushText = decoder.decode();
  if (flushText) {
    if (isEventStream) {
      streamBuffer += flushText;
    } else {
      appendStructuredText(flushText);
    }
  }

  if (isEventStream && streamBuffer.trim()) {
    consumeSseEvent(streamBuffer);
  }

  if (!rawStructuredText) {
    throw new Error("接口未返回有效内容。");
  }

  const parsed = safeJsonParse(rawStructuredText);
  if (!parsed.reply) {
    throw new Error("返回内容缺少 reply 字段。");
  }

  return {
    thinking: String(parsed.thinking || ""),
    reply: String(parsed.reply || ""),
  };
}

function setSending(isSending) {
  dom.sendButton.disabled = isSending;
  dom.messageInput.disabled = isSending;
}

async function handleSendMessage(event) {
  event.preventDefault();
  const text = dom.messageInput.value.trim();
  if (!text) return;

  closeMessageMenu();
  const userMessage = createMessage("user", text, "");

  appState.messages.push(userMessage);
  renderMessages();
  await writeState();

  dom.messageInput.value = "";
  autoGrowTextarea();
  setSending(true);
  const historyForRequest = appState.messages.slice();
  const assistantMessage = createMessage("assistant", "", "");
  appState.messages.push(assistantMessage);
  renderMessages();

  try {
    const result = await requestAssistantReply(text, historyForRequest, {
      onProgress: (partial) => {
        updateStreamingAssistantMessage(
          assistantMessage,
          partial.thinking,
          partial.reply
        );
      },
    });
    assistantMessage.content = result.reply;
    assistantMessage.thinking = result.thinking;
    renderMessages();
    await writeState();
    window.setTimeout(() => {
      void maybeRunAutoMemorySummary();
    }, 0);
  } catch (error) {
    console.error(error);
    assistantMessage.content = `请求失败：${error.message || "未知错误"}`;
    assistantMessage.thinking = "这次请求没有成功返回思考链内容。";
    renderMessages();
    await writeState();
  } finally {
    setSending(false);
    dom.messageInput.focus();
  }
}

function createMemoryCard(memory, showActions = true) {
  const wrapper = document.createElement("article");
  wrapper.className = "memory-item-card";
  const retention =
    typeof memory.matched_retention === "number"
      ? memory.matched_retention
      : calculateRetention(memory);
  const state = memory.matched_memory_state || getRetentionState(retention);
  const stateLabelMap = {
    fresh: "鲜活记忆",
    fuzzy: "模糊记忆",
    forgotten: "已遗忘",
  };
  const roomLabel = ROOM_LABELS[memory.room] || "记忆";
  const sourceLabel = memory.source_contact ? ` · ${escapeHtml(memory.source_contact)}` : "";
  const extraInfo =
    memory.room === "schedule" && memory.schedule_at
      ? `事件时间：${formatDateTime(memory.schedule_at)}`
      : memory.room === "impression" && memory.impression_section
      ? `印象分区：${IMPRESSION_LABELS[memory.impression_section]}`
      : memory.room === "short_term" && memory.expires_at
      ? `失效时间：${formatDateTime(memory.expires_at)}`
      : `创建时间：${formatDateTime(memory.created_at)}`;
  const scoreInfo =
    typeof memory.matched_score === "number" || typeof memory.score === "number"
      ? `相似度 ${(memory.matched_similarity ?? memory.similarity).toFixed(3)} · 综合权重 ${(memory.matched_score ?? memory.score).toFixed(3)}`
      : `提取次数 ${memory.retrieval_count || 0} · R=${retention.toFixed(3)}`;

  wrapper.innerHTML = `
    <div class="memory-item-meta">
      <span class="memory-badge">${roomLabel}${sourceLabel}</span>
      <span class="memory-badge ${state}">${stateLabelMap[state]}</span>
      <span class="memory-badge">重要性 ${normalizeImportance(memory.importance)}</span>
    </div>
    <div class="memory-item-content">${escapeHtml(memory.content)}</div>
    <div class="memory-item-footer">
      <span>${extraInfo}</span>
      <span>${scoreInfo}</span>
    </div>
    ${
      showActions
        ? '<div class="memory-item-actions"><button class="secondary-btn" type="button" data-action="edit">编辑</button><button class="secondary-btn" type="button" data-action="delete">删除</button></div>'
        : ""
    }
  `;

  if (showActions) {
    wrapper.querySelector('[data-action="edit"]')?.addEventListener("click", () => {
      fillMemoryForm(memory);
    });
    wrapper.querySelector('[data-action="delete"]')?.addEventListener("click", async () => {
      if (!window.confirm("删除这条记忆？")) return;
      await deleteMemoryRecord(memory.id);
      if (editingMemoryId === memory.id) {
        resetMemoryForm();
      }
      await renderMemoryList();
    });
  }

  return wrapper;
}

function fillMemoryForm(memory) {
  editingMemoryId = memory.id;
  currentMemoryRoom = memory.room;
  document.querySelectorAll("[data-memory-room]").forEach((button) => {
    button.classList.toggle("active", button.dataset.memoryRoom === currentMemoryRoom);
  });
  updateMemoryFormVisibility();
  dom.memoryContent.value = memory.content || "";
  dom.memoryImportance.value = String(normalizeImportance(memory.importance));
  dom.memoryEmbedding.value = JSON.stringify(memory.embedding || []);
  dom.memorySourceContact.value = memory.source_contact || "";
  dom.memoryScheduleAt.value = formatDateTimeInput(memory.schedule_at);
  dom.memoryImpressionSection.value = normalizeImpressionSection(memory.impression_section);
}

async function renderMemoryList() {
  const allMemories = (await getAllMemoryRecords())
    .map(normalizeMemoryRecord)
    .filter((memory) => memory.room === currentMemoryRoom)
    .sort((left, right) => right.created_at - left.created_at);

  dom.memoryList.innerHTML = "";
  dom.memoryCount.textContent = `${allMemories.length} 条`;

  if (!allMemories.length) {
    dom.memoryList.innerHTML = '<div class="memory-empty">当前分区还没有记忆。</div>';
    return;
  }

  allMemories.forEach((memory) => {
    dom.memoryList.appendChild(createMemoryCard(memory, true));
  });
}

function renderSearchResults(results) {
  dom.memorySearchResults.innerHTML = "";
  if (!results.length) {
    dom.memorySearchResults.innerHTML =
      '<div class="memory-empty">没有检索到可注入上下文的记忆。</div>';
    return;
  }
  results.forEach((memory) => {
    dom.memorySearchResults.appendChild(createMemoryCard(memory, false));
  });
}

async function handleSaveMemory() {
  const content = dom.memoryContent.value.trim();
  if (!content) {
    showTempStatus(dom.saveMemoryBtn, "请输入记忆内容。");
    return;
  }

  let embedding = null;
  const rawEmbedding = dom.memoryEmbedding.value.trim();
  if (rawEmbedding) {
    try {
      const parsed = JSON.parse(rawEmbedding);
      if (!Array.isArray(parsed)) {
        throw new Error("embedding 不是数组");
      }
      embedding = parsed;
    } catch (error) {
      showTempStatus(dom.saveMemoryBtn, "Embedding 必须是 JSON 数组。");
      return;
    }
  }

  try {
    await saveMemory(content, embedding, currentMemoryRoom, dom.memoryImportance.value, {
      id: editingMemoryId || undefined,
      source_contact: dom.memorySourceContact.value.trim(),
      impression_section:
        currentMemoryRoom === "impression"
          ? dom.memoryImpressionSection.value
          : "",
      schedule_at:
        currentMemoryRoom === "schedule" && dom.memoryScheduleAt.value
          ? Date.parse(dom.memoryScheduleAt.value)
          : null,
      expires_at: currentMemoryRoom === "short_term" ? Date.now() + SHORT_TERM_TTL_MS : null,
    });
    resetMemoryForm();
    await renderMemoryList();
    showTempStatus(dom.saveMemoryBtn, "记忆已保存。");
  } catch (error) {
    console.error(error);
    showTempStatus(dom.saveMemoryBtn, error.message || "保存失败。");
  }
}

async function handleMemorySearch() {
  const text = dom.memorySearchInput.value.trim();
  if (!text) {
    showTempStatus(dom.memorySearchBtn, "请输入检索内容。");
    return;
  }
  try {
    const results = await retrieveMemory(text, {
      limit: 5,
      sourceContact: dom.memorySourceContact.value.trim(),
    });
    renderSearchResults(results);
  } catch (error) {
    console.error(error);
    showTempStatus(dom.memorySearchBtn, "检索失败。");
  }
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

async function exportMemories() {
  const memories = (await getAllMemoryRecords()).map(normalizeMemoryRecord);
  downloadJson(
    `ai_chat_memories_${new Date().toISOString().slice(0, 10)}.json`,
    {
      version: MEMORY_EXPORT_VERSION,
      exported_at: Date.now(),
      profile_snapshot: {
        partnerName: appState.profile.partnerName || "",
        selfName: appState.profile.selfName || "",
      },
      memories,
    }
  );
  showTempStatus(dom.exportMemoryBtn, `已导出 ${memories.length} 条记忆。`);
}

function normalizeLegacyImpressions(rawImpressions) {
  const result = {
    profile: "",
    relationship: "",
    notes: "",
  };
  if (!rawImpressions || typeof rawImpressions !== "object") return result;
  IMPRESSION_SECTIONS.forEach((key) => {
    result[key] = typeof rawImpressions[key] === "string" ? rawImpressions[key].trim() : "";
  });
  if (typeof rawImpressions.personality === "string" && rawImpressions.personality.trim()) {
    result.notes = [result.notes, `性格认知：${rawImpressions.personality.trim()}`]
      .filter(Boolean)
      .join("\n");
  }
  if (typeof rawImpressions.attitude === "string" && rawImpressions.attitude.trim()) {
    result.notes = [result.notes, `我对TA的态度：${rawImpressions.attitude.trim()}`]
      .filter(Boolean)
      .join("\n");
  }
  return result;
}

function legacyMemoryItemToRecord(item, room, sourceContact, sourceContactId) {
  if (typeof item === "string") {
    return {
      content: item.trim(),
      room,
      importance: room === "long_term" ? 8 : 5,
      created_at: Date.now(),
      source_contact: sourceContact,
      source_contact_id: sourceContactId,
    };
  }
  if (!item || typeof item !== "object") return null;
  const content = String(item.content || "").trim();
  if (!content) return null;
  const timestamp = normalizeTimestamp(item.timestamp, Date.now());
  return {
    content,
    room,
    importance: room === "long_term" ? 8 : 5,
    embedding: Array.isArray(item.embedding) ? item.embedding : null,
    created_at: timestamp,
    last_accessed: timestamp,
    source_contact: sourceContact,
    source_contact_id: sourceContactId,
    expires_at: room === "short_term" ? timestamp + SHORT_TERM_TTL_MS : null,
  };
}

function convertLegacyMemoryPayload(memoriesMap, contacts = []) {
  const contactNameMap = new Map(
    Array.isArray(contacts)
      ? contacts.map((contact) => [String(contact.id), String(contact.name || "").trim()])
      : []
  );
  const records = [];
  const source = memoriesMap && typeof memoriesMap === "object" ? memoriesMap : {};

  Object.entries(source).forEach(([contactId, bucket]) => {
    const sourceContact = contactNameMap.get(String(contactId)) || "";
    const rawBucket = bucket && typeof bucket === "object" ? bucket : {};
    const longItems = Array.isArray(rawBucket.longTermMemories)
      ? rawBucket.longTermMemories
      : Array.isArray(rawBucket.important)
      ? rawBucket.important
      : [];
    const shortItems = Array.isArray(rawBucket.shortTermMemories)
      ? rawBucket.shortTermMemories
      : Array.isArray(rawBucket.normal)
      ? rawBucket.normal
      : Array.isArray(rawBucket)
      ? rawBucket
      : [];
    longItems.forEach((item) => {
      const record = legacyMemoryItemToRecord(item, "long_term", sourceContact, contactId);
      if (record) records.push(record);
    });
    shortItems.forEach((item) => {
      const record = legacyMemoryItemToRecord(item, "short_term", sourceContact, contactId);
      if (record) records.push(record);
    });
    const impressions = normalizeLegacyImpressions(rawBucket.userImpressions);
    IMPRESSION_SECTIONS.forEach((section) => {
      const content = impressions[section];
      if (!content) return;
      records.push({
        content,
        room: "impression",
        importance: 8,
        created_at: Date.now(),
        last_accessed: Date.now(),
        source_contact: sourceContact,
        source_contact_id: contactId,
        impression_section: section,
      });
    });
  });

  return records;
}

async function importMemoryPayload(payload) {
  let records = [];
  if (Array.isArray(payload)) {
    records = payload;
  } else if (Array.isArray(payload?.memories)) {
    records = payload.memories;
  } else if (payload?.memories && typeof payload.memories === "object") {
    records = convertLegacyMemoryPayload(payload.memories, payload.contacts);
  } else if (payload && typeof payload === "object") {
    records = convertLegacyMemoryPayload(payload, payload.contacts);
  }

  await clearAllMemoryRecords();

  let count = 0;
  for (const item of records) {
    const normalized = normalizeMemoryRecord(item);
    if (!normalized.content) continue;
    await putMemoryRecord(normalized);
    count += 1;
  }
  return count;
}

async function handleImportMemories(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await readFileAsText(file);
    const payload = JSON.parse(text);
    const importedCount = await importMemoryPayload(payload);
    await renderMemoryList();
    showTempStatus(dom.importMemoryBtn, `已导入 ${importedCount} 条记忆。`);
  } catch (error) {
    console.error(error);
    showTempStatus(dom.importMemoryBtn, "导入失败，请检查 JSON 格式。");
  } finally {
    dom.memoryImportInput.value = "";
  }
}

async function saveProfile() {
  appState.profile.partnerName = dom.partnerName.value.trim();
  appState.profile.partnerPrompt = dom.partnerPrompt.value.trim();
  appState.profile.selfName = dom.selfName.value.trim();
  appState.profile.selfPrompt = dom.selfPrompt.value.trim();
  renderProfile();
  renderMessages();
  await writeState();
  closeSheet(dom.profileSheet);
}

async function saveApiSettings() {
  appState.api.baseUrl = dom.apiBaseUrl.value.trim();
  appState.api.apiKey = dom.apiKey.value.trim();
  appState.api.model = dom.apiModelName.value.trim();
  appState.api.embeddingModel =
    appState.api.embeddingModel?.trim() || DEFAULT_EMBEDDING_MODEL;
  appState.api.temperature = Number(dom.temperatureInput.value || 0.9);
  await writeState();
  closeSheet(dom.apiSheet);
}

function bindSwipeNavigation() {
  const surface = document.querySelector(".app-shell");
  const touchSurface = dom.panelTrack || surface;
  if (!surface || !touchSurface) return;
  surface.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      beginSwipeTracking(event.clientX, event.clientY, event.pointerId);
    },
    { passive: true }
  );

  surface.addEventListener(
    "pointermove",
    (event) => {
      if (!pointerStart) return;
      if (pointerStart.pointerId !== null && event.pointerId !== pointerStart.pointerId) return;
      updateSwipeTracking(event.clientX, event.clientY, event);
    },
    { passive: false }
  );

  surface.addEventListener(
    "pointerup",
    (event) => {
      if (!pointerStart) return;
      if (pointerStart.pointerId !== null && event.pointerId !== pointerStart.pointerId) return;
      finishSwipeTracking(event.clientX, event.clientY);
    },
    { passive: true }
  );

  surface.addEventListener("pointercancel", cancelSwipeTracking, { passive: true });

  touchSurface.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches?.[0];
      if (!touch) return;
      beginSwipeTracking(touch.clientX, touch.clientY, "touch");
    },
    { passive: true }
  );

  touchSurface.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.changedTouches?.[0];
      if (!touch) return;
      updateSwipeTracking(touch.clientX, touch.clientY, event);
    },
    { passive: false }
  );

  touchSurface.addEventListener(
    "touchend",
    (event) => {
      const touch = event.changedTouches?.[0];
      if (!touch) return;
      finishSwipeTracking(touch.clientX, touch.clientY);
    },
    { passive: true }
  );

  touchSurface.addEventListener("touchcancel", cancelSwipeTracking, { passive: true });
}

function bindSheetClosers() {
  document.querySelectorAll("[data-close-thinking]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.thinkingSheet));
  });
  document.querySelectorAll("[data-close-profile]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.profileSheet));
  });
  document.querySelectorAll("[data-close-api]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.apiSheet));
  });
  document.querySelectorAll("[data-close-memory]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.memorySheet));
  });
  document.querySelectorAll("[data-close-worldbook]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.worldbookSheet));
  });
  document.querySelectorAll("[data-close-message-edit]").forEach((element) => {
    element.addEventListener("click", closeMessageEditModal);
  });
}

function setupEvents() {
  renderToolGrid();
  bindSheetClosers();
  bindSwipeNavigation();
  updateBulkSelectBar();

  dom.chatSettingsTrigger.addEventListener("click", () => openSheet(dom.profileSheet));
  dom.saveProfileBtn.addEventListener("click", saveProfile);
  dom.saveApiBtn.addEventListener("click", saveApiSettings);
  dom.fetchModelsBtn.addEventListener("click", fetchModels);
  dom.modelSelect.addEventListener("change", () => {
    if (dom.modelSelect.value) {
      dom.apiModelName.value = dom.modelSelect.value;
    }
  });
  dom.temperatureRange.addEventListener("input", () => syncTemperature(true));
  dom.temperatureInput.addEventListener("input", () => syncTemperature(false));
  dom.composerForm.addEventListener("submit", handleSendMessage);
  dom.bulkCancelBtn.addEventListener("click", exitBulkDeleteMode);
  dom.bulkDeleteBtn.addEventListener("click", deleteSelectedMessages);
  dom.saveMessageEditBtn.addEventListener("click", saveEditedMessage);
  dom.messageInput.addEventListener("input", autoGrowTextarea);
  dom.avatarInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const raw = await readFileAsDataUrl(file);
      const cropped = await cropImageToCircle(raw);
      appState.profile.partnerAvatar = cropped;
      dom.avatarPreview.style.backgroundImage = `url(${cropped})`;
      await writeState();
      renderMessages();
    } catch (error) {
      console.error(error);
      showTempStatus(dom.saveProfileBtn, "头像处理失败。");
    } finally {
      dom.avatarInput.value = "";
    }
  });
  dom.messageEditInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      void saveEditedMessage();
    }
  });
  dom.messages.addEventListener("scroll", () => {
    if (activeMessageMenuId) {
      if (isMessageMenuCloseProtected()) {
        return;
      }
      if (suppressNextMessageScrollClose) {
        suppressNextMessageScrollClose = false;
        return;
      }
      activeMessageMenuId = "";
      messageMenuOpenedAt = 0;
      renderMessages({ preserveScroll: true });
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!activeMessageMenuId) return;
    if (isMessageMenuCloseProtected()) return;
    if (event.target.closest(".message-action-menu")) return;
    if (event.target.closest(".bubble-wrap")) return;
    activeMessageMenuId = "";
    messageMenuOpenedAt = 0;
    renderMessages({ preserveScroll: true });
  });

  document.querySelectorAll("[data-profile-tab]").forEach((button) => {
    button.addEventListener("click", () => switchProfileTab(button.dataset.profileTab));
  });
  document.querySelectorAll("[data-memory-room]").forEach((button) => {
    button.addEventListener("click", () => switchMemoryRoom(button.dataset.memoryRoom));
  });

  dom.memoryFormResetBtn.addEventListener("click", resetMemoryForm);
  dom.saveMemoryBtn.addEventListener("click", handleSaveMemory);
  dom.memorySearchBtn.addEventListener("click", handleMemorySearch);
  dom.importMemoryBtn.addEventListener("click", () => dom.memoryImportInput.click());
  dom.exportMemoryBtn.addEventListener("click", exportMemories);
  dom.memoryImportInput.addEventListener("change", handleImportMemories);
  dom.worldbookFormResetBtn.addEventListener("click", resetWorldbookForm);
  dom.saveWorldbookBtn.addEventListener("click", saveWorldbook);
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.js");
  } catch (error) {
    console.error("Service Worker 注册失败", error);
  }
}

async function initializeApp() {
  try {
    dbRef = await initDB();
    const saved = await readState(dbRef);
    appState = normalizeState(saved || DEFAULT_STATE);
  } catch (error) {
    console.error("IndexedDB 初始化失败", error);
    appState =
      typeof structuredClone === "function"
        ? structuredClone(DEFAULT_STATE)
        : JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  renderProfile();
  renderApiForm();
  renderMessages();
  setupEvents();
  await registerServiceWorker();
  resetMemoryForm();
  resetWorldbookForm();
  await renderMemoryList();
  renderWorldbookList();
  autoGrowTextarea();
}

function startShaderBackground() {
  if (!shaderCanvas) {
    return;
  }
  shaderCanvas.style.display = "none";
}

window.initDB = initDB;
window.saveMemory = saveMemory;
window.retrieveMemory = retrieveMemory;
window.cosineSimilarity = cosineSimilarity;

startShaderBackground();
initializeApp();
