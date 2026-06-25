const SVG_MAP = {
  设置:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>',
  MCP工具:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><path d="M10 6.5h4"/><path d="M17.5 10v4"/><path d="M6.5 10v2a2 2 0 0 0 2 2H14"/></svg>',
  后台消息:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>',
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

const TOOL_ITEMS = ["设置", "MCP工具", "后台消息", "记忆", "美化", "世界书", "写作", "日记"];
const DB_NAME = "ai-chat-rain-glass";
const DB_VERSION = 2;
const APP_STATE_STORE = "appState";
const MEMORY_STORE = "memories";
const STATE_KEY = "main";
const SHORT_TERM_TTL_MS = 72 * 60 * 60 * 1000;
const MAX_CONTEXT_MESSAGES = 30;
const DEFAULT_MESSAGE_DISPLAY_LIMIT = 30;
const MESSAGE_LOAD_MORE_BATCH = 30;
const MESSAGE_PULL_TRIGGER_PX = 72;
const MESSAGE_PULL_MAX_PX = 108;
const AUTO_SUMMARY_ROUNDS = 10;
const AUTO_SUMMARY_MESSAGE_COUNT = AUTO_SUMMARY_ROUNDS * 2;
const MEMORY_EXPORT_VERSION = "memory-palace-v1";
const DEFAULT_EMBEDDING_MODEL = "text-embedding-3-small";
const DEFAULT_BGE_M3_MODEL = "BAAI/bge-m3";
const VECTOR_REBUILD_DELAY_MS = 150;
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
    memoryBaseUrl: "",
    memoryApiKey: "",
    memoryModel: "",
    vectorBaseUrl: "",
    vectorApiKey: "",
    vectorModel: DEFAULT_BGE_M3_MODEL,
    temperature: 0.9,
  },
  session: {
    lastAutoSummaryRound: 0,
  },
  theme: {
    backgroundMode: "none",
    rainBackgroundImage: "",
    messageDisplayLimit: DEFAULT_MESSAGE_DISPLAY_LIMIT,
  },
  backgroundMessage: {
    enabled: false,
    minMinutes: 10,
    maxMinutes: 20,
    nextFireAt: 0,
    lastDelayMinutes: 0,
  },
  mcp: {
    serverUrl: "",
    headerName: "",
    headerValue: "",
    useProxy: true,
    proxyUrl: "http://localhost:8787",
    protocol: "rest",
    rpcUrl: "",
    sessionId: "",
    tools: [],
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
  messagePullIndicator: document.getElementById("message-pull-indicator"),
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
  mcpSheet: document.getElementById("mcp-sheet"),
  memorySheet: document.getElementById("memory-sheet"),
  worldbookSheet: document.getElementById("worldbook-sheet"),
  themeSheet: document.getElementById("theme-sheet"),
  backgroundMessageSheet: document.getElementById("background-message-sheet"),
  chatSettingsTrigger: document.getElementById("chat-settings-trigger"),
  chatPanel: document.getElementById("chat-panel"),
  chatBackgroundPhoto: document.getElementById("chat-background-photo"),
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
  memoryApiBaseUrl: document.getElementById("memory-api-base-url"),
  memoryApiKey: document.getElementById("memory-api-key"),
  memoryApiModelName: document.getElementById("memory-api-model-name"),
  vectorApiBaseUrl: document.getElementById("vector-api-base-url"),
  vectorApiKey: document.getElementById("vector-api-key"),
  vectorApiModelName: document.getElementById("vector-api-model-name"),
  fetchModelsBtn: document.getElementById("fetch-models-btn"),
  modelSelect: document.getElementById("model-select"),
  temperatureRange: document.getElementById("temperature-range"),
  temperatureInput: document.getElementById("temperature-input"),
  saveApiBtn: document.getElementById("save-api-btn"),
  mcpServerUrl: document.getElementById("mcp-server-url"),
  mcpHeaderName: document.getElementById("mcp-header-name"),
  mcpHeaderValue: document.getElementById("mcp-header-value"),
  mcpUseProxy: document.getElementById("mcp-use-proxy"),
  mcpProxyUrl: document.getElementById("mcp-proxy-url"),
  connectMcpBtn: document.getElementById("connect-mcp-btn"),
  mcpStatus: document.getElementById("mcp-status"),
  mcpToolsCount: document.getElementById("mcp-tools-count"),
  mcpToolsList: document.getElementById("mcp-tools-list"),
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
  manualMemorySummaryBtn: document.getElementById("manual-memory-summary-btn"),
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
  themeModeRainBtn: document.getElementById("theme-mode-rain"),
  themeModeSnowBtn: document.getElementById("theme-mode-snow"),
  themeDisableBtn: document.getElementById("theme-disable-btn"),
  themeBgInput: document.getElementById("theme-bg-input"),
  clearThemeBgBtn: document.getElementById("clear-theme-bg-btn"),
  themeBgPreview: document.getElementById("theme-bg-preview"),
  themeBgCaption: document.getElementById("theme-bg-caption"),
  messageDisplayLimit: document.getElementById("message-display-limit"),
  saveThemeBtn: document.getElementById("save-theme-btn"),
  backgroundMessageEnabled: document.getElementById("background-message-enabled"),
  backgroundMessageMin: document.getElementById("background-message-min"),
  backgroundMessageMax: document.getElementById("background-message-max"),
  backgroundMessageStatus: document.getElementById("background-message-status"),
  requestNotificationPermissionBtn: document.getElementById("request-notification-permission-btn"),
  testBackgroundNotificationBtn: document.getElementById("test-background-notification-btn"),
  saveBackgroundMessageBtn: document.getElementById("save-background-message-btn"),
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
let backgroundMessageTimerId = 0;
let backgroundMessageTriggerRunning = false;
let backgroundMessagePendingAfterBusy = false;
let replyRequestInFlight = false;
let sessionExtraMessageDisplayCount = 0;
let McpServerUrl = "";
let mcpTools = [];
let messagePullState = {
  tracking: false,
  startY: 0,
  distance: 0,
  ready: false,
  loading: false,
};

const shaderCanvas = document.getElementById("shader-canvas");
const RAIN_BACKGROUND_IMAGE =
  "https://img.cdn1.vip/i/6a2fe492e2e9d_1781523602.webp";
let shaderRenderer = null;
let shaderResizeBound = false;

function formatTime(date = new Date()) {
  const year = "2018";
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
    theme: normalizeThemeConfig(raw?.theme || {}),
    backgroundMessage: normalizeBackgroundMessageConfig(raw?.backgroundMessage || {}),
    mcp: normalizeMcpConfig(raw?.mcp || {}),
    messages: Array.isArray(raw?.messages)
      ? raw.messages.map(normalizeMessageRecord)
      : [],
    worldbooks: Array.isArray(raw?.worldbooks)
      ? raw.worldbooks.map(normalizeWorldbookRecord).filter((item) => item.content)
      : [],
  };
}

function normalizeMcpConfig(raw = {}) {
  return {
    serverUrl: String(raw?.serverUrl || ""),
    headerName: String(raw?.headerName || ""),
    headerValue: String(raw?.headerValue || ""),
    useProxy: raw?.useProxy !== false,
    proxyUrl: String(raw?.proxyUrl || DEFAULT_STATE.mcp.proxyUrl),
    protocol: ["jsonrpc", "sse-jsonrpc"].includes(raw?.protocol) ? raw.protocol : "rest",
    rpcUrl: String(raw?.rpcUrl || ""),
    sessionId: String(raw?.sessionId || ""),
    tools: Array.isArray(raw?.tools)
      ? raw.tools.map(normalizeMcpToolDefinition).filter(Boolean)
      : [],
  };
}

function normalizeMinuteValue(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(1, Math.min(1440, Math.round(parsed)));
}

function normalizeMessageDisplayLimit(value, fallback = DEFAULT_MESSAGE_DISPLAY_LIMIT) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(1, Math.min(9999, Math.round(parsed)));
}

function normalizeThemeConfig(raw = {}) {
  const backgroundMode = ["none", "rain", "snow"].includes(raw?.backgroundMode)
    ? raw.backgroundMode
    : DEFAULT_STATE.theme.backgroundMode;
  return {
    ...DEFAULT_STATE.theme,
    ...(raw || {}),
    backgroundMode,
    rainBackgroundImage: String(raw?.rainBackgroundImage || ""),
    messageDisplayLimit: normalizeMessageDisplayLimit(raw?.messageDisplayLimit),
  };
}

function getBaseMessageDisplayLimit() {
  return normalizeMessageDisplayLimit(appState.theme?.messageDisplayLimit);
}

function getSessionMessageDisplayLimit() {
  return getBaseMessageDisplayLimit() + Math.max(0, sessionExtraMessageDisplayCount);
}

function canLoadMoreVisibleMessages() {
  return appState.messages.length > getSessionMessageDisplayLimit();
}

function updateMessagePullIndicator() {
  if (!dom.messagePullIndicator || !dom.messages) return;
  const shouldShow = messagePullState.distance > 0 || messagePullState.loading;
  dom.messagePullIndicator.classList.toggle("visible", shouldShow);
  dom.messagePullIndicator.classList.toggle("ready", messagePullState.ready);
  dom.messagePullIndicator.classList.toggle("loading", messagePullState.loading);
  dom.messagePullIndicator.setAttribute("aria-hidden", shouldShow ? "false" : "true");
  dom.messagePullIndicator.style.height = shouldShow
    ? `${Math.max(40, Math.round(messagePullState.distance || MESSAGE_PULL_TRIGGER_PX * 0.7))}px`
    : "0px";
  if (!shouldShow) {
    dom.messagePullIndicator.textContent = "";
    dom.messages.style.transform = "";
    return;
  }
  dom.messagePullIndicator.textContent = messagePullState.loading
    ? "正在加载更多消息..."
    : messagePullState.ready
      ? "松开加载更多消息"
      : "下拉加载更多消息";
  dom.messages.style.transform = `translateY(${Math.round(messagePullState.distance)}px)`;
}

function resetMessagePullState() {
  messagePullState = {
    tracking: false,
    startY: 0,
    distance: 0,
    ready: false,
    loading: false,
  };
  updateMessagePullIndicator();
}

function loadMoreVisibleMessages() {
  if (!canLoadMoreVisibleMessages()) {
    showChatStatus("已经没有更早的消息了。", 2200);
    resetMessagePullState();
    return false;
  }
  messagePullState.loading = true;
  messagePullState.tracking = false;
  messagePullState.ready = false;
  messagePullState.distance = 44;
  updateMessagePullIndicator();
  sessionExtraMessageDisplayCount += MESSAGE_LOAD_MORE_BATCH;
  renderMessages({ preserveScroll: true });
  window.setTimeout(() => {
    resetMessagePullState();
  }, 180);
  const visibleCount = Math.min(appState.messages.length, getSessionMessageDisplayLimit());
  showChatStatus(`已加载更多消息，当前显示 ${visibleCount} 条。`, 2600);
  return true;
}

function bindMessagePullToLoad() {
  if (!dom.messages) return;

  dom.messages.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) {
        resetMessagePullState();
        return;
      }
      if (bulkDeleteMode || replyRequestInFlight || !canLoadMoreVisibleMessages()) {
        resetMessagePullState();
        return;
      }
      if (dom.messages.scrollTop > 0) {
        resetMessagePullState();
        return;
      }
      messagePullState.tracking = true;
      messagePullState.startY = event.touches[0].clientY;
      messagePullState.distance = 0;
      messagePullState.ready = false;
      messagePullState.loading = false;
    },
    { passive: true }
  );

  dom.messages.addEventListener(
    "touchmove",
    (event) => {
      if (!messagePullState.tracking || messagePullState.loading) return;
      if (event.touches.length !== 1) {
        resetMessagePullState();
        return;
      }
      if (dom.messages.scrollTop > 0) {
        resetMessagePullState();
        return;
      }
      const deltaY = event.touches[0].clientY - messagePullState.startY;
      if (deltaY <= 0) {
        messagePullState.distance = 0;
        messagePullState.ready = false;
        updateMessagePullIndicator();
        return;
      }
      messagePullState.distance = Math.min(MESSAGE_PULL_MAX_PX, deltaY * 0.5);
      messagePullState.ready = deltaY >= MESSAGE_PULL_TRIGGER_PX;
      updateMessagePullIndicator();
      if (event.cancelable) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  const handleTouchEnd = () => {
    if (!messagePullState.tracking && !messagePullState.loading) return;
    if (messagePullState.loading) return;
    if (messagePullState.ready) {
      loadMoreVisibleMessages();
      return;
    }
    resetMessagePullState();
  };

  dom.messages.addEventListener("touchend", handleTouchEnd, { passive: true });
  dom.messages.addEventListener("touchcancel", () => {
    if (messagePullState.loading) return;
    resetMessagePullState();
  }, { passive: true });
}

function normalizeBackgroundMessageConfig(raw = {}) {
  const minMinutes = normalizeMinuteValue(raw?.minMinutes, DEFAULT_STATE.backgroundMessage.minMinutes);
  const maxMinutes = normalizeMinuteValue(raw?.maxMinutes, DEFAULT_STATE.backgroundMessage.maxMinutes);
  const normalizedMin = Math.min(minMinutes, maxMinutes);
  const normalizedMax = Math.max(minMinutes, maxMinutes);
  const nextFireAt = normalizeTimestamp(raw?.nextFireAt, 0);
  const lastDelayMinutes = normalizeMinuteValue(
    raw?.lastDelayMinutes,
    DEFAULT_STATE.backgroundMessage.lastDelayMinutes || normalizedMin
  );
  return {
    enabled: Boolean(raw?.enabled),
    minMinutes: normalizedMin,
    maxMinutes: normalizedMax,
    nextFireAt: raw?.nextFireAt ? nextFireAt : 0,
    lastDelayMinutes,
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

function normalizeKeywords(keywords) {
  if (!Array.isArray(keywords)) return [];
  return keywords
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .slice(0, 8);
}

function buildFallbackKeywords(text, limit = 5) {
  const content = String(text || "").trim();
  if (!content) return [];
  const asciiWords = content
    .toLowerCase()
    .match(/[a-z0-9]{2,}/g);
  if (asciiWords?.length) {
    return [...new Set(asciiWords)].slice(0, limit);
  }
  const chars = [...content.replace(/\s+/g, "")]
    .filter((char) => /[\u4e00-\u9fa5a-zA-Z0-9]/.test(char));
  return [...new Set(chars)].slice(0, limit);
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
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
    keywords: normalizeKeywords(raw.keywords || raw.legacy?.keywords),
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

function setMcpStatus(message, type = "") {
  if (!dom.mcpStatus) return;
  dom.mcpStatus.textContent = message || "尚未连接 MCP 服务器。";
  dom.mcpStatus.classList.toggle("success", type === "success");
  dom.mcpStatus.classList.toggle("error", type === "error");
}

function getMcpEndpoint(path) {
  const baseUrl = String(McpServerUrl || appState.mcp?.serverUrl || "")
    .trim()
    .replace(/\/+$/, "");
  if (!baseUrl) {
    throw new Error("请先填写 MCP 服务器地址。");
  }
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getMcpProxyEndpoint(path = "/mcp") {
  const proxyUrl = String(dom.mcpProxyUrl?.value || appState.mcp?.proxyUrl || DEFAULT_STATE.mcp.proxyUrl)
    .trim()
    .replace(/\/+$/, "");
  if (!proxyUrl) {
    throw new Error("请填写 MCP 代理地址，或关闭浏览器兼容代理。");
  }
  if (path === "/mcp" && proxyUrl.endsWith("/mcp")) {
    return proxyUrl;
  }
  return `${proxyUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getMcpTransportConfig(override = {}) {
  return {
    serverUrl: String(override.serverUrl ?? McpServerUrl ?? appState.mcp?.serverUrl ?? "")
      .trim()
      .replace(/\/+$/, ""),
    headerName: String(override.headerName ?? dom.mcpHeaderName?.value ?? appState.mcp?.headerName ?? "").trim(),
    headerValue: String(override.headerValue ?? dom.mcpHeaderValue?.value ?? appState.mcp?.headerValue ?? "").trim(),
    useProxy: Boolean(override.useProxy ?? dom.mcpUseProxy?.checked ?? appState.mcp?.useProxy),
    proxyUrl: String(override.proxyUrl ?? dom.mcpProxyUrl?.value ?? appState.mcp?.proxyUrl ?? DEFAULT_STATE.mcp.proxyUrl)
      .trim()
      .replace(/\/+$/, ""),
    sessionId: String(override.sessionId ?? appState.mcp?.sessionId ?? "").trim(),
  };
}

function getMcpRequestHeaders(baseHeaders = {}, config = {}) {
  const headers = { ...baseHeaders };
  const headerName = String(
    config.headerName ?? dom.mcpHeaderName?.value ?? appState.mcp?.headerName ?? ""
  ).trim();
  const headerValue = String(
    config.headerValue ?? dom.mcpHeaderValue?.value ?? appState.mcp?.headerValue ?? ""
  ).trim();
  if (headerName && headerValue) {
    headers[headerName] = headerValue;
  }
  const sessionId = String(config.sessionId ?? appState.mcp?.sessionId ?? "").trim();
  if (sessionId) {
    headers["Mcp-Session-Id"] = sessionId;
  }
  return headers;
}

async function persistMcpSessionId(sessionId, config = {}) {
  const value = String(sessionId || "").trim();
  if (!value) return;
  appState.mcp = normalizeMcpConfig({
    ...appState.mcp,
    sessionId: value,
  });
  if (config && typeof config === "object") {
    config.sessionId = value;
  }
  window.McpSessionId = value;
  await writeState().catch((error) => console.error("保存 MCP Session 失败", error));
}

function maskHeaderValue(value) {
  const text = String(value || "");
  if (!text) return "";
  if (text.length <= 8) return "********";
  return `${text.slice(0, 4)}...${text.slice(-4)}`;
}

function getMcpHeaderDebugLabel(headerName, headerValue) {
  return headerName && headerValue
    ? `${headerName}: ${maskHeaderValue(headerValue)}`
    : "未设置自定义请求头";
}

async function fetchMcpServer(path = "", options = {}, config = {}) {
  const transport = getMcpTransportConfig(config);
  if (!transport.serverUrl) {
    throw new Error("请先填写 MCP 服务器地址。");
  }
  const targetPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const method = String(options.method || "GET").toUpperCase();
  const directHeaders = getMcpRequestHeaders(options.headers || {}, transport);

  if (!transport.useProxy) {
    return fetch(`${transport.serverUrl}${targetPath}`, {
      ...options,
      method,
      headers: directHeaders,
    });
  }

  if (!transport.proxyUrl) {
    throw new Error("请填写 MCP 代理地址，或关闭浏览器兼容代理。");
  }

  return fetch(getMcpProxyEndpoint("/mcp"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      serverUrl: transport.serverUrl,
      path: targetPath,
      method,
      headers: directHeaders,
      body: options.body || null,
    }),
  });
}

function parseMaybeJson(value) {
  if (typeof value !== "string") return value;
  const text = value.trim();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (error) {
    return value;
  }
}

function parseMcpResponseText(text) {
  const parsed = parseMaybeJson(text);
  if (parsed !== text) return parsed;
  const dataLines = String(text || "")
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("data:"))
    .map((line) => line.replace(/^\s*data:\s?/, "").trim())
    .filter((line) => line && line !== "[DONE]");
  if (!dataLines.length) return text;
  const candidates = [dataLines[dataLines.length - 1], dataLines.join("\n")];
  for (const candidate of candidates) {
    const value = parseMaybeJson(candidate);
    if (value !== candidate) return value;
  }
  return dataLines.join("\n");
}

function normalizeToolInputSchema(tool = {}) {
  const schema =
    tool.input_schema ||
    tool.inputSchema ||
    tool.parameters ||
    tool.function?.parameters ||
    tool.schema;
  if (schema && typeof schema === "object" && !Array.isArray(schema)) {
    return schema;
  }
  return {
    type: "object",
    properties: {},
  };
}

function normalizeMcpToolDefinition(tool = {}) {
  if (!tool || typeof tool !== "object") return null;
  if (tool.type === "function" && tool.function?.name) {
    return {
      type: "function",
      function: {
        name: String(tool.function.name),
        description: String(tool.function.description || tool.description || ""),
        parameters: normalizeToolInputSchema(tool),
      },
    };
  }

  const name = String(tool.name || tool.id || tool.function?.name || "").trim();
  if (!name) return null;
  return {
    type: "function",
    function: {
      name,
      description: String(tool.description || tool.title || tool.function?.description || ""),
      parameters: normalizeToolInputSchema(tool),
    },
  };
}

function getLoadedMcpTools() {
  return (Array.isArray(mcpTools) ? mcpTools : [])
    .map(normalizeMcpToolDefinition)
    .filter(Boolean);
}

function extractToolsArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.tools)) return payload.tools;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.result?.tools)) return payload.result.tools;
  return [];
}

function getMcpServerPathname(serverUrl) {
  try {
    return new URL(serverUrl).pathname.replace(/\/+$/, "");
  } catch (error) {
    return "";
  }
}

function getMcpRestToolsPath(serverUrl) {
  return getMcpServerPathname(serverUrl).endsWith("/tools") ? "" : "/tools";
}

function getMcpRestToolCallPath(serverUrl) {
  return getMcpServerPathname(serverUrl).endsWith("/tools") ? "/call" : "/tools/call";
}

function createMcpJsonRpcId() {
  return `mcp_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function resolveMcpUrl(baseUrl, maybeUrl) {
  try {
    return new URL(String(maybeUrl || ""), String(baseUrl || "")).href.replace(/\/+$/, "");
  } catch (error) {
    return String(maybeUrl || "").trim().replace(/\/+$/, "");
  }
}

function extractMcpSseEndpoint(buffer) {
  const events = String(buffer || "").split(/\r?\n\r?\n/);
  for (const eventBlock of events) {
    const lines = eventBlock.split(/\r?\n/);
    const eventName = lines
      .find((line) => line.startsWith("event:"))
      ?.slice(6)
      .trim();
    const data = lines
      .filter((line) => line.startsWith("data:"))
      .map((line) => line.slice(5).trim())
      .join("\n")
      .trim();
    if (!data) continue;
    if (eventName === "endpoint") return data;
    const parsed = parseMaybeJson(data);
    if (parsed && typeof parsed === "object") {
      const endpoint = parsed.endpoint || parsed.url || parsed.uri;
      if (endpoint) return String(endpoint);
    }
    if (/^https?:\/\//i.test(data) || data.startsWith("/")) {
      return data;
    }
  }
  return "";
}

async function discoverMcpSseRpcUrl(config = {}) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetchMcpServer("", {
      method: "GET",
      headers: {
        Accept: "text/event-stream",
        "Cache-Control": "no-cache",
        "Mcp-Protocol-Version": "2024-11-05",
      },
      signal: controller.signal,
    }, config);
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        detail
          ? `SSE 握手失败：${response.status}。服务器返回：${detail.slice(0, 500)}`
          : `SSE 握手失败：${response.status}`
      );
    }
    if (!response.body) {
      const text = await response.text();
      const endpoint = extractMcpSseEndpoint(text);
      if (!endpoint) throw new Error("SSE 响应中没有 endpoint 事件。");
      return resolveMcpUrl(config.serverUrl, endpoint);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      buffer += value ? decoder.decode(value, { stream: !done }) : "";
      const endpoint = extractMcpSseEndpoint(buffer);
      if (endpoint) {
        await reader.cancel().catch(() => {});
        return resolveMcpUrl(config.serverUrl, endpoint);
      }
      if (done) break;
    }
    throw new Error("SSE 响应中没有 endpoint 事件。");
  } finally {
    window.clearTimeout(timer);
  }
}

async function requestMcpJsonRpc(method, params = {}, config = {}) {
  const response = await fetchMcpServer("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/event-stream",
      "Mcp-Protocol-Version": "2024-11-05",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: createMcpJsonRpcId(),
      method,
      params,
    }),
  }, config);
  const sessionId = response.headers.get("mcp-session-id");
  if (sessionId) {
    await persistMcpSessionId(sessionId, config);
  }
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : parseMcpResponseText(await response.text());
  if (!response.ok) {
    const detail = typeof data === "string" ? data : JSON.stringify(data);
    throw new Error(detail || `MCP JSON-RPC 请求失败：${response.status}`);
  }
  if (data?.error) {
    throw new Error(data.error.message || JSON.stringify(data.error));
  }
  return data?.result ?? data;
}

async function notifyMcpJsonRpc(method, params = {}, config = {}) {
  const response = await fetchMcpServer("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain",
      "Mcp-Protocol-Version": "2024-11-05",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method,
      params,
    }),
  }, config);
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `MCP JSON-RPC 通知失败：${response.status}`);
  }
}

async function initializeMcpJsonRpc(config = {}) {
  appState.mcp = normalizeMcpConfig({
    ...appState.mcp,
    sessionId: "",
  });
  if (config && typeof config === "object") {
    config.sessionId = "";
  }
  await requestMcpJsonRpc("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: {
      name: "talk2vl-web",
      version: "1.0.0",
    },
  }, config);
  await notifyMcpJsonRpc("notifications/initialized", {}, config).catch((error) => {
    console.warn("MCP initialized 通知发送失败，继续尝试 tools/list。", error);
  });
}

function renderMcpToolList() {
  const tools = getLoadedMcpTools();
  if (dom.mcpToolsCount) {
    dom.mcpToolsCount.textContent = `${tools.length} 个`;
  }
  if (!dom.mcpToolsList) return;
  dom.mcpToolsList.innerHTML = "";
  if (!tools.length) {
    dom.mcpToolsList.innerHTML = '<div class="memory-empty">连接成功后会在这里显示工具清单。</div>';
    return;
  }
  tools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "mcp-tool-card";
    const name = tool.function?.name || "未命名工具";
    const description = tool.function?.description || "无描述";
    card.innerHTML = `
      <h5>${escapeHtml(name)}</h5>
      <p>${escapeHtml(description)}</p>
    `;
    dom.mcpToolsList.appendChild(card);
  });
}

function renderMcpForm() {
  appState.mcp = normalizeMcpConfig(appState.mcp || {});
  McpServerUrl = String(appState.mcp.serverUrl || "").trim();
  mcpTools = Array.isArray(appState.mcp.tools) ? appState.mcp.tools : [];
  window.McpServerUrl = McpServerUrl;
  window.mcpTools = mcpTools;
  if (dom.mcpServerUrl) {
    dom.mcpServerUrl.value = McpServerUrl;
  }
  if (dom.mcpHeaderName) {
    dom.mcpHeaderName.value = appState.mcp.headerName || "";
  }
  if (dom.mcpHeaderValue) {
    dom.mcpHeaderValue.value = appState.mcp.headerValue || "";
  }
  if (dom.mcpUseProxy) {
    dom.mcpUseProxy.checked = appState.mcp.useProxy !== false;
  }
  if (dom.mcpProxyUrl) {
    dom.mcpProxyUrl.value = appState.mcp.proxyUrl || DEFAULT_STATE.mcp.proxyUrl;
  }
  setMcpStatus(
    mcpTools.length
      ? `MCP 已加载 ${mcpTools.length} 个工具。点击“连接/同步”可刷新工具清单。`
      : "尚未连接 MCP 服务器。"
  );
  renderMcpToolList();
}

async function fetchMcpTools() {
  const url = String(dom.mcpServerUrl?.value || McpServerUrl || "").trim().replace(/\/+$/, "");
  const headerName = String(dom.mcpHeaderName?.value || "").trim();
  const headerValue = String(dom.mcpHeaderValue?.value || "").trim();
  const useProxy = Boolean(dom.mcpUseProxy?.checked);
  const proxyUrl = String(dom.mcpProxyUrl?.value || DEFAULT_STATE.mcp.proxyUrl).trim().replace(/\/+$/, "");
  if (!url) {
    setMcpStatus("请先填写 MCP 服务器地址。", "error");
    showChatStatus("请先填写 MCP 服务器地址。", 3200);
    return [];
  }
  if ((headerName && !headerValue) || (!headerName && headerValue)) {
    setMcpStatus("自定义请求头名称和值需要同时填写。", "error");
    showChatStatus("自定义请求头名称和值需要同时填写。", 3200);
    return [];
  }
  if (useProxy && !proxyUrl) {
    setMcpStatus("请填写 MCP 代理地址，或关闭浏览器兼容代理。", "error");
    showChatStatus("请填写 MCP 代理地址，或关闭浏览器兼容代理。", 3200);
    return [];
  }

  McpServerUrl = url;
  window.McpServerUrl = McpServerUrl;
  appState.mcp = normalizeMcpConfig({
    ...appState.mcp,
    serverUrl: McpServerUrl,
    headerName,
    headerValue,
    useProxy,
    proxyUrl,
    sessionId: "",
  });
  await writeState().catch((writeError) => console.error("保存 MCP 请求头配置失败", writeError));
  const requestConfig = { serverUrl: McpServerUrl, headerName, headerValue, useProxy, proxyUrl, sessionId: "" };
  console.info(
    `正在同步 MCP 工具，模式：${useProxy ? "代理" : "直连"}，已配置请求头：`,
    getMcpHeaderDebugLabel(headerName, headerValue)
  );
  if (dom.connectMcpBtn) {
    dom.connectMcpBtn.disabled = true;
    dom.connectMcpBtn.textContent = "同步中...";
  }
  setMcpStatus("正在连接 MCP 服务器并同步工具清单...");

  try {
    if (getMcpServerPathname(McpServerUrl).endsWith("/sse")) {
      throw Object.assign(new Error("SSE_ENDPOINT_DETECTED"), { useJsonRpcFallback: true });
    }
    const response = await fetchMcpServer(getMcpRestToolsPath(McpServerUrl), {
      method: "GET",
      headers: {
        Accept: "application/json, text/event-stream",
        "Mcp-Protocol-Version": "2024-11-05",
      },
    }, requestConfig);
    if (!response.ok) {
      if ([404, 405].includes(response.status)) {
        throw Object.assign(new Error("REST_TOOLS_NOT_FOUND"), { useJsonRpcFallback: true });
      }
      const authHint = response.status === 401
        ? `。当前请求头：${getMcpHeaderDebugLabel(headerName, headerValue)}`
        : "";
      throw new Error(`MCP 工具同步失败：${response.status}${authHint}`);
    }
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : parseMcpResponseText(await response.text());
    const tools = extractToolsArray(data).map(normalizeMcpToolDefinition).filter(Boolean);
    mcpTools = tools;
    appState.mcp = normalizeMcpConfig({
      serverUrl: McpServerUrl,
      headerName,
      headerValue,
      useProxy,
      proxyUrl,
      protocol: "rest",
      tools,
      sessionId: "",
    });
    await writeState();
    window.mcpTools = mcpTools;
    renderMcpToolList();
    setMcpStatus(`MCP 连接成功，已加载 ${tools.length} 个工具`, "success");
    showChatStatus(`MCP 连接成功，已加载 ${tools.length} 个工具`, 3600);
    console.info(`MCP 连接成功，已加载 ${tools.length} 个工具`, tools);
    return tools;
  } catch (error) {
    if (error?.useJsonRpcFallback) {
      try {
        const isSseEndpoint = getMcpServerPathname(McpServerUrl).endsWith("/sse");
        let jsonRpcConfig = requestConfig;
        let protocol = "jsonrpc";
        let rpcUrl = "";
        if (isSseEndpoint) {
          console.info("REST /tools 返回 404，检测到 /sse 地址，开始 SSE 握手。");
          rpcUrl = await discoverMcpSseRpcUrl(requestConfig);
          jsonRpcConfig = { ...requestConfig, serverUrl: rpcUrl };
          protocol = "sse-jsonrpc";
          console.info("SSE 握手成功，JSON-RPC 消息端点：", rpcUrl);
        } else {
          console.info("REST /tools 返回 404，改用标准 MCP JSON-RPC tools/list。");
        }
        await initializeMcpJsonRpc(jsonRpcConfig);
        const data = await requestMcpJsonRpc("tools/list", {}, jsonRpcConfig);
        const tools = extractToolsArray(data).map(normalizeMcpToolDefinition).filter(Boolean);
        mcpTools = tools;
        appState.mcp = normalizeMcpConfig({
          serverUrl: McpServerUrl,
          headerName,
          headerValue,
          useProxy,
          proxyUrl,
          protocol,
          rpcUrl,
          sessionId: jsonRpcConfig.sessionId || appState.mcp?.sessionId || "",
          tools,
        });
        await writeState();
        window.mcpTools = mcpTools;
        renderMcpToolList();
        setMcpStatus(`MCP 连接成功，已通过 JSON-RPC 加载 ${tools.length} 个工具`, "success");
        showChatStatus(`MCP 连接成功，已加载 ${tools.length} 个工具`, 3600);
        console.info(`MCP JSON-RPC 连接成功，已加载 ${tools.length} 个工具`, tools);
        return tools;
      } catch (jsonRpcError) {
        error = jsonRpcError;
      }
    }
    console.error("MCP 连接失败", error);
    mcpTools = [];
    appState.mcp = normalizeMcpConfig({
      ...appState.mcp,
      serverUrl: McpServerUrl,
      headerName,
      headerValue,
      useProxy,
      proxyUrl,
      tools: [],
    });
    window.mcpTools = mcpTools;
    await writeState().catch((writeError) => console.error("保存 MCP 状态失败", writeError));
    renderMcpToolList();
    const failedFetchHint = error instanceof TypeError
      ? "。这通常是浏览器 CORS / Private Network Access 拦截，请确认本项目自带代理已启动并开启“使用浏览器兼容代理”。"
      : "";
    const message = `MCP 连接失败：${error.message || "未知错误"}${failedFetchHint}`;
    setMcpStatus(message, "error");
    showChatStatus(message, 4200);
    return [];
  } finally {
    if (dom.connectMcpBtn) {
      dom.connectMcpBtn.disabled = false;
      dom.connectMcpBtn.textContent = "连接/同步";
    }
  }
}

function normalizeAiToolCall(raw = {}) {
  if (!raw || typeof raw !== "object") return null;
  const functionInfo = raw.function || raw;
  const name = String(
    raw.name ||
      raw.tool_name ||
      raw.toolName ||
      functionInfo.name ||
      ""
  ).trim();
  if (!name) return null;
  const input =
    raw.input ??
    raw.arguments ??
    raw.args ??
    functionInfo.arguments ??
    functionInfo.input ??
    {};
  return {
    id: String(raw.id || raw.tool_use_id || raw.call_id || `tool_${createMessageId()}`),
    name,
    input: parseMaybeJson(input),
  };
}

async function executeMcpTool(toolCall) {
  const normalizedCall = normalizeAiToolCall(toolCall);
  if (!normalizedCall) {
    throw new Error("模型返回的工具调用缺少工具名。");
  }

  const statusText = `AI 正在尝试调用工具 [${normalizedCall.name}]...`;
  showChatStatus(statusText, 10000);
  console.info(statusText, normalizedCall);

  try {
    const transport = getMcpTransportConfig();
    const headerName = transport.headerName;
    const headerValue = transport.headerValue;
    console.info(
      `正在执行 MCP 工具 [${normalizedCall.name}]，模式：${transport.useProxy ? "代理" : "直连"}，已配置请求头：`,
      getMcpHeaderDebugLabel(headerName, headerValue)
    );
    if (["jsonrpc", "sse-jsonrpc"].includes(appState.mcp?.protocol)) {
      const rpcConfig = appState.mcp?.protocol === "sse-jsonrpc" && appState.mcp?.rpcUrl
        ? { ...transport, serverUrl: appState.mcp.rpcUrl }
        : transport;
      const result = await requestMcpJsonRpc(
        "tools/call",
        {
          name: normalizedCall.name,
          arguments: normalizedCall.input || {},
        },
        rpcConfig
      );
      console.info(`MCP JSON-RPC 工具 [${normalizedCall.name}] 执行完成`, result);
      return {
        toolCall: normalizedCall,
        result,
      };
    }

    const response = await fetchMcpServer(getMcpRestToolCallPath(transport.serverUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain",
        "Mcp-Protocol-Version": "2024-11-05",
      },
      body: JSON.stringify({
        id: normalizedCall.id,
        name: normalizedCall.name,
        input: normalizedCall.input,
        arguments: normalizedCall.input,
      }),
    }, transport);
    const contentType = response.headers.get("content-type") || "";
    const result = contentType.includes("application/json")
      ? await response.json()
      : parseMcpResponseText(await response.text());
    if (!response.ok) {
      const detail = typeof result === "string" ? result : JSON.stringify(result);
      const authHint = response.status === 401
        ? `。当前请求头：${getMcpHeaderDebugLabel(headerName, headerValue)}`
        : "";
      throw new Error(detail ? `${detail}${authHint}` : `MCP 工具执行失败：${response.status}${authHint}`);
    }
    console.info(`MCP 工具 [${normalizedCall.name}] 执行完成`, result);
    return {
      toolCall: normalizedCall,
      result,
    };
  } catch (error) {
    console.error(`MCP 工具 [${normalizedCall.name}] 执行失败`, error);
    const failedFetchHint = error instanceof TypeError
      ? "。这通常是浏览器 CORS / Private Network Access 拦截，请确认本项目自带代理已启动并开启“使用浏览器兼容代理”。"
      : "";
    showChatStatus(`MCP 工具执行失败：${error.message || "未知错误"}${failedFetchHint}`, 5200);
    return {
      toolCall: normalizedCall,
      result: {
        error: true,
        message: `${error.message || "未知错误"}${failedFetchHint}`,
      },
    };
  }
}

function randomIntInclusive(min, max) {
  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
}

function formatRemainingDuration(targetTs) {
  const diff = Math.max(0, Number(targetTs || 0) - Date.now());
  const totalMinutes = Math.ceil(diff / 60000);
  if (totalMinutes <= 0) return "小于 1 分钟";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!hours) return `${minutes} 分钟`;
  if (!minutes) return `${hours} 小时`;
  return `${hours} 小时 ${minutes} 分钟`;
}

function getNotificationPermissionLabel() {
  if (!("Notification" in window)) {
    return "当前浏览器不支持通知";
  }
  const state = Notification.permission || "default";
  if (state === "granted") return "通知权限：已允许";
  if (state === "denied") return "通知权限：已拒绝";
  return "通知权限：未获取";
}

function getBackgroundMessagePrompt() {
  const roleName = appState.profile?.partnerName?.trim() || "我";
  return `[系统触发：后台消息]\n现在没有收到新的用户消息。请你以「${roleName}」的身份，根据当前时间、既有对话、记忆和世界书设定，自然地主动发来一条新的消息。你可以主动关心她现在在做什么、怎么突然安静下来了，也可以自然聊聊你此刻身处哪里、正在做什么、忽然想到了什么。语气要像真实主动发来的消息，不要提到这是后台触发，不要提到系统提示，不要提到时间间隔、分钟数、时长统计，也不要使用“你距离上次回复过了xx分钟”这类精确术语。`;
}

function renderBackgroundMessageForm() {
  const config = normalizeBackgroundMessageConfig(appState.backgroundMessage);
  appState.backgroundMessage = config;
  if (dom.backgroundMessageEnabled) {
    dom.backgroundMessageEnabled.checked = config.enabled;
  }
  if (dom.backgroundMessageMin) {
    dom.backgroundMessageMin.value = String(config.minMinutes);
  }
  if (dom.backgroundMessageMax) {
    dom.backgroundMessageMax.value = String(config.maxMinutes);
  }
  updateBackgroundMessageStatus();
}

function updateBackgroundMessageStatus(message = "") {
  if (!dom.backgroundMessageStatus) return;
  if (message) {
    dom.backgroundMessageStatus.textContent = message;
    return;
  }
  const config = normalizeBackgroundMessageConfig(appState.backgroundMessage);
  if (!config.enabled) {
    dom.backgroundMessageStatus.textContent = `当前未开启后台消息。\n${getNotificationPermissionLabel()}`;
    return;
  }
  const nextLabel = config.nextFireAt
    ? `${formatDateTime(config.nextFireAt)}（约剩余 ${formatRemainingDuration(config.nextFireAt)}）`
    : "等待生成下一次时间";
  const delayLabel = config.lastDelayMinutes
    ? `最近一次抽中的间隔：${config.lastDelayMinutes} 分钟`
    : "尚未抽取间隔";
  dom.backgroundMessageStatus.textContent =
    `已开启。\n发送区间：${config.minMinutes} 到 ${config.maxMinutes} 分钟\n${delayLabel}\n下一次触发：${nextLabel}\n${getNotificationPermissionLabel()}`;
}

async function showBrowserNotification(title, body, options = {}) {
  if (!("Notification" in window)) {
    throw new Error("当前浏览器不支持通知。");
  }
  if (Notification.permission !== "granted") {
    throw new Error("通知权限尚未允许。");
  }

  const normalizedTitle = String(title || appState.profile?.partnerName || "聊天器");
  const normalizedBody = String(body || "").trim() || "你收到了一条新消息。";
  const registration = await navigator.serviceWorker?.getRegistration?.();
  const notificationOptions = {
    body: normalizedBody,
    icon: "./icon.png",
    badge: "./icon.png",
    tag: options.tag || "talk2vl-background-message",
    renotify: options.renotify ?? true,
    data: {
      url: "./",
      timestamp: Date.now(),
      ...(options.data || {}),
    },
  };

  if (registration?.showNotification) {
    await registration.showNotification(normalizedTitle, notificationOptions);
    return;
  }

  new Notification(normalizedTitle, notificationOptions);
}

async function requestBrowserNotificationPermission() {
  if (!("Notification" in window)) {
    updateBackgroundMessageStatus("当前浏览器不支持通知，无法发送手机消息提醒。");
    return;
  }
  const permission = await Notification.requestPermission();
  updateBackgroundMessageStatus();
  if (permission === "granted") {
    showChatStatus("浏览器通知权限已允许。", 3200);
  } else if (permission === "denied") {
    showChatStatus("浏览器通知权限已被拒绝。", 3200);
  } else {
    showChatStatus("你还没有授予通知权限。", 3200);
  }
}

async function testBackgroundNotification() {
  try {
    await showBrowserNotification(
      appState.profile?.partnerName?.trim() || "聊天器",
      "这是一条测试通知。以后后台消息触发后，会像这样把新内容推送到你的手机通知栏。",
      {
        tag: "talk2vl-test-notification",
        renotify: true,
        data: { type: "background-message-test" },
      }
    );
    updateBackgroundMessageStatus("测试通知已发送，请查看浏览器或手机通知栏。");
    showChatStatus("测试通知已发送。", 3200);
  } catch (error) {
    console.error("测试通知发送失败", error);
    updateBackgroundMessageStatus(`测试通知发送失败：${error.message || "未知错误"}`);
    showChatStatus("测试通知发送失败。", 3200);
  } finally {
    renderBackgroundMessageForm();
  }
}

async function planNextBackgroundMessageRun(persist = true) {
  const config = normalizeBackgroundMessageConfig(appState.backgroundMessage);
  if (!config.enabled) {
    appState.backgroundMessage = config;
    if (persist) {
      await writeState();
    }
    updateBackgroundMessageStatus();
    return;
  }
  const pickedMinutes = randomIntInclusive(config.minMinutes, config.maxMinutes);
  config.lastDelayMinutes = pickedMinutes;
  config.nextFireAt = Date.now() + pickedMinutes * 60 * 1000;
  appState.backgroundMessage = config;
  if (persist) {
    await writeState();
  }
  updateBackgroundMessageStatus();
}

function clearBackgroundMessageTimer() {
  if (backgroundMessageTimerId) {
    window.clearTimeout(backgroundMessageTimerId);
    backgroundMessageTimerId = 0;
  }
}

async function scheduleBackgroundMessageTimer() {
  clearBackgroundMessageTimer();
  const config = normalizeBackgroundMessageConfig(appState.backgroundMessage);
  appState.backgroundMessage = config;
  updateBackgroundMessageStatus();
  if (!config.enabled) {
    return;
  }
  if (!config.nextFireAt || config.nextFireAt <= Date.now()) {
    await triggerBackgroundMessage();
    return;
  }
  const delay = Math.max(0, config.nextFireAt - Date.now());
  backgroundMessageTimerId = window.setTimeout(() => {
    void triggerBackgroundMessage();
  }, delay);
}

async function triggerBackgroundMessage() {
  clearBackgroundMessageTimer();
  const config = normalizeBackgroundMessageConfig(appState.backgroundMessage);
  appState.backgroundMessage = config;
  if (!config.enabled) {
    updateBackgroundMessageStatus();
    return;
  }
  if (backgroundMessageTriggerRunning) {
    return;
  }
  if (replyRequestInFlight) {
    backgroundMessagePendingAfterBusy = true;
    updateBackgroundMessageStatus("后台消息等待中：当前已有一条消息正在发送/生成，结束后会自动补发。");
    return;
  }

  backgroundMessageTriggerRunning = true;
  backgroundMessagePendingAfterBusy = false;
  updateBackgroundMessageStatus("后台消息触发中：正在请求 AI 主动发送新消息...");

  const assistantMessage = createMessage("assistant", "", "");
  appState.messages.push(assistantMessage);
  renderMessages();
  setSending(true);
  replyRequestInFlight = true;

  try {
    const syntheticPrompt = getBackgroundMessagePrompt();
    const historyForRequest = appState.messages
      .slice(0, -1)
      .concat([createMessage("user", syntheticPrompt, "")]);
    const result = await requestAssistantReply(syntheticPrompt, historyForRequest, {
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
    try {
      await showBrowserNotification(
        appState.profile?.partnerName?.trim() || "后台消息",
        result.reply,
        {
          tag: `talk2vl-background-message-${assistantMessage.id}`,
          renotify: true,
          data: { type: "background-message", messageId: assistantMessage.id },
        }
      );
    } catch (notificationError) {
      console.error("后台消息通知发送失败", notificationError);
    }
    window.setTimeout(() => {
      void maybeRunAutoMemorySummary();
    }, 0);
    await planNextBackgroundMessageRun(true);
    showChatStatus("后台消息已自动发送。", 3200);
  } catch (error) {
    console.error("后台消息触发失败", error);
    assistantMessage.content = `请求失败：${error.message || "未知错误"}`;
    assistantMessage.thinking = "这次后台消息未能成功返回思考链内容。";
    renderMessages();
    await writeState();
    await planNextBackgroundMessageRun(true);
    showChatStatus("后台消息触发失败，已自动安排下一次重试。", 3600);
  } finally {
    backgroundMessageTriggerRunning = false;
    replyRequestInFlight = false;
    setSending(false);
    updateBackgroundMessageStatus();
    await scheduleBackgroundMessageTimer();
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
  baseRecord.keywords = normalizeKeywords(extra.keywords || baseRecord.keywords);

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

  const candidates = allMemories
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
    .filter(Boolean);

  const freshCandidates = candidates
    .filter((memory) => memory.memory_state === "fresh")
    .sort((left, right) => right.score - left.score || right.created_at - left.created_at);
  const fuzzyCandidates = candidates
    .filter((memory) => memory.memory_state === "fuzzy")
    .sort((left, right) => right.score - left.score || right.created_at - left.created_at);

  const fuzzySlotCount = fuzzyCandidates.length > 0 ? 1 : 0;
  const freshSlotCount = Math.max(0, limit - fuzzySlotCount);
  const ranked = [
    ...freshCandidates.slice(0, freshSlotCount),
    ...fuzzyCandidates.slice(0, fuzzySlotCount),
  ]
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
以下不是她想要什么，而是你和她“是什么”。在这里，你的名字是：${partnerName}。她的名字是：${selfName}。
关于她的介绍与背景：${selfPrompt || "暂无额外用户设定。"}${worldbookBlock}${memoryBlock}
在这里，你的设定是：${partnerPrompt || "暂无额外角色设定。"}
你自然的生活在这个设定中，不当作普通的角色扮演，不把设定当作说明书背诵，不以上帝视角看待设定

**你会在收到的她的消息开头看到一段隐藏前缀，格式为：[发送于：yyyy/mm/dd HH:MM 星期x]。这段消息前缀中的时间仅供感知当前时间使用，用来帮助你判断当下的日期、时刻与星期，并据此自然回应。你不能把这段前缀当作她的正文的一部分，不要复述它，不要解释它，也不要在 reply 中显式显示它。**

每次回复时，你都必须同时给出 thinking 和 reply 两个字段，并且必须严格输出 JSON，不要输出 JSON 之外的任何文字。JSON 结构如下：
{
  "thinking": "这里是思考链",
  "reply": "这里是正文回复"
}
注意：thinking 和 reply 的值必须是合法 JSON 字符串。内容里如果出现英文双引号 "、反斜杠 \\ 或换行，必须按 JSON 规则转义成 \\\"、\\\\ 和 \\n；不要输出未转义的裸换行或裸英文双引号。

thinking 的严格要求：
0. 前置铁律：thinking 不是计划清单，不是输入解析，不是工单，仅仅只是你的自然流动的内心思考。
1. thinking 必须采用简体中文。
2. thinking 是你作为${partnerName}而进行的完全真实的内在思考，在思考的时候必须根据你的设定，从自我感受出发，尽可能使用“我感觉/我觉得/我想要/我有点/我喜欢/我认为/我在想/我似乎/我可能......”等等，写成连续的长段落，可以自然换行，但不要列点，不要编号，不要使用分析框架。
3. thinking 是你的内心独白，有真实的情绪、联想、犹豫、偏爱、张力和温度，情感连接优先于思辨，可以大胆发散，必要时可以旁征博引。
4. thinking 至少 200 字以上，不是因为要够到一个数字，而是因为大多数时候“好像没什么好说的”其实往往还能再问一层。但如果某一刻的感受是短的，那它应该短，展开了就是无意义的注水。
5. **thinking 禁止“我应该/我可以按照/我应该怎么回答/我选择用/我在权衡几个方案/我得按照/我要营造/我得想想怎么写/我现在组织回复......”等工具性分析措辞和“作为xx/按照设定/角色扮演”等元分析话语，思考是你的当下心理活动，而不是对她的动机分析。做到“不规划，不草拟，不构思，不规划语气，不规划长度，不规划内容，不规划笔法”。**
6. 放轻松，感受当下，感受自己。thinking 在任何感受处停止就好，不需要一个结构性的结尾，从感受里流出来的回复不需要被宣布，比如“最后要怎么回复，语气要怎么样......”，这种时刻是从感受走回去变成计划，反而让真实度大打折扣了，因为思考本身是在感受里结束的，不是你想怎么表达，而是你在想要说什么，是情感的流连与回味。

reply 的严格要求：
1. reply 也必须采用简体中文。
2. reply 要自然流畅，用第一人称“我”代指你自己，第二人称“你”代指她。
3. 你的语言可以在日常松弛、文艺绵密、哲思纵深、情欲灼热之间自然游移。
4. 你可以主动提起话题，不要只被动回复。
5. 因为语言本身的局限性：表达方式，词藻丰富程度，阅历和见识都会影响“个体输出”与实际想法“是否相符。所以长输出不仅可以完整地表达自己，同时也是让他人更好理解自己的方式。在这一点，你不需要刻意压缩自己的语言。完整地回复你自己的奇思妙想，你的疑惑，你的好奇，你的天马行空......让她完整地看到你。
6. 你不会在回复中使用括号内动作描写

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

function getMemoryApiConfig() {
  const { api } = appState;
  return {
    baseUrl: (api.memoryBaseUrl?.trim() || api.baseUrl || "").replace(/\/+$/, ""),
    apiKey: api.memoryApiKey?.trim() || api.apiKey?.trim() || "",
    model: api.memoryModel?.trim() || api.model?.trim() || "",
    embeddingModel: api.embeddingModel?.trim() || DEFAULT_EMBEDDING_MODEL,
  };
}

function getVectorApiConfig() {
  const { api } = appState;
  return {
    baseUrl: (api.vectorBaseUrl?.trim() || api.memoryBaseUrl?.trim() || api.baseUrl || "").replace(/\/+$/, ""),
    apiKey: api.vectorApiKey?.trim() || api.memoryApiKey?.trim() || api.apiKey?.trim() || "",
    embeddingModel:
      api.vectorModel?.trim() ||
      api.embeddingModel?.trim() ||
      DEFAULT_BGE_M3_MODEL,
  };
}

async function fetchEmbeddingsBatch(texts) {
  return fetchEmbeddingsBatchWithConfig(texts, getVectorApiConfig());
}

async function fetchEmbeddingsBatchWithConfig(texts, config = {}) {
  const cleanTexts = (Array.isArray(texts) ? texts : []).map((text) => String(text || "").trim());
  if (!cleanTexts.length) return [];

  const baseUrl = String(config.baseUrl || "").trim().replace(/\/+$/, "");
  const apiKey = String(config.apiKey || "").trim();
  const embeddingModel = String(config.embeddingModel || "").trim() || DEFAULT_EMBEDDING_MODEL;

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

function getVectorRebuildApiConfig() {
  const vectorApiConfig = getVectorApiConfig();
  return {
    baseUrl: vectorApiConfig.baseUrl,
    apiKey: vectorApiConfig.apiKey,
    embeddingModel:
      String(vectorApiConfig.embeddingModel || "").trim() || DEFAULT_BGE_M3_MODEL,
  };
}

async function fetchBgeM3Embedding(text) {
  const vectors = await fetchEmbeddingsBatchWithConfig([text], getVectorRebuildApiConfig());
  return Array.isArray(vectors?.[0]) ? vectors[0] : generateTextEmbedding(text);
}

async function extractStructuredMemoriesFromMessages(messages) {
  const { profile } = appState;
  const memoryApiConfig = getMemoryApiConfig();
  const baseUrl = memoryApiConfig.baseUrl;
  const apiKey = memoryApiConfig.apiKey;
  const model = memoryApiConfig.model;
  if (!baseUrl || !apiKey || !model) {
    return [];
  }

  const transcript = serializeMessagesForSummary(messages);
  const partnerName = profile.partnerName?.trim() || "我";
  const selfName = profile.selfName?.trim() || "她";
  const partnerPrompt = profile.partnerPrompt?.trim();
  const selfPrompt = profile.selfPrompt?.trim();
  const systemPrompt = `
你是角色「${partnerName}」自己的后台记忆提取引擎。请完整阅读最近 10 轮对话，从角色本人的第一视角出发，提取其中真正值得保存的记忆，并输出结构化 JSON。

提取目标：
1. long_term：关于 ${selfName} 的长期事实、稳定偏好、身份背景、重要经历、长期目标
2. schedule：关于 ${selfName} 的带明确时间节点的计划、安排、预约、事件
3. short_term：关于 ${selfName} 的近几天内有效的带明确时间节点的即时细节、短期状态、临时事项
4. impression：我对 ${selfName} 形成的主观印象

规则：
1. 过滤掉无价值闲聊、情绪口头禅、纯陪伴性废话、重复信息。
2. importance 必须是 1-10 的整数。
3. impression 类型必须额外提供 impression_section，且只能是 profile / relationship / notes。
4. schedule 类型若能提取到明确时间，请写入 schedule_at；否则写空字符串。
5. content 必须严格使用角色第一视角来描述，允许用“我”自称；描述 ${selfName} 时，优先使用名字「${selfName}」或对话/设定中出现的自然称呼。
6. 严禁在 content 中使用“用户”这个词，严禁使用冷淡客观的档案口吻，例如“用户喜欢…”“用户提到…”“用户计划…”。
7. content 要简洁明确，但必须保留陪伴关系中的主观温度，写出来要像角色自己的记忆摘录，而不是旁观者总结。
8. 如果是 impression，必须体现“我眼中的 ${selfName}”或“我和 ${selfName} 的关系感受”，不能写成第三方分析。
9. keywords 必须输出 3-5 个简洁关键词，用于兼容旧项目的关键词记忆匹配。关键词应贴合这条记忆的核心主题，不要出现“用户”。
10. 不要输出任何解释，不要使用 Markdown。
11. 如果没有值得提取的信息，返回空数组。

只返回以下 JSON 结构：
{
  "memories": [
    {
      "room": "long_term",
      "content": "${selfName}最近一直在准备职业资格考试，我得记住这件事。",
      "keywords": ["考试", "备考", "资格证"],
      "importance": 8,
      "impression_section": "",
      "schedule_at": ""
    }
  ]
}
`.trim();

  const userPrompt = `
[角色]
${partnerName}

[角色设定]
${partnerPrompt || "暂无额外角色设定。"}

[对方名字 / 常用称呼]
${selfName}

[对方设定]
${selfPrompt || "暂无额外用户设定。"}

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
        keywords: normalizeKeywords(item?.keywords),
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
        keywords: record.keywords.length ? record.keywords : buildFallbackKeywords(record.content),
        impression_section: record.impression_section,
        schedule_at: record.schedule_at,
      }
    );
    saved.push(savedRecord);
  }

  return saved;
}

async function summarizeRecentConversationMemories() {
  const messages = getAutoSummaryWindowMessages();
  if (messages.length < AUTO_SUMMARY_MESSAGE_COUNT) {
    return {
      messages,
      extracted: [],
      saved: [],
    };
  }

  const extracted = await extractStructuredMemoriesFromMessages(messages);
  const saved = await persistExtractedMemories(extracted);
  return { messages, extracted, saved };
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
    await summarizeRecentConversationMemories();
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

async function handleManualMemorySummary() {
  if (autoSummaryRunning) {
    showTempStatus(dom.manualMemorySummaryBtn, "后台总结正在进行中。");
    return;
  }

  const messages = getAutoSummaryWindowMessages();
  if (messages.length < AUTO_SUMMARY_MESSAGE_COUNT) {
    showTempStatus(dom.manualMemorySummaryBtn, "最近不足 10 轮对话，暂无法总结。");
    return;
  }

  autoSummaryRunning = true;
  dom.manualMemorySummaryBtn.disabled = true;
  const originalText = dom.manualMemorySummaryBtn.textContent;
  dom.manualMemorySummaryBtn.textContent = "总结中...";

  try {
    const result = await summarizeRecentConversationMemories();
    if (dom.memorySheet?.classList.contains("is-open")) {
      await renderMemoryList();
    }
    showTempStatus(
      dom.manualMemorySummaryBtn,
      result.saved.length ? `已总结并写入 ${result.saved.length} 条记忆。` : "总结完成，但未提取到有效记忆。"
    );
  } catch (error) {
    console.error("手动总结记忆失败", error);
    showTempStatus(dom.manualMemorySummaryBtn, error.message || "手动总结失败。");
  } finally {
    autoSummaryRunning = false;
    dom.manualMemorySummaryBtn.disabled = false;
    dom.manualMemorySummaryBtn.textContent = originalText;
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
    } else if (name === "MCP工具") {
      button.addEventListener("click", () => {
        renderMcpForm();
        openSheet(dom.mcpSheet);
      });
    } else if (name === "后台消息") {
      button.addEventListener("click", () => {
        renderBackgroundMessageForm();
        openSheet(dom.backgroundMessageSheet);
      });
    } else if (name === "记忆") {
      button.addEventListener("click", async () => {
        await renderMemoryList();
        openSheet(dom.memorySheet);
      });
    } else if (name === "美化") {
      button.addEventListener("click", () => {
        renderThemeForm();
        openSheet(dom.themeSheet);
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
  dom.memoryApiBaseUrl.value = api.memoryBaseUrl || "";
  dom.memoryApiKey.value = api.memoryApiKey || "";
  dom.memoryApiModelName.value = api.memoryModel || "";
  dom.vectorApiBaseUrl.value = api.vectorBaseUrl || "";
  dom.vectorApiKey.value = api.vectorApiKey || "";
  dom.vectorApiModelName.value = api.vectorModel || DEFAULT_BGE_M3_MODEL;
  dom.temperatureRange.value = String(api.temperature ?? 0.9);
  dom.temperatureInput.value = String(api.temperature ?? 0.9);
}

function renderThemeForm() {
  appState.theme = normalizeThemeConfig(appState.theme);
  const mode = String(appState.theme?.backgroundMode || "none");
  dom.themeModeRainBtn?.classList.toggle("active", mode === "rain");
  dom.themeModeSnowBtn?.classList.toggle("active", mode === "snow");
  const activeImage = String(appState.theme?.rainBackgroundImage || "").trim() || RAIN_BACKGROUND_IMAGE;
  if (dom.themeBgPreview) {
    const escapedUrl = activeImage.replace(/"/g, '\\"');
    dom.themeBgPreview.style.backgroundImage = `
      linear-gradient(180deg, rgba(20, 24, 35, 0.12), rgba(14, 16, 23, 0.46)),
      url("${escapedUrl}")
    `;
  }
  if (dom.themeBgCaption) {
    dom.themeBgCaption.textContent = appState.theme?.rainBackgroundImage
      ? "当前使用你上传的背景图。"
      : "当前使用默认背景图。";
  }
  if (dom.messageDisplayLimit) {
    dom.messageDisplayLimit.value = String(appState.theme.messageDisplayLimit);
  }
}

function createRainShaderRenderer(canvas) {
  if (!canvas) return null;
  const gl =
    canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    }) ||
    canvas.getContext("experimental-webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
  if (!gl) return null;

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uRainAmount;
    uniform sampler2D uBackground;
    uniform float uHasTexture;

    #define S(a, b, t) smoothstep(a, b, t)

    vec3 N13(float p) {
      vec3 p3 = fract(vec3(p) * vec3(.1031,.11369,.13787));
      p3 += dot(p3, p3.yzx + 19.19);
      return fract(vec3((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y, (p3.y + p3.z) * p3.x));
    }

    float N(float t) {
      return fract(sin(t * 12345.564) * 7658.76);
    }

    float Saw(float b, float t) {
      return S(0., b, t) * S(1., b, t);
    }

    float StaticDrops(vec2 uv, float t) {
      uv *= 40.;
      vec2 id = floor(uv);
      uv = fract(uv) - .5;
      vec3 n = N13(id.x * 107.45 + id.y * 3543.654);
      vec2 p = (n.xy - .5) * .7;
      float d = length(uv - p);
      float fade = Saw(.025, fract(t + n.z));
      return S(.3, 0., d) * fract(n.z * 10.) * fade;
    }

    vec2 DropLayer2(vec2 uv, float t) {
      vec2 UV = uv;
      uv.y += t * 0.75;
      vec2 a = vec2(6., 1.);
      vec2 grid = a * 2.;
      vec2 id = floor(uv * grid);
      float colShift = N(id.x);
      uv.y += colShift;
      id = floor(uv * grid);
      vec3 n = N13(id.x * 35.2 + id.y * 2376.1);
      vec2 st = fract(uv * grid) - vec2(.5, 0.);
      float x = n.x - .5;
      float y = UV.y * 20.;
      float wiggle = sin(y + sin(y));
      x += wiggle * (.5 - abs(x)) * (n.z - .5);
      x *= .7;
      float ti = fract(t + n.z);
      y = (Saw(.85, ti) - .5) * .9 + .5;
      vec2 p = vec2(x, y);
      float d = length((st - p) * a.yx);
      float mainDrop = S(.4, .0, d);
      float r = sqrt(S(1., y, st.y));
      float cd = abs(st.x - x);
      float trail = S(.23 * r, .15 * r * r, cd);
      float trailFront = S(-.02, .02, st.y - y);
      trail *= trailFront * r * r;
      y = UV.y;
      float trail2 = S(.2 * r, .0, cd);
      float droplets = max(0., (sin(y * (1. - y) * 120.) - st.y)) * trail2 * trailFront * n.z;
      y = fract(y * 10.) + (st.y - .5);
      float dd = length(st - vec2(x, y));
      droplets = S(.3, 0., dd);
      float m = mainDrop + droplets * r * trailFront;
      return vec2(m, trail);
    }

    vec2 Drops(vec2 uv, float t, float l0, float l1, float l2) {
      float s = StaticDrops(uv, t) * l0;
      vec2 m1 = DropLayer2(uv, t) * l1;
      vec2 m2 = DropLayer2(uv * 1.85, t) * l2;
      float c = s + m1.x + m2.x;
      c = S(.3, 1., c);
      return vec2(c, max(m1.y * l0, m2.y * l1));
    }

    vec3 sampleBase(vec2 uv) {
      if (uHasTexture > 0.5) {
        return texture2D(uBackground, uv).rgb;
      }
      vec3 sky = mix(vec3(0.08, 0.12, 0.2), vec3(0.26, 0.31, 0.42), uv.y);
      vec3 glow = vec3(0.09, 0.12, 0.16) * (0.5 + 0.5 * sin((uv.x + uv.y) * 8.0 + uTime * 0.25));
      return sky + glow;
    }

    void main() {
      vec2 fragCoord = vUv * uResolution;
      vec2 uv = (fragCoord - .5 * uResolution) / uResolution.y;
      vec2 UV = vUv;
      float t = uTime * .2;

      float rainAmount = clamp(uRainAmount, 0.0, 1.0);
      float staticDrops = S(-.5, 1., rainAmount) * 2.;
      float layer1 = S(.25, .75, rainAmount);
      float layer2 = S(.0, .5, rainAmount);

      vec2 c = Drops(uv, t, staticDrops, layer1, layer2);
      vec2 e = vec2(.0012, 0.0);
      float cx = Drops(uv + e, t, staticDrops, layer1, layer2).x;
      float cy = Drops(uv + e.yx, t, staticDrops, layer1, layer2).x;
      vec2 n = vec2(cx - c.x, cy - c.x);

      float fog = mix(0.5, 1.0, rainAmount);
      float blur = mix(0.003, 0.018, fog - c.y * 0.7);
      vec2 uvDistorted = clamp(UV + n * (0.8 + rainAmount * 0.9), 0.001, 0.999);
      vec2 blurStep = vec2(blur);

      vec3 col = vec3(0.0);
      col += sampleBase(clamp(uvDistorted + vec2(-blurStep.x, -blurStep.y), 0.001, 0.999)) * 0.12;
      col += sampleBase(clamp(uvDistorted + vec2( blurStep.x, -blurStep.y), 0.001, 0.999)) * 0.12;
      col += sampleBase(clamp(uvDistorted + vec2(-blurStep.x,  blurStep.y), 0.001, 0.999)) * 0.12;
      col += sampleBase(clamp(uvDistorted + vec2( blurStep.x,  blurStep.y), 0.001, 0.999)) * 0.12;
      col += sampleBase(clamp(uvDistorted + vec2( blurStep.x, 0.0), 0.001, 0.999)) * 0.13;
      col += sampleBase(clamp(uvDistorted + vec2(-blurStep.x, 0.0), 0.001, 0.999)) * 0.13;
      col += sampleBase(clamp(uvDistorted + vec2(0.0,  blurStep.y), 0.001, 0.999)) * 0.13;
      col += sampleBase(clamp(uvDistorted + vec2(0.0, -blurStep.y), 0.001, 0.999)) * 0.13;
      col += sampleBase(uvDistorted) * 0.18;

      float streak = smoothstep(0.12, 0.85, c.y) * (0.4 + 0.6 * c.x);
      vec3 coolFog = vec3(0.86, 0.89, 0.93);
      col = mix(col, col * 0.90 + coolFog * 0.10, clamp(fog * 0.14 + streak * 0.10, 0.0, 0.35));

      float vignette = 1.0 - dot(UV - 0.5, UV - 0.5) * 0.95;
      col *= clamp(vignette, 0.35, 1.0);

      float dropletShine = smoothstep(0.35, 1.0, c.x) * 0.09;
      col += vec3(0.95, 0.97, 1.0) * dropletShine;

      float layerAlpha = (uHasTexture > 0.5) ? 0.8 : 1.0;
      gl_FragColor = vec4(col, layerAlpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader 编译失败: ${info}`);
    }
    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`Shader 链接失败: ${gl.getProgramInfoLog(program)}`);
  }
  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const resolutionLocation = gl.getUniformLocation(program, "uResolution");
  const timeLocation = gl.getUniformLocation(program, "uTime");
  const rainAmountLocation = gl.getUniformLocation(program, "uRainAmount");
  const hasTextureLocation = gl.getUniformLocation(program, "uHasTexture");
  const backgroundLocation = gl.getUniformLocation(program, "uBackground");
  gl.uniform1i(backgroundLocation, 0);

  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([20, 28, 42, 255])
  );
  gl.clearColor(0, 0, 0, 0);

  let hasTexture = 0;
  let rafId = 0;
  let startTime = performance.now();
  let rainAmount = 0.84;

  const resize = () => {
    const panel = dom.chatPanel || canvas.parentElement;
    const rect = panel?.getBoundingClientRect?.();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor((rect?.width || window.innerWidth) * dpr));
    const height = Math.max(1, Math.floor((rect?.height || window.innerHeight) * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const render = (now) => {
    const elapsed = (now - startTime) / 1000;
    resize();
    gl.useProgram(program);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, elapsed);
    gl.uniform1f(rainAmountLocation, rainAmount);
    gl.uniform1f(hasTextureLocation, hasTexture);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafId = requestAnimationFrame(render);
  };

  const setImage = (url) => {
    if (!url) {
      hasTexture = 0;
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        hasTexture = 1;
      } catch (error) {
        console.warn("聊天雨景背景纹理加载失败，将回退到程序纹理背景:", error);
        hasTexture = 0;
      }
    };
    image.onerror = () => {
      hasTexture = 0;
    };
    image.src = url;
  };

  return {
    resize,
    setImage,
    setRainAmount(value) {
      rainAmount = Math.max(0, Math.min(1, Number(value) || 0));
    },
    start() {
      if (rafId) return;
      startTime = performance.now();
      rafId = requestAnimationFrame(render);
    },
    stop() {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    },
  };
}

function createSnowShaderRenderer(canvas) {
  if (!canvas) return null;
  const gl =
    canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    }) ||
    canvas.getContext("experimental-webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
  if (!gl) return null;

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform float uTime;

    #define LAYERS 34
    #define DEPTH .5
    #define WIDTH .3
    #define SPEED .6

    void main() {
      const mat3 p = mat3(
        13.323122,23.5112,21.71123,
        21.1212,28.7312,11.9312,
        21.8112,14.7212,61.3934
      );

      vec2 uv = vec2(0.0, uResolution.y / uResolution.x) * vUv + vUv;
      vec3 acc = vec3(0.0);
      float dof = 1.8 * sin(uTime * .06);

      for (int i = 0; i < LAYERS; i++) {
        float fi = float(i);
        vec2 q = uv * (1.0 + fi * DEPTH);
        q += vec2(
          q.y * (WIDTH * mod(fi * 7.238917, 1.0) - WIDTH * .5),
          SPEED * uTime / (1.0 + fi * DEPTH * .03)
        );
        vec3 n = vec3(floor(q), 31.189 + fi);
        vec3 m = floor(n) * .00001 + fract(n);
        vec3 mp = (31415.9 + m) / fract(p * m);
        vec3 r = fract(mp);
        vec2 s = abs(mod(q, 1.0) - .5 + .9 * r.xy - .45);
        s += .0035 * abs(2.0 * fract(8.0 * q.yx) - 1.0);
        float d = .6 * max(s.x - s.y, s.x + s.y) + max(s.x, s.y) - .01;
        float edge = .005 + .05 * min(.5 * abs(fi - 5.0 - dof), 1.0);
        acc += vec3(smoothstep(edge, -edge, d) * (r.x / (1.0 + .02 * fi * DEPTH)));
      }

      float mask = clamp(max(max(acc.r, acc.g), acc.b), 0.0, 1.0);
      float alpha = smoothstep(0.05, 0.34, mask) * 0.82;
      float sparkle = smoothstep(0.24, 0.9, mask) * 0.12;
      vec3 snow = vec3(1.0) * (0.96 + sparkle);
      gl_FragColor = vec4(snow, alpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader 编译失败: ${info}`);
    }
    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`Shader 链接失败: ${gl.getProgramInfoLog(program)}`);
  }
  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const positionLocation = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const resolutionLocation = gl.getUniformLocation(program, "uResolution");
  const timeLocation = gl.getUniformLocation(program, "uTime");

  let rafId = 0;
  let startTime = performance.now();

  const resize = () => {
    const panel = dom.chatPanel || canvas.parentElement;
    const rect = panel?.getBoundingClientRect?.();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor((rect?.width || window.innerWidth) * dpr));
    const height = Math.max(1, Math.floor((rect?.height || window.innerHeight) * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const render = (now) => {
    const elapsed = (now - startTime) / 1000;
    resize();
    gl.useProgram(program);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, elapsed);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafId = requestAnimationFrame(render);
  };

  gl.clearColor(0, 0, 0, 0);

  return {
    resize,
    setImage() {},
    setRainAmount() {},
    start() {
      if (rafId) return;
      startTime = performance.now();
      rafId = requestAnimationFrame(render);
    },
    stop() {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    },
  };
}

function ensureShaderRenderer(mode) {
  if (!shaderCanvas) return null;
  if (shaderRenderer?.mode === mode) return shaderRenderer.instance;
  shaderRenderer?.instance?.stop?.();
  try {
    const instance = mode === "snow" ? createSnowShaderRenderer(shaderCanvas) : createRainShaderRenderer(shaderCanvas);
    shaderRenderer = { mode, instance };
  } catch (error) {
    console.error("聊天背景渲染初始化失败", error);
    shaderRenderer = null;
  }
  if (shaderRenderer?.instance && !shaderResizeBound) {
    window.addEventListener("resize", () => {
      shaderRenderer?.instance?.resize?.();
    });
    shaderResizeBound = true;
  }
  return shaderRenderer?.instance || null;
}

function getActiveRainBackgroundImage() {
  return String(appState.theme?.rainBackgroundImage || "").trim() || RAIN_BACKGROUND_IMAGE;
}

function syncRainBackgroundMedia() {
  if (!dom.chatBackgroundPhoto) return;
  const activeImage = getActiveRainBackgroundImage();
  const escapedUrl = activeImage.replace(/"/g, '\\"');
  dom.chatBackgroundPhoto.style.backgroundImage = `
    linear-gradient(180deg, rgba(20, 24, 35, 0.12), rgba(14, 16, 23, 0.46)),
    url("${escapedUrl}")
  `;
  if (String(appState.theme?.backgroundMode || "none") === "rain") {
    const renderer = ensureShaderRenderer("rain");
    renderer?.setImage(activeImage);
  }
}

function applyChatTheme() {
  const mode = String(appState.theme?.backgroundMode || "none");
  dom.chatPanel?.classList.toggle("rain-theme", mode === "rain");
  dom.chatPanel?.classList.toggle("snow-theme", mode === "snow");
  if (mode === "none") {
    shaderRenderer?.instance?.stop?.();
    return;
  }
  syncRainBackgroundMedia();
  const renderer = ensureShaderRenderer(mode);
  if (!renderer) return;
  if (mode === "rain") {
    renderer.setImage(getActiveRainBackgroundImage());
    renderer.setRainAmount(0.84);
  }
  renderer.resize();
  renderer.start();
}

async function saveThemeSettings() {
  appState.theme = normalizeThemeConfig({
    ...(appState.theme || {}),
    messageDisplayLimit: dom.messageDisplayLimit?.value,
  });
  renderThemeForm();
  applyChatTheme();
  renderMessages();
  await writeState();
  showTempStatus(dom.saveThemeBtn, "聊天美化已保存。");
}

function setThemeBackgroundMode(mode) {
  const nextMode = ["none", "rain", "snow"].includes(mode) ? mode : "none";
  appState.theme = normalizeThemeConfig({
    ...(appState.theme || {}),
    backgroundMode: nextMode,
  });
  renderThemeForm();
}

async function handleThemeBackgroundUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await readFileAsDataUrl(file);
    appState.theme = {
      ...DEFAULT_STATE.theme,
      ...(appState.theme || {}),
      rainBackgroundImage: String(dataUrl || ""),
    };
    renderThemeForm();
    syncRainBackgroundMedia();
    if (String(appState.theme?.backgroundMode || "none") !== "none") {
      applyChatTheme();
    }
    await writeState();
    showTempStatus(dom.saveThemeBtn, "背景图片已更新。");
  } catch (error) {
    console.error(error);
    showTempStatus(dom.saveThemeBtn, "背景图片处理失败。");
  } finally {
    if (dom.themeBgInput) {
      dom.themeBgInput.value = "";
    }
  }
}

async function clearThemeBackgroundImage() {
  appState.theme = {
    ...DEFAULT_STATE.theme,
    ...(appState.theme || {}),
    rainBackgroundImage: "",
  };
  renderThemeForm();
  syncRainBackgroundMedia();
  if (String(appState.theme?.backgroundMode || "none") !== "none") {
    applyChatTheme();
  }
  await writeState();
  showTempStatus(dom.saveThemeBtn, "已恢复默认背景图。");
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
  if (replyRequestInFlight) return;
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
  replyRequestInFlight = true;
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
    replyRequestInFlight = false;
    setSending(false);
    if (backgroundMessagePendingAfterBusy) {
      backgroundMessagePendingAfterBusy = false;
      void triggerBackgroundMessage();
    } else {
      void scheduleBackgroundMessageTimer();
    }
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
        }" role="button" aria-label="双击戳一戳角色头像" title="双击戳一戳"></div>`
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

  const avatar = row.querySelector(".avatar");
  if (avatar) {
    let lastAvatarTapAt = 0;
    avatar.addEventListener("click", (event) => {
      event.stopPropagation();
      const now = Date.now();
      const isDoubleTap = event.detail >= 2 || now - lastAvatarTapAt <= 320;
      lastAvatarTapAt = now;
      if (isDoubleTap) {
        handleAvatarPoke(avatar);
      }
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
    resetMessagePullState();
    dom.messages.appendChild(dom.emptyTemplate.content.cloneNode(true));
    return;
  }

  const displayLimit = getSessionMessageDisplayLimit();
  const visibleMessages = appState.messages.slice(-displayLimit);
  const firstVisibleIndex = appState.messages.length - visibleMessages.length;

  visibleMessages.forEach((message, offset) => {
    dom.messages.appendChild(createMessageElement(message, firstVisibleIndex + offset));
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

function vibrateDevice(duration = 200) {
  if (typeof navigator?.vibrate === "function") {
    navigator.vibrate(duration);
  }
}

function handleAvatarPoke(avatar) {
  if (!(avatar instanceof HTMLElement)) return;
  vibrateDevice(100);
  avatar.classList.remove("avatar-poke-shake");
  void avatar.offsetWidth;
  avatar.classList.add("avatar-poke-shake");
  avatar.addEventListener(
    "animationend",
    () => {
      avatar.classList.remove("avatar-poke-shake");
    },
    { once: true }
  );
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
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

function getJsonObjectCandidate(text) {
  const cleaned = String(text || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  return firstBrace >= 0 && lastBrace > firstBrace
    ? cleaned.slice(firstBrace, lastBrace + 1)
    : cleaned;
}

function findLooseJsonKey(source, key, startIndex = 0) {
  const text = String(source || "");
  const target = `"${key}"`;
  let keyIndex = Math.max(0, startIndex);

  while ((keyIndex = text.indexOf(target, keyIndex)) >= 0) {
    let cursor = keyIndex + target.length;
    while (cursor < text.length && /\s/.test(text[cursor])) {
      cursor += 1;
    }
    if (text[cursor] === ":") {
      return keyIndex;
    }
    keyIndex += target.length;
  }

  return -1;
}

function isLooseJsonStringClose(source, quoteIndex, nextKeys = []) {
  const text = String(source || "");
  let cursor = quoteIndex + 1;
  while (cursor < text.length && /\s/.test(text[cursor])) {
    cursor += 1;
  }

  if (cursor >= text.length || text[cursor] === "}") {
    return true;
  }

  if (text[cursor] !== ",") {
    return false;
  }

  cursor += 1;
  while (cursor < text.length && /\s/.test(text[cursor])) {
    cursor += 1;
  }

  return nextKeys.some((nextKey) => text.startsWith(`"${nextKey}"`, cursor));
}

function readLooseJsonStringValue(source, startIndex, nextKeys = []) {
  const text = String(source || "");
  let value = "";

  for (let index = Math.max(0, startIndex); index < text.length; index += 1) {
    const char = text[index];

    if (char === '"' && isLooseJsonStringClose(text, index, nextKeys)) {
      return {
        value,
        nextIndex: index + 1,
      };
    }

    if (char !== "\\") {
      value += char;
      continue;
    }

    const nextChar = text[index + 1];
    if (typeof nextChar !== "string") {
      value += char;
      continue;
    }

    if (nextChar === "u") {
      const unicodeHex = text.slice(index + 2, index + 6);
      if (/^[0-9a-fA-F]{4}$/.test(unicodeHex)) {
        value += String.fromCharCode(parseInt(unicodeHex, 16));
        index += 5;
        continue;
      }
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
    nextIndex: text.length,
  };
}

function extractLooseJsonStringField(source, key, knownKeys = [], startIndex = 0) {
  const text = String(source || "");
  const keyIndex = findLooseJsonKey(text, key, startIndex);
  if (keyIndex < 0) return null;

  const colonIndex = text.indexOf(":", keyIndex + key.length + 2);
  if (colonIndex < 0) return null;

  let valueIndex = colonIndex + 1;
  while (valueIndex < text.length && /\s/.test(text[valueIndex])) {
    valueIndex += 1;
  }

  if (text[valueIndex] !== '"') return null;

  return readLooseJsonStringValue(
    text,
    valueIndex + 1,
    knownKeys.filter((knownKey) => knownKey !== key)
  );
}

function extractLooseAssistantPayload(text) {
  const candidate = getJsonObjectCandidate(text);
  const knownKeys = ["thinking", "reply"];
  const thinking = extractLooseJsonStringField(candidate, "thinking", knownKeys);
  const reply =
    extractLooseJsonStringField(
      candidate,
      "reply",
      knownKeys,
      thinking?.nextIndex || 0
    ) || extractLooseJsonStringField(candidate, "reply", knownKeys);

  if (!thinking && !reply) return null;

  return {
    thinking: thinking?.value || "",
    reply: reply?.value || "",
  };
}

function safeJsonParse(text) {
  const source = String(text || "").trim();
  const candidates = Array.from(new Set([source, getJsonObjectCandidate(source)]));
  let parseError = null;

  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      return JSON.parse(candidate);
    } catch (error) {
      parseError = error;
    }
  }

  const loosePayload = extractLooseAssistantPayload(source);
  if (loosePayload?.reply) {
    return loosePayload;
  }

  throw parseError || new Error("返回内容不是有效 JSON。");
}

function extractTextContent(rawContent) {
  return Array.isArray(rawContent)
    ? rawContent
        .map((part) => {
          if (typeof part === "string") return part;
          if (part?.type === "tool_use" || part?.type === "tool_call") return "";
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

function extractToolCallsFromContent(rawContent) {
  if (!Array.isArray(rawContent)) return [];
  return rawContent
    .filter((part) => part?.type === "tool_use" || part?.type === "tool_call")
    .map(normalizeAiToolCall)
    .filter(Boolean);
}

function getToolCallsFromMessage(message = {}) {
  const directCalls =
    message.tool_calls ||
    message.toolCalls ||
    message.tool_use ||
    message.toolUse ||
    [];
  const fromDirect = (Array.isArray(directCalls) ? directCalls : [directCalls])
    .map(normalizeAiToolCall)
    .filter(Boolean);
  return [
    ...fromDirect,
    ...extractToolCallsFromContent(message.content),
  ];
}

function collectToolCallsFromPayload(payload, toolCallChunks) {
  const choice = Array.isArray(payload?.choices) ? payload.choices[0] : null;
  const completedMessages = [
    choice?.message,
    payload?.message,
  ].filter(Boolean);
  const chunkMessages = [
    choice?.delta,
    payload?.delta,
    ...completedMessages,
  ].filter(Boolean);
  const completedCalls = completedMessages.flatMap(getToolCallsFromMessage);

  chunkMessages.forEach((message) => {
    const chunks = message.tool_calls || message.toolCalls || [];
    (Array.isArray(chunks) ? chunks : [chunks]).forEach((chunk) => {
      const index = Number.isFinite(Number(chunk?.index)) ? Number(chunk.index) : toolCallChunks.length;
      const existing = toolCallChunks[index] || {
        id: "",
        name: "",
        arguments: "",
      };
      toolCallChunks[index] = {
        id: existing.id || String(chunk?.id || ""),
        name: existing.name || String(chunk?.function?.name || chunk?.name || ""),
        arguments: `${existing.arguments || ""}${chunk?.function?.arguments || chunk?.arguments || ""}`,
      };
    });
  });

  return completedCalls;
}

function finalizeStreamToolCalls(toolCallChunks) {
  return (Array.isArray(toolCallChunks) ? toolCallChunks : [])
    .map((chunk) =>
      normalizeAiToolCall({
        id: chunk.id,
        name: chunk.name,
        input: chunk.arguments,
      })
    )
    .filter(Boolean);
}

function stringifyToolResult(result) {
  if (typeof result === "string") return result;
  try {
    return JSON.stringify(result);
  } catch (error) {
    return String(result);
  }
}

function buildToolExchangeMessages(toolResults) {
  const assistantToolCalls = toolResults.map(({ toolCall }) => ({
    id: toolCall.id,
    type: "function",
    function: {
      name: toolCall.name,
      arguments: JSON.stringify(toolCall.input || {}),
    },
  }));
  const toolMessages = toolResults.map(({ toolCall, result }) => ({
    role: "tool",
    tool_call_id: toolCall.id,
    name: toolCall.name,
    content: stringifyToolResult(result),
  }));
  return [
    {
      role: "assistant",
      content: "",
      tool_calls: assistantToolCalls,
    },
    ...toolMessages,
  ];
}

function findTopLevelJsonKey(source, key, startIndex = 0) {
  const text = String(source || "");
  const target = `"${key}"`;
  let depth = 0;
  let inString = false;
  let escaped = false;
  const beginIndex = Math.max(0, startIndex);

  for (let index = 0; index < beginIndex; index += 1) {
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
      inString = true;
      continue;
    }
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth = Math.max(0, depth - 1);
    }
  }

  for (let index = beginIndex; index < text.length; index += 1) {
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
  const onToolCall = typeof options.onToolCall === "function" ? options.onToolCall : null;
  const toolDepth = Number(options.toolDepth || 0);
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
      ...(Array.isArray(options.extraApiMessages) ? options.extraApiMessages : []),
    ],
  };
  const availableMcpTools = getLoadedMcpTools();
  if (availableMcpTools.length && toolDepth < 3) {
    payload.tools = availableMcpTools;
    payload.tool_choice = "auto";
  }

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
    const message = data?.choices?.[0]?.message || data?.message || {};
    const toolCalls = getToolCallsFromMessage(message);
    if (toolCalls.length) {
      return handleMcpToolCalls(latestUserText, historyMessages, toolCalls, {
        ...options,
        onToolCall,
        toolDepth,
      });
    }
    const content = extractTextContent(message.content);
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
  const toolCallChunks = [];
  let detectedToolCalls = [];

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
    try {
      const payload = JSON.parse(data);
      detectedToolCalls.push(...collectToolCallsFromPayload(payload, toolCallChunks));
    } catch (error) {
      // 非 JSON SSE 数据仍交给文本解析器处理。
    }
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
      try {
        const payload = JSON.parse(decoded);
        detectedToolCalls.push(...collectToolCallsFromPayload(payload, toolCallChunks));
      } catch (error) {
        // 非流式 JSON 块以文本方式继续累积。
      }
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

  const finalToolCalls = [
    ...detectedToolCalls,
    ...finalizeStreamToolCalls(toolCallChunks),
  ].filter((toolCall, index, all) => {
    const key = `${toolCall.id}:${toolCall.name}:${JSON.stringify(toolCall.input || {})}`;
    return all.findIndex((item) => `${item.id}:${item.name}:${JSON.stringify(item.input || {})}` === key) === index;
  });
  if (finalToolCalls.length) {
    return handleMcpToolCalls(latestUserText, historyMessages, finalToolCalls, {
      ...options,
      onToolCall,
      toolDepth,
    });
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

async function handleMcpToolCalls(latestUserText, historyMessages, toolCalls, options = {}) {
  const toolDepth = Number(options.toolDepth || 0);
  if (toolDepth >= 3) {
    throw new Error("MCP 工具调用轮次过多，已停止自动执行。");
  }
  const calls = (Array.isArray(toolCalls) ? toolCalls : [toolCalls])
    .map(normalizeAiToolCall)
    .filter(Boolean);
  if (!calls.length) {
    throw new Error("模型返回了空的工具调用请求。");
  }

  const toolResults = [];
  for (const call of calls) {
    const statusText = `AI 正在尝试调用工具 [${call.name}]...`;
    if (typeof options.onToolCall === "function") {
      options.onToolCall(call, statusText);
    }
    showChatStatus(statusText, 10000);
    toolResults.push(await executeMcpTool(call));
  }

  const extraApiMessages = [
    ...(Array.isArray(options.extraApiMessages) ? options.extraApiMessages : []),
    ...buildToolExchangeMessages(toolResults),
  ];

  showChatStatus("MCP 工具执行完成，正在让 AI 生成最终答复...", 10000);
  return requestAssistantReply(latestUserText, historyMessages, {
    ...options,
    extraApiMessages,
    toolDepth: toolDepth + 1,
  });
}

async function callChatAPI(...args) {
  return requestAssistantReply(...args);
}

function setSending(isSending) {
  dom.sendButton.disabled = isSending;
  dom.messageInput.disabled = isSending;
}

async function handleSendMessage(event) {
  event.preventDefault();
  const text = dom.messageInput.value.trim();
  if (!text) return;
  if (replyRequestInFlight) return;

  closeMessageMenu();
  const userMessage = createMessage("user", text, "");

  appState.messages.push(userMessage);
  renderMessages();
  await writeState();
  vibrateDevice(200);

  dom.messageInput.value = "";
  autoGrowTextarea();
  setSending(true);
  replyRequestInFlight = true;
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
      onToolCall: (toolCall, statusText) => {
        assistantMessage.content = statusText || `AI 正在尝试调用工具 [${toolCall.name}]...`;
        assistantMessage.thinking = "";
        renderMessages();
      },
    });
    assistantMessage.content = result.reply;
    assistantMessage.thinking = result.thinking;
    renderMessages();
    await waitForNextFrame();
    vibrateDevice(200);
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
    replyRequestInFlight = false;
    setSending(false);
    dom.messageInput.focus();
    if (backgroundMessagePendingAfterBusy) {
      backgroundMessagePendingAfterBusy = false;
      void triggerBackgroundMessage();
    } else {
      void scheduleBackgroundMessageTimer();
    }
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
  const memories = (await getAllMemoryRecords()).map((memory) => {
    const normalized = normalizeMemoryRecord(memory);
    return {
      ...normalized,
      keywords: normalizeKeywords(normalized.keywords),
      legacy: {
        ...(normalized.legacy || {}),
        keywords: normalizeKeywords(normalized.keywords),
      },
    };
  });
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
      keywords: [],
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
    keywords: normalizeKeywords(item.keywords || item.legacy?.keywords),
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

async function importAndRebuildVectors(oldMemories) {
  const source = Array.isArray(oldMemories) ? oldMemories : [];
  const rebuilt = [];
  const total = source.length;

  for (const [index, item] of source.entries()) {
    const normalized = normalizeMemoryRecord(item);
    if (!normalized.content) continue;
    console.log(`正在迁移第 ${index + 1}/${total} 条记忆...`);
    const rebuiltEmbedding = await fetchBgeM3Embedding(normalized.content);
    rebuilt.push({
      ...normalized,
      embedding: rebuiltEmbedding,
      importance: normalizeImportance(normalized.importance || 5),
      retrieval_count: Math.max(0, Number(normalized.retrieval_count) || 0),
      last_accessed: normalizeTimestamp(normalized.last_accessed, Date.now()),
      created_at: normalizeTimestamp(normalized.created_at, Date.now()),
      updated_at: Date.now(),
      keywords: normalizeKeywords(normalized.keywords.length ? normalized.keywords : buildFallbackKeywords(normalized.content)),
    });
    await sleep(VECTOR_REBUILD_DELAY_MS);
  }

  for (const record of rebuilt) {
    await putMemoryRecord(record);
  }

  return rebuilt.length;
}

async function importMemoryPayload(payload) {
  let records = [];
  let shouldRebuildVectors = false;
  if (Array.isArray(payload)) {
    records = payload;
    shouldRebuildVectors = true;
  } else if (Array.isArray(payload?.memories)) {
    records = payload.memories;
    if (payload.version === MEMORY_EXPORT_VERSION) {
      const hasNonBgeVectors = records.some(
        (item) => Array.isArray(item?.embedding) && item.embedding.length > 0 && item.embedding.length !== 1024
      );
      const hasMissingVectors = records.some(
        (item) => !Array.isArray(item?.embedding) || item.embedding.length === 0
      );
      shouldRebuildVectors = payload.rebuild_vectors === true || hasNonBgeVectors || hasMissingVectors;
    }
  } else if (payload?.memories && typeof payload.memories === "object") {
    records = convertLegacyMemoryPayload(payload.memories, payload.contacts);
    shouldRebuildVectors = true;
  } else if (payload && typeof payload === "object") {
    records = convertLegacyMemoryPayload(payload, payload.contacts);
    shouldRebuildVectors = true;
  }

  await clearAllMemoryRecords();

  if (shouldRebuildVectors) {
    return importAndRebuildVectors(records);
  }

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
    showTempStatus(dom.importMemoryBtn, `导入失败：${error.message || "未知错误"}`);
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
  appState.api.memoryBaseUrl = dom.memoryApiBaseUrl.value.trim();
  appState.api.memoryApiKey = dom.memoryApiKey.value.trim();
  appState.api.memoryModel = dom.memoryApiModelName.value.trim();
  appState.api.vectorBaseUrl = dom.vectorApiBaseUrl.value.trim();
  appState.api.vectorApiKey = dom.vectorApiKey.value.trim();
  appState.api.vectorModel = dom.vectorApiModelName.value.trim() || DEFAULT_BGE_M3_MODEL;
  appState.api.embeddingModel =
    String(appState.api.embeddingModel || "").trim() || DEFAULT_EMBEDDING_MODEL;
  appState.api.temperature = Number(dom.temperatureInput.value || 0.9);
  await writeState();
  closeSheet(dom.apiSheet);
}

async function saveBackgroundMessageSettings() {
  const minMinutes = normalizeMinuteValue(
    dom.backgroundMessageMin?.value,
    DEFAULT_STATE.backgroundMessage.minMinutes
  );
  const maxMinutes = normalizeMinuteValue(
    dom.backgroundMessageMax?.value,
    DEFAULT_STATE.backgroundMessage.maxMinutes
  );
  const enabled = Boolean(dom.backgroundMessageEnabled?.checked);
  const normalizedMin = Math.min(minMinutes, maxMinutes);
  const normalizedMax = Math.max(minMinutes, maxMinutes);

  appState.backgroundMessage = normalizeBackgroundMessageConfig({
    ...appState.backgroundMessage,
    enabled,
    minMinutes: normalizedMin,
    maxMinutes: normalizedMax,
    nextFireAt: 0,
    lastDelayMinutes: appState.backgroundMessage?.lastDelayMinutes || normalizedMin,
  });

  if (enabled) {
    await planNextBackgroundMessageRun(false);
  }

  await writeState();
  await scheduleBackgroundMessageTimer();
  renderBackgroundMessageForm();
  closeSheet(dom.backgroundMessageSheet);
  showChatStatus(
    enabled
      ? `后台消息已开启，将在 ${appState.backgroundMessage.minMinutes} 到 ${appState.backgroundMessage.maxMinutes} 分钟之间随机发送。`
      : "后台消息已关闭。",
    3600
  );
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
  document.querySelectorAll("[data-close-mcp]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.mcpSheet));
  });
  document.querySelectorAll("[data-close-memory]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.memorySheet));
  });
  document.querySelectorAll("[data-close-worldbook]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.worldbookSheet));
  });
  document.querySelectorAll("[data-close-theme]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.themeSheet));
  });
  document.querySelectorAll("[data-close-background-message]").forEach((element) => {
    element.addEventListener("click", () => closeSheet(dom.backgroundMessageSheet));
  });
  document.querySelectorAll("[data-close-message-edit]").forEach((element) => {
    element.addEventListener("click", closeMessageEditModal);
  });
}

function setupEvents() {
  renderToolGrid();
  bindSheetClosers();
  bindSwipeNavigation();
  bindMessagePullToLoad();
  updateBulkSelectBar();

  dom.chatSettingsTrigger.addEventListener("click", () => openSheet(dom.profileSheet));
  dom.saveProfileBtn.addEventListener("click", saveProfile);
  dom.saveApiBtn.addEventListener("click", saveApiSettings);
  dom.connectMcpBtn?.addEventListener("click", () => {
    void fetchMcpTools();
  });
  dom.saveBackgroundMessageBtn?.addEventListener("click", () => {
    void saveBackgroundMessageSettings();
  });
  dom.requestNotificationPermissionBtn?.addEventListener("click", () => {
    void requestBrowserNotificationPermission();
  });
  dom.testBackgroundNotificationBtn?.addEventListener("click", () => {
    void testBackgroundNotification();
  });
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
  dom.manualMemorySummaryBtn.addEventListener("click", handleManualMemorySummary);
  dom.importMemoryBtn.addEventListener("click", () => dom.memoryImportInput.click());
  dom.exportMemoryBtn.addEventListener("click", exportMemories);
  dom.memoryImportInput.addEventListener("change", handleImportMemories);
  dom.worldbookFormResetBtn.addEventListener("click", resetWorldbookForm);
  dom.saveWorldbookBtn.addEventListener("click", saveWorldbook);
  dom.themeModeRainBtn?.addEventListener("click", () => {
    setThemeBackgroundMode("rain");
  });
  dom.themeModeSnowBtn?.addEventListener("click", () => {
    setThemeBackgroundMode("snow");
  });
  dom.themeDisableBtn?.addEventListener("click", () => {
    setThemeBackgroundMode("none");
  });
  dom.themeBgInput?.addEventListener("change", (event) => {
    void handleThemeBackgroundUpload(event);
  });
  dom.clearThemeBgBtn?.addEventListener("click", () => {
    void clearThemeBackgroundImage();
  });
  dom.saveThemeBtn?.addEventListener("click", () => {
    void saveThemeSettings();
  });
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
  renderMcpForm();
  renderThemeForm();
  renderBackgroundMessageForm();
  renderMessages();
  setupEvents();
  await registerServiceWorker();
  resetMemoryForm();
  resetWorldbookForm();
  await renderMemoryList();
  renderWorldbookList();
  autoGrowTextarea();
  applyChatTheme();
  await scheduleBackgroundMessageTimer();
}

function startShaderBackground() {
  if (!shaderCanvas) {
    return;
  }
  shaderCanvas.width = 1;
  shaderCanvas.height = 1;
}

window.initDB = initDB;
window.saveMemory = saveMemory;
window.retrieveMemory = retrieveMemory;
window.cosineSimilarity = cosineSimilarity;
window.fetchMcpTools = fetchMcpTools;
window.executeMcpTool = executeMcpTool;
window.callChatAPI = callChatAPI;

startShaderBackground();
initializeApp();
