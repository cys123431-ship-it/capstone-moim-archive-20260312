const FILES = window.STUDY_GAME_DATA?.files ?? [];
const STORAGE_KEY = "teamwork-study-game-v1";

const MODE_DEFS = [
  {
    id: "line",
    title: "구문 독해",
    summary: "파일을 위에서 아래로 읽으며 각 코드 줄에 맞는 해설을 고릅니다.",
  },
  {
    id: "indent",
    title: "들여쓰기 독해",
    summary: "파일 순서대로 줄을 보며 들여쓰기 이유를 해석합니다.",
  },
  {
    id: "block",
    title: "블록 순차",
    summary: "블록을 실제 등장 순서대로 읽으며 각 코드 덩어리의 역할을 익힙니다.",
  },
  {
    id: "feature",
    title: "기능 순차",
    summary: "기능 단위를 차례대로 보며 이 파일이 어떤 흐름으로 구성되는지 파악합니다.",
  },
  {
    id: "connection",
    title: "연결 회로",
    summary: "선택한 파일이 다른 파일과 어떤 관계로 이어지는지 순서대로 확인합니다.",
  },
];

const PLAY_MODE_DEFS = [
  {
    id: "free",
    title: "자유 플레이",
    summary: "선택한 파일과 모드를 바로 열어서 원하는 만큼 연습합니다.",
  },
  {
    id: "study",
    title: "공부 모드",
    summary: "추천 복습 주기에 따라 회차를 밟아가며 반복학습합니다.",
  },
];

const STUDY_STYLE_DEFS = [
  {
    id: "sequence",
    title: "순차 모드",
    summary: "코드를 실제 등장 순서대로 읽으면서 복습합니다.",
  },
  {
    id: "game",
    title: "게임 모드",
    summary: "문제 순서를 섞어 집중력을 유지하며 점수형으로 복습합니다.",
  },
];

const STUDY_STEPS = [
  {
    id: "step-0",
    title: "오늘 1회차",
    short: "오늘",
    delayDays: 0,
    nextGapDays: 1,
    summary: "처음 구조를 익히고 큰 흐름을 잡는 단계입니다.",
  },
  {
    id: "step-1",
    title: "1일 뒤 2회차",
    short: "1일 뒤",
    delayDays: 1,
    nextGapDays: 3,
    summary: "하루 뒤 다시 떠올리며 잊기 전에 기억을 고정합니다.",
  },
  {
    id: "step-2",
    title: "3일 뒤 3회차",
    short: "3일 뒤",
    delayDays: 3,
    nextGapDays: 7,
    summary: "조금 떨어진 뒤 다시 보며 구조를 장기 기억으로 넘깁니다.",
  },
  {
    id: "step-3",
    title: "7일 뒤 4회차",
    short: "7일 뒤",
    delayDays: 7,
    nextGapDays: 14,
    summary: "일주일 뒤에도 설명 가능한지 확인하는 발표 준비 단계입니다.",
  },
  {
    id: "step-4",
    title: "14일 뒤 유지 복습",
    short: "14일 뒤",
    delayDays: 14,
    nextGapDays: 14,
    summary: "장기 유지용 점검 단계입니다. 잊지 않게 주기적으로 확인합니다.",
  },
];

const state = {
  selectedFileId: FILES[0]?.id ?? "",
  selectedMode: "line",
  playMode: "free",
  studyStyle: "sequence",
  selectedStudyStep: 0,
  round: 0,
  score: 0,
  combo: 0,
  correctCount: 0,
  currentQuestion: null,
  answered: false,
  phase: "idle",
  stageItems: [],
  sessionType: "normal",
  sessionLabel: "",
  missionLog: [],
  selectedMistakeIds: new Set(),
  reviewFilters: {
    fileId: "all",
    modeId: "all",
  },
  stats: loadStats(),
};

const refs = {
  bestScoreValue: document.querySelector("#bestScoreValue"),
  bestComboValue: document.querySelector("#bestComboValue"),
  clearCountValue: document.querySelector("#clearCountValue"),
  speechBubble: document.querySelector("#speechBubble"),
  fileGrid: document.querySelector("#fileGrid"),
  modeGrid: document.querySelector("#modeGrid"),
  startButton: document.querySelector("#startButton"),
  playModeGrid: document.querySelector("#playModeGrid"),
  studyPanel: document.querySelector("#studyPanel"),
  studyHeadline: document.querySelector("#studyHeadline"),
  studyDescription: document.querySelector("#studyDescription"),
  studyStyleGrid: document.querySelector("#studyStyleGrid"),
  studyScheduleGrid: document.querySelector("#studyScheduleGrid"),
  selectedFileTitle: document.querySelector("#selectedFileTitle"),
  selectedModeTitle: document.querySelector("#selectedModeTitle"),
  roundText: document.querySelector("#roundText"),
  scoreText: document.querySelector("#scoreText"),
  comboText: document.querySelector("#comboText"),
  progressFill: document.querySelector("#progressFill"),
  stageLabel: document.querySelector("#stageLabel"),
  questionBadge: document.querySelector("#questionBadge"),
  questionTitle: document.querySelector("#questionTitle"),
  questionCode: document.querySelector("#questionCode"),
  choiceGrid: document.querySelector("#choiceGrid"),
  feedbackCard: document.querySelector("#feedbackCard"),
  hintButton: document.querySelector("#hintButton"),
  nextButton: document.querySelector("#nextButton"),
  infoTitle: document.querySelector("#infoTitle"),
  infoRole: document.querySelector("#infoRole"),
  infoBadges: document.querySelector("#infoBadges"),
  fileBestScore: document.querySelector("#fileBestScore"),
  fileClearCount: document.querySelector("#fileClearCount"),
  fileRank: document.querySelector("#fileRank"),
  docLink: document.querySelector("#docLink"),
  sourceLink: document.querySelector("#sourceLink"),
  mistakeSummary: document.querySelector("#mistakeSummary"),
  reviewFileFilter: document.querySelector("#reviewFileFilter"),
  reviewModeFilter: document.querySelector("#reviewModeFilter"),
  selectVisibleMistakesButton: document.querySelector("#selectVisibleMistakesButton"),
  clearSelectedMistakesButton: document.querySelector("#clearSelectedMistakesButton"),
  startSelectedReviewButton: document.querySelector("#startSelectedReviewButton"),
  startVisibleReviewButton: document.querySelector("#startVisibleReviewButton"),
  startAllReviewButton: document.querySelector("#startAllReviewButton"),
  mistakeList: document.querySelector("#mistakeList"),
};

function normalizeFileStat(value = {}) {
  return {
    bestScore: Number(value.bestScore) || 0,
    bestCombo: Number(value.bestCombo) || 0,
    clearCount: Number(value.clearCount) || 0,
    bestAccuracy: Number(value.bestAccuracy) || 0,
  };
}

function normalizeStudyPlan(value = {}) {
  return {
    completedStep: Number.isFinite(Number(value.completedStep)) ? Number(value.completedStep) : -1,
    nextDueAt: Number(value.nextDueAt) || 0,
    lastCompletedAt: Number(value.lastCompletedAt) || 0,
    lastAccuracy: Number(value.lastAccuracy) || 0,
  };
}

function normalizeMistake(value = {}) {
  return {
    id: String(value.id ?? ""),
    fileId: String(value.fileId ?? ""),
    fileTitle: String(value.fileTitle ?? ""),
    modeId: String(value.modeId ?? ""),
    modeTitle: String(value.modeTitle ?? modeTitle(value.modeId ?? "")),
    label: String(value.label ?? ""),
    prompt: String(value.prompt ?? ""),
    codePreview: String(value.codePreview ?? ""),
    lineNumber: value.lineNumber == null ? null : Number(value.lineNumber),
    start: value.start == null ? null : Number(value.start),
    end: value.end == null ? null : Number(value.end),
    blockLabel: value.blockLabel == null ? "" : String(value.blockLabel),
    connectionIndex: value.connectionIndex == null ? null : Number(value.connectionIndex),
    connectionText: value.connectionText == null ? "" : String(value.connectionText),
    wrongCount: Number(value.wrongCount) || 1,
    lastWrongAt: Number(value.lastWrongAt) || Date.now(),
  };
}

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { bestScore: 0, bestCombo: 0, clearCount: 0, perFile: {}, mistakes: [], studyPlans: {} };
    }
    const parsed = JSON.parse(raw);
    const perFile = Object.fromEntries(
      Object.entries(parsed.perFile ?? {}).map(([fileId, value]) => [
        fileId,
        normalizeFileStat(value),
      ])
    );
    const studyPlans = Object.fromEntries(
      Object.entries(parsed.studyPlans ?? {}).map(([key, value]) => [
        key,
        normalizeStudyPlan(value),
      ])
    );
    return {
      bestScore: Number(parsed.bestScore) || 0,
      bestCombo: Number(parsed.bestCombo) || 0,
      clearCount: Number(parsed.clearCount) || 0,
      perFile,
      mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes.map(normalizeMistake).filter((item) => item.id) : [],
      studyPlans,
    };
  } catch (error) {
    return { bestScore: 0, bestCombo: 0, clearCount: 0, perFile: {}, mistakes: [], studyPlans: {} };
  }
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

function currentFile() {
  return FILES.find((file) => file.id === state.selectedFileId) ?? FILES[0];
}

function currentMode() {
  return MODE_DEFS.find((mode) => mode.id === state.selectedMode) ?? MODE_DEFS[0];
}

function findFileById(fileId) {
  return FILES.find((file) => file.id === fileId) ?? FILES[0];
}

function fileStats(fileId) {
  if (!state.stats.perFile) {
    state.stats.perFile = {};
  }
  if (!state.stats.perFile[fileId]) {
    state.stats.perFile[fileId] = normalizeFileStat();
  }
  return state.stats.perFile[fileId];
}

function studyPlanKey(fileId = state.selectedFileId, modeId = state.selectedMode) {
  return `${fileId}::${modeId}`;
}

function currentStudyPlan() {
  if (!state.stats.studyPlans) {
    state.stats.studyPlans = {};
  }
  const key = studyPlanKey();
  if (!state.stats.studyPlans[key]) {
    state.stats.studyPlans[key] = normalizeStudyPlan();
  }
  return state.stats.studyPlans[key];
}

function recommendedStudyStep() {
  const plan = currentStudyPlan();
  const nextIndex = Math.min(plan.completedStep + 1, STUDY_STEPS.length - 1);
  return nextIndex < 0 ? 0 : nextIndex;
}

function currentStudyStep() {
  return STUDY_STEPS[state.selectedStudyStep] ?? STUDY_STEPS[0];
}

function studyStepStatus(stepIndex) {
  const plan = currentStudyPlan();
  if (stepIndex <= plan.completedStep) {
    return "complete";
  }
  if (stepIndex === recommendedStudyStep()) {
    return plan.nextDueAt > Date.now() ? "upcoming" : "recommended";
  }
  return "locked";
}

function studyHeadlineText() {
  const plan = currentStudyPlan();
  const step = currentStudyStep();
  const dueText =
    plan.nextDueAt > Date.now()
      ? `${Math.ceil((plan.nextDueAt - Date.now()) / (1000 * 60 * 60 * 24))}일 후 추천`
      : "지금 바로 추천";
  return `${step.title} · ${dueText}`;
}

function currentTotalRounds() {
  return state.stageItems.length;
}

function mistakes() {
  if (!Array.isArray(state.stats.mistakes)) {
    state.stats.mistakes = [];
  }
  return state.stats.mistakes;
}

function availableModesForFile(file) {
  const result = [];

  if (file.lines.length > 0) {
    result.push("line", "indent");
  }

  if (file.blocks.length > 0) {
    result.push("block");
  }

  if (file.features.length > 0) {
    result.push("feature");
  }

  if (file.connections.length > 0) {
    result.push("connection");
  }

  return [...new Set(result)];
}

function shuffle(list) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function uniqueOptions(correct, pool, count = 4) {
  const filtered = shuffle(pool.filter((item) => item !== correct));
  return shuffle([correct, ...filtered.slice(0, count - 1)]);
}

function modeTitle(modeId) {
  return MODE_DEFS.find((mode) => mode.id === modeId)?.title ?? MODE_DEFS[0]?.title ?? "스터디 모드";
}

function modeStatusText(modeId, isDisabled) {
  if (!isDisabled) {
    return "이 파일에서 바로 사용할 수 있습니다.";
  }
  if (modeId === "line" || modeId === "indent") {
    return "줄 단위 데이터가 없어 비활성화됩니다.";
  }
  if (modeId === "block") {
    return "블록 데이터가 없어 비활성화됩니다.";
  }
  if (modeId === "feature") {
    return "기능 단위 데이터가 없어 비활성화됩니다.";
  }
  return "이 파일에서는 이 모드를 사용할 수 없습니다.";
}

function accuracyPercent(correctCount = state.correctCount) {
  const total = currentTotalRounds();
  if (total === 0) {
    return 0;
  }
  return Math.round((correctCount / total) * 100);
}

function rankForAccuracy(accuracy) {
  if (accuracy >= 95) {
    return {
      label: "발표 준비",
      summary: "거의 막힘 없이 설명 가능한 상태입니다.",
    };
  }
  if (accuracy >= 80) {
    return {
      label: "구조 파악",
      summary: "핵심 흐름은 잘 잡았고 세부만 보완하면 됩니다.",
    };
  }
  if (accuracy >= 60) {
    return {
      label: "라인 감각",
      summary: "줄 단위 이해는 괜찮고 블록 감각을 더 키우면 좋습니다.",
    };
  }
  return {
    label: "탐험 중",
    summary: "힌트와 설명 문서를 곁들여 한 번 더 도전하면 좋습니다.",
  };
}

function allLinePool() {
  return FILES.flatMap((file) => file.lines.map((line) => line.explanation));
}

function allIndentPool() {
  return FILES.flatMap((file) => file.lines.map((line) => line.indentation));
}

function allBlockPool() {
  return FILES.flatMap((file) => file.blocks.map((block) => block.description));
}

function allFeaturePool() {
  return FILES.flatMap((file) => file.features.map((feature) => feature.description));
}

function allConnectionPool() {
  return FILES.flatMap((file) => file.connections);
}

function formatLineQuestion(line) {
  return `${line.lineNumber} | ${line.code}`;
}

function formatSnippet(snippet, maxLines = 10) {
  const lines = snippet.split("\n");
  if (lines.length <= maxLines) {
    return lines.join("\n");
  }
  return [...lines.slice(0, maxLines), "..."].join("\n");
}

function buildStageDescriptor(file, modeId, item, index) {
  if (modeId === "line" || modeId === "indent") {
    return {
      id: `${file.id}::${modeId}::line-${item.lineNumber}`,
      fileId: file.id,
      fileTitle: file.title,
      modeId,
      lineNumber: item.lineNumber,
      label: `${item.lineNumber}줄`,
      codePreview: formatLineQuestion(item),
    };
  }

  if (modeId === "block" || modeId === "feature") {
    return {
      id: `${file.id}::${modeId}::${item.start}-${item.end}-${item.label}`,
      fileId: file.id,
      fileTitle: file.title,
      modeId,
      start: item.start,
      end: item.end,
      blockLabel: item.label,
      label: `${item.start}~${item.end}줄 · ${item.label}`,
      codePreview: formatSnippet(item.snippet, 4),
    };
  }

  return {
    id: `${file.id}::connection::${index}`,
    fileId: file.id,
    fileTitle: file.title,
    modeId,
    connectionIndex: index,
    connectionText: item,
    label: `연결 ${index + 1}`,
    codePreview: item,
  };
}

function resolveStageDescriptor(descriptor) {
  const file = findFileById(descriptor.fileId);

  if (descriptor.modeId === "line" || descriptor.modeId === "indent") {
    return {
      file,
      item: file.lines.find((line) => line.lineNumber === descriptor.lineNumber),
    };
  }

  if (descriptor.modeId === "block") {
    return {
      file,
      item: file.blocks.find((block) => block.start === descriptor.start && block.end === descriptor.end && block.label === descriptor.blockLabel),
    };
  }

  if (descriptor.modeId === "feature") {
    return {
      file,
      item: file.features.find((feature) => feature.start === descriptor.start && feature.end === descriptor.end && feature.label === descriptor.blockLabel),
    };
  }

  return {
    file,
    item: file.connections[descriptor.connectionIndex] ?? descriptor.connectionText,
  };
}

function buildLineQuestion(file, target, order, total, descriptor) {
  return {
    modeId: "line",
    badge: `구문 독해 ${order} / ${total}`,
    prompt: `${file.title}의 ${target.lineNumber}줄 해설로 가장 알맞은 것은?`,
    code: formatLineQuestion(target),
    correct: target.explanation,
    options: uniqueOptions(target.explanation, allLinePool()),
    hint: `들여쓰기 힌트: ${target.indentation}`,
    success: `정답입니다. ${target.explanation}`,
    failure: `정답은 이 설명이었습니다: ${target.explanation}`,
    descriptor,
    fileId: file.id,
    fileTitle: file.title,
  };
}

function buildIndentQuestion(file, target, order, total, descriptor) {
  return {
    modeId: "indent",
    badge: `들여쓰기 독해 ${order} / ${total}`,
    prompt: `${file.title}의 ${target.lineNumber}줄이 이렇게 들여쓰기 된 이유는 무엇일까요?`,
    code: formatLineQuestion(target),
    correct: target.indentation,
    options: uniqueOptions(target.indentation, allIndentPool()),
    hint: `코드 의미 힌트: ${target.explanation}`,
    success: `정답입니다. ${target.indentation}`,
    failure: `정답은 이 들여쓰기 설명이었습니다: ${target.indentation}`,
    descriptor,
    fileId: file.id,
    fileTitle: file.title,
  };
}

function buildBlockQuestion(file, target, order, total, descriptor) {
  return {
    modeId: "block",
    badge: `블록 순차 ${order} / ${total}`,
    prompt: `${file.title}의 ${target.start}~${target.end}줄 블록 역할은 무엇일까요?`,
    code: `${target.start}~${target.end}줄\n${formatSnippet(target.snippet)}`,
    correct: target.description,
    options: uniqueOptions(target.description, allBlockPool()),
    hint: `블록 이름 힌트: ${target.label}`,
    success: `정답입니다. ${target.label} 블록은 ${target.description}`,
    failure: `정답은 이 설명이었습니다: ${target.description}`,
    descriptor,
    fileId: file.id,
    fileTitle: file.title,
  };
}

function buildFeatureQuestion(file, target, order, total, descriptor) {
  return {
    modeId: "feature",
    badge: `기능 순차 ${order} / ${total}`,
    prompt: `${file.title}의 "${target.label}" 기능 설명으로 가장 알맞은 것은?`,
    code: `${target.start}~${target.end}줄\n${formatSnippet(target.snippet, 12)}`,
    correct: target.description,
    options: uniqueOptions(target.description, allFeaturePool()),
    hint: `기능 이름 힌트: ${target.label}`,
    success: `정답입니다. ${target.label} 기능은 ${target.description}`,
    failure: `정답은 이 설명이었습니다: ${target.description}`,
    descriptor,
    fileId: file.id,
    fileTitle: file.title,
  };
}

function buildConnectionQuestion(file, target, order, total, descriptor) {
  return {
    modeId: "connection",
    badge: `연결 회로 ${order} / ${total}`,
    prompt: `${file.title}의 연결 설명으로 가장 알맞은 것은?`,
    code: `FILE: ${file.title}\nROLE: ${file.role}\nSTEP: ${order} / ${total}`,
    correct: target,
    options: uniqueOptions(target, allConnectionPool()),
    hint: `파일 역할 힌트: ${file.whenUsed}`,
    success: `정답입니다. ${target}`,
    failure: `정답은 이 연결 설명이었습니다: ${target}`,
    descriptor,
    fileId: file.id,
    fileTitle: file.title,
  };
}

function buildStageItems(file, modeId) {
  if (modeId === "line" || modeId === "indent") {
    return file.lines
      .filter((line) => line.code.trim() !== "")
      .map((line, index) => buildStageDescriptor(file, modeId, line, index));
  }
  if (modeId === "block") {
    return file.blocks
      .filter((block) => block.snippet.trim() !== "")
      .map((block, index) => buildStageDescriptor(file, modeId, block, index));
  }
  if (modeId === "feature") {
    return file.features
      .filter((feature) => feature.snippet.trim() !== "")
      .map((feature, index) => buildStageDescriptor(file, modeId, feature, index));
  }
  if (modeId === "connection") {
    return file.connections.map((connection, index) => buildStageDescriptor(file, modeId, connection, index));
  }
  return [];
}

function buildQuestionFromStage(descriptor, order, total) {
  const { file, item } = resolveStageDescriptor(descriptor);
  if (!file || item == null) {
    return null;
  }

  if (descriptor.modeId === "line") {
    return buildLineQuestion(file, item, order, total, descriptor);
  }
  if (descriptor.modeId === "indent") {
    return buildIndentQuestion(file, item, order, total, descriptor);
  }
  if (descriptor.modeId === "block") {
    return buildBlockQuestion(file, item, order, total, descriptor);
  }
  if (descriptor.modeId === "feature") {
    return buildFeatureQuestion(file, item, order, total, descriptor);
  }
  return buildConnectionQuestion(file, item, order, total, descriptor);
}

function buildSessionQueue() {
  const queue = buildStageItems(currentFile(), state.selectedMode);
  if (state.playMode === "study" && state.studyStyle === "game") {
    return shuffle(queue).slice(0, Math.min(queue.length, 12));
  }
  return queue;
}

function studySessionLabel() {
  return `공부 모드 · ${currentStudyStep().short} · ${state.studyStyle === "sequence" ? "순차 모드" : "게임 모드"}`;
}

function mistakeModeCounts() {
  return MODE_DEFS.map((mode) => ({
    ...mode,
    count: mistakes().filter((item) => item.modeId === mode.id).length,
  }));
}

function filteredMistakes() {
  return mistakes().filter((item) => {
    const fileMatch =
      state.reviewFilters.fileId === "all" || item.fileId === state.reviewFilters.fileId;
    const modeMatch =
      state.reviewFilters.modeId === "all" || item.modeId === state.reviewFilters.modeId;
    return fileMatch && modeMatch;
  });
}

function applyValidReviewFilters() {
  const availableFileIds = new Set(["all", ...mistakes().map((item) => item.fileId)]);
  const availableModeIds = new Set(["all", ...mistakes().map((item) => item.modeId)]);

  if (!availableFileIds.has(state.reviewFilters.fileId)) {
    state.reviewFilters.fileId = "all";
  }

  if (!availableModeIds.has(state.reviewFilters.modeId)) {
    state.reviewFilters.modeId = "all";
  }
}

function formatMistakeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < hour) {
    return `${Math.max(1, Math.round(diff / minute))}분 전`;
  }
  if (diff < day) {
    return `${Math.round(diff / hour)}시간 전`;
  }
  return `${Math.round(diff / day)}일 전`;
}

function renderReviewPanel() {
  applyValidReviewFilters();
  const validIds = new Set(mistakes().map((item) => item.id));
  state.selectedMistakeIds = new Set(
    [...state.selectedMistakeIds].filter((id) => validIds.has(id))
  );

  const modeCounts = mistakeModeCounts();
  refs.mistakeSummary.innerHTML = modeCounts
    .map(
      (mode) => `
        <article class="review-summary-card ${mode.count > 0 ? "has-items" : ""}">
          <span>${escapeHtml(mode.title)}</span>
          <strong>${mode.count}</strong>
          <p>${escapeHtml(mode.count > 0 ? `${mode.count}개의 오답이 쌓여 있습니다.` : "아직 오답이 없습니다.")}</p>
        </article>
      `
    )
    .join("");

  const fileOptions = [
    `<option value="all" ${state.reviewFilters.fileId === "all" ? "selected" : ""}>모든 파일</option>`,
    ...FILES
      .filter((file) => mistakes().some((item) => item.fileId === file.id))
      .map(
        (file) =>
          `<option value="${escapeHtml(file.id)}" ${state.reviewFilters.fileId === file.id ? "selected" : ""}>${escapeHtml(file.title)}</option>`
      ),
  ];
  refs.reviewFileFilter.innerHTML = fileOptions.join("");

  const modeOptions = [
    `<option value="all" ${state.reviewFilters.modeId === "all" ? "selected" : ""}>모든 모드</option>`,
    ...MODE_DEFS
      .filter((mode) => mistakes().some((item) => item.modeId === mode.id))
      .map(
        (mode) =>
          `<option value="${escapeHtml(mode.id)}" ${state.reviewFilters.modeId === mode.id ? "selected" : ""}>${escapeHtml(mode.title)}</option>`
      ),
  ];
  refs.reviewModeFilter.innerHTML = modeOptions.join("");

  const visible = filteredMistakes();
  refs.startAllReviewButton.disabled = mistakes().length === 0;
  refs.startVisibleReviewButton.disabled = visible.length === 0;
  refs.startSelectedReviewButton.disabled = state.selectedMistakeIds.size === 0;
  refs.selectVisibleMistakesButton.disabled = visible.length === 0;
  refs.clearSelectedMistakesButton.disabled = state.selectedMistakeIds.size === 0;

  if (visible.length === 0) {
    refs.mistakeList.innerHTML = `
      <div class="mistake-empty">
        <strong>조건에 맞는 오답이 없습니다.</strong>
        <p>게임을 플레이하다 틀린 문제가 생기면 이곳에 자동으로 모입니다.</p>
      </div>
    `;
    return;
  }

  refs.mistakeList.innerHTML = visible
    .map((item) => {
      const checked = state.selectedMistakeIds.has(item.id);
      return `
        <label class="mistake-item">
          <input class="mistake-checkbox" type="checkbox" data-mistake-id="${escapeHtml(item.id)}" ${checked ? "checked" : ""} />
          <div class="mistake-body">
            <div class="mistake-heading">
              <span class="mistake-mode">${escapeHtml(item.modeTitle)}</span>
              <strong>${escapeHtml(item.fileTitle)} · ${escapeHtml(item.label)}</strong>
            </div>
            <p class="mistake-prompt">${escapeHtml(item.prompt)}</p>
            <pre class="mistake-preview">${escapeHtml(item.codePreview)}</pre>
            <div class="mistake-meta">
              <span>오답 ${item.wrongCount}회</span>
              <span>최근 틀림 ${escapeHtml(formatMistakeTime(item.lastWrongAt))}</span>
            </div>
          </div>
        </label>
      `;
    })
    .join("");
}

function storeMistake(question) {
  if (!question?.descriptor?.id) {
    return;
  }

  const existing = mistakes().find((item) => item.id === question.descriptor.id);
  if (existing) {
    existing.wrongCount += 1;
    existing.lastWrongAt = Date.now();
    existing.prompt = question.prompt;
    existing.codePreview = question.code;
  } else {
    mistakes().push(
      normalizeMistake({
        ...question.descriptor,
        modeTitle: modeTitle(question.modeId),
        prompt: question.prompt,
        codePreview: question.code,
        wrongCount: 1,
        lastWrongAt: Date.now(),
      })
    );
  }

  saveStats();
  renderReviewPanel();
}

function clearMistake(question) {
  if (!question?.descriptor?.id) {
    return;
  }

  const next = mistakes().filter((item) => item.id !== question.descriptor.id);
  if (next.length === mistakes().length) {
    return;
  }

  state.stats.mistakes = next;
  state.selectedMistakeIds.delete(question.descriptor.id);
  saveStats();
  renderReviewPanel();
}

function beginReviewSession(queue, label) {
  if (queue.length === 0) {
    refs.feedbackCard.textContent = "복습할 오답을 먼저 선택해 주세요.";
    refs.feedbackCard.classList.remove("is-success");
    refs.feedbackCard.classList.add("is-fail");
    setSpeech("복습을 시작하려면 오답 목록에서 문제를 하나 이상 골라 주세요.");
    return;
  }

  state.sessionType = "review";
  state.sessionLabel = label;
  state.phase = "playing";
  state.round = 0;
  state.score = 0;
  state.combo = 0;
  state.correctCount = 0;
  state.currentQuestion = null;
  state.answered = false;
  state.stageItems = queue;
  state.missionLog = [];
  refs.startButton.textContent = "일반 미션 시작";
  refs.choiceGrid.classList.remove("is-summary");
  refs.feedbackCard.classList.remove("is-success", "is-fail");
  pushLog(`${label} 시작`);
  updateHud();
  nextRound();
}

function startReviewAll() {
  beginReviewSession(
    mistakes().map((item) => ({ ...item })),
    "오답 전체 복습"
  );
}

function startReviewVisible() {
  beginReviewSession(
    filteredMistakes().map((item) => ({ ...item })),
    "현재 목록 복습"
  );
}

function startReviewSelected() {
  beginReviewSession(
    mistakes().filter((item) => state.selectedMistakeIds.has(item.id)).map((item) => ({ ...item })),
    "선택한 문제 복습"
  );
}

function renderPlayModeGrid() {
  refs.playModeGrid.innerHTML = PLAY_MODE_DEFS.map((mode) => `
    <button class="learning-card ${state.playMode === mode.id ? "is-selected" : ""}" type="button" data-play-mode="${mode.id}">
      <h4>${escapeHtml(mode.title)}</h4>
      <p>${escapeHtml(mode.summary)}</p>
    </button>
  `).join("");
}

function renderStudyPanel() {
  if (state.playMode !== "study") {
    refs.studyPanel.classList.add("is-hidden");
    return;
  }

  refs.studyPanel.classList.remove("is-hidden");
  refs.studyHeadline.textContent = studyHeadlineText();
  refs.studyDescription.textContent = currentStudyStep().summary;

  refs.studyStyleGrid.innerHTML = STUDY_STYLE_DEFS.map((style) => `
    <button class="study-style-card ${state.studyStyle === style.id ? "is-selected" : ""}" type="button" data-study-style="${style.id}">
      <h4>${escapeHtml(style.title)}</h4>
      <p>${escapeHtml(style.summary)}</p>
    </button>
  `).join("");

  refs.studyScheduleGrid.innerHTML = STUDY_STEPS.map((step, index) => {
    const status = studyStepStatus(index);
    const label =
      status === "complete"
        ? "완료"
        : status === "recommended"
          ? "추천"
          : status === "upcoming"
            ? "곧 도래"
            : "대기";
    return `
      <button class="study-schedule-card ${state.selectedStudyStep === index ? "is-selected" : ""} ${status === "complete" ? "is-complete" : ""} ${status === "locked" ? "is-locked" : ""}" type="button" data-study-step="${index}">
        <span class="mode-status">${escapeHtml(label)}</span>
        <h4>${escapeHtml(step.short)}</h4>
        <p>${escapeHtml(step.summary)}</p>
      </button>
    `;
  }).join("");
}

function renderStats() {
  refs.bestScoreValue.textContent = String(state.stats.bestScore);
  refs.bestComboValue.textContent = String(state.stats.bestCombo);
  refs.clearCountValue.textContent = String(state.stats.clearCount);
}

function renderFileGrid() {
  refs.fileGrid.innerHTML = FILES.map((file) => {
    const isSelected = file.id === state.selectedFileId;
    const progress = fileStats(file.id);
    const rank = rankForAccuracy(progress.bestAccuracy);
    return `
      <button class="file-card ${isSelected ? "is-selected" : ""}" type="button" data-file-id="${file.id}">
        <span class="file-kind">${escapeHtml(file.kind.toUpperCase())}</span>
        <h4>${escapeHtml(file.title)}</h4>
        <p>${escapeHtml(file.role)}</p>
        <div class="tag-row">
          ${file.badges.map((badge) => `<span class="tag">${escapeHtml(badge)}</span>`).join("")}
        </div>
        <div class="file-card-footer">
          <span>최고 ${progress.bestScore}점</span>
          <span>${progress.clearCount}회 클리어</span>
          <strong class="file-rank">${rank.label}</strong>
        </div>
      </button>
    `;
  }).join("");
}

function renderModeGrid() {
  const enabledModes = availableModesForFile(currentFile());
  refs.modeGrid.innerHTML = MODE_DEFS.map((mode) => {
    const isSelected = mode.id === state.selectedMode;
    const isDisabled = !enabledModes.includes(mode.id);
    return `
      <button class="mode-card ${isSelected ? "is-selected" : ""} ${isDisabled ? "is-disabled" : ""}" type="button" data-mode-id="${mode.id}" ${isDisabled ? "disabled" : ""}>
        <h4>${escapeHtml(mode.title)}</h4>
        <p>${escapeHtml(mode.summary)}</p>
        <span class="mode-status">${escapeHtml(modeStatusText(mode.id, isDisabled))}</span>
      </button>
    `;
  }).join("");
}

function renderInfoPanel() {
  const file = currentFile();
  const progress = fileStats(file.id);
  const rank = rankForAccuracy(progress.bestAccuracy);
  refs.infoTitle.textContent = file.title;
  refs.infoRole.textContent = file.role;
  refs.infoBadges.innerHTML = file.badges.map((badge) => `<span class="tag">${escapeHtml(badge)}</span>`).join("");
  refs.fileBestScore.textContent = String(progress.bestScore);
  refs.fileClearCount.textContent = `${progress.clearCount}회`;
  refs.fileRank.textContent = rank.label;
  refs.docLink.href = file.docPath;
  refs.sourceLink.href = file.sourcePath;
  refs.selectedFileTitle.textContent = file.title;
}

function renderModeInfo() {
  refs.selectedModeTitle.textContent =
    state.sessionLabel
      ? state.sessionLabel
      : currentMode().title;
}

function renderLog() {
  if (!refs.missionLog) {
    return;
  }

  if (state.missionLog.length === 0) {
    refs.missionLog.innerHTML = "<li>아직 플레이 기록이 없습니다.</li>";
    return;
  }

  refs.missionLog.innerHTML = state.missionLog
    .slice(0, 6)
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function updateHud() {
  const total = currentTotalRounds();
  refs.roundText.textContent = `${state.round} / ${total}`;
  refs.scoreText.textContent = String(state.score);
  refs.comboText.textContent = String(state.combo);
  refs.progressFill.style.width = total === 0 ? "0%" : `${(state.round / total) * 100}%`;
  refs.stageLabel.textContent =
    state.round === 0
      ? "준비 상태"
      : `${state.round}번째 문제 · 정답 ${state.correctCount}개 · ${modeTitle(state.currentQuestion?.modeId ?? state.selectedMode)}`;
}

function setSpeech(text) {
  refs.speechBubble.textContent = text;
}

function resetFeedback() {
  refs.feedbackCard.textContent = "정답을 고르면 바로 결과와 해설이 나옵니다.";
  refs.feedbackCard.classList.remove("is-success", "is-fail");
}

function showLobbyState(title = "미션 시작을 누르면 첫 문제가 열립니다.", code = "파일을 먼저 골라 주세요.") {
  state.sessionType = "normal";
  state.sessionLabel = "";
  state.phase = "idle";
  state.round = 0;
  state.score = 0;
  state.combo = 0;
  state.correctCount = 0;
  state.currentQuestion = null;
  state.answered = false;
  state.stageItems = [];
  state.missionLog = [];
  refs.startButton.textContent = "미션 시작";
  refs.questionBadge.textContent = "Press Start";
  refs.questionTitle.textContent = title;
  refs.questionCode.textContent = code;
  refs.choiceGrid.classList.remove("is-summary");
  refs.choiceGrid.innerHTML = "";
  refs.nextButton.textContent = "다음 문제";
  refs.nextButton.disabled = true;
  resetFeedback();
  renderLog();
  updateHud();
  renderModeInfo();
  renderStudyPanel();
}

function showQuestion(question) {
  state.currentQuestion = question;
  state.answered = false;
  state.phase = "playing";
  refs.questionBadge.textContent = `${question.badge} · ${modeTitle(question.modeId)}`;
  refs.questionTitle.textContent = question.prompt;
  refs.questionCode.textContent = question.code;
  refs.selectedFileTitle.textContent = question.fileTitle;
  refs.selectedModeTitle.textContent =
    state.sessionLabel || modeTitle(question.modeId);
  refs.choiceGrid.classList.remove("is-summary");
  refs.choiceGrid.innerHTML = question.options
    .map(
      (option, index) => `
        <button class="choice-button" type="button" data-option="${encodeURIComponent(option)}">
          <span class="choice-index">${index + 1}</span>
          <span class="choice-copy">${escapeHtml(option)}</span>
        </button>
      `
    )
    .join("");
  refs.nextButton.textContent = "다음 문제";
  refs.nextButton.disabled = true;
  resetFeedback();
}

function pushLog(message) {
  state.missionLog.unshift(message);
  renderLog();
}

function finishGame() {
  const file = currentFile();
  const accuracy = accuracyPercent();
  const rank = rankForAccuracy(accuracy);
  const progress = fileStats(file.id);
  const total = currentTotalRounds();

  state.stats.bestScore = Math.max(state.stats.bestScore, state.score);
  state.stats.bestCombo = Math.max(state.stats.bestCombo, state.combo);
  if (state.sessionType === "normal") {
    state.stats.clearCount += 1;
    progress.bestScore = Math.max(progress.bestScore, state.score);
    progress.bestCombo = Math.max(progress.bestCombo, state.combo);
    progress.clearCount += 1;
    progress.bestAccuracy = Math.max(progress.bestAccuracy, accuracy);
    if (state.playMode === "study") {
      const plan = currentStudyPlan();
      if (accuracy >= 70) {
        plan.completedStep = Math.max(plan.completedStep, state.selectedStudyStep);
        plan.lastCompletedAt = Date.now();
        plan.lastAccuracy = accuracy;
        plan.nextDueAt = Date.now() + currentStudyStep().nextGapDays * 24 * 60 * 60 * 1000;
      } else {
        plan.lastAccuracy = accuracy;
        plan.nextDueAt = Date.now();
      }
      state.selectedStudyStep = recommendedStudyStep();
    }
  }
  saveStats();
  renderStats();
  renderFileGrid();
  renderInfoPanel();
  state.phase = "finished";

  refs.questionBadge.textContent = `Stage Clear · ${rank.label}`;
  refs.questionTitle.textContent =
    state.sessionType === "review"
      ? `${state.sessionLabel} 완료!`
      : `${file.title} 스테이지 클리어!`;
  refs.questionCode.textContent =
    `정답 ${state.correctCount} / ${total} (${accuracy}%)\n최종 점수 ${state.score}\n최고 콤보 ${state.combo}\n현재 평가 ${rank.label}\n\n${rank.summary}`;
  refs.choiceGrid.classList.add("is-summary");
  refs.choiceGrid.innerHTML = `
    <button class="quick-link summary-action" type="button" data-action="restart">같은 파일 다시 플레이</button>
    <a class="quick-link" href="${file.docPath}" target="_blank" rel="noreferrer">설명 문서 다시 보기</a>
    <a class="quick-link" href="${file.sourcePath}" target="_blank" rel="noreferrer">소스 파일 다시 보기</a>
  `;
  refs.feedbackCard.textContent = rank.summary;
  refs.feedbackCard.classList.remove("is-fail");
  refs.feedbackCard.classList.add("is-success");
  refs.nextButton.textContent = "스테이지 완료";
  refs.nextButton.disabled = true;
  pushLog(`클리어 · ${state.sessionType === "review" ? state.sessionLabel : file.title} · ${rank.label} · ${accuracy}%`);
  setSpeech("스테이지 클리어! Enter로 다시 시작하거나, 오답 복습 보드에서 이어서 골라볼 수 있습니다.");
  renderStudyPanel();
  renderReviewPanel();
}

function nextRound() {
  const total = currentTotalRounds();

  if (state.round >= total) {
    finishGame();
    return;
  }

  const nextIndex = state.round;
  const stageItem = state.stageItems[nextIndex];
  const question = buildQuestionFromStage(stageItem, nextIndex + 1, total);
  if (!question) {
    state.round = nextIndex + 1;
    nextRound();
    return;
  }

  state.round = nextIndex + 1;
  showQuestion(question);
  updateHud();
  setSpeech(`${state.round}번째 문제입니다. 파일을 위에서 아래로 읽는다는 느낌으로 따라가 보세요.`);
}

function answerQuestion(option) {
  if (state.answered || !state.currentQuestion) {
    return;
  }

  state.answered = true;
  const isCorrect = option === state.currentQuestion.correct;

  document.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = true;
    const value = decodeURIComponent(button.dataset.option);
    if (value === state.currentQuestion.correct) {
      button.classList.add("correct");
    } else if (value === option && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.correctCount += 1;
    state.combo += 1;
    state.score += 120 + state.combo * 18;
    clearMistake(state.currentQuestion);
    refs.feedbackCard.textContent = state.currentQuestion.success;
    refs.feedbackCard.classList.add("is-success");
    refs.feedbackCard.classList.remove("is-fail");
    pushLog(`정답 · ${state.currentQuestion.badge}`);
    setSpeech("좋아요! 이 감각으로 계속 가면 코드 읽는 속도가 빨라집니다.");
  } else {
    state.combo = 0;
    storeMistake(state.currentQuestion);
    refs.feedbackCard.textContent = state.currentQuestion.failure;
    refs.feedbackCard.classList.add("is-fail");
    refs.feedbackCard.classList.remove("is-success");
    pushLog(`오답 · ${state.currentQuestion.badge}`);
    setSpeech("괜찮습니다. 틀린 문제일수록 기억에 오래 남습니다.");
  }

  refs.nextButton.disabled = false;
  updateHud();
}

function startGame() {
  const enabledModes = availableModesForFile(currentFile());
  if (!enabledModes.includes(state.selectedMode)) {
    state.selectedMode = enabledModes[0];
    renderModeGrid();
    renderModeInfo();
  }
  const queue = buildSessionQueue();
  if (queue.length === 0) {
    showLobbyState("이 모드에서 사용할 데이터가 아직 없습니다.", "다른 파일이나 다른 모드를 골라 주세요.");
    setSpeech("이 파일에서는 지금 고른 모드로 낼 문제가 없습니다. 다른 모드를 골라 주세요.");
    return;
  }
  state.sessionType = "normal";
  state.sessionLabel = state.playMode === "study" ? studySessionLabel() : "";
  state.phase = "playing";
  state.round = 0;
  state.score = 0;
  state.combo = 0;
  state.correctCount = 0;
  state.currentQuestion = null;
  state.answered = false;
  state.stageItems = queue;
  state.missionLog = [];
  refs.startButton.textContent = "다시 시작";
  refs.choiceGrid.classList.remove("is-summary");
  pushLog(`${currentFile().title} · ${state.playMode === "study" ? studySessionLabel() : currentMode().title} 시작`);
  updateHud();
  renderModeInfo();
  nextRound();
}

function showHint() {
  if (!state.currentQuestion || state.answered) {
    return;
  }
  refs.feedbackCard.textContent = state.currentQuestion.hint;
  refs.feedbackCard.classList.remove("is-success", "is-fail");
}

function handleKeyboardShortcuts(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }

  const targetTag = event.target?.tagName;
  if (targetTag === "INPUT" || targetTag === "TEXTAREA" || targetTag === "SELECT") {
    return;
  }

  if (event.key >= "1" && event.key <= "4" && state.currentQuestion && !state.answered) {
    const buttons = [...document.querySelectorAll(".choice-button")];
    const targetButton = buttons[Number(event.key) - 1];
    if (targetButton) {
      event.preventDefault();
      answerQuestion(decodeURIComponent(targetButton.dataset.option));
    }
    return;
  }

  if (event.key === "Enter") {
    if (!refs.nextButton.disabled) {
      event.preventDefault();
      nextRound();
      return;
    }

    if (state.phase === "idle" || state.phase === "finished") {
      event.preventDefault();
      startGame();
    }
    return;
  }

  if (event.key.toLowerCase() === "h") {
    event.preventDefault();
    showHint();
    return;
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    startGame();
  }
}

function bindEvents() {
  refs.fileGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-file-id]");
    if (!button) {
      return;
    }
    state.selectedFileId = button.dataset.fileId;
    const enabledModes = availableModesForFile(currentFile());
    if (!enabledModes.includes(state.selectedMode)) {
      state.selectedMode = enabledModes[0];
    }
    state.selectedStudyStep = recommendedStudyStep();
    renderFileGrid();
    renderModeGrid();
    renderPlayModeGrid();
    renderInfoPanel();
    renderModeInfo();
    showLobbyState(`${currentFile().title} 파일을 선택했습니다.`, "미션 시작을 누르면 이 파일 기준 첫 문제가 열립니다.");
    setSpeech(`${currentFile().title} 파일을 골랐습니다. 이제 어떤 모드로 들어갈지 정해 주세요.`);
  });

  refs.modeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode-id]");
    if (!button) {
      return;
    }
    if (button.disabled) {
      return;
    }
    state.selectedMode = button.dataset.modeId;
    state.selectedStudyStep = recommendedStudyStep();
    renderModeGrid();
    renderModeInfo();
    showLobbyState(`${currentMode().title} 모드를 골랐습니다.`, "미션 시작을 누르면 선택한 모드로 새 스테이지를 엽니다.");
    setSpeech(`${currentMode().title} 모드로 바꿨습니다. 미션 시작을 눌러 주세요.`);
  });

  refs.playModeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-play-mode]");
    if (!button) {
      return;
    }
    state.playMode = button.dataset.playMode;
    state.selectedStudyStep = recommendedStudyStep();
    renderPlayModeGrid();
    renderStudyPanel();
    renderModeInfo();
    showLobbyState(
      state.playMode === "study" ? "공부 모드를 준비했습니다." : "자유 플레이를 준비했습니다.",
      "미션 시작을 누르면 현재 선택 기준으로 문제를 엽니다."
    );
    setSpeech(
      state.playMode === "study"
        ? "공부 모드입니다. 추천 회차와 스타일을 확인한 뒤 시작해 보세요."
        : "자유 플레이입니다. 원하는 파일과 모드를 골라 바로 연습할 수 있습니다."
    );
  });

  refs.studyStyleGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-study-style]");
    if (!button) {
      return;
    }
    state.studyStyle = button.dataset.studyStyle;
    renderStudyPanel();
    showLobbyState(
      `${button.dataset.studyStyle === "sequence" ? "순차 모드" : "게임 모드"}로 공부합니다.`,
      "미션 시작을 누르면 선택한 회차 기준으로 복습이 시작됩니다."
    );
  });

  refs.studyScheduleGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-study-step]");
    if (!button) {
      return;
    }
    state.selectedStudyStep = Number(button.dataset.studyStep);
    renderStudyPanel();
    showLobbyState(
      `${currentStudyStep().title}를 선택했습니다.`,
      "미션 시작을 누르면 이 회차 기준으로 복습 세션이 시작됩니다."
    );
  });

  refs.startButton.addEventListener("click", startGame);
  refs.hintButton.addEventListener("click", showHint);
  refs.nextButton.addEventListener("click", nextRound);
  refs.reviewFileFilter.addEventListener("change", (event) => {
    state.reviewFilters.fileId = event.target.value;
    renderReviewPanel();
  });
  refs.reviewModeFilter.addEventListener("change", (event) => {
    state.reviewFilters.modeId = event.target.value;
    renderReviewPanel();
  });
  refs.selectVisibleMistakesButton.addEventListener("click", () => {
    filteredMistakes().forEach((item) => state.selectedMistakeIds.add(item.id));
    renderReviewPanel();
  });
  refs.clearSelectedMistakesButton.addEventListener("click", () => {
    state.selectedMistakeIds.clear();
    renderReviewPanel();
  });
  refs.startAllReviewButton.addEventListener("click", startReviewAll);
  refs.startVisibleReviewButton.addEventListener("click", startReviewVisible);
  refs.startSelectedReviewButton.addEventListener("click", startReviewSelected);
  refs.choiceGrid.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton?.dataset.action === "restart") {
      startGame();
      return;
    }

    const button = event.target.closest("[data-option]");
    if (!button) {
      return;
    }
    answerQuestion(decodeURIComponent(button.dataset.option));
  });
  refs.mistakeList.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-mistake-id]");
    if (!checkbox) {
      return;
    }
    if (checkbox.checked) {
      state.selectedMistakeIds.add(checkbox.dataset.mistakeId);
    } else {
      state.selectedMistakeIds.delete(checkbox.dataset.mistakeId);
    }
    renderReviewPanel();
  });

  document.addEventListener("keydown", handleKeyboardShortcuts);
}

function init() {
  if (FILES.length === 0) {
    refs.questionTitle.textContent = "스터디 데이터가 아직 준비되지 않았습니다.";
    refs.questionCode.textContent = "study-data.js 생성 상태를 확인해 주세요.";
    return;
  }

  renderStats();
  renderFileGrid();
  renderPlayModeGrid();
  renderModeGrid();
  renderInfoPanel();
  renderModeInfo();
  showLobbyState();
  renderStudyPanel();
  renderReviewPanel();
  bindEvents();
}

init();
