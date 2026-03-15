# script.js 깊은 해설서

## 1. 파일 개요
- 파일명: `script.js`
- 역할: 메인 페이지의 동작을 담당하는 JavaScript 파일이다. 샘플 데이터, localStorage 저장, 검색/정렬, 추천 배너, 참여, 추가, 수정, 삭제, 상세 팝업 로직이 들어 있다.
- 사용 시점: `index.html`이 파싱된 뒤 `defer`로 실행되어 DOM 요소와 이벤트를 연결한다.
- 이 파일에서 들여쓰기 읽는 법: JavaScript는 함수, 조건문, 반복문, 객체, 배열 안으로 들어갈수록 들여쓰기가 깊어진다. 즉 들여쓰기는 '지금 이 줄이 어느 블록 안에 속하는가'를 보여 주는 표시다.
- 기본 연결 대상:
- `index.html`의 `id`, `data-quick-filter`, `data-quick-action` 요소를 `querySelector`로 찾는다.
- `styles.css`가 꾸미는 카드와 팝업 HTML을 문자열로 만들어 화면에 주입한다.
- `localStorage`와 연결되어 새로고침 후에도 모임 데이터가 유지된다.

## 2. 전체 코드 원문
~~~~js
   1 | const STORAGE_KEY = "moim-meetings-v2";
   2 | const CURRENT_USER = "운영자 A";
   3 | const legacyOrganizerMap = {
   4 |   장운수: "운영자 A",
   5 |   송유찬: "운영자 B",
   6 |   조소빈: "운영자 C",
   7 |   최요섭: "운영자 D",
   8 |   곽진우: "운영자 E",
   9 | };
  10 | const legacyLocationMap = {
  11 |   천안: "시내권",
  12 |   아산: "생활권",
  13 | };
  14 | 
  15 | // 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.
  16 | const defaultMeetings = [
  17 |   {
  18 |     id: 1,
  19 |     title: "주말 풋살 같이 하기",
  20 |     category: "운동",
  21 |     location: "시내권",
  22 |     date: "2026-03-20",
  23 |     capacity: 10,
  24 |     joined: 7,
  25 |     fee: "5,000원",
  26 |     organizer: "운영자 A",
  27 |     description:
  28 |       "주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.",
  29 |     mine: true,
  30 |     createdByMe: true,
  31 |   },
  32 |   {
  33 |     id: 2,
  34 |     title: "자료구조 스터디",
  35 |     category: "공부",
  36 |     location: "캠퍼스",
  37 |     date: "2026-03-18",
  38 |     capacity: 6,
  39 |     joined: 4,
  40 |     fee: "무료",
  41 |     organizer: "운영자 B",
  42 |     description:
  43 |       "자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.",
  44 |     mine: true,
  45 |     createdByMe: false,
  46 |   },
  47 |   {
  48 |     id: 3,
  49 |     title: "보드게임 번개 모임",
  50 |     category: "게임",
  51 |     location: "생활권",
  52 |     date: "2026-03-22",
  53 |     capacity: 8,
  54 |     joined: 5,
  55 |     fee: "3,000원",
  56 |     organizer: "운영자 C",
  57 |     description:
  58 |       "카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.",
  59 |     mine: false,
  60 |     createdByMe: false,
  61 |   },
  62 |   {
  63 |     id: 4,
  64 |     title: "카페 탐방 친목 모임",
  65 |     category: "친목",
  66 |     location: "시내권",
  67 |     date: "2026-03-25",
  68 |     capacity: 12,
  69 |     joined: 9,
  70 |     fee: "각자 결제",
  71 |     organizer: "운영자 D",
  72 |     description:
  73 |       "시내권 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.",
  74 |     mine: false,
  75 |     createdByMe: false,
  76 |   },
  77 | ];
  78 | 
  79 | let meetings = loadMeetings();
  80 | let editingMeetingId = null;
  81 | let dialogMeetingId = null;
  82 | let activeQuickFilter = "recommend";
  83 | let featuredMeetingIndex = 0;
  84 | 
  85 | const statusCards = document.querySelector("#statusCards");
  86 | const meetingList = document.querySelector("#meetingList");
  87 | const myMeetingList = document.querySelector("#myMeetingList");
  88 | const managedMeetingList = document.querySelector("#managedMeetingList");
  89 | const searchForm = document.querySelector("#searchForm");
  90 | const createForm = document.querySelector("#createForm");
  91 | const resetButton = document.querySelector("#resetButton");
  92 | const searchResultText = document.querySelector("#searchResultText");
  93 | const statusFilter = document.querySelector("#statusFilter");
  94 | const sortOrder = document.querySelector("#sortOrder");
  95 | const formTitle = document.querySelector("#formTitle");
  96 | const formModeText = document.querySelector("#formModeText");
  97 | const submitButton = document.querySelector("#submitButton");
  98 | const cancelEditButton = document.querySelector("#cancelEditButton");
  99 | const detailDialog = document.querySelector("#detailDialog");
 100 | const closeDialogButton = document.querySelector("#closeDialogButton");
 101 | const dialogTitle = document.querySelector("#dialogTitle");
 102 | const dialogMeta = document.querySelector("#dialogMeta");
 103 | const dialogDescription = document.querySelector("#dialogDescription");
 104 | const dialogOwnerActions = document.querySelector("#dialogOwnerActions");
 105 | const dialogEditButton = document.querySelector("#dialogEditButton");
 106 | const dialogDeleteButton = document.querySelector("#dialogDeleteButton");
 107 | const keywordInput = document.querySelector("#keyword");
 108 | const categorySelect = document.querySelector("#category");
 109 | const locationSelect = document.querySelector("#location");
 110 | const heroKicker = document.querySelector("#heroKicker");
 111 | const heroTitle = document.querySelector("#heroTitle");
 112 | const heroDescription = document.querySelector("#heroDescription");
 113 | const heroDetailButton = document.querySelector("#heroDetailButton");
 114 | const heroJoinButton = document.querySelector("#heroJoinButton");
 115 | const heroPrevButton = document.querySelector("#heroPrevButton");
 116 | const heroNextButton = document.querySelector("#heroNextButton");
 117 | const heroPageIndicator = document.querySelector("#heroPageIndicator");
 118 | const featuredTeaserList = document.querySelector("#featuredTeaserList");
 119 | const quickFilterButtons = document.querySelectorAll("[data-quick-filter]");
 120 | const quickActionButtons = document.querySelectorAll("[data-quick-action]");
 121 | 
 122 | function getDefaultMeetings() {
 123 |   return defaultMeetings.map((item) => ({ ...item }));
 124 | }
 125 | 
 126 | function normalizeMeeting(item) {
 127 |   const organizer = normalizeOrganizerName(item.organizer);
 128 |   const location = normalizeLocationName(item.location);
 129 | 
 130 |   return {
 131 |     id: item.id ?? Date.now(),
 132 |     title: item.title ?? "제목 없음",
 133 |     category: item.category ?? "친목",
 134 |     location: location ?? "캠퍼스",
 135 |     date: item.date ?? new Date().toISOString().slice(0, 10),
 136 |     capacity: Number(item.capacity) || 10,
 137 |     joined: Number(item.joined) || 0,
 138 |     fee: item.fee || "미정",
 139 |     organizer,
 140 |     description: item.description || "설명이 아직 없습니다.",
 141 |     mine: Boolean(item.mine),
 142 |     createdByMe: Boolean(
 143 |       item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))
 144 |     ),
 145 |   };
 146 | }
 147 | 
 148 | function normalizeOrganizerName(value) {
 149 |   if (!value) {
 150 |     return "미정";
 151 |   }
 152 | 
 153 |   return legacyOrganizerMap[value] || value;
 154 | }
 155 | 
 156 | function normalizeLocationName(value) {
 157 |   if (!value) {
 158 |     return "캠퍼스";
 159 |   }
 160 | 
 161 |   return legacyLocationMap[value] || value;
 162 | }
 163 | 
 164 | // 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.
 165 | function loadMeetings() {
 166 |   try {
 167 |     const stored = localStorage.getItem(STORAGE_KEY);
 168 | 
 169 |     if (!stored) {
 170 |       return getDefaultMeetings();
 171 |     }
 172 | 
 173 |     const parsed = JSON.parse(stored);
 174 | 
 175 |     if (!Array.isArray(parsed)) {
 176 |       return getDefaultMeetings();
 177 |     }
 178 | 
 179 |     return parsed.map(normalizeMeeting);
 180 |   } catch (error) {
 181 |     return getDefaultMeetings();
 182 |   }
 183 | }
 184 | 
 185 | function saveMeetings() {
 186 |   try {
 187 |     localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
 188 |   } catch (error) {
 189 |     console.error("브라우저 저장에 실패했습니다.", error);
 190 |   }
 191 | }
 192 | 
 193 | // 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.
 194 | function renderStatus() {
 195 |   const totalMeetings = meetings.length;
 196 |   const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);
 197 |   const mine = meetings.filter((item) => item.mine).length;
 198 |   const openSeats = meetings.reduce(
 199 |     (sum, item) => sum + (item.capacity - item.joined),
 200 |     0
 201 |   );
 202 | 
 203 |   const items = [
 204 |     { label: "전체 모임", value: `${totalMeetings}개` },
 205 |     { label: "참여 인원", value: `${totalMembers}명` },
 206 |     { label: "내 모임", value: `${mine}개` },
 207 |     { label: "남은 자리", value: `${openSeats}석` },
 208 |   ];
 209 | 
 210 |   statusCards.innerHTML = items
 211 |     .map(
 212 |       (item) => `
 213 |         <article class="status-card">
 214 |           <p>${item.label}</p>
 215 |           <strong>${item.value}</strong>
 216 |         </article>
 217 |       `
 218 |     )
 219 |     .join("");
 220 | }
 221 | 
 222 | // 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.
 223 | function createMeetingCard(item, mode = "default") {
 224 |   const isClosed = item.joined >= item.capacity;
 225 |   const actionLabel = item.mine ? "참여 완료" : isClosed ? "모집 마감" : "참여하기";
 226 |   const archiveCode = `ARCHIVE ${String(item.id).padStart(2, "0")}`;
 227 |   const primaryLabel =
 228 |     mode === "manage" ? "운영중" : item.mine ? "참여중" : isClosed ? "마감" : "추천";
 229 |   const actionButtons =
 230 |     mode === "manage"
 231 |       ? `
 232 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 233 |             상세
 234 |           </button>
 235 |           <button class="button secondary" type="button" onclick="startEditMeeting(${item.id})">
 236 |             수정
 237 |           </button>
 238 |           <button class="button danger" type="button" onclick="deleteMeeting(${item.id})">
 239 |             삭제
 240 |           </button>
 241 |         `
 242 |       : `
 243 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 244 |             상세
 245 |           </button>
 246 |           <button
 247 |             class="button secondary"
 248 |             type="button"
 249 |             onclick="joinMeeting(${item.id})"
 250 |             ${item.mine || isClosed ? "disabled" : ""}
 251 |           >
 252 |             ${actionLabel}
 253 |           </button>
 254 |         `;
 255 | 
 256 |   return `
 257 |     <article class="meeting-card">
 258 |       <div class="card-poster">
 259 |         <div class="card-pills">
 260 |           <span class="card-pill primary">${primaryLabel}</span>
 261 |           ${item.createdByMe ? '<span class="card-pill">개설</span>' : ""}
 262 |         </div>
 263 |         <span class="card-code">${archiveCode}</span>
 264 |       </div>
 265 |       <div class="card-copy">
 266 |         <p class="card-location">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>
 267 |         <h3>${escapeHtml(item.title)}</h3>
 268 |         <p class="description-preview">${escapeHtml(truncateText(item.description, 42))}</p>
 269 |         <div class="meta-row">
 270 |           <span class="meta-chip">주최 ${escapeHtml(item.organizer)}</span>
 271 |           <span class="meta-chip">참여 ${item.joined}/${item.capacity}</span>
 272 |           <span class="meta-chip">${escapeHtml(item.fee)}</span>
 273 |         </div>
 274 |         <div class="card-footer">
 275 |           <p class="card-schedule">${formatDate(item.date)} · ${getSeatMessage(item)}</p>
 276 |           <div class="card-actions">
 277 |             ${actionButtons}
 278 |           </div>
 279 |         </div>
 280 |       </div>
 281 |     </article>
 282 |   `;
 283 | }
 284 | 
 285 | function renderMeetings(list) {
 286 |   searchResultText.textContent = buildResultMessage(list.length);
 287 | 
 288 |   if (list.length === 0) {
 289 |     meetingList.innerHTML =
 290 |       '<div class="empty-state">조건에 맞는 모임이 없습니다.</div>';
 291 |     return;
 292 |   }
 293 | 
 294 |   meetingList.innerHTML = list.map(createMeetingCard).join("");
 295 | }
 296 | 
 297 | function renderMyMeetings() {
 298 |   const myList = meetings.filter((item) => item.mine);
 299 | 
 300 |   if (myList.length === 0) {
 301 |     myMeetingList.innerHTML =
 302 |       '<div class="empty-state">아직 참여한 모임이 없습니다.</div>';
 303 |     return;
 304 |   }
 305 | 
 306 |   myMeetingList.innerHTML = myList.map(createMeetingCard).join("");
 307 | }
 308 | 
 309 | function renderManagedMeetings() {
 310 |   const managedList = meetings.filter((item) => item.createdByMe);
 311 | 
 312 |   if (managedList.length === 0) {
 313 |     managedMeetingList.innerHTML =
 314 |       '<div class="empty-state">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';
 315 |     return;
 316 |   }
 317 | 
 318 |   managedMeetingList.innerHTML = managedList
 319 |     .map((item) => createMeetingCard(item, "manage"))
 320 |     .join("");
 321 | }
 322 | 
 323 | function getQuickFilterLabel(filterName) {
 324 |   const labels = {
 325 |     recommend: "추천",
 326 |     today: "당일",
 327 |     small: "소규모",
 328 |     weekend: "주말",
 329 |     campus: "캠퍼스",
 330 |     sports: "운동",
 331 |     study: "공부",
 332 |     social: "취향",
 333 |     mine: "내 모임",
 334 |   };
 335 | 
 336 |   return labels[filterName] || "추천";
 337 | }
 338 | 
 339 | function getNearestMeetingDate(list) {
 340 |   const uniqueDates = [...new Set(list.map((item) => item.date))];
 341 | 
 342 |   if (uniqueDates.length === 0) {
 343 |     return null;
 344 |   }
 345 | 
 346 |   return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];
 347 | }
 348 | 
 349 | function matchesWeekend(item) {
 350 |   const day = new Date(item.date).getDay();
 351 |   return day === 0 || day === 6;
 352 | }
 353 | 
 354 | function applyQuickFilterRule(list) {
 355 |   if (activeQuickFilter === "today") {
 356 |     const nearestDate = getNearestMeetingDate(list);
 357 |     return nearestDate ? list.filter((item) => item.date === nearestDate) : list;
 358 |   }
 359 | 
 360 |   if (activeQuickFilter === "small") {
 361 |     return list.filter((item) => item.capacity <= 8);
 362 |   }
 363 | 
 364 |   if (activeQuickFilter === "weekend") {
 365 |     return list.filter(matchesWeekend);
 366 |   }
 367 | 
 368 |   if (activeQuickFilter === "social") {
 369 |     return list.filter(
 370 |       (item) => item.category === "친목" || item.category === "게임"
 371 |     );
 372 |   }
 373 | 
 374 |   return list;
 375 | }
 376 | 
 377 | function syncQuickFilterUi() {
 378 |   quickFilterButtons.forEach((button) => {
 379 |     const isActive = button.dataset.quickFilter === activeQuickFilter;
 380 |     button.classList.toggle("is-active", isActive);
 381 |     button.classList.toggle("is-current", isActive);
 382 |     button.setAttribute("aria-pressed", String(isActive));
 383 |   });
 384 | }
 385 | 
 386 | function buildResultMessage(count) {
 387 |   const prefix =
 388 |     activeQuickFilter === "recommend"
 389 |       ? "현재 조건에 맞는"
 390 |       : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;
 391 | 
 392 |   return `${prefix} 모임은 ${count}개입니다.`;
 393 | }
 394 | 
 395 | function getFeaturedMeetings() {
 396 |   const openMeetings = meetings.filter((item) => item.joined < item.capacity);
 397 |   const baseList = openMeetings.length > 0 ? openMeetings : meetings;
 398 | 
 399 |   return sortMeetings(baseList, "popular").slice(0, 6);
 400 | }
 401 | 
 402 | function getCurrentFeaturedMeeting() {
 403 |   const featured = getFeaturedMeetings();
 404 | 
 405 |   if (featured.length === 0) {
 406 |     return null;
 407 |   }
 408 | 
 409 |   if (featuredMeetingIndex >= featured.length) {
 410 |     featuredMeetingIndex = 0;
 411 |   }
 412 | 
 413 |   return featured[featuredMeetingIndex];
 414 | }
 415 | 
 416 | function renderFeaturedSection() {
 417 |   const featured = getFeaturedMeetings();
 418 | 
 419 |   if (featured.length === 0) {
 420 |     heroKicker.textContent = "추천 모임 준비 중";
 421 |     heroTitle.textContent = "새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.";
 422 |     heroDescription.textContent =
 423 |       "아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.";
 424 |     heroPageIndicator.textContent = "추천 0 / 0";
 425 |     heroDetailButton.disabled = true;
 426 |     heroJoinButton.disabled = true;
 427 |     heroJoinButton.textContent = "바로 참여";
 428 |     heroPrevButton.disabled = true;
 429 |     heroNextButton.disabled = true;
 430 |     featuredTeaserList.innerHTML = "";
 431 |     return;
 432 |   }
 433 | 
 434 |   const current = getCurrentFeaturedMeeting();
 435 |   const teaserItems = Array.from(
 436 |     { length: Math.min(featured.length, 3) },
 437 |     (_, index) => featured[(featuredMeetingIndex + index) % featured.length]
 438 |   );
 439 |   const isClosed = current.joined >= current.capacity;
 440 | 
 441 |   heroKicker.textContent = `${current.location} · ${current.category} 추천`;
 442 |   heroTitle.textContent = current.title;
 443 |   heroDescription.textContent = `${current.description} ${formatDate(
 444 |     current.date
 445 |   )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;
 446 |   heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${
 447 |     featured.length
 448 |   }`;
 449 |   heroDetailButton.disabled = false;
 450 |   heroJoinButton.disabled = current.mine || isClosed;
 451 |   heroJoinButton.textContent = current.mine
 452 |     ? "참여 완료"
 453 |     : isClosed
 454 |     ? "모집 마감"
 455 |     : "바로 참여";
 456 |   heroPrevButton.disabled = featured.length <= 1;
 457 |   heroNextButton.disabled = featured.length <= 1;
 458 | 
 459 |   featuredTeaserList.innerHTML = teaserItems
 460 |     .map(
 461 |       (item, index) => `
 462 |         <button
 463 |           class="hero-teaser-card ${index === 0 ? "wide" : ""} ${
 464 |             item.id === current.id ? "is-active" : ""
 465 |           }"
 466 |           type="button"
 467 |           data-featured-id="${item.id}"
 468 |         >
 469 |           <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>
 470 |           <strong>${escapeHtml(item.title)}</strong>
 471 |         </button>
 472 |       `
 473 |     )
 474 |     .join("");
 475 | }
 476 | 
 477 | // 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.
 478 | function getFilteredMeetings() {
 479 |   const keyword = keywordInput.value.trim().toLowerCase();
 480 |   const category = categorySelect.value;
 481 |   const location = locationSelect.value;
 482 |   const status = statusFilter.value;
 483 |   const sort = sortOrder.value;
 484 | 
 485 |   const filtered = meetings.filter((item) => {
 486 |     const matchesKeyword = item.title.toLowerCase().includes(keyword);
 487 |     const matchesCategory = category === "all" || item.category === category;
 488 |     const matchesLocation = location === "all" || item.location === location;
 489 |     const matchesStatus =
 490 |       status === "all" ||
 491 |       (status === "open" && item.joined < item.capacity) ||
 492 |       (status === "mine" && item.mine) ||
 493 |       (status === "closed" && item.joined >= item.capacity);
 494 | 
 495 |     return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
 496 |   });
 497 | 
 498 |   return sortMeetings(applyQuickFilterRule(filtered), sort);
 499 | }
 500 | 
 501 | function applyFiltersAndRender() {
 502 |   renderMeetings(getFilteredMeetings());
 503 | }
 504 | 
 505 | function resetFilters() {
 506 |   searchForm.reset();
 507 |   activeQuickFilter = "recommend";
 508 |   applyQuickPreset(activeQuickFilter);
 509 |   applyFiltersAndRender();
 510 |   syncQuickFilterUi();
 511 | }
 512 | 
 513 | function applyQuickPreset(filterName) {
 514 |   keywordInput.value = "";
 515 |   categorySelect.value = "all";
 516 |   locationSelect.value = "all";
 517 |   statusFilter.value = "all";
 518 |   sortOrder.value = filterName === "recommend" ? "popular" : "soon";
 519 | 
 520 |   if (filterName === "campus") {
 521 |     locationSelect.value = "캠퍼스";
 522 |   }
 523 | 
 524 |   if (filterName === "sports") {
 525 |     categorySelect.value = "운동";
 526 |   }
 527 | 
 528 |   if (filterName === "study") {
 529 |     categorySelect.value = "공부";
 530 |   }
 531 | 
 532 |   if (filterName === "mine") {
 533 |     statusFilter.value = "mine";
 534 |   }
 535 | }
 536 | 
 537 | function applyQuickFilter(filterName) {
 538 |   activeQuickFilter = filterName;
 539 |   applyQuickPreset(filterName);
 540 |   applyFiltersAndRender();
 541 |   syncQuickFilterUi();
 542 |   document.querySelector("#search").scrollIntoView({ behavior: "smooth" });
 543 | }
 544 | 
 545 | function handleQuickAction(actionName) {
 546 |   if (actionName === "create") {
 547 |     document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 548 |   }
 549 | }
 550 | 
 551 | function moveFeaturedMeeting(step) {
 552 |   const featured = getFeaturedMeetings();
 553 | 
 554 |   if (featured.length <= 1) {
 555 |     return;
 556 |   }
 557 | 
 558 |   featuredMeetingIndex =
 559 |     (featuredMeetingIndex + step + featured.length) % featured.length;
 560 |   renderFeaturedSection();
 561 | }
 562 | 
 563 | function selectFeaturedMeeting(id) {
 564 |   const featured = getFeaturedMeetings();
 565 |   const nextIndex = featured.findIndex((item) => item.id === id);
 566 | 
 567 |   if (nextIndex === -1) {
 568 |     return;
 569 |   }
 570 | 
 571 |   featuredMeetingIndex = nextIndex;
 572 |   renderFeaturedSection();
 573 | }
 574 | 
 575 | function getFormValues() {
 576 |   return {
 577 |     title: document.querySelector("#newTitle").value.trim(),
 578 |     category: document.querySelector("#newCategory").value,
 579 |     location: document.querySelector("#newLocation").value,
 580 |     date: document.querySelector("#newDate").value,
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
 583 |     fee: document.querySelector("#newFee").value.trim(),
 584 |     description: document.querySelector("#newDescription").value.trim(),
 585 |   };
 586 | }
 587 | 
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
 589 | function resetFormState() {
 590 |   editingMeetingId = null;
 591 |   createForm.reset();
 592 |   formTitle.textContent = "폼으로 새 모임 추가하기";
 593 |   formModeText.textContent =
 594 |     "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
 595 |   submitButton.textContent = "모임 추가";
 596 |   cancelEditButton.classList.add("is-hidden");
 597 | }
 598 | 
 599 | // 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
 600 | function startEditMeeting(id) {
 601 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 602 | 
 603 |   if (!selected) {
 604 |     return;
 605 |   }
 606 | 
 607 |   editingMeetingId = id;
 608 |   document.querySelector("#newTitle").value = selected.title;
 609 |   document.querySelector("#newCategory").value = selected.category;
 610 |   document.querySelector("#newLocation").value = selected.location;
 611 |   document.querySelector("#newDate").value = selected.date;
 612 |   document.querySelector("#newOrganizer").value = selected.organizer;
 613 |   document.querySelector("#newCapacity").value = selected.capacity;
 614 |   document.querySelector("#newFee").value = selected.fee;
 615 |   document.querySelector("#newDescription").value = selected.description;
 616 | 
 617 |   formTitle.textContent = "기존 모임 수정하기";
 618 |   formModeText.textContent =
 619 |     "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
 620 |   submitButton.textContent = "수정 내용 저장";
 621 |   cancelEditButton.classList.remove("is-hidden");
 622 |   closeDetail();
 623 |   document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 624 | }
 625 | 
 626 | // editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
 627 | function handleFormSubmit(event) {
 628 |   event.preventDefault();
 629 | 
 630 |   const formValues = getFormValues();
 631 | 
 632 |   if (editingMeetingId !== null) {
 633 |     meetings = meetings.map((item) =>
 634 |       item.id === editingMeetingId
 635 |         ? normalizeMeeting({
 636 |             ...item,
 637 |             ...formValues,
 638 |             createdByMe: true,
 639 |           })
 640 |         : item
 641 |     );
 642 |   } else {
 643 |     const newMeeting = normalizeMeeting({
 644 |       id: Date.now(),
 645 |       ...formValues,
 646 |       joined: 1,
 647 |       mine: true,
 648 |       createdByMe: true,
 649 |     });
 650 | 
 651 |     meetings.unshift(newMeeting);
 652 |   }
 653 | 
 654 |   saveMeetings();
 655 |   resetFormState();
 656 |   renderAll();
 657 | }
 658 | 
 659 | function getSeatMessage(item) {
 660 |   const remaining = item.capacity - item.joined;
 661 |   return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
 662 | }
 663 | 
 664 | function formatDate(value) {
 665 |   const date = new Date(value);
 666 |   return date.toLocaleDateString("ko-KR");
 667 | }
 668 | 
 669 | function sortMeetings(list, sort) {
 670 |   const sorted = [...list];
 671 | 
 672 |   if (sort === "late") {
 673 |     return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
 674 |   }
 675 | 
 676 |   if (sort === "seats") {
 677 |     return sorted.sort(
 678 |       (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
 679 |     );
 680 |   }
 681 | 
 682 |   if (sort === "popular") {
 683 |     return sorted.sort((a, b) => b.joined - a.joined);
 684 |   }
 685 | 
 686 |   return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
 687 | }
 688 | 
 689 | function truncateText(text, maxLength) {
 690 |   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
 691 | }
 692 | 
 693 | function escapeHtml(value) {
 694 |   return value
 695 |     .replaceAll("&", "&amp;")
 696 |     .replaceAll("<", "&lt;")
 697 |     .replaceAll(">", "&gt;")
 698 |     .replaceAll('"', "&quot;")
 699 |     .replaceAll("'", "&#39;");
 700 | }
 701 | 
 702 | // 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
 703 | function joinMeeting(id) {
 704 |   const selected = meetings.find((item) => item.id === id);
 705 | 
 706 |   if (!selected) {
 707 |     return;
 708 |   }
 709 | 
 710 |   if (selected.joined >= selected.capacity) {
 711 |     alert("이미 모집이 끝난 모임입니다.");
 712 |     return;
 713 |   }
 714 | 
 715 |   if (selected.mine) {
 716 |     alert("이미 참여한 모임입니다.");
 717 |     return;
 718 |   }
 719 | 
 720 |   selected.joined += 1;
 721 |   selected.mine = true;
 722 |   saveMeetings();
 723 |   renderAll();
 724 | }
 725 | 
 726 | // 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
 727 | function deleteMeeting(id) {
 728 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 729 | 
 730 |   if (!selected) {
 731 |     return;
 732 |   }
 733 | 
 734 |   const isConfirmed = window.confirm(
 735 |     `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
 736 |   );
 737 | 
 738 |   if (!isConfirmed) {
 739 |     return;
 740 |   }
 741 | 
 742 |   meetings = meetings.filter((item) => item.id !== id);
 743 | 
 744 |   if (editingMeetingId === id) {
 745 |     resetFormState();
 746 |   }
 747 | 
 748 |   if (dialogMeetingId === id) {
 749 |     closeDetail();
 750 |   }
 751 | 
 752 |   saveMeetings();
 753 |   renderAll();
 754 | }
 755 | 
 756 | // 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
 757 | function openDetail(id) {
 758 |   const selected = meetings.find((item) => item.id === id);
 759 | 
 760 |   if (!selected) {
 761 |     return;
 762 |   }
 763 | 
 764 |   dialogTitle.textContent = selected.title;
 765 |   dialogMeta.innerHTML = [
 766 |     `카테고리 ${escapeHtml(selected.category)}`,
 767 |     `지역 ${escapeHtml(selected.location)}`,
 768 |     `주최자 ${escapeHtml(selected.organizer)}`,
 769 |     `날짜 ${formatDate(selected.date)}`,
 770 |     `참가비 ${escapeHtml(selected.fee)}`,
 771 |     `참여 ${selected.joined}/${selected.capacity}`,
 772 |   ]
 773 |     .map((text) => `<span class="meta-chip">${text}</span>`)
 774 |     .join("");
 775 |   dialogDescription.textContent = selected.description;
 776 |   dialogMeetingId = id;
 777 | 
 778 |   if (selected.createdByMe) {
 779 |     dialogOwnerActions.classList.remove("is-hidden");
 780 |   } else {
 781 |     dialogOwnerActions.classList.add("is-hidden");
 782 |   }
 783 | 
 784 |   if (detailDialog.open) {
 785 |     return;
 786 |   }
 787 | 
 788 |   if (typeof detailDialog.showModal === "function") {
 789 |     detailDialog.showModal();
 790 |     return;
 791 |   }
 792 | 
 793 |   detailDialog.setAttribute("open", "open");
 794 | }
 795 | 
 796 | function closeDetail() {
 797 |   if (detailDialog.open && typeof detailDialog.close === "function") {
 798 |     detailDialog.close();
 799 |   } else if (detailDialog.hasAttribute("open")) {
 800 |     detailDialog.removeAttribute("open");
 801 |   }
 802 | 
 803 |   dialogMeetingId = null;
 804 | }
 805 | 
 806 | // 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
 807 | function renderAll() {
 808 |   renderStatus();
 809 |   renderFeaturedSection();
 810 |   applyFiltersAndRender();
 811 |   renderMyMeetings();
 812 |   renderManagedMeetings();
 813 |   syncQuickFilterUi();
 814 | }
 815 | 
 816 | // 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
 817 | searchForm.addEventListener("submit", (event) => {
 818 |   event.preventDefault();
 819 |   applyFiltersAndRender();
 820 | });
 821 | 
 822 | resetButton.addEventListener("click", resetFilters);
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
 825 | createForm.addEventListener("submit", handleFormSubmit);
 826 | cancelEditButton.addEventListener("click", resetFormState);
 827 | closeDialogButton.addEventListener("click", closeDetail);
 828 | dialogEditButton.addEventListener("click", () => {
 829 |   if (dialogMeetingId !== null) {
 830 |     startEditMeeting(dialogMeetingId);
 831 |   }
 832 | });
 833 | dialogDeleteButton.addEventListener("click", () => {
 834 |   if (dialogMeetingId !== null) {
 835 |     deleteMeeting(dialogMeetingId);
 836 |   }
 837 | });
 838 | heroDetailButton.addEventListener("click", () => {
 839 |   const featured = getCurrentFeaturedMeeting();
 840 | 
 841 |   if (featured) {
 842 |     openDetail(featured.id);
 843 |   }
 844 | });
 845 | heroJoinButton.addEventListener("click", () => {
 846 |   const featured = getCurrentFeaturedMeeting();
 847 | 
 848 |   if (featured) {
 849 |     joinMeeting(featured.id);
 850 |   }
 851 | });
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
 854 | featuredTeaserList.addEventListener("click", (event) => {
 855 |   const card = event.target.closest("[data-featured-id]");
 856 | 
 857 |   if (!card) {
 858 |     return;
 859 |   }
 860 | 
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
 862 | });
 863 | quickFilterButtons.forEach((button) => {
 864 |   button.addEventListener("click", () =>
 865 |     applyQuickFilter(button.dataset.quickFilter)
 866 |   );
 867 | });
 868 | quickActionButtons.forEach((button) => {
 869 |   button.addEventListener("click", () =>
 870 |     handleQuickAction(button.dataset.quickAction)
 871 |   );
 872 | });
 873 | 
 874 | saveMeetings();
 875 | resetFormState();
 876 | applyQuickPreset(activeQuickFilter);
 877 | renderAll();
~~~~

## 3. 한 줄씩 코드 보면서 설명
### 1줄
~~~~js
   1 | const STORAGE_KEY = "moim-meetings-v2";
~~~~
- 설명: 브라우저 localStorage에 저장할 키 이름을 고정하는 상수다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 2줄
~~~~js
   2 | const CURRENT_USER = "운영자 A";
~~~~
- 설명: 현재 사용자를 가정한 이름을 저장하는 상수다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 3줄
~~~~js
   3 | const legacyOrganizerMap = {
~~~~
- 설명: 예전 주최자 이름을 현재 표기로 바꾸기 위한 매핑 객체다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 4줄
~~~~js
   4 |   장운수: "운영자 A",
~~~~
- 설명: `장운수` 속성에 값을 넣는 줄이다. 현재 값은 `"운영자 A"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 5줄
~~~~js
   5 |   송유찬: "운영자 B",
~~~~
- 설명: `송유찬` 속성에 값을 넣는 줄이다. 현재 값은 `"운영자 B"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 6줄
~~~~js
   6 |   조소빈: "운영자 C",
~~~~
- 설명: `조소빈` 속성에 값을 넣는 줄이다. 현재 값은 `"운영자 C"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 7줄
~~~~js
   7 |   최요섭: "운영자 D",
~~~~
- 설명: `최요섭` 속성에 값을 넣는 줄이다. 현재 값은 `"운영자 D"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 8줄
~~~~js
   8 |   곽진우: "운영자 E",
~~~~
- 설명: `곽진우` 속성에 값을 넣는 줄이다. 현재 값은 `"운영자 E"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 9줄
~~~~js
   9 | };
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 10줄
~~~~js
  10 | const legacyLocationMap = {
~~~~
- 설명: 예전 지역 이름을 현재 지역 표기로 바꾸기 위한 매핑 객체다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 11줄
~~~~js
  11 |   천안: "시내권",
~~~~
- 설명: `천안` 속성에 값을 넣는 줄이다. 현재 값은 `"시내권"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 12줄
~~~~js
  12 |   아산: "생활권",
~~~~
- 설명: `아산` 속성에 값을 넣는 줄이다. 현재 값은 `"생활권"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 13줄
~~~~js
  13 | };
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 14줄
~~~~js
  14 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 15줄
~~~~js
  15 | // 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 16줄
~~~~js
  16 | const defaultMeetings = [
~~~~
- 설명: 처음 화면에 바로 보여 줄 샘플 모임 배열이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 17줄
~~~~js
  17 |   {
~~~~
- 설명: 새 객체 블록을 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 18줄
~~~~js
  18 |     id: 1,
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `1`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 19줄
~~~~js
  19 |     title: "주말 풋살 같이 하기",
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `"주말 풋살 같이 하기"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 20줄
~~~~js
  20 |     category: "운동",
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `"운동"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 21줄
~~~~js
  21 |     location: "시내권",
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `"시내권"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 22줄
~~~~js
  22 |     date: "2026-03-20",
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `"2026-03-20"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 23줄
~~~~js
  23 |     capacity: 10,
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `10`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 24줄
~~~~js
  24 |     joined: 7,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `7`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 25줄
~~~~js
  25 |     fee: "5,000원",
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `"5,000원"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 26줄
~~~~js
  26 |     organizer: "운영자 A",
~~~~
- 설명: 주최자 이름을 저장하는 속성이다. 현재 값은 `"운영자 A"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 27줄
~~~~js
  27 |     description:
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 28줄
~~~~js
  28 |       "주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.",
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 29줄
~~~~js
  29 |     mine: true,
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 30줄
~~~~js
  30 |     createdByMe: true,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 31줄
~~~~js
  31 |   },
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 32줄
~~~~js
  32 |   {
~~~~
- 설명: 새 객체 블록을 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 33줄
~~~~js
  33 |     id: 2,
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `2`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 34줄
~~~~js
  34 |     title: "자료구조 스터디",
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `"자료구조 스터디"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 35줄
~~~~js
  35 |     category: "공부",
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `"공부"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 36줄
~~~~js
  36 |     location: "캠퍼스",
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `"캠퍼스"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 37줄
~~~~js
  37 |     date: "2026-03-18",
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `"2026-03-18"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 38줄
~~~~js
  38 |     capacity: 6,
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `6`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 39줄
~~~~js
  39 |     joined: 4,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `4`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 40줄
~~~~js
  40 |     fee: "무료",
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `"무료"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 41줄
~~~~js
  41 |     organizer: "운영자 B",
~~~~
- 설명: 주최자 이름을 저장하는 속성이다. 현재 값은 `"운영자 B"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 42줄
~~~~js
  42 |     description:
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 43줄
~~~~js
  43 |       "자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.",
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 44줄
~~~~js
  44 |     mine: true,
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 45줄
~~~~js
  45 |     createdByMe: false,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 46줄
~~~~js
  46 |   },
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 47줄
~~~~js
  47 |   {
~~~~
- 설명: 새 객체 블록을 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 48줄
~~~~js
  48 |     id: 3,
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `3`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 49줄
~~~~js
  49 |     title: "보드게임 번개 모임",
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `"보드게임 번개 모임"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 50줄
~~~~js
  50 |     category: "게임",
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `"게임"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 51줄
~~~~js
  51 |     location: "생활권",
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `"생활권"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 52줄
~~~~js
  52 |     date: "2026-03-22",
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `"2026-03-22"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 53줄
~~~~js
  53 |     capacity: 8,
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `8`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 54줄
~~~~js
  54 |     joined: 5,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `5`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 55줄
~~~~js
  55 |     fee: "3,000원",
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `"3,000원"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 56줄
~~~~js
  56 |     organizer: "운영자 C",
~~~~
- 설명: 주최자 이름을 저장하는 속성이다. 현재 값은 `"운영자 C"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 57줄
~~~~js
  57 |     description:
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 58줄
~~~~js
  58 |       "카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.",
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 59줄
~~~~js
  59 |     mine: false,
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 60줄
~~~~js
  60 |     createdByMe: false,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 61줄
~~~~js
  61 |   },
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 62줄
~~~~js
  62 |   {
~~~~
- 설명: 새 객체 블록을 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 63줄
~~~~js
  63 |     id: 4,
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `4`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 64줄
~~~~js
  64 |     title: "카페 탐방 친목 모임",
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `"카페 탐방 친목 모임"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 65줄
~~~~js
  65 |     category: "친목",
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `"친목"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 66줄
~~~~js
  66 |     location: "시내권",
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `"시내권"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 67줄
~~~~js
  67 |     date: "2026-03-25",
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `"2026-03-25"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 68줄
~~~~js
  68 |     capacity: 12,
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `12`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 69줄
~~~~js
  69 |     joined: 9,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `9`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 70줄
~~~~js
  70 |     fee: "각자 결제",
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `"각자 결제"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 71줄
~~~~js
  71 |     organizer: "운영자 D",
~~~~
- 설명: 주최자 이름을 저장하는 속성이다. 현재 값은 `"운영자 D"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 72줄
~~~~js
  72 |     description:
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 다음 줄에서 실제 값을 이어서 적는다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 73줄
~~~~js
  73 |       "시내권 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.",
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 74줄
~~~~js
  74 |     mine: false,
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 75줄
~~~~js
  75 |     createdByMe: false,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `false`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 76줄
~~~~js
  76 |   },
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 77줄
~~~~js
  77 | ];
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 78줄
~~~~js
  78 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 79줄
~~~~js
  79 | let meetings = loadMeetings();
~~~~
- 설명: 현재 화면이 기준으로 삼는 모임 배열 상태다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 80줄
~~~~js
  80 | let editingMeetingId = null;
~~~~
- 설명: 수정 중인 모임 id를 기억하는 상태값이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 81줄
~~~~js
  81 | let dialogMeetingId = null;
~~~~
- 설명: 상세 팝업에 열려 있는 모임 id를 기억하는 상태값이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 82줄
~~~~js
  82 | let activeQuickFilter = "recommend";
~~~~
- 설명: 현재 선택된 빠른 필터 이름을 저장하는 상태값이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 83줄
~~~~js
  83 | let featuredMeetingIndex = 0;
~~~~
- 설명: 추천 배너에서 현재 보이는 모임 순서를 저장한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 84줄
~~~~js
  84 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 85줄
~~~~js
  85 | const statusCards = document.querySelector("#statusCards");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 86줄
~~~~js
  86 | const meetingList = document.querySelector("#meetingList");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 87줄
~~~~js
  87 | const myMeetingList = document.querySelector("#myMeetingList");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 88줄
~~~~js
  88 | const managedMeetingList = document.querySelector("#managedMeetingList");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 89줄
~~~~js
  89 | const searchForm = document.querySelector("#searchForm");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 90줄
~~~~js
  90 | const createForm = document.querySelector("#createForm");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 91줄
~~~~js
  91 | const resetButton = document.querySelector("#resetButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 92줄
~~~~js
  92 | const searchResultText = document.querySelector("#searchResultText");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 93줄
~~~~js
  93 | const statusFilter = document.querySelector("#statusFilter");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 94줄
~~~~js
  94 | const sortOrder = document.querySelector("#sortOrder");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 95줄
~~~~js
  95 | const formTitle = document.querySelector("#formTitle");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 96줄
~~~~js
  96 | const formModeText = document.querySelector("#formModeText");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 97줄
~~~~js
  97 | const submitButton = document.querySelector("#submitButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 98줄
~~~~js
  98 | const cancelEditButton = document.querySelector("#cancelEditButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 99줄
~~~~js
  99 | const detailDialog = document.querySelector("#detailDialog");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 100줄
~~~~js
 100 | const closeDialogButton = document.querySelector("#closeDialogButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 101줄
~~~~js
 101 | const dialogTitle = document.querySelector("#dialogTitle");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 102줄
~~~~js
 102 | const dialogMeta = document.querySelector("#dialogMeta");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 103줄
~~~~js
 103 | const dialogDescription = document.querySelector("#dialogDescription");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 104줄
~~~~js
 104 | const dialogOwnerActions = document.querySelector("#dialogOwnerActions");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 105줄
~~~~js
 105 | const dialogEditButton = document.querySelector("#dialogEditButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 106줄
~~~~js
 106 | const dialogDeleteButton = document.querySelector("#dialogDeleteButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 107줄
~~~~js
 107 | const keywordInput = document.querySelector("#keyword");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 108줄
~~~~js
 108 | const categorySelect = document.querySelector("#category");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 109줄
~~~~js
 109 | const locationSelect = document.querySelector("#location");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 110줄
~~~~js
 110 | const heroKicker = document.querySelector("#heroKicker");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 111줄
~~~~js
 111 | const heroTitle = document.querySelector("#heroTitle");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 112줄
~~~~js
 112 | const heroDescription = document.querySelector("#heroDescription");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 113줄
~~~~js
 113 | const heroDetailButton = document.querySelector("#heroDetailButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 114줄
~~~~js
 114 | const heroJoinButton = document.querySelector("#heroJoinButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 115줄
~~~~js
 115 | const heroPrevButton = document.querySelector("#heroPrevButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 116줄
~~~~js
 116 | const heroNextButton = document.querySelector("#heroNextButton");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 117줄
~~~~js
 117 | const heroPageIndicator = document.querySelector("#heroPageIndicator");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 118줄
~~~~js
 118 | const featuredTeaserList = document.querySelector("#featuredTeaserList");
~~~~
- 설명: DOM 요소 하나를 변수에 저장하는 줄이다. 이후 이벤트 연결이나 내용 갱신에 사용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 119줄
~~~~js
 119 | const quickFilterButtons = document.querySelectorAll("[data-quick-filter]");
~~~~
- 설명: DOM 요소 여러 개를 한 번에 선택해 목록으로 저장하는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 120줄
~~~~js
 120 | const quickActionButtons = document.querySelectorAll("[data-quick-action]");
~~~~
- 설명: DOM 요소 여러 개를 한 번에 선택해 목록으로 저장하는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 121줄
~~~~js
 121 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 122줄
~~~~js
 122 | function getDefaultMeetings() {
~~~~
- 설명: `getDefaultMeetings()` 함수를 선언하는 줄이다. 기본 샘플 데이터를 복사해서 새 배열로 돌려준다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 123줄
~~~~js
 123 |   return defaultMeetings.map((item) => ({ ...item }));
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 124줄
~~~~js
 124 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 125줄
~~~~js
 125 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 126줄
~~~~js
 126 | function normalizeMeeting(item) {
~~~~
- 설명: `normalizeMeeting()` 함수를 선언하는 줄이다. 저장된 모임 데이터를 현재 형식에 맞게 보정한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 127줄
~~~~js
 127 |   const organizer = normalizeOrganizerName(item.organizer);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 128줄
~~~~js
 128 |   const location = normalizeLocationName(item.location);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 129줄
~~~~js
 129 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 130줄
~~~~js
 130 |   return {
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 131줄
~~~~js
 131 |     id: item.id ?? Date.now(),
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `item.id ?? Date.now()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 132줄
~~~~js
 132 |     title: item.title ?? "제목 없음",
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `item.title ?? "제목 없음"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 133줄
~~~~js
 133 |     category: item.category ?? "친목",
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `item.category ?? "친목"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 134줄
~~~~js
 134 |     location: location ?? "캠퍼스",
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `location ?? "캠퍼스"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 135줄
~~~~js
 135 |     date: item.date ?? new Date().toISOString().slice(0, 10),
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `item.date ?? new Date().toISOString().slice(0, 10)`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 136줄
~~~~js
 136 |     capacity: Number(item.capacity) || 10,
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `Number(item.capacity) || 10`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 137줄
~~~~js
 137 |     joined: Number(item.joined) || 0,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `Number(item.joined) || 0`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 138줄
~~~~js
 138 |     fee: item.fee || "미정",
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `item.fee || "미정"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 139줄
~~~~js
 139 |     organizer,
~~~~
- 설명: `normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 140줄
~~~~js
 140 |     description: item.description || "설명이 아직 없습니다.",
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 현재 값은 `item.description || "설명이 아직 없습니다."`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 141줄
~~~~js
 141 |     mine: Boolean(item.mine),
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `Boolean(item.mine)`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 142줄
~~~~js
 142 |     createdByMe: Boolean(
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `Boolean(`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 143줄
~~~~js
 143 |       item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))
~~~~
- 설명: `normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 144줄
~~~~js
 144 |     ),
~~~~
- 설명: `normalizeMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 145줄
~~~~js
 145 |   };
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 146줄
~~~~js
 146 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 147줄
~~~~js
 147 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 148줄
~~~~js
 148 | function normalizeOrganizerName(value) {
~~~~
- 설명: `normalizeOrganizerName()` 함수를 선언하는 줄이다. 예전 주최자 이름을 현재 표기 기준으로 정리한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 149줄
~~~~js
 149 |   if (!value) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 150줄
~~~~js
 150 |     return "미정";
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 151줄
~~~~js
 151 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 152줄
~~~~js
 152 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 153줄
~~~~js
 153 |   return legacyOrganizerMap[value] || value;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 154줄
~~~~js
 154 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 155줄
~~~~js
 155 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 156줄
~~~~js
 156 | function normalizeLocationName(value) {
~~~~
- 설명: `normalizeLocationName()` 함수를 선언하는 줄이다. 예전 지역 이름을 현재 지역 이름으로 바꾼다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 157줄
~~~~js
 157 |   if (!value) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 158줄
~~~~js
 158 |     return "캠퍼스";
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 159줄
~~~~js
 159 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 160줄
~~~~js
 160 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 161줄
~~~~js
 161 |   return legacyLocationMap[value] || value;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 162줄
~~~~js
 162 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 163줄
~~~~js
 163 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 164줄
~~~~js
 164 | // 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 165줄
~~~~js
 165 | function loadMeetings() {
~~~~
- 설명: `loadMeetings()` 함수를 선언하는 줄이다. 브라우저 저장소를 먼저 읽고, 없으면 기본 데이터를 반환한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 166줄
~~~~js
 166 |   try {
~~~~
- 설명: `loadMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 167줄
~~~~js
 167 |     const stored = localStorage.getItem(STORAGE_KEY);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 168줄
~~~~js
 168 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 169줄
~~~~js
 169 |     if (!stored) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 170줄
~~~~js
 170 |       return getDefaultMeetings();
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 171줄
~~~~js
 171 |     }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 4칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 172줄
~~~~js
 172 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 173줄
~~~~js
 173 |     const parsed = JSON.parse(stored);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 174줄
~~~~js
 174 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 175줄
~~~~js
 175 |     if (!Array.isArray(parsed)) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 176줄
~~~~js
 176 |       return getDefaultMeetings();
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 177줄
~~~~js
 177 |     }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 4칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 178줄
~~~~js
 178 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 179줄
~~~~js
 179 |     return parsed.map(normalizeMeeting);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 180줄
~~~~js
 180 |   } catch (error) {
~~~~
- 설명: `loadMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 181줄
~~~~js
 181 |     return getDefaultMeetings();
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 182줄
~~~~js
 182 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 183줄
~~~~js
 183 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 184줄
~~~~js
 184 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 185줄
~~~~js
 185 | function saveMeetings() {
~~~~
- 설명: `saveMeetings()` 함수를 선언하는 줄이다. 현재 모임 배열을 localStorage에 저장한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 186줄
~~~~js
 186 |   try {
~~~~
- 설명: `saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 187줄
~~~~js
 187 |     localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
~~~~
- 설명: 현재 데이터를 브라우저 저장소에 저장하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 188줄
~~~~js
 188 |   } catch (error) {
~~~~
- 설명: `saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 189줄
~~~~js
 189 |     console.error("브라우저 저장에 실패했습니다.", error);
~~~~
- 설명: `saveMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 190줄
~~~~js
 190 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 191줄
~~~~js
 191 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 192줄
~~~~js
 192 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 193줄
~~~~js
 193 | // 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 194줄
~~~~js
 194 | function renderStatus() {
~~~~
- 설명: `renderStatus()` 함수를 선언하는 줄이다. 상단 숫자 카드를 다시 계산해 출력한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 195줄
~~~~js
 195 |   const totalMeetings = meetings.length;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 196줄
~~~~js
 196 |   const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 197줄
~~~~js
 197 |   const mine = meetings.filter((item) => item.mine).length;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 198줄
~~~~js
 198 |   const openSeats = meetings.reduce(
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 199줄
~~~~js
 199 |     (sum, item) => sum + (item.capacity - item.joined),
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 200줄
~~~~js
 200 |     0
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 201줄
~~~~js
 201 |   );
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 202줄
~~~~js
 202 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 203줄
~~~~js
 203 |   const items = [
~~~~
- 설명: 배열 데이터를 시작하는 선언 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 204줄
~~~~js
 204 |     { label: "전체 모임", value: `${totalMeetings}개` },
~~~~
- 설명: `{ label` 속성에 값을 넣는 줄이다. 현재 값은 `"전체 모임", value: `${totalMeetings}개` }`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 205줄
~~~~js
 205 |     { label: "참여 인원", value: `${totalMembers}명` },
~~~~
- 설명: `{ label` 속성에 값을 넣는 줄이다. 현재 값은 `"참여 인원", value: `${totalMembers}명` }`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 206줄
~~~~js
 206 |     { label: "내 모임", value: `${mine}개` },
~~~~
- 설명: `{ label` 속성에 값을 넣는 줄이다. 현재 값은 `"내 모임", value: `${mine}개` }`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 207줄
~~~~js
 207 |     { label: "남은 자리", value: `${openSeats}석` },
~~~~
- 설명: `{ label` 속성에 값을 넣는 줄이다. 현재 값은 `"남은 자리", value: `${openSeats}석` }`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 208줄
~~~~js
 208 |   ];
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 209줄
~~~~js
 209 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 210줄
~~~~js
 210 |   statusCards.innerHTML = items
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 211줄
~~~~js
 211 |     .map(
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 212줄
~~~~js
 212 |       (item) => `
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 213줄
~~~~js
 213 |         <article class="status-card">
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 214줄
~~~~js
 214 |           <p>${item.label}</p>
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 215줄
~~~~js
 215 |           <strong>${item.value}</strong>
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 216줄
~~~~js
 216 |         </article>
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 217줄
~~~~js
 217 |       `
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 218줄
~~~~js
 218 |     )
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 219줄
~~~~js
 219 |     .join("");
~~~~
- 설명: `renderStatus()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 220줄
~~~~js
 220 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 221줄
~~~~js
 221 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 222줄
~~~~js
 222 | // 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 223줄
~~~~js
 223 | function createMeetingCard(item, mode = "default") {
~~~~
- 설명: `createMeetingCard()` 함수를 선언하는 줄이다. 모임 하나를 카드 HTML 문자열로 만든다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 224줄
~~~~js
 224 |   const isClosed = item.joined >= item.capacity;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 225줄
~~~~js
 225 |   const actionLabel = item.mine ? "참여 완료" : isClosed ? "모집 마감" : "참여하기";
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 226줄
~~~~js
 226 |   const archiveCode = `ARCHIVE ${String(item.id).padStart(2, "0")}`;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 227줄
~~~~js
 227 |   const primaryLabel =
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 228줄
~~~~js
 228 |     mode === "manage" ? "운영중" : item.mine ? "참여중" : isClosed ? "마감" : "추천";
~~~~
- 설명: `mode === "manage" ? "운영중"` 속성에 값을 넣는 줄이다. 현재 값은 `item.mine ? "참여중" : isClosed ? "마감" : "추천";`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 229줄
~~~~js
 229 |   const actionButtons =
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 230줄
~~~~js
 230 |     mode === "manage"
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 231줄
~~~~js
 231 |       ? `
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 232줄
~~~~js
 232 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 233줄
~~~~js
 233 |             상세
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 234줄
~~~~js
 234 |           </button>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 235줄
~~~~js
 235 |           <button class="button secondary" type="button" onclick="startEditMeeting(${item.id})">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 236줄
~~~~js
 236 |             수정
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 237줄
~~~~js
 237 |           </button>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 238줄
~~~~js
 238 |           <button class="button danger" type="button" onclick="deleteMeeting(${item.id})">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 239줄
~~~~js
 239 |             삭제
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 240줄
~~~~js
 240 |           </button>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 241줄
~~~~js
 241 |         `
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 242줄
~~~~js
 242 |       : `
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 243줄
~~~~js
 243 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 244줄
~~~~js
 244 |             상세
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 245줄
~~~~js
 245 |           </button>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 246줄
~~~~js
 246 |           <button
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 247줄
~~~~js
 247 |             class="button secondary"
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 248줄
~~~~js
 248 |             type="button"
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 249줄
~~~~js
 249 |             onclick="joinMeeting(${item.id})"
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 250줄
~~~~js
 250 |             ${item.mine || isClosed ? "disabled" : ""}
~~~~
- 설명: `${item.mine || isClosed ? "disabled"` 속성에 값을 넣는 줄이다. 현재 값은 `""}`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 251줄
~~~~js
 251 |           >
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 252줄
~~~~js
 252 |             ${actionLabel}
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 253줄
~~~~js
 253 |           </button>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 254줄
~~~~js
 254 |         `;
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 255줄
~~~~js
 255 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 256줄
~~~~js
 256 |   return `
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 257줄
~~~~js
 257 |     <article class="meeting-card">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 258줄
~~~~js
 258 |       <div class="card-poster">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 259줄
~~~~js
 259 |         <div class="card-pills">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 260줄
~~~~js
 260 |           <span class="card-pill primary">${primaryLabel}</span>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 261줄
~~~~js
 261 |           ${item.createdByMe ? '<span class="card-pill">개설</span>' : ""}
~~~~
- 설명: `${item.createdByMe ? '<span class="card-pill">개설</span>'` 속성에 값을 넣는 줄이다. 현재 값은 `""}`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 262줄
~~~~js
 262 |         </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 263줄
~~~~js
 263 |         <span class="card-code">${archiveCode}</span>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 264줄
~~~~js
 264 |       </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 265줄
~~~~js
 265 |       <div class="card-copy">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 266줄
~~~~js
 266 |         <p class="card-location">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 267줄
~~~~js
 267 |         <h3>${escapeHtml(item.title)}</h3>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 268줄
~~~~js
 268 |         <p class="description-preview">${escapeHtml(truncateText(item.description, 42))}</p>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 269줄
~~~~js
 269 |         <div class="meta-row">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 270줄
~~~~js
 270 |           <span class="meta-chip">주최 ${escapeHtml(item.organizer)}</span>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 271줄
~~~~js
 271 |           <span class="meta-chip">참여 ${item.joined}/${item.capacity}</span>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 272줄
~~~~js
 272 |           <span class="meta-chip">${escapeHtml(item.fee)}</span>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 273줄
~~~~js
 273 |         </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 274줄
~~~~js
 274 |         <div class="card-footer">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 275줄
~~~~js
 275 |           <p class="card-schedule">${formatDate(item.date)} · ${getSeatMessage(item)}</p>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 276줄
~~~~js
 276 |           <div class="card-actions">
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 277줄
~~~~js
 277 |             ${actionButtons}
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 278줄
~~~~js
 278 |           </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 279줄
~~~~js
 279 |         </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 280줄
~~~~js
 280 |       </div>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 281줄
~~~~js
 281 |     </article>
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 282줄
~~~~js
 282 |   `;
~~~~
- 설명: `createMeetingCard()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 283줄
~~~~js
 283 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 284줄
~~~~js
 284 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 285줄
~~~~js
 285 | function renderMeetings(list) {
~~~~
- 설명: `renderMeetings()` 함수를 선언하는 줄이다. 검색 결과 목록을 화면에 그린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 286줄
~~~~js
 286 |   searchResultText.textContent = buildResultMessage(list.length);
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 287줄
~~~~js
 287 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 288줄
~~~~js
 288 |   if (list.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 289줄
~~~~js
 289 |     meetingList.innerHTML =
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 290줄
~~~~js
 290 |       '<div class="empty-state">조건에 맞는 모임이 없습니다.</div>';
~~~~
- 설명: `renderMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 291줄
~~~~js
 291 |     return;
~~~~
- 설명: `renderMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 292줄
~~~~js
 292 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 293줄
~~~~js
 293 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 294줄
~~~~js
 294 |   meetingList.innerHTML = list.map(createMeetingCard).join("");
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 295줄
~~~~js
 295 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 296줄
~~~~js
 296 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 297줄
~~~~js
 297 | function renderMyMeetings() {
~~~~
- 설명: `renderMyMeetings()` 함수를 선언하는 줄이다. 내가 참여 중인 모임만 따로 그린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 298줄
~~~~js
 298 |   const myList = meetings.filter((item) => item.mine);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 299줄
~~~~js
 299 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 300줄
~~~~js
 300 |   if (myList.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 301줄
~~~~js
 301 |     myMeetingList.innerHTML =
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 302줄
~~~~js
 302 |       '<div class="empty-state">아직 참여한 모임이 없습니다.</div>';
~~~~
- 설명: `renderMyMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 303줄
~~~~js
 303 |     return;
~~~~
- 설명: `renderMyMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 304줄
~~~~js
 304 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 305줄
~~~~js
 305 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 306줄
~~~~js
 306 |   myMeetingList.innerHTML = myList.map(createMeetingCard).join("");
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 307줄
~~~~js
 307 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 308줄
~~~~js
 308 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 309줄
~~~~js
 309 | function renderManagedMeetings() {
~~~~
- 설명: `renderManagedMeetings()` 함수를 선언하는 줄이다. 내가 만든 모임만 관리용 버튼과 함께 그린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 310줄
~~~~js
 310 |   const managedList = meetings.filter((item) => item.createdByMe);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 311줄
~~~~js
 311 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 312줄
~~~~js
 312 |   if (managedList.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 313줄
~~~~js
 313 |     managedMeetingList.innerHTML =
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 314줄
~~~~js
 314 |       '<div class="empty-state">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';
~~~~
- 설명: `renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 315줄
~~~~js
 315 |     return;
~~~~
- 설명: `renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 316줄
~~~~js
 316 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 317줄
~~~~js
 317 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 318줄
~~~~js
 318 |   managedMeetingList.innerHTML = managedList
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 319줄
~~~~js
 319 |     .map((item) => createMeetingCard(item, "manage"))
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 320줄
~~~~js
 320 |     .join("");
~~~~
- 설명: `renderManagedMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 321줄
~~~~js
 321 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 322줄
~~~~js
 322 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 323줄
~~~~js
 323 | function getQuickFilterLabel(filterName) {
~~~~
- 설명: `getQuickFilterLabel()` 함수를 선언하는 줄이다. 빠른 필터 이름을 화면 문구로 바꾼다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 324줄
~~~~js
 324 |   const labels = {
~~~~
- 설명: 객체 또는 데이터 묶음을 시작하는 선언 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 325줄
~~~~js
 325 |     recommend: "추천",
~~~~
- 설명: `recommend` 속성에 값을 넣는 줄이다. 현재 값은 `"추천"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 326줄
~~~~js
 326 |     today: "당일",
~~~~
- 설명: `today` 속성에 값을 넣는 줄이다. 현재 값은 `"당일"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 327줄
~~~~js
 327 |     small: "소규모",
~~~~
- 설명: `small` 속성에 값을 넣는 줄이다. 현재 값은 `"소규모"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 328줄
~~~~js
 328 |     weekend: "주말",
~~~~
- 설명: `weekend` 속성에 값을 넣는 줄이다. 현재 값은 `"주말"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 329줄
~~~~js
 329 |     campus: "캠퍼스",
~~~~
- 설명: `campus` 속성에 값을 넣는 줄이다. 현재 값은 `"캠퍼스"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 330줄
~~~~js
 330 |     sports: "운동",
~~~~
- 설명: `sports` 속성에 값을 넣는 줄이다. 현재 값은 `"운동"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 331줄
~~~~js
 331 |     study: "공부",
~~~~
- 설명: `study` 속성에 값을 넣는 줄이다. 현재 값은 `"공부"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 332줄
~~~~js
 332 |     social: "취향",
~~~~
- 설명: `social` 속성에 값을 넣는 줄이다. 현재 값은 `"취향"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 333줄
~~~~js
 333 |     mine: "내 모임",
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `"내 모임"`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 334줄
~~~~js
 334 |   };
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 335줄
~~~~js
 335 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 336줄
~~~~js
 336 |   return labels[filterName] || "추천";
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 337줄
~~~~js
 337 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 338줄
~~~~js
 338 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 339줄
~~~~js
 339 | function getNearestMeetingDate(list) {
~~~~
- 설명: `getNearestMeetingDate()` 함수를 선언하는 줄이다. 가장 빠른 모임 날짜를 구한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 340줄
~~~~js
 340 |   const uniqueDates = [...new Set(list.map((item) => item.date))];
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 341줄
~~~~js
 341 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 342줄
~~~~js
 342 |   if (uniqueDates.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 343줄
~~~~js
 343 |     return null;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 344줄
~~~~js
 344 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 345줄
~~~~js
 345 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 346줄
~~~~js
 346 |   return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 347줄
~~~~js
 347 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 348줄
~~~~js
 348 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 349줄
~~~~js
 349 | function matchesWeekend(item) {
~~~~
- 설명: `matchesWeekend()` 함수를 선언하는 줄이다. 해당 모임이 주말 날짜인지 검사한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 350줄
~~~~js
 350 |   const day = new Date(item.date).getDay();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 351줄
~~~~js
 351 |   return day === 0 || day === 6;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 352줄
~~~~js
 352 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 353줄
~~~~js
 353 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 354줄
~~~~js
 354 | function applyQuickFilterRule(list) {
~~~~
- 설명: `applyQuickFilterRule()` 함수를 선언하는 줄이다. 빠른 필터 규칙을 실제 목록 필터로 적용한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 355줄
~~~~js
 355 |   if (activeQuickFilter === "today") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 356줄
~~~~js
 356 |     const nearestDate = getNearestMeetingDate(list);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 357줄
~~~~js
 357 |     return nearestDate ? list.filter((item) => item.date === nearestDate) : list;
~~~~
- 설명: `return nearestDate ? list.filter((item) => item.date === nearestDate)` 속성에 값을 넣는 줄이다. 현재 값은 `list;`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 358줄
~~~~js
 358 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 359줄
~~~~js
 359 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 360줄
~~~~js
 360 |   if (activeQuickFilter === "small") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 361줄
~~~~js
 361 |     return list.filter((item) => item.capacity <= 8);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 362줄
~~~~js
 362 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 363줄
~~~~js
 363 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 364줄
~~~~js
 364 |   if (activeQuickFilter === "weekend") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 365줄
~~~~js
 365 |     return list.filter(matchesWeekend);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 366줄
~~~~js
 366 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 367줄
~~~~js
 367 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 368줄
~~~~js
 368 |   if (activeQuickFilter === "social") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 369줄
~~~~js
 369 |     return list.filter(
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 370줄
~~~~js
 370 |       (item) => item.category === "친목" || item.category === "게임"
~~~~
- 설명: `applyQuickFilterRule()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 371줄
~~~~js
 371 |     );
~~~~
- 설명: `applyQuickFilterRule()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 372줄
~~~~js
 372 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 373줄
~~~~js
 373 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 374줄
~~~~js
 374 |   return list;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 375줄
~~~~js
 375 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 376줄
~~~~js
 376 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 377줄
~~~~js
 377 | function syncQuickFilterUi() {
~~~~
- 설명: `syncQuickFilterUi()` 함수를 선언하는 줄이다. 선택된 빠른 필터 버튼의 활성 상태를 맞춘다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 378줄
~~~~js
 378 |   quickFilterButtons.forEach((button) => {
~~~~
- 설명: `syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 379줄
~~~~js
 379 |     const isActive = button.dataset.quickFilter === activeQuickFilter;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 380줄
~~~~js
 380 |     button.classList.toggle("is-active", isActive);
~~~~
- 설명: `syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 381줄
~~~~js
 381 |     button.classList.toggle("is-current", isActive);
~~~~
- 설명: `syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 382줄
~~~~js
 382 |     button.setAttribute("aria-pressed", String(isActive));
~~~~
- 설명: `syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 383줄
~~~~js
 383 |   });
~~~~
- 설명: `syncQuickFilterUi()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 384줄
~~~~js
 384 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 385줄
~~~~js
 385 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 386줄
~~~~js
 386 | function buildResultMessage(count) {
~~~~
- 설명: `buildResultMessage()` 함수를 선언하는 줄이다. 검색 결과 상단의 안내 문구를 만든다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 387줄
~~~~js
 387 |   const prefix =
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 388줄
~~~~js
 388 |     activeQuickFilter === "recommend"
~~~~
- 설명: `buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 389줄
~~~~js
 389 |       ? "현재 조건에 맞는"
~~~~
- 설명: `buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 390줄
~~~~js
 390 |       : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;
~~~~
- 설명: `buildResultMessage()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 391줄
~~~~js
 391 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 392줄
~~~~js
 392 |   return `${prefix} 모임은 ${count}개입니다.`;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 393줄
~~~~js
 393 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 394줄
~~~~js
 394 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 395줄
~~~~js
 395 | function getFeaturedMeetings() {
~~~~
- 설명: `getFeaturedMeetings()` 함수를 선언하는 줄이다. 추천 배너에 쓸 상위 모임 목록을 계산한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 396줄
~~~~js
 396 |   const openMeetings = meetings.filter((item) => item.joined < item.capacity);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 397줄
~~~~js
 397 |   const baseList = openMeetings.length > 0 ? openMeetings : meetings;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 398줄
~~~~js
 398 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 399줄
~~~~js
 399 |   return sortMeetings(baseList, "popular").slice(0, 6);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 400줄
~~~~js
 400 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 401줄
~~~~js
 401 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 402줄
~~~~js
 402 | function getCurrentFeaturedMeeting() {
~~~~
- 설명: `getCurrentFeaturedMeeting()` 함수를 선언하는 줄이다. 현재 추천 배너의 주인공 모임을 반환한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 403줄
~~~~js
 403 |   const featured = getFeaturedMeetings();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 404줄
~~~~js
 404 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 405줄
~~~~js
 405 |   if (featured.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 406줄
~~~~js
 406 |     return null;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 407줄
~~~~js
 407 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 408줄
~~~~js
 408 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 409줄
~~~~js
 409 |   if (featuredMeetingIndex >= featured.length) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 410줄
~~~~js
 410 |     featuredMeetingIndex = 0;
~~~~
- 설명: `getCurrentFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 411줄
~~~~js
 411 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 412줄
~~~~js
 412 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 413줄
~~~~js
 413 |   return featured[featuredMeetingIndex];
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 414줄
~~~~js
 414 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 415줄
~~~~js
 415 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 416줄
~~~~js
 416 | function renderFeaturedSection() {
~~~~
- 설명: `renderFeaturedSection()` 함수를 선언하는 줄이다. 추천 배너의 제목, 설명, 버튼, 미리보기 카드를 갱신한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 417줄
~~~~js
 417 |   const featured = getFeaturedMeetings();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 418줄
~~~~js
 418 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 419줄
~~~~js
 419 |   if (featured.length === 0) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 420줄
~~~~js
 420 |     heroKicker.textContent = "추천 모임 준비 중";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 421줄
~~~~js
 421 |     heroTitle.textContent = "새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 422줄
~~~~js
 422 |     heroDescription.textContent =
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 423줄
~~~~js
 423 |       "아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.";
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 424줄
~~~~js
 424 |     heroPageIndicator.textContent = "추천 0 / 0";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 425줄
~~~~js
 425 |     heroDetailButton.disabled = true;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 426줄
~~~~js
 426 |     heroJoinButton.disabled = true;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 427줄
~~~~js
 427 |     heroJoinButton.textContent = "바로 참여";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 428줄
~~~~js
 428 |     heroPrevButton.disabled = true;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 429줄
~~~~js
 429 |     heroNextButton.disabled = true;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 430줄
~~~~js
 430 |     featuredTeaserList.innerHTML = "";
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 431줄
~~~~js
 431 |     return;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 432줄
~~~~js
 432 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 433줄
~~~~js
 433 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 434줄
~~~~js
 434 |   const current = getCurrentFeaturedMeeting();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 435줄
~~~~js
 435 |   const teaserItems = Array.from(
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 436줄
~~~~js
 436 |     { length: Math.min(featured.length, 3) },
~~~~
- 설명: `{ length` 속성에 값을 넣는 줄이다. 현재 값은 `Math.min(featured.length, 3) }`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 437줄
~~~~js
 437 |     (_, index) => featured[(featuredMeetingIndex + index) % featured.length]
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 438줄
~~~~js
 438 |   );
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 439줄
~~~~js
 439 |   const isClosed = current.joined >= current.capacity;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 440줄
~~~~js
 440 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 441줄
~~~~js
 441 |   heroKicker.textContent = `${current.location} · ${current.category} 추천`;
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 442줄
~~~~js
 442 |   heroTitle.textContent = current.title;
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 443줄
~~~~js
 443 |   heroDescription.textContent = `${current.description} ${formatDate(
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 444줄
~~~~js
 444 |     current.date
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 445줄
~~~~js
 445 |   )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 446줄
~~~~js
 446 |   heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 447줄
~~~~js
 447 |     featured.length
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 448줄
~~~~js
 448 |   }`;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 449줄
~~~~js
 449 |   heroDetailButton.disabled = false;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 450줄
~~~~js
 450 |   heroJoinButton.disabled = current.mine || isClosed;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 451줄
~~~~js
 451 |   heroJoinButton.textContent = current.mine
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 452줄
~~~~js
 452 |     ? "참여 완료"
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 453줄
~~~~js
 453 |     : isClosed
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 454줄
~~~~js
 454 |     ? "모집 마감"
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 455줄
~~~~js
 455 |     : "바로 참여";
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 456줄
~~~~js
 456 |   heroPrevButton.disabled = featured.length <= 1;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 457줄
~~~~js
 457 |   heroNextButton.disabled = featured.length <= 1;
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 458줄
~~~~js
 458 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 459줄
~~~~js
 459 |   featuredTeaserList.innerHTML = teaserItems
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 460줄
~~~~js
 460 |     .map(
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 461줄
~~~~js
 461 |       (item, index) => `
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 462줄
~~~~js
 462 |         <button
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 463줄
~~~~js
 463 |           class="hero-teaser-card ${index === 0 ? "wide" : ""} ${
~~~~
- 설명: `class="hero-teaser-card ${index === 0 ? "wide"` 속성에 값을 넣는 줄이다. 현재 값은 `""} ${`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 464줄
~~~~js
 464 |             item.id === current.id ? "is-active" : ""
~~~~
- 설명: `item.id === current.id ? "is-active"` 속성에 값을 넣는 줄이다. 현재 값은 `""`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 465줄
~~~~js
 465 |           }"
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 466줄
~~~~js
 466 |           type="button"
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 467줄
~~~~js
 467 |           data-featured-id="${item.id}"
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 468줄
~~~~js
 468 |         >
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 469줄
~~~~js
 469 |           <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 470줄
~~~~js
 470 |           <strong>${escapeHtml(item.title)}</strong>
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 471줄
~~~~js
 471 |         </button>
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 472줄
~~~~js
 472 |       `
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 473줄
~~~~js
 473 |     )
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 474줄
~~~~js
 474 |     .join("");
~~~~
- 설명: `renderFeaturedSection()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 475줄
~~~~js
 475 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 476줄
~~~~js
 476 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 477줄
~~~~js
 477 | // 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 478줄
~~~~js
 478 | function getFilteredMeetings() {
~~~~
- 설명: `getFilteredMeetings()` 함수를 선언하는 줄이다. 검색 폼 값과 빠른 필터를 함께 적용해 결과 목록을 만든다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 479줄
~~~~js
 479 |   const keyword = keywordInput.value.trim().toLowerCase();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 480줄
~~~~js
 480 |   const category = categorySelect.value;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 481줄
~~~~js
 481 |   const location = locationSelect.value;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 482줄
~~~~js
 482 |   const status = statusFilter.value;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 483줄
~~~~js
 483 |   const sort = sortOrder.value;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 484줄
~~~~js
 484 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 485줄
~~~~js
 485 |   const filtered = meetings.filter((item) => {
~~~~
- 설명: 객체 또는 데이터 묶음을 시작하는 선언 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 486줄
~~~~js
 486 |     const matchesKeyword = item.title.toLowerCase().includes(keyword);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 487줄
~~~~js
 487 |     const matchesCategory = category === "all" || item.category === category;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 488줄
~~~~js
 488 |     const matchesLocation = location === "all" || item.location === location;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 489줄
~~~~js
 489 |     const matchesStatus =
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 490줄
~~~~js
 490 |       status === "all" ||
~~~~
- 설명: `getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 491줄
~~~~js
 491 |       (status === "open" && item.joined < item.capacity) ||
~~~~
- 설명: `getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 492줄
~~~~js
 492 |       (status === "mine" && item.mine) ||
~~~~
- 설명: `getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 493줄
~~~~js
 493 |       (status === "closed" && item.joined >= item.capacity);
~~~~
- 설명: `getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 494줄
~~~~js
 494 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 495줄
~~~~js
 495 |     return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 496줄
~~~~js
 496 |   });
~~~~
- 설명: `getFilteredMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 497줄
~~~~js
 497 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 498줄
~~~~js
 498 |   return sortMeetings(applyQuickFilterRule(filtered), sort);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 499줄
~~~~js
 499 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 500줄
~~~~js
 500 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 501줄
~~~~js
 501 | function applyFiltersAndRender() {
~~~~
- 설명: `applyFiltersAndRender()` 함수를 선언하는 줄이다. 현재 조건으로 다시 검색하고 목록을 그린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 502줄
~~~~js
 502 |   renderMeetings(getFilteredMeetings());
~~~~
- 설명: `applyFiltersAndRender()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 503줄
~~~~js
 503 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 504줄
~~~~js
 504 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 505줄
~~~~js
 505 | function resetFilters() {
~~~~
- 설명: `resetFilters()` 함수를 선언하는 줄이다. 검색 폼과 빠른 필터 상태를 처음 값으로 되돌린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 506줄
~~~~js
 506 |   searchForm.reset();
~~~~
- 설명: `resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 507줄
~~~~js
 507 |   activeQuickFilter = "recommend";
~~~~
- 설명: `resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 508줄
~~~~js
 508 |   applyQuickPreset(activeQuickFilter);
~~~~
- 설명: `resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 509줄
~~~~js
 509 |   applyFiltersAndRender();
~~~~
- 설명: `resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 510줄
~~~~js
 510 |   syncQuickFilterUi();
~~~~
- 설명: `resetFilters()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 511줄
~~~~js
 511 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 512줄
~~~~js
 512 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 513줄
~~~~js
 513 | function applyQuickPreset(filterName) {
~~~~
- 설명: `applyQuickPreset()` 함수를 선언하는 줄이다. 빠른 필터에 맞게 검색 폼 값을 미리 채운다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 514줄
~~~~js
 514 |   keywordInput.value = "";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 515줄
~~~~js
 515 |   categorySelect.value = "all";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 516줄
~~~~js
 516 |   locationSelect.value = "all";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 517줄
~~~~js
 517 |   statusFilter.value = "all";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 518줄
~~~~js
 518 |   sortOrder.value = filterName === "recommend" ? "popular" : "soon";
~~~~
- 설명: `sortOrder.value = filterName === "recommend" ? "popular"` 속성에 값을 넣는 줄이다. 현재 값은 `"soon";`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 519줄
~~~~js
 519 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 520줄
~~~~js
 520 |   if (filterName === "campus") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 521줄
~~~~js
 521 |     locationSelect.value = "캠퍼스";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 522줄
~~~~js
 522 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 523줄
~~~~js
 523 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 524줄
~~~~js
 524 |   if (filterName === "sports") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 525줄
~~~~js
 525 |     categorySelect.value = "운동";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 526줄
~~~~js
 526 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 527줄
~~~~js
 527 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 528줄
~~~~js
 528 |   if (filterName === "study") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 529줄
~~~~js
 529 |     categorySelect.value = "공부";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 530줄
~~~~js
 530 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 531줄
~~~~js
 531 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 532줄
~~~~js
 532 |   if (filterName === "mine") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 533줄
~~~~js
 533 |     statusFilter.value = "mine";
~~~~
- 설명: `applyQuickPreset()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 534줄
~~~~js
 534 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 535줄
~~~~js
 535 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 536줄
~~~~js
 536 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 537줄
~~~~js
 537 | function applyQuickFilter(filterName) {
~~~~
- 설명: `applyQuickFilter()` 함수를 선언하는 줄이다. 빠른 필터를 선택하고 검색 영역으로 스크롤한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 538줄
~~~~js
 538 |   activeQuickFilter = filterName;
~~~~
- 설명: `applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 539줄
~~~~js
 539 |   applyQuickPreset(filterName);
~~~~
- 설명: `applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 540줄
~~~~js
 540 |   applyFiltersAndRender();
~~~~
- 설명: `applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 541줄
~~~~js
 541 |   syncQuickFilterUi();
~~~~
- 설명: `applyQuickFilter()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 542줄
~~~~js
 542 |   document.querySelector("#search").scrollIntoView({ behavior: "smooth" });
~~~~
- 설명: `document.querySelector("#search").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `"smooth" });`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 543줄
~~~~js
 543 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 544줄
~~~~js
 544 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 545줄
~~~~js
 545 | function handleQuickAction(actionName) {
~~~~
- 설명: `handleQuickAction()` 함수를 선언하는 줄이다. 빠른 타일의 특수 동작을 처리한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 546줄
~~~~js
 546 |   if (actionName === "create") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 547줄
~~~~js
 547 |     document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
~~~~
- 설명: `document.querySelector("#create").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `"smooth" });`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 548줄
~~~~js
 548 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 549줄
~~~~js
 549 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 550줄
~~~~js
 550 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 551줄
~~~~js
 551 | function moveFeaturedMeeting(step) {
~~~~
- 설명: `moveFeaturedMeeting()` 함수를 선언하는 줄이다. 추천 배너를 이전/다음 항목으로 이동한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 552줄
~~~~js
 552 |   const featured = getFeaturedMeetings();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 553줄
~~~~js
 553 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 554줄
~~~~js
 554 |   if (featured.length <= 1) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 555줄
~~~~js
 555 |     return;
~~~~
- 설명: `moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 556줄
~~~~js
 556 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 557줄
~~~~js
 557 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 558줄
~~~~js
 558 |   featuredMeetingIndex =
~~~~
- 설명: `moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 559줄
~~~~js
 559 |     (featuredMeetingIndex + step + featured.length) % featured.length;
~~~~
- 설명: `moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 560줄
~~~~js
 560 |   renderFeaturedSection();
~~~~
- 설명: `moveFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 561줄
~~~~js
 561 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 562줄
~~~~js
 562 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 563줄
~~~~js
 563 | function selectFeaturedMeeting(id) {
~~~~
- 설명: `selectFeaturedMeeting()` 함수를 선언하는 줄이다. 미리보기 카드 클릭으로 추천 배너 항목을 바꾼다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 564줄
~~~~js
 564 |   const featured = getFeaturedMeetings();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 565줄
~~~~js
 565 |   const nextIndex = featured.findIndex((item) => item.id === id);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 566줄
~~~~js
 566 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 567줄
~~~~js
 567 |   if (nextIndex === -1) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 568줄
~~~~js
 568 |     return;
~~~~
- 설명: `selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 569줄
~~~~js
 569 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 570줄
~~~~js
 570 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 571줄
~~~~js
 571 |   featuredMeetingIndex = nextIndex;
~~~~
- 설명: `selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 572줄
~~~~js
 572 |   renderFeaturedSection();
~~~~
- 설명: `selectFeaturedMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 573줄
~~~~js
 573 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 574줄
~~~~js
 574 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 575줄
~~~~js
 575 | function getFormValues() {
~~~~
- 설명: `getFormValues()` 함수를 선언하는 줄이다. 모임 생성/수정 폼의 현재 입력값을 읽는다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 576줄
~~~~js
 576 |   return {
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 577줄
~~~~js
 577 |     title: document.querySelector("#newTitle").value.trim(),
~~~~
- 설명: 모임 제목을 저장하는 속성이다. 현재 값은 `document.querySelector("#newTitle").value.trim()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 578줄
~~~~js
 578 |     category: document.querySelector("#newCategory").value,
~~~~
- 설명: 모임 분류를 저장하는 속성이다. 현재 값은 `document.querySelector("#newCategory").value`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 579줄
~~~~js
 579 |     location: document.querySelector("#newLocation").value,
~~~~
- 설명: 모임 지역 또는 권역을 저장하는 속성이다. 현재 값은 `document.querySelector("#newLocation").value`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 580줄
~~~~js
 580 |     date: document.querySelector("#newDate").value,
~~~~
- 설명: 모임 날짜를 저장하는 속성이다. 현재 값은 `document.querySelector("#newDate").value`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 581줄
~~~~js
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
~~~~
- 설명: 주최자 이름을 저장하는 속성이다. 현재 값은 `document.querySelector("#newOrganizer").value.trim()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 582줄
~~~~js
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
~~~~
- 설명: 최대 모집 인원을 저장하는 속성이다. 현재 값은 `Number(document.querySelector("#newCapacity").value)`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 583줄
~~~~js
 583 |     fee: document.querySelector("#newFee").value.trim(),
~~~~
- 설명: 참가비 문구를 저장하는 속성이다. 현재 값은 `document.querySelector("#newFee").value.trim()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 584줄
~~~~js
 584 |     description: document.querySelector("#newDescription").value.trim(),
~~~~
- 설명: 모임 상세 설명을 담기 위한 속성이다. 현재 값은 `document.querySelector("#newDescription").value.trim()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 585줄
~~~~js
 585 |   };
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 586줄
~~~~js
 586 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 587줄
~~~~js
 587 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 588줄
~~~~js
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 589줄
~~~~js
 589 | function resetFormState() {
~~~~
- 설명: `resetFormState()` 함수를 선언하는 줄이다. 폼을 추가 모드 초기 상태로 되돌린다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 590줄
~~~~js
 590 |   editingMeetingId = null;
~~~~
- 설명: `resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 591줄
~~~~js
 591 |   createForm.reset();
~~~~
- 설명: `resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 592줄
~~~~js
 592 |   formTitle.textContent = "폼으로 새 모임 추가하기";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 593줄
~~~~js
 593 |   formModeText.textContent =
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 594줄
~~~~js
 594 |     "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
~~~~
- 설명: `resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 595줄
~~~~js
 595 |   submitButton.textContent = "모임 추가";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 596줄
~~~~js
 596 |   cancelEditButton.classList.add("is-hidden");
~~~~
- 설명: `resetFormState()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 597줄
~~~~js
 597 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 598줄
~~~~js
 598 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 599줄
~~~~js
 599 | // 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 600줄
~~~~js
 600 | function startEditMeeting(id) {
~~~~
- 설명: `startEditMeeting()` 함수를 선언하는 줄이다. 선택한 모임 값을 폼에 넣고 수정 모드로 전환한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 601줄
~~~~js
 601 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 602줄
~~~~js
 602 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 603줄
~~~~js
 603 |   if (!selected) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 604줄
~~~~js
 604 |     return;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 605줄
~~~~js
 605 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 606줄
~~~~js
 606 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 607줄
~~~~js
 607 |   editingMeetingId = id;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 608줄
~~~~js
 608 |   document.querySelector("#newTitle").value = selected.title;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 609줄
~~~~js
 609 |   document.querySelector("#newCategory").value = selected.category;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 610줄
~~~~js
 610 |   document.querySelector("#newLocation").value = selected.location;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 611줄
~~~~js
 611 |   document.querySelector("#newDate").value = selected.date;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 612줄
~~~~js
 612 |   document.querySelector("#newOrganizer").value = selected.organizer;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 613줄
~~~~js
 613 |   document.querySelector("#newCapacity").value = selected.capacity;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 614줄
~~~~js
 614 |   document.querySelector("#newFee").value = selected.fee;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 615줄
~~~~js
 615 |   document.querySelector("#newDescription").value = selected.description;
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 616줄
~~~~js
 616 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 617줄
~~~~js
 617 |   formTitle.textContent = "기존 모임 수정하기";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 618줄
~~~~js
 618 |   formModeText.textContent =
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 619줄
~~~~js
 619 |     "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 620줄
~~~~js
 620 |   submitButton.textContent = "수정 내용 저장";
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 621줄
~~~~js
 621 |   cancelEditButton.classList.remove("is-hidden");
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 622줄
~~~~js
 622 |   closeDetail();
~~~~
- 설명: `startEditMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 623줄
~~~~js
 623 |   document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
~~~~
- 설명: `document.querySelector("#create").scrollIntoView({ behavior` 속성에 값을 넣는 줄이다. 현재 값은 `"smooth" });`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 624줄
~~~~js
 624 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 625줄
~~~~js
 625 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 626줄
~~~~js
 626 | // editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 627줄
~~~~js
 627 | function handleFormSubmit(event) {
~~~~
- 설명: `handleFormSubmit()` 함수를 선언하는 줄이다. 폼 제출 시 추가 또는 수정을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 628줄
~~~~js
 628 |   event.preventDefault();
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 629줄
~~~~js
 629 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 630줄
~~~~js
 630 |   const formValues = getFormValues();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 631줄
~~~~js
 631 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 632줄
~~~~js
 632 |   if (editingMeetingId !== null) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 633줄
~~~~js
 633 |     meetings = meetings.map((item) =>
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 634줄
~~~~js
 634 |       item.id === editingMeetingId
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 635줄
~~~~js
 635 |         ? normalizeMeeting({
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 636줄
~~~~js
 636 |             ...item,
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 637줄
~~~~js
 637 |             ...formValues,
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 638줄
~~~~js
 638 |             createdByMe: true,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 12칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 639줄
~~~~js
 639 |           })
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 10칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 640줄
~~~~js
 640 |         : item
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 8칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 641줄
~~~~js
 641 |     );
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 642줄
~~~~js
 642 |   } else {
~~~~
- 설명: 앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 643줄
~~~~js
 643 |     const newMeeting = normalizeMeeting({
~~~~
- 설명: 객체 또는 데이터 묶음을 시작하는 선언 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 644줄
~~~~js
 644 |       id: Date.now(),
~~~~
- 설명: 모임을 고유하게 구분하는 번호를 적는 속성이다. 현재 값은 `Date.now()`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 645줄
~~~~js
 645 |       ...formValues,
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 646줄
~~~~js
 646 |       joined: 1,
~~~~
- 설명: 현재 참여 인원을 저장하는 속성이다. 현재 값은 `1`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 647줄
~~~~js
 647 |       mine: true,
~~~~
- 설명: 현재 사용자가 참여 중인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 648줄
~~~~js
 648 |       createdByMe: true,
~~~~
- 설명: 현재 사용자가 직접 만든 모임인지 표시하는 불리언 값이다. 현재 값은 `true`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 649줄
~~~~js
 649 |     });
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 650줄
~~~~js
 650 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 651줄
~~~~js
 651 |     meetings.unshift(newMeeting);
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 652줄
~~~~js
 652 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 653줄
~~~~js
 653 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 654줄
~~~~js
 654 |   saveMeetings();
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 655줄
~~~~js
 655 |   resetFormState();
~~~~
- 설명: `handleFormSubmit()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 656줄
~~~~js
 656 |   renderAll();
~~~~
- 설명: 화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 657줄
~~~~js
 657 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 658줄
~~~~js
 658 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 659줄
~~~~js
 659 | function getSeatMessage(item) {
~~~~
- 설명: `getSeatMessage()` 함수를 선언하는 줄이다. 남은 자리 문구를 계산한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 660줄
~~~~js
 660 |   const remaining = item.capacity - item.joined;
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 661줄
~~~~js
 661 |   return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
~~~~
- 설명: `return remaining > 0 ? `남은 자리 ${remaining}석`` 속성에 값을 넣는 줄이다. 현재 값은 `"모집 마감";`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 662줄
~~~~js
 662 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 663줄
~~~~js
 663 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 664줄
~~~~js
 664 | function formatDate(value) {
~~~~
- 설명: `formatDate()` 함수를 선언하는 줄이다. 날짜 문자열을 한국어 날짜 표시로 바꾼다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 665줄
~~~~js
 665 |   const date = new Date(value);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 666줄
~~~~js
 666 |   return date.toLocaleDateString("ko-KR");
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 667줄
~~~~js
 667 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 668줄
~~~~js
 668 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 669줄
~~~~js
 669 | function sortMeetings(list, sort) {
~~~~
- 설명: `sortMeetings()` 함수를 선언하는 줄이다. 필터링된 목록을 선택된 기준으로 정렬한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 670줄
~~~~js
 670 |   const sorted = [...list];
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 671줄
~~~~js
 671 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 672줄
~~~~js
 672 |   if (sort === "late") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 673줄
~~~~js
 673 |     return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 674줄
~~~~js
 674 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 675줄
~~~~js
 675 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 676줄
~~~~js
 676 |   if (sort === "seats") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 677줄
~~~~js
 677 |     return sorted.sort(
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 678줄
~~~~js
 678 |       (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
~~~~
- 설명: `sortMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 6칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 679줄
~~~~js
 679 |     );
~~~~
- 설명: `sortMeetings()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 680줄
~~~~js
 680 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 681줄
~~~~js
 681 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 682줄
~~~~js
 682 |   if (sort === "popular") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 683줄
~~~~js
 683 |     return sorted.sort((a, b) => b.joined - a.joined);
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 684줄
~~~~js
 684 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 685줄
~~~~js
 685 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 686줄
~~~~js
 686 |   return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 687줄
~~~~js
 687 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 688줄
~~~~js
 688 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 689줄
~~~~js
 689 | function truncateText(text, maxLength) {
~~~~
- 설명: `truncateText()` 함수를 선언하는 줄이다. 긴 설명을 카드용 짧은 문장으로 자른다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 690줄
~~~~js
 690 |   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
~~~~
- 설명: `return text.length > maxLength ? `${text.slice(0, maxLength)}...`` 속성에 값을 넣는 줄이다. 현재 값은 `text;`로 설정된다.
- 들여쓰기 설명: 객체 안의 속성 줄이거나 템플릿 내부 속성 줄이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 691줄
~~~~js
 691 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 692줄
~~~~js
 692 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 693줄
~~~~js
 693 | function escapeHtml(value) {
~~~~
- 설명: `escapeHtml()` 함수를 선언하는 줄이다. HTML 문자열 주입 시 특수문자를 이스케이프한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 694줄
~~~~js
 694 |   return value
~~~~
- 설명: 함수 실행 결과로 값을 돌려주는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 695줄
~~~~js
 695 |     .replaceAll("&", "&amp;")
~~~~
- 설명: `escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 696줄
~~~~js
 696 |     .replaceAll("<", "&lt;")
~~~~
- 설명: `escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 697줄
~~~~js
 697 |     .replaceAll(">", "&gt;")
~~~~
- 설명: `escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 698줄
~~~~js
 698 |     .replaceAll('"', "&quot;")
~~~~
- 설명: `escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 699줄
~~~~js
 699 |     .replaceAll("'", "&#39;");
~~~~
- 설명: `escapeHtml()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 700줄
~~~~js
 700 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 701줄
~~~~js
 701 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 702줄
~~~~js
 702 | // 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 703줄
~~~~js
 703 | function joinMeeting(id) {
~~~~
- 설명: `joinMeeting()` 함수를 선언하는 줄이다. 참여 가능한 모임에 사용자 참여를 반영한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 704줄
~~~~js
 704 |   const selected = meetings.find((item) => item.id === id);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 705줄
~~~~js
 705 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 706줄
~~~~js
 706 |   if (!selected) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 707줄
~~~~js
 707 |     return;
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 708줄
~~~~js
 708 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 709줄
~~~~js
 709 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 710줄
~~~~js
 710 |   if (selected.joined >= selected.capacity) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 711줄
~~~~js
 711 |     alert("이미 모집이 끝난 모임입니다.");
~~~~
- 설명: 브라우저 기본 확인창이나 안내창을 띄우는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 712줄
~~~~js
 712 |     return;
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 713줄
~~~~js
 713 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 714줄
~~~~js
 714 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 715줄
~~~~js
 715 |   if (selected.mine) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 716줄
~~~~js
 716 |     alert("이미 참여한 모임입니다.");
~~~~
- 설명: 브라우저 기본 확인창이나 안내창을 띄우는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 717줄
~~~~js
 717 |     return;
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 718줄
~~~~js
 718 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 719줄
~~~~js
 719 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 720줄
~~~~js
 720 |   selected.joined += 1;
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 721줄
~~~~js
 721 |   selected.mine = true;
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 722줄
~~~~js
 722 |   saveMeetings();
~~~~
- 설명: `joinMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 723줄
~~~~js
 723 |   renderAll();
~~~~
- 설명: 화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 724줄
~~~~js
 724 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 725줄
~~~~js
 725 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 726줄
~~~~js
 726 | // 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 727줄
~~~~js
 727 | function deleteMeeting(id) {
~~~~
- 설명: `deleteMeeting()` 함수를 선언하는 줄이다. 확인창 후 모임을 삭제한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 728줄
~~~~js
 728 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 729줄
~~~~js
 729 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 730줄
~~~~js
 730 |   if (!selected) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 731줄
~~~~js
 731 |     return;
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 732줄
~~~~js
 732 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 733줄
~~~~js
 733 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 734줄
~~~~js
 734 |   const isConfirmed = window.confirm(
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 735줄
~~~~js
 735 |     `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 736줄
~~~~js
 736 |   );
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 737줄
~~~~js
 737 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 738줄
~~~~js
 738 |   if (!isConfirmed) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 739줄
~~~~js
 739 |     return;
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 740줄
~~~~js
 740 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 741줄
~~~~js
 741 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 742줄
~~~~js
 742 |   meetings = meetings.filter((item) => item.id !== id);
~~~~
- 설명: 조건에 맞는 데이터만 남기는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 743줄
~~~~js
 743 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 744줄
~~~~js
 744 |   if (editingMeetingId === id) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 745줄
~~~~js
 745 |     resetFormState();
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 746줄
~~~~js
 746 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 747줄
~~~~js
 747 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 748줄
~~~~js
 748 |   if (dialogMeetingId === id) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 749줄
~~~~js
 749 |     closeDetail();
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 750줄
~~~~js
 750 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 751줄
~~~~js
 751 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 752줄
~~~~js
 752 |   saveMeetings();
~~~~
- 설명: `deleteMeeting()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 753줄
~~~~js
 753 |   renderAll();
~~~~
- 설명: 화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 754줄
~~~~js
 754 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 755줄
~~~~js
 755 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 756줄
~~~~js
 756 | // 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 757줄
~~~~js
 757 | function openDetail(id) {
~~~~
- 설명: `openDetail()` 함수를 선언하는 줄이다. 상세 팝업에 모임 데이터를 채워 넣고 연다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 758줄
~~~~js
 758 |   const selected = meetings.find((item) => item.id === id);
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 759줄
~~~~js
 759 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 760줄
~~~~js
 760 |   if (!selected) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 761줄
~~~~js
 761 |     return;
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 762줄
~~~~js
 762 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 763줄
~~~~js
 763 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 764줄
~~~~js
 764 |   dialogTitle.textContent = selected.title;
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 765줄
~~~~js
 765 |   dialogMeta.innerHTML = [
~~~~
- 설명: HTML 문자열을 실제 화면 요소 안에 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 766줄
~~~~js
 766 |     `카테고리 ${escapeHtml(selected.category)}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 767줄
~~~~js
 767 |     `지역 ${escapeHtml(selected.location)}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 768줄
~~~~js
 768 |     `주최자 ${escapeHtml(selected.organizer)}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 769줄
~~~~js
 769 |     `날짜 ${formatDate(selected.date)}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 770줄
~~~~js
 770 |     `참가비 ${escapeHtml(selected.fee)}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 771줄
~~~~js
 771 |     `참여 ${selected.joined}/${selected.capacity}`,
~~~~
- 설명: 문자열 리터럴 줄이다. 설명 문구나 데이터 본문 자체를 적고 있다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 772줄
~~~~js
 772 |   ]
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 773줄
~~~~js
 773 |     .map((text) => `<span class="meta-chip">${text}</span>`)
~~~~
- 설명: 배열 각 항목을 다른 형태로 바꾸는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 774줄
~~~~js
 774 |     .join("");
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 775줄
~~~~js
 775 |   dialogDescription.textContent = selected.description;
~~~~
- 설명: 텍스트만 안전하게 바꿔 넣는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 776줄
~~~~js
 776 |   dialogMeetingId = id;
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 777줄
~~~~js
 777 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 778줄
~~~~js
 778 |   if (selected.createdByMe) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 779줄
~~~~js
 779 |     dialogOwnerActions.classList.remove("is-hidden");
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 780줄
~~~~js
 780 |   } else {
~~~~
- 설명: 앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 781줄
~~~~js
 781 |     dialogOwnerActions.classList.add("is-hidden");
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 782줄
~~~~js
 782 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 783줄
~~~~js
 783 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 784줄
~~~~js
 784 |   if (detailDialog.open) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 785줄
~~~~js
 785 |     return;
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 786줄
~~~~js
 786 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 787줄
~~~~js
 787 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 788줄
~~~~js
 788 |   if (typeof detailDialog.showModal === "function") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 789줄
~~~~js
 789 |     detailDialog.showModal();
~~~~
- 설명: `dialog` 팝업을 모달 형태로 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 790줄
~~~~js
 790 |     return;
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 791줄
~~~~js
 791 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 792줄
~~~~js
 792 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 793줄
~~~~js
 793 |   detailDialog.setAttribute("open", "open");
~~~~
- 설명: `openDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 794줄
~~~~js
 794 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 795줄
~~~~js
 795 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 796줄
~~~~js
 796 | function closeDetail() {
~~~~
- 설명: `closeDetail()` 함수를 선언하는 줄이다. 상세 팝업을 닫고 상태값을 비운다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 797줄
~~~~js
 797 |   if (detailDialog.open && typeof detailDialog.close === "function") {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 798줄
~~~~js
 798 |     detailDialog.close();
~~~~
- 설명: `closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 799줄
~~~~js
 799 |   } else if (detailDialog.hasAttribute("open")) {
~~~~
- 설명: 앞 조건이 거짓일 때 실행할 다른 분기를 여는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 800줄
~~~~js
 800 |     detailDialog.removeAttribute("open");
~~~~
- 설명: `closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 801줄
~~~~js
 801 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 802줄
~~~~js
 802 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 803줄
~~~~js
 803 |   dialogMeetingId = null;
~~~~
- 설명: `closeDetail()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 804줄
~~~~js
 804 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 805줄
~~~~js
 805 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 806줄
~~~~js
 806 | // 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 807줄
~~~~js
 807 | function renderAll() {
~~~~
- 설명: `renderAll()` 함수를 선언하는 줄이다. 화면의 주요 영역을 한 번에 다시 렌더링한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 808줄
~~~~js
 808 |   renderStatus();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 809줄
~~~~js
 809 |   renderFeaturedSection();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 810줄
~~~~js
 810 |   applyFiltersAndRender();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 811줄
~~~~js
 811 |   renderMyMeetings();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 812줄
~~~~js
 812 |   renderManagedMeetings();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 813줄
~~~~js
 813 |   syncQuickFilterUi();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 814줄
~~~~js
 814 | }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 815줄
~~~~js
 815 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 816줄
~~~~js
 816 | // 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
~~~~
- 설명: JavaScript 주석이다. 바로 아래 로직이 어떤 목적을 가지는지 설명한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 817줄
~~~~js
 817 | searchForm.addEventListener("submit", (event) => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 818줄
~~~~js
 818 |   event.preventDefault();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 819줄
~~~~js
 819 |   applyFiltersAndRender();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 820줄
~~~~js
 820 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 821줄
~~~~js
 821 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 822줄
~~~~js
 822 | resetButton.addEventListener("click", resetFilters);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 823줄
~~~~js
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 824줄
~~~~js
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 825줄
~~~~js
 825 | createForm.addEventListener("submit", handleFormSubmit);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 826줄
~~~~js
 826 | cancelEditButton.addEventListener("click", resetFormState);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 827줄
~~~~js
 827 | closeDialogButton.addEventListener("click", closeDetail);
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 828줄
~~~~js
 828 | dialogEditButton.addEventListener("click", () => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 829줄
~~~~js
 829 |   if (dialogMeetingId !== null) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 830줄
~~~~js
 830 |     startEditMeeting(dialogMeetingId);
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 831줄
~~~~js
 831 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 832줄
~~~~js
 832 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 833줄
~~~~js
 833 | dialogDeleteButton.addEventListener("click", () => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 834줄
~~~~js
 834 |   if (dialogMeetingId !== null) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 835줄
~~~~js
 835 |     deleteMeeting(dialogMeetingId);
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 836줄
~~~~js
 836 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 837줄
~~~~js
 837 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 838줄
~~~~js
 838 | heroDetailButton.addEventListener("click", () => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 839줄
~~~~js
 839 |   const featured = getCurrentFeaturedMeeting();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 840줄
~~~~js
 840 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 841줄
~~~~js
 841 |   if (featured) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 842줄
~~~~js
 842 |     openDetail(featured.id);
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 843줄
~~~~js
 843 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 844줄
~~~~js
 844 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 845줄
~~~~js
 845 | heroJoinButton.addEventListener("click", () => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 846줄
~~~~js
 846 |   const featured = getCurrentFeaturedMeeting();
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 847줄
~~~~js
 847 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 848줄
~~~~js
 848 |   if (featured) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 849줄
~~~~js
 849 |     joinMeeting(featured.id);
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 850줄
~~~~js
 850 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 851줄
~~~~js
 851 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 852줄
~~~~js
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 853줄
~~~~js
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 854줄
~~~~js
 854 | featuredTeaserList.addEventListener("click", (event) => {
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 855줄
~~~~js
 855 |   const card = event.target.closest("[data-featured-id]");
~~~~
- 설명: 상수 또는 상태 변수를 선언하는 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 856줄
~~~~js
 856 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 857줄
~~~~js
 857 |   if (!card) {
~~~~
- 설명: 조건문 시작 줄이다. 이 조건이 참일 때만 아래 블록을 실행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 858줄
~~~~js
 858 |     return;
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 859줄
~~~~js
 859 |   }
~~~~
- 설명: 현재 객체, 배열, 또는 블록을 닫는 줄이다.
- 들여쓰기 설명: 현재 블록을 닫고 한 단계 바깥으로 맞추는 줄이다. 공백 2칸이 현재 깊이를 보여 준다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 860줄
~~~~js
 860 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 861줄
~~~~js
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 862줄
~~~~js
 862 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 863줄
~~~~js
 863 | quickFilterButtons.forEach((button) => {
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 864줄
~~~~js
 864 |   button.addEventListener("click", () =>
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 865줄
~~~~js
 865 |     applyQuickFilter(button.dataset.quickFilter)
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 866줄
~~~~js
 866 |   );
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 867줄
~~~~js
 867 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 868줄
~~~~js
 868 | quickActionButtons.forEach((button) => {
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 869줄
~~~~js
 869 |   button.addEventListener("click", () =>
~~~~
- 설명: 특정 사용자 행동과 함수를 연결하는 이벤트 등록 줄이다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 870줄
~~~~js
 870 |     handleQuickAction(button.dataset.quickAction)
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 4칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 871줄
~~~~js
 871 |   );
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 함수, 조건문, 반복문, 객체 같은 블록 안쪽 로직이라 2칸 들여썼다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 872줄
~~~~js
 872 | });
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 873줄
~~~~js
 873 | 
~~~~
- 설명: 의미 단위를 나누기 위해 비워 둔 줄이다.
- 들여쓰기 설명: 빈 줄이라 들여쓰기 의미도 없다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 874줄
~~~~js
 874 | saveMeetings();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 875줄
~~~~js
 875 | resetFormState();
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 876줄
~~~~js
 876 | applyQuickPreset(activeQuickFilter);
~~~~
- 설명: `renderAll()` 함수 내부 처리 줄이다. 현재 함수 목적에 맞는 세부 계산이나 상태 변경을 수행한다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.
### 877줄
~~~~js
 877 | renderAll();
~~~~
- 설명: 화면 주요 영역을 한 번에 다시 그리라는 초기 실행 줄이다.
- 들여쓰기 설명: 최상위 선언이나 함수 시작 줄이라 바깥 수준에 있다.
- 왜 필요한가: 사용자 행동이 실제 데이터 처리와 화면 반응으로 이어지게 하기 위해 필요하다.
- 없으면 어떤 문제: 이 줄이 빠지면 데이터 계산, 이벤트 처리, 또는 화면 갱신 흐름이 일부 끊길 수 있다.

## 4. 블록 단위로 코드 보면서 설명
### 블록 1. 함수 `getDefaultMeetings()`
- 범위: 122~125줄
- 블록 원문:
~~~~js
 122 | function getDefaultMeetings() {
 123 |   return defaultMeetings.map((item) => ({ ...item }));
 124 | }
 125 | 
~~~~
- 이 블록이 하는 일: 기본 샘플 데이터를 복사해서 새 배열로 돌려준다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 2. 함수 `normalizeMeeting()`
- 범위: 126~147줄
- 블록 원문:
~~~~js
 126 | function normalizeMeeting(item) {
 127 |   const organizer = normalizeOrganizerName(item.organizer);
 128 |   const location = normalizeLocationName(item.location);
 129 | 
 130 |   return {
 131 |     id: item.id ?? Date.now(),
 132 |     title: item.title ?? "제목 없음",
 133 |     category: item.category ?? "친목",
 134 |     location: location ?? "캠퍼스",
 135 |     date: item.date ?? new Date().toISOString().slice(0, 10),
 136 |     capacity: Number(item.capacity) || 10,
 137 |     joined: Number(item.joined) || 0,
 138 |     fee: item.fee || "미정",
 139 |     organizer,
 140 |     description: item.description || "설명이 아직 없습니다.",
 141 |     mine: Boolean(item.mine),
 142 |     createdByMe: Boolean(
 143 |       item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))
 144 |     ),
 145 |   };
 146 | }
 147 | 
~~~~
- 이 블록이 하는 일: 저장된 모임 데이터를 현재 형식에 맞게 보정한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 3. 함수 `normalizeOrganizerName()`
- 범위: 148~155줄
- 블록 원문:
~~~~js
 148 | function normalizeOrganizerName(value) {
 149 |   if (!value) {
 150 |     return "미정";
 151 |   }
 152 | 
 153 |   return legacyOrganizerMap[value] || value;
 154 | }
 155 | 
~~~~
- 이 블록이 하는 일: 예전 주최자 이름을 현재 표기 기준으로 정리한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 4. 함수 `normalizeLocationName()`
- 범위: 156~164줄
- 블록 원문:
~~~~js
 156 | function normalizeLocationName(value) {
 157 |   if (!value) {
 158 |     return "캠퍼스";
 159 |   }
 160 | 
 161 |   return legacyLocationMap[value] || value;
 162 | }
 163 | 
 164 | // 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.
~~~~
- 이 블록이 하는 일: 예전 지역 이름을 현재 지역 이름으로 바꾼다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 5. 함수 `loadMeetings()`
- 범위: 165~184줄
- 블록 원문:
~~~~js
 165 | function loadMeetings() {
 166 |   try {
 167 |     const stored = localStorage.getItem(STORAGE_KEY);
 168 | 
 169 |     if (!stored) {
 170 |       return getDefaultMeetings();
 171 |     }
 172 | 
 173 |     const parsed = JSON.parse(stored);
 174 | 
 175 |     if (!Array.isArray(parsed)) {
 176 |       return getDefaultMeetings();
 177 |     }
 178 | 
 179 |     return parsed.map(normalizeMeeting);
 180 |   } catch (error) {
 181 |     return getDefaultMeetings();
 182 |   }
 183 | }
 184 | 
~~~~
- 이 블록이 하는 일: 브라우저 저장소를 먼저 읽고, 없으면 기본 데이터를 반환한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 6. 함수 `saveMeetings()`
- 범위: 185~193줄
- 블록 원문:
~~~~js
 185 | function saveMeetings() {
 186 |   try {
 187 |     localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
 188 |   } catch (error) {
 189 |     console.error("브라우저 저장에 실패했습니다.", error);
 190 |   }
 191 | }
 192 | 
 193 | // 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.
~~~~
- 이 블록이 하는 일: 현재 모임 배열을 localStorage에 저장한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 7. 함수 `renderStatus()`
- 범위: 194~222줄
- 블록 원문:
~~~~js
 194 | function renderStatus() {
 195 |   const totalMeetings = meetings.length;
 196 |   const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);
 197 |   const mine = meetings.filter((item) => item.mine).length;
 198 |   const openSeats = meetings.reduce(
 199 |     (sum, item) => sum + (item.capacity - item.joined),
 200 |     0
 201 |   );
 202 | 
 203 |   const items = [
 204 |     { label: "전체 모임", value: `${totalMeetings}개` },
 205 |     { label: "참여 인원", value: `${totalMembers}명` },
 206 |     { label: "내 모임", value: `${mine}개` },
 207 |     { label: "남은 자리", value: `${openSeats}석` },
 208 |   ];
 209 | 
 210 |   statusCards.innerHTML = items
 211 |     .map(
 212 |       (item) => `
 213 |         <article class="status-card">
 214 |           <p>${item.label}</p>
 215 |           <strong>${item.value}</strong>
 216 |         </article>
 217 |       `
 218 |     )
 219 |     .join("");
 220 | }
 221 | 
 222 | // 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.
~~~~
- 이 블록이 하는 일: 상단 숫자 카드를 다시 계산해 출력한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 8. 함수 `createMeetingCard()`
- 범위: 223~284줄
- 블록 원문:
~~~~js
 223 | function createMeetingCard(item, mode = "default") {
 224 |   const isClosed = item.joined >= item.capacity;
 225 |   const actionLabel = item.mine ? "참여 완료" : isClosed ? "모집 마감" : "참여하기";
 226 |   const archiveCode = `ARCHIVE ${String(item.id).padStart(2, "0")}`;
 227 |   const primaryLabel =
 228 |     mode === "manage" ? "운영중" : item.mine ? "참여중" : isClosed ? "마감" : "추천";
 229 |   const actionButtons =
 230 |     mode === "manage"
 231 |       ? `
 232 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 233 |             상세
 234 |           </button>
 235 |           <button class="button secondary" type="button" onclick="startEditMeeting(${item.id})">
 236 |             수정
 237 |           </button>
 238 |           <button class="button danger" type="button" onclick="deleteMeeting(${item.id})">
 239 |             삭제
 240 |           </button>
 241 |         `
 242 |       : `
 243 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 244 |             상세
 245 |           </button>
 246 |           <button
 247 |             class="button secondary"
 248 |             type="button"
 249 |             onclick="joinMeeting(${item.id})"
 250 |             ${item.mine || isClosed ? "disabled" : ""}
 251 |           >
 252 |             ${actionLabel}
 253 |           </button>
 254 |         `;
 255 | 
 256 |   return `
 257 |     <article class="meeting-card">
 258 |       <div class="card-poster">
 259 |         <div class="card-pills">
 260 |           <span class="card-pill primary">${primaryLabel}</span>
 261 |           ${item.createdByMe ? '<span class="card-pill">개설</span>' : ""}
 262 |         </div>
 263 |         <span class="card-code">${archiveCode}</span>
 264 |       </div>
 265 |       <div class="card-copy">
 266 |         <p class="card-location">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>
 267 |         <h3>${escapeHtml(item.title)}</h3>
 268 |         <p class="description-preview">${escapeHtml(truncateText(item.description, 42))}</p>
 269 |         <div class="meta-row">
 270 |           <span class="meta-chip">주최 ${escapeHtml(item.organizer)}</span>
 271 |           <span class="meta-chip">참여 ${item.joined}/${item.capacity}</span>
 272 |           <span class="meta-chip">${escapeHtml(item.fee)}</span>
 273 |         </div>
 274 |         <div class="card-footer">
 275 |           <p class="card-schedule">${formatDate(item.date)} · ${getSeatMessage(item)}</p>
 276 |           <div class="card-actions">
 277 |             ${actionButtons}
 278 |           </div>
 279 |         </div>
 280 |       </div>
 281 |     </article>
 282 |   `;
 283 | }
 284 | 
~~~~
- 이 블록이 하는 일: 모임 하나를 카드 HTML 문자열로 만든다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 9. 함수 `renderMeetings()`
- 범위: 285~296줄
- 블록 원문:
~~~~js
 285 | function renderMeetings(list) {
 286 |   searchResultText.textContent = buildResultMessage(list.length);
 287 | 
 288 |   if (list.length === 0) {
 289 |     meetingList.innerHTML =
 290 |       '<div class="empty-state">조건에 맞는 모임이 없습니다.</div>';
 291 |     return;
 292 |   }
 293 | 
 294 |   meetingList.innerHTML = list.map(createMeetingCard).join("");
 295 | }
 296 | 
~~~~
- 이 블록이 하는 일: 검색 결과 목록을 화면에 그린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 10. 함수 `renderMyMeetings()`
- 범위: 297~308줄
- 블록 원문:
~~~~js
 297 | function renderMyMeetings() {
 298 |   const myList = meetings.filter((item) => item.mine);
 299 | 
 300 |   if (myList.length === 0) {
 301 |     myMeetingList.innerHTML =
 302 |       '<div class="empty-state">아직 참여한 모임이 없습니다.</div>';
 303 |     return;
 304 |   }
 305 | 
 306 |   myMeetingList.innerHTML = myList.map(createMeetingCard).join("");
 307 | }
 308 | 
~~~~
- 이 블록이 하는 일: 내가 참여 중인 모임만 따로 그린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 11. 함수 `renderManagedMeetings()`
- 범위: 309~322줄
- 블록 원문:
~~~~js
 309 | function renderManagedMeetings() {
 310 |   const managedList = meetings.filter((item) => item.createdByMe);
 311 | 
 312 |   if (managedList.length === 0) {
 313 |     managedMeetingList.innerHTML =
 314 |       '<div class="empty-state">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';
 315 |     return;
 316 |   }
 317 | 
 318 |   managedMeetingList.innerHTML = managedList
 319 |     .map((item) => createMeetingCard(item, "manage"))
 320 |     .join("");
 321 | }
 322 | 
~~~~
- 이 블록이 하는 일: 내가 만든 모임만 관리용 버튼과 함께 그린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 12. 함수 `getQuickFilterLabel()`
- 범위: 323~338줄
- 블록 원문:
~~~~js
 323 | function getQuickFilterLabel(filterName) {
 324 |   const labels = {
 325 |     recommend: "추천",
 326 |     today: "당일",
 327 |     small: "소규모",
 328 |     weekend: "주말",
 329 |     campus: "캠퍼스",
 330 |     sports: "운동",
 331 |     study: "공부",
 332 |     social: "취향",
 333 |     mine: "내 모임",
 334 |   };
 335 | 
 336 |   return labels[filterName] || "추천";
 337 | }
 338 | 
~~~~
- 이 블록이 하는 일: 빠른 필터 이름을 화면 문구로 바꾼다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 13. 함수 `getNearestMeetingDate()`
- 범위: 339~348줄
- 블록 원문:
~~~~js
 339 | function getNearestMeetingDate(list) {
 340 |   const uniqueDates = [...new Set(list.map((item) => item.date))];
 341 | 
 342 |   if (uniqueDates.length === 0) {
 343 |     return null;
 344 |   }
 345 | 
 346 |   return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];
 347 | }
 348 | 
~~~~
- 이 블록이 하는 일: 가장 빠른 모임 날짜를 구한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 14. 함수 `matchesWeekend()`
- 범위: 349~353줄
- 블록 원문:
~~~~js
 349 | function matchesWeekend(item) {
 350 |   const day = new Date(item.date).getDay();
 351 |   return day === 0 || day === 6;
 352 | }
 353 | 
~~~~
- 이 블록이 하는 일: 해당 모임이 주말 날짜인지 검사한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 15. 함수 `applyQuickFilterRule()`
- 범위: 354~376줄
- 블록 원문:
~~~~js
 354 | function applyQuickFilterRule(list) {
 355 |   if (activeQuickFilter === "today") {
 356 |     const nearestDate = getNearestMeetingDate(list);
 357 |     return nearestDate ? list.filter((item) => item.date === nearestDate) : list;
 358 |   }
 359 | 
 360 |   if (activeQuickFilter === "small") {
 361 |     return list.filter((item) => item.capacity <= 8);
 362 |   }
 363 | 
 364 |   if (activeQuickFilter === "weekend") {
 365 |     return list.filter(matchesWeekend);
 366 |   }
 367 | 
 368 |   if (activeQuickFilter === "social") {
 369 |     return list.filter(
 370 |       (item) => item.category === "친목" || item.category === "게임"
 371 |     );
 372 |   }
 373 | 
 374 |   return list;
 375 | }
 376 | 
~~~~
- 이 블록이 하는 일: 빠른 필터 규칙을 실제 목록 필터로 적용한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 16. 함수 `syncQuickFilterUi()`
- 범위: 377~385줄
- 블록 원문:
~~~~js
 377 | function syncQuickFilterUi() {
 378 |   quickFilterButtons.forEach((button) => {
 379 |     const isActive = button.dataset.quickFilter === activeQuickFilter;
 380 |     button.classList.toggle("is-active", isActive);
 381 |     button.classList.toggle("is-current", isActive);
 382 |     button.setAttribute("aria-pressed", String(isActive));
 383 |   });
 384 | }
 385 | 
~~~~
- 이 블록이 하는 일: 선택된 빠른 필터 버튼의 활성 상태를 맞춘다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 17. 함수 `buildResultMessage()`
- 범위: 386~394줄
- 블록 원문:
~~~~js
 386 | function buildResultMessage(count) {
 387 |   const prefix =
 388 |     activeQuickFilter === "recommend"
 389 |       ? "현재 조건에 맞는"
 390 |       : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;
 391 | 
 392 |   return `${prefix} 모임은 ${count}개입니다.`;
 393 | }
 394 | 
~~~~
- 이 블록이 하는 일: 검색 결과 상단의 안내 문구를 만든다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 18. 함수 `getFeaturedMeetings()`
- 범위: 395~401줄
- 블록 원문:
~~~~js
 395 | function getFeaturedMeetings() {
 396 |   const openMeetings = meetings.filter((item) => item.joined < item.capacity);
 397 |   const baseList = openMeetings.length > 0 ? openMeetings : meetings;
 398 | 
 399 |   return sortMeetings(baseList, "popular").slice(0, 6);
 400 | }
 401 | 
~~~~
- 이 블록이 하는 일: 추천 배너에 쓸 상위 모임 목록을 계산한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 19. 함수 `getCurrentFeaturedMeeting()`
- 범위: 402~415줄
- 블록 원문:
~~~~js
 402 | function getCurrentFeaturedMeeting() {
 403 |   const featured = getFeaturedMeetings();
 404 | 
 405 |   if (featured.length === 0) {
 406 |     return null;
 407 |   }
 408 | 
 409 |   if (featuredMeetingIndex >= featured.length) {
 410 |     featuredMeetingIndex = 0;
 411 |   }
 412 | 
 413 |   return featured[featuredMeetingIndex];
 414 | }
 415 | 
~~~~
- 이 블록이 하는 일: 현재 추천 배너의 주인공 모임을 반환한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 20. 함수 `renderFeaturedSection()`
- 범위: 416~477줄
- 블록 원문:
~~~~js
 416 | function renderFeaturedSection() {
 417 |   const featured = getFeaturedMeetings();
 418 | 
 419 |   if (featured.length === 0) {
 420 |     heroKicker.textContent = "추천 모임 준비 중";
 421 |     heroTitle.textContent = "새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.";
 422 |     heroDescription.textContent =
 423 |       "아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.";
 424 |     heroPageIndicator.textContent = "추천 0 / 0";
 425 |     heroDetailButton.disabled = true;
 426 |     heroJoinButton.disabled = true;
 427 |     heroJoinButton.textContent = "바로 참여";
 428 |     heroPrevButton.disabled = true;
 429 |     heroNextButton.disabled = true;
 430 |     featuredTeaserList.innerHTML = "";
 431 |     return;
 432 |   }
 433 | 
 434 |   const current = getCurrentFeaturedMeeting();
 435 |   const teaserItems = Array.from(
 436 |     { length: Math.min(featured.length, 3) },
 437 |     (_, index) => featured[(featuredMeetingIndex + index) % featured.length]
 438 |   );
 439 |   const isClosed = current.joined >= current.capacity;
 440 | 
 441 |   heroKicker.textContent = `${current.location} · ${current.category} 추천`;
 442 |   heroTitle.textContent = current.title;
 443 |   heroDescription.textContent = `${current.description} ${formatDate(
 444 |     current.date
 445 |   )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;
 446 |   heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${
 447 |     featured.length
 448 |   }`;
 449 |   heroDetailButton.disabled = false;
 450 |   heroJoinButton.disabled = current.mine || isClosed;
 451 |   heroJoinButton.textContent = current.mine
 452 |     ? "참여 완료"
 453 |     : isClosed
 454 |     ? "모집 마감"
 455 |     : "바로 참여";
 456 |   heroPrevButton.disabled = featured.length <= 1;
 457 |   heroNextButton.disabled = featured.length <= 1;
 458 | 
 459 |   featuredTeaserList.innerHTML = teaserItems
 460 |     .map(
 461 |       (item, index) => `
 462 |         <button
 463 |           class="hero-teaser-card ${index === 0 ? "wide" : ""} ${
 464 |             item.id === current.id ? "is-active" : ""
 465 |           }"
 466 |           type="button"
 467 |           data-featured-id="${item.id}"
 468 |         >
 469 |           <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>
 470 |           <strong>${escapeHtml(item.title)}</strong>
 471 |         </button>
 472 |       `
 473 |     )
 474 |     .join("");
 475 | }
 476 | 
 477 | // 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.
~~~~
- 이 블록이 하는 일: 추천 배너의 제목, 설명, 버튼, 미리보기 카드를 갱신한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 21. 함수 `getFilteredMeetings()`
- 범위: 478~500줄
- 블록 원문:
~~~~js
 478 | function getFilteredMeetings() {
 479 |   const keyword = keywordInput.value.trim().toLowerCase();
 480 |   const category = categorySelect.value;
 481 |   const location = locationSelect.value;
 482 |   const status = statusFilter.value;
 483 |   const sort = sortOrder.value;
 484 | 
 485 |   const filtered = meetings.filter((item) => {
 486 |     const matchesKeyword = item.title.toLowerCase().includes(keyword);
 487 |     const matchesCategory = category === "all" || item.category === category;
 488 |     const matchesLocation = location === "all" || item.location === location;
 489 |     const matchesStatus =
 490 |       status === "all" ||
 491 |       (status === "open" && item.joined < item.capacity) ||
 492 |       (status === "mine" && item.mine) ||
 493 |       (status === "closed" && item.joined >= item.capacity);
 494 | 
 495 |     return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
 496 |   });
 497 | 
 498 |   return sortMeetings(applyQuickFilterRule(filtered), sort);
 499 | }
 500 | 
~~~~
- 이 블록이 하는 일: 검색 폼 값과 빠른 필터를 함께 적용해 결과 목록을 만든다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 22. 함수 `applyFiltersAndRender()`
- 범위: 501~504줄
- 블록 원문:
~~~~js
 501 | function applyFiltersAndRender() {
 502 |   renderMeetings(getFilteredMeetings());
 503 | }
 504 | 
~~~~
- 이 블록이 하는 일: 현재 조건으로 다시 검색하고 목록을 그린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 23. 함수 `resetFilters()`
- 범위: 505~512줄
- 블록 원문:
~~~~js
 505 | function resetFilters() {
 506 |   searchForm.reset();
 507 |   activeQuickFilter = "recommend";
 508 |   applyQuickPreset(activeQuickFilter);
 509 |   applyFiltersAndRender();
 510 |   syncQuickFilterUi();
 511 | }
 512 | 
~~~~
- 이 블록이 하는 일: 검색 폼과 빠른 필터 상태를 처음 값으로 되돌린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 24. 함수 `applyQuickPreset()`
- 범위: 513~536줄
- 블록 원문:
~~~~js
 513 | function applyQuickPreset(filterName) {
 514 |   keywordInput.value = "";
 515 |   categorySelect.value = "all";
 516 |   locationSelect.value = "all";
 517 |   statusFilter.value = "all";
 518 |   sortOrder.value = filterName === "recommend" ? "popular" : "soon";
 519 | 
 520 |   if (filterName === "campus") {
 521 |     locationSelect.value = "캠퍼스";
 522 |   }
 523 | 
 524 |   if (filterName === "sports") {
 525 |     categorySelect.value = "운동";
 526 |   }
 527 | 
 528 |   if (filterName === "study") {
 529 |     categorySelect.value = "공부";
 530 |   }
 531 | 
 532 |   if (filterName === "mine") {
 533 |     statusFilter.value = "mine";
 534 |   }
 535 | }
 536 | 
~~~~
- 이 블록이 하는 일: 빠른 필터에 맞게 검색 폼 값을 미리 채운다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 25. 함수 `applyQuickFilter()`
- 범위: 537~544줄
- 블록 원문:
~~~~js
 537 | function applyQuickFilter(filterName) {
 538 |   activeQuickFilter = filterName;
 539 |   applyQuickPreset(filterName);
 540 |   applyFiltersAndRender();
 541 |   syncQuickFilterUi();
 542 |   document.querySelector("#search").scrollIntoView({ behavior: "smooth" });
 543 | }
 544 | 
~~~~
- 이 블록이 하는 일: 빠른 필터를 선택하고 검색 영역으로 스크롤한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 26. 함수 `handleQuickAction()`
- 범위: 545~550줄
- 블록 원문:
~~~~js
 545 | function handleQuickAction(actionName) {
 546 |   if (actionName === "create") {
 547 |     document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 548 |   }
 549 | }
 550 | 
~~~~
- 이 블록이 하는 일: 빠른 타일의 특수 동작을 처리한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 27. 함수 `moveFeaturedMeeting()`
- 범위: 551~562줄
- 블록 원문:
~~~~js
 551 | function moveFeaturedMeeting(step) {
 552 |   const featured = getFeaturedMeetings();
 553 | 
 554 |   if (featured.length <= 1) {
 555 |     return;
 556 |   }
 557 | 
 558 |   featuredMeetingIndex =
 559 |     (featuredMeetingIndex + step + featured.length) % featured.length;
 560 |   renderFeaturedSection();
 561 | }
 562 | 
~~~~
- 이 블록이 하는 일: 추천 배너를 이전/다음 항목으로 이동한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 28. 함수 `selectFeaturedMeeting()`
- 범위: 563~574줄
- 블록 원문:
~~~~js
 563 | function selectFeaturedMeeting(id) {
 564 |   const featured = getFeaturedMeetings();
 565 |   const nextIndex = featured.findIndex((item) => item.id === id);
 566 | 
 567 |   if (nextIndex === -1) {
 568 |     return;
 569 |   }
 570 | 
 571 |   featuredMeetingIndex = nextIndex;
 572 |   renderFeaturedSection();
 573 | }
 574 | 
~~~~
- 이 블록이 하는 일: 미리보기 카드 클릭으로 추천 배너 항목을 바꾼다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 29. 함수 `getFormValues()`
- 범위: 575~588줄
- 블록 원문:
~~~~js
 575 | function getFormValues() {
 576 |   return {
 577 |     title: document.querySelector("#newTitle").value.trim(),
 578 |     category: document.querySelector("#newCategory").value,
 579 |     location: document.querySelector("#newLocation").value,
 580 |     date: document.querySelector("#newDate").value,
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
 583 |     fee: document.querySelector("#newFee").value.trim(),
 584 |     description: document.querySelector("#newDescription").value.trim(),
 585 |   };
 586 | }
 587 | 
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
~~~~
- 이 블록이 하는 일: 모임 생성/수정 폼의 현재 입력값을 읽는다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 30. 함수 `resetFormState()`
- 범위: 589~599줄
- 블록 원문:
~~~~js
 589 | function resetFormState() {
 590 |   editingMeetingId = null;
 591 |   createForm.reset();
 592 |   formTitle.textContent = "폼으로 새 모임 추가하기";
 593 |   formModeText.textContent =
 594 |     "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
 595 |   submitButton.textContent = "모임 추가";
 596 |   cancelEditButton.classList.add("is-hidden");
 597 | }
 598 | 
 599 | // 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
~~~~
- 이 블록이 하는 일: 폼을 추가 모드 초기 상태로 되돌린다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 31. 함수 `startEditMeeting()`
- 범위: 600~626줄
- 블록 원문:
~~~~js
 600 | function startEditMeeting(id) {
 601 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 602 | 
 603 |   if (!selected) {
 604 |     return;
 605 |   }
 606 | 
 607 |   editingMeetingId = id;
 608 |   document.querySelector("#newTitle").value = selected.title;
 609 |   document.querySelector("#newCategory").value = selected.category;
 610 |   document.querySelector("#newLocation").value = selected.location;
 611 |   document.querySelector("#newDate").value = selected.date;
 612 |   document.querySelector("#newOrganizer").value = selected.organizer;
 613 |   document.querySelector("#newCapacity").value = selected.capacity;
 614 |   document.querySelector("#newFee").value = selected.fee;
 615 |   document.querySelector("#newDescription").value = selected.description;
 616 | 
 617 |   formTitle.textContent = "기존 모임 수정하기";
 618 |   formModeText.textContent =
 619 |     "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
 620 |   submitButton.textContent = "수정 내용 저장";
 621 |   cancelEditButton.classList.remove("is-hidden");
 622 |   closeDetail();
 623 |   document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 624 | }
 625 | 
 626 | // editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
~~~~
- 이 블록이 하는 일: 선택한 모임 값을 폼에 넣고 수정 모드로 전환한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 32. 함수 `handleFormSubmit()`
- 범위: 627~658줄
- 블록 원문:
~~~~js
 627 | function handleFormSubmit(event) {
 628 |   event.preventDefault();
 629 | 
 630 |   const formValues = getFormValues();
 631 | 
 632 |   if (editingMeetingId !== null) {
 633 |     meetings = meetings.map((item) =>
 634 |       item.id === editingMeetingId
 635 |         ? normalizeMeeting({
 636 |             ...item,
 637 |             ...formValues,
 638 |             createdByMe: true,
 639 |           })
 640 |         : item
 641 |     );
 642 |   } else {
 643 |     const newMeeting = normalizeMeeting({
 644 |       id: Date.now(),
 645 |       ...formValues,
 646 |       joined: 1,
 647 |       mine: true,
 648 |       createdByMe: true,
 649 |     });
 650 | 
 651 |     meetings.unshift(newMeeting);
 652 |   }
 653 | 
 654 |   saveMeetings();
 655 |   resetFormState();
 656 |   renderAll();
 657 | }
 658 | 
~~~~
- 이 블록이 하는 일: 폼 제출 시 추가 또는 수정을 수행한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 33. 함수 `getSeatMessage()`
- 범위: 659~663줄
- 블록 원문:
~~~~js
 659 | function getSeatMessage(item) {
 660 |   const remaining = item.capacity - item.joined;
 661 |   return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
 662 | }
 663 | 
~~~~
- 이 블록이 하는 일: 남은 자리 문구를 계산한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 34. 함수 `formatDate()`
- 범위: 664~668줄
- 블록 원문:
~~~~js
 664 | function formatDate(value) {
 665 |   const date = new Date(value);
 666 |   return date.toLocaleDateString("ko-KR");
 667 | }
 668 | 
~~~~
- 이 블록이 하는 일: 날짜 문자열을 한국어 날짜 표시로 바꾼다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 35. 함수 `sortMeetings()`
- 범위: 669~688줄
- 블록 원문:
~~~~js
 669 | function sortMeetings(list, sort) {
 670 |   const sorted = [...list];
 671 | 
 672 |   if (sort === "late") {
 673 |     return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
 674 |   }
 675 | 
 676 |   if (sort === "seats") {
 677 |     return sorted.sort(
 678 |       (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
 679 |     );
 680 |   }
 681 | 
 682 |   if (sort === "popular") {
 683 |     return sorted.sort((a, b) => b.joined - a.joined);
 684 |   }
 685 | 
 686 |   return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
 687 | }
 688 | 
~~~~
- 이 블록이 하는 일: 필터링된 목록을 선택된 기준으로 정렬한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 36. 함수 `truncateText()`
- 범위: 689~692줄
- 블록 원문:
~~~~js
 689 | function truncateText(text, maxLength) {
 690 |   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
 691 | }
 692 | 
~~~~
- 이 블록이 하는 일: 긴 설명을 카드용 짧은 문장으로 자른다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 37. 함수 `escapeHtml()`
- 범위: 693~702줄
- 블록 원문:
~~~~js
 693 | function escapeHtml(value) {
 694 |   return value
 695 |     .replaceAll("&", "&amp;")
 696 |     .replaceAll("<", "&lt;")
 697 |     .replaceAll(">", "&gt;")
 698 |     .replaceAll('"', "&quot;")
 699 |     .replaceAll("'", "&#39;");
 700 | }
 701 | 
 702 | // 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
~~~~
- 이 블록이 하는 일: HTML 문자열 주입 시 특수문자를 이스케이프한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 38. 함수 `joinMeeting()`
- 범위: 703~726줄
- 블록 원문:
~~~~js
 703 | function joinMeeting(id) {
 704 |   const selected = meetings.find((item) => item.id === id);
 705 | 
 706 |   if (!selected) {
 707 |     return;
 708 |   }
 709 | 
 710 |   if (selected.joined >= selected.capacity) {
 711 |     alert("이미 모집이 끝난 모임입니다.");
 712 |     return;
 713 |   }
 714 | 
 715 |   if (selected.mine) {
 716 |     alert("이미 참여한 모임입니다.");
 717 |     return;
 718 |   }
 719 | 
 720 |   selected.joined += 1;
 721 |   selected.mine = true;
 722 |   saveMeetings();
 723 |   renderAll();
 724 | }
 725 | 
 726 | // 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
~~~~
- 이 블록이 하는 일: 참여 가능한 모임에 사용자 참여를 반영한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 39. 함수 `deleteMeeting()`
- 범위: 727~756줄
- 블록 원문:
~~~~js
 727 | function deleteMeeting(id) {
 728 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 729 | 
 730 |   if (!selected) {
 731 |     return;
 732 |   }
 733 | 
 734 |   const isConfirmed = window.confirm(
 735 |     `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
 736 |   );
 737 | 
 738 |   if (!isConfirmed) {
 739 |     return;
 740 |   }
 741 | 
 742 |   meetings = meetings.filter((item) => item.id !== id);
 743 | 
 744 |   if (editingMeetingId === id) {
 745 |     resetFormState();
 746 |   }
 747 | 
 748 |   if (dialogMeetingId === id) {
 749 |     closeDetail();
 750 |   }
 751 | 
 752 |   saveMeetings();
 753 |   renderAll();
 754 | }
 755 | 
 756 | // 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
~~~~
- 이 블록이 하는 일: 확인창 후 모임을 삭제한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 40. 함수 `openDetail()`
- 범위: 757~795줄
- 블록 원문:
~~~~js
 757 | function openDetail(id) {
 758 |   const selected = meetings.find((item) => item.id === id);
 759 | 
 760 |   if (!selected) {
 761 |     return;
 762 |   }
 763 | 
 764 |   dialogTitle.textContent = selected.title;
 765 |   dialogMeta.innerHTML = [
 766 |     `카테고리 ${escapeHtml(selected.category)}`,
 767 |     `지역 ${escapeHtml(selected.location)}`,
 768 |     `주최자 ${escapeHtml(selected.organizer)}`,
 769 |     `날짜 ${formatDate(selected.date)}`,
 770 |     `참가비 ${escapeHtml(selected.fee)}`,
 771 |     `참여 ${selected.joined}/${selected.capacity}`,
 772 |   ]
 773 |     .map((text) => `<span class="meta-chip">${text}</span>`)
 774 |     .join("");
 775 |   dialogDescription.textContent = selected.description;
 776 |   dialogMeetingId = id;
 777 | 
 778 |   if (selected.createdByMe) {
 779 |     dialogOwnerActions.classList.remove("is-hidden");
 780 |   } else {
 781 |     dialogOwnerActions.classList.add("is-hidden");
 782 |   }
 783 | 
 784 |   if (detailDialog.open) {
 785 |     return;
 786 |   }
 787 | 
 788 |   if (typeof detailDialog.showModal === "function") {
 789 |     detailDialog.showModal();
 790 |     return;
 791 |   }
 792 | 
 793 |   detailDialog.setAttribute("open", "open");
 794 | }
 795 | 
~~~~
- 이 블록이 하는 일: 상세 팝업에 모임 데이터를 채워 넣고 연다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 41. 함수 `closeDetail()`
- 범위: 796~806줄
- 블록 원문:
~~~~js
 796 | function closeDetail() {
 797 |   if (detailDialog.open && typeof detailDialog.close === "function") {
 798 |     detailDialog.close();
 799 |   } else if (detailDialog.hasAttribute("open")) {
 800 |     detailDialog.removeAttribute("open");
 801 |   }
 802 | 
 803 |   dialogMeetingId = null;
 804 | }
 805 | 
 806 | // 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
~~~~
- 이 블록이 하는 일: 상세 팝업을 닫고 상태값을 비운다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 42. 함수 `renderAll()`
- 범위: 807~877줄
- 블록 원문:
~~~~js
 807 | function renderAll() {
 808 |   renderStatus();
 809 |   renderFeaturedSection();
 810 |   applyFiltersAndRender();
 811 |   renderMyMeetings();
 812 |   renderManagedMeetings();
 813 |   syncQuickFilterUi();
 814 | }
 815 | 
 816 | // 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
 817 | searchForm.addEventListener("submit", (event) => {
 818 |   event.preventDefault();
 819 |   applyFiltersAndRender();
 820 | });
 821 | 
 822 | resetButton.addEventListener("click", resetFilters);
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
 825 | createForm.addEventListener("submit", handleFormSubmit);
 826 | cancelEditButton.addEventListener("click", resetFormState);
 827 | closeDialogButton.addEventListener("click", closeDetail);
 828 | dialogEditButton.addEventListener("click", () => {
 829 |   if (dialogMeetingId !== null) {
 830 |     startEditMeeting(dialogMeetingId);
 831 |   }
 832 | });
 833 | dialogDeleteButton.addEventListener("click", () => {
 834 |   if (dialogMeetingId !== null) {
 835 |     deleteMeeting(dialogMeetingId);
 836 |   }
 837 | });
 838 | heroDetailButton.addEventListener("click", () => {
 839 |   const featured = getCurrentFeaturedMeeting();
 840 | 
 841 |   if (featured) {
 842 |     openDetail(featured.id);
 843 |   }
 844 | });
 845 | heroJoinButton.addEventListener("click", () => {
 846 |   const featured = getCurrentFeaturedMeeting();
 847 | 
 848 |   if (featured) {
 849 |     joinMeeting(featured.id);
 850 |   }
 851 | });
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
 854 | featuredTeaserList.addEventListener("click", (event) => {
 855 |   const card = event.target.closest("[data-featured-id]");
 856 | 
 857 |   if (!card) {
 858 |     return;
 859 |   }
 860 | 
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
 862 | });
 863 | quickFilterButtons.forEach((button) => {
 864 |   button.addEventListener("click", () =>
 865 |     applyQuickFilter(button.dataset.quickFilter)
 866 |   );
 867 | });
 868 | quickActionButtons.forEach((button) => {
 869 |   button.addEventListener("click", () =>
 870 |     handleQuickAction(button.dataset.quickAction)
 871 |   );
 872 | });
 873 | 
 874 | saveMeetings();
 875 | resetFormState();
 876 | applyQuickPreset(activeQuickFilter);
 877 | renderAll();
~~~~
- 이 블록이 하는 일: 화면의 주요 영역을 한 번에 다시 렌더링한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 블록 43. 이벤트 리스너 등록과 초기 실행
- 범위: 817~877줄
- 블록 원문:
~~~~js
 817 | searchForm.addEventListener("submit", (event) => {
 818 |   event.preventDefault();
 819 |   applyFiltersAndRender();
 820 | });
 821 | 
 822 | resetButton.addEventListener("click", resetFilters);
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
 825 | createForm.addEventListener("submit", handleFormSubmit);
 826 | cancelEditButton.addEventListener("click", resetFormState);
 827 | closeDialogButton.addEventListener("click", closeDetail);
 828 | dialogEditButton.addEventListener("click", () => {
 829 |   if (dialogMeetingId !== null) {
 830 |     startEditMeeting(dialogMeetingId);
 831 |   }
 832 | });
 833 | dialogDeleteButton.addEventListener("click", () => {
 834 |   if (dialogMeetingId !== null) {
 835 |     deleteMeeting(dialogMeetingId);
 836 |   }
 837 | });
 838 | heroDetailButton.addEventListener("click", () => {
 839 |   const featured = getCurrentFeaturedMeeting();
 840 | 
 841 |   if (featured) {
 842 |     openDetail(featured.id);
 843 |   }
 844 | });
 845 | heroJoinButton.addEventListener("click", () => {
 846 |   const featured = getCurrentFeaturedMeeting();
 847 | 
 848 |   if (featured) {
 849 |     joinMeeting(featured.id);
 850 |   }
 851 | });
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
 854 | featuredTeaserList.addEventListener("click", (event) => {
 855 |   const card = event.target.closest("[data-featured-id]");
 856 | 
 857 |   if (!card) {
 858 |     return;
 859 |   }
 860 | 
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
 862 | });
 863 | quickFilterButtons.forEach((button) => {
 864 |   button.addEventListener("click", () =>
 865 |     applyQuickFilter(button.dataset.quickFilter)
 866 |   );
 867 | });
 868 | quickActionButtons.forEach((button) => {
 869 |   button.addEventListener("click", () =>
 870 |     handleQuickAction(button.dataset.quickAction)
 871 |   );
 872 | });
 873 | 
 874 | saveMeetings();
 875 | resetFormState();
 876 | applyQuickPreset(activeQuickFilter);
 877 | renderAll();
~~~~
- 이 블록이 하는 일: 폼 제출, 버튼 클릭, 추천 배너 이동 같은 사용자 행동을 함수와 연결하고 첫 렌더링을 시작한다.
- 왜 필요한가: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 없으면 어떤 문제: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 연결되는 대상: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.

## 5. 기능 단위로 코드 보면서 설명
### 기능 1. 상수, 샘플 데이터, 상태값, DOM 참조
- 범위: 1~122줄
- 기능 원문:
~~~~js
   1 | const STORAGE_KEY = "moim-meetings-v2";
   2 | const CURRENT_USER = "운영자 A";
   3 | const legacyOrganizerMap = {
   4 |   장운수: "운영자 A",
   5 |   송유찬: "운영자 B",
   6 |   조소빈: "운영자 C",
   7 |   최요섭: "운영자 D",
   8 |   곽진우: "운영자 E",
   9 | };
  10 | const legacyLocationMap = {
  11 |   천안: "시내권",
  12 |   아산: "생활권",
  13 | };
  14 | 
  15 | // 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.
  16 | const defaultMeetings = [
  17 |   {
  18 |     id: 1,
  19 |     title: "주말 풋살 같이 하기",
  20 |     category: "운동",
  21 |     location: "시내권",
  22 |     date: "2026-03-20",
  23 |     capacity: 10,
  24 |     joined: 7,
  25 |     fee: "5,000원",
  26 |     organizer: "운영자 A",
  27 |     description:
  28 |       "주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.",
  29 |     mine: true,
  30 |     createdByMe: true,
  31 |   },
  32 |   {
  33 |     id: 2,
  34 |     title: "자료구조 스터디",
  35 |     category: "공부",
  36 |     location: "캠퍼스",
  37 |     date: "2026-03-18",
  38 |     capacity: 6,
  39 |     joined: 4,
  40 |     fee: "무료",
  41 |     organizer: "운영자 B",
  42 |     description:
  43 |       "자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.",
  44 |     mine: true,
  45 |     createdByMe: false,
  46 |   },
  47 |   {
  48 |     id: 3,
  49 |     title: "보드게임 번개 모임",
  50 |     category: "게임",
  51 |     location: "생활권",
  52 |     date: "2026-03-22",
  53 |     capacity: 8,
  54 |     joined: 5,
  55 |     fee: "3,000원",
  56 |     organizer: "운영자 C",
  57 |     description:
  58 |       "카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.",
  59 |     mine: false,
  60 |     createdByMe: false,
  61 |   },
  62 |   {
  63 |     id: 4,
  64 |     title: "카페 탐방 친목 모임",
  65 |     category: "친목",
  66 |     location: "시내권",
  67 |     date: "2026-03-25",
  68 |     capacity: 12,
  69 |     joined: 9,
  70 |     fee: "각자 결제",
  71 |     organizer: "운영자 D",
  72 |     description:
  73 |       "시내권 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.",
  74 |     mine: false,
  75 |     createdByMe: false,
  76 |   },
  77 | ];
  78 | 
  79 | let meetings = loadMeetings();
  80 | let editingMeetingId = null;
  81 | let dialogMeetingId = null;
  82 | let activeQuickFilter = "recommend";
  83 | let featuredMeetingIndex = 0;
  84 | 
  85 | const statusCards = document.querySelector("#statusCards");
  86 | const meetingList = document.querySelector("#meetingList");
  87 | const myMeetingList = document.querySelector("#myMeetingList");
  88 | const managedMeetingList = document.querySelector("#managedMeetingList");
  89 | const searchForm = document.querySelector("#searchForm");
  90 | const createForm = document.querySelector("#createForm");
  91 | const resetButton = document.querySelector("#resetButton");
  92 | const searchResultText = document.querySelector("#searchResultText");
  93 | const statusFilter = document.querySelector("#statusFilter");
  94 | const sortOrder = document.querySelector("#sortOrder");
  95 | const formTitle = document.querySelector("#formTitle");
  96 | const formModeText = document.querySelector("#formModeText");
  97 | const submitButton = document.querySelector("#submitButton");
  98 | const cancelEditButton = document.querySelector("#cancelEditButton");
  99 | const detailDialog = document.querySelector("#detailDialog");
 100 | const closeDialogButton = document.querySelector("#closeDialogButton");
 101 | const dialogTitle = document.querySelector("#dialogTitle");
 102 | const dialogMeta = document.querySelector("#dialogMeta");
 103 | const dialogDescription = document.querySelector("#dialogDescription");
 104 | const dialogOwnerActions = document.querySelector("#dialogOwnerActions");
 105 | const dialogEditButton = document.querySelector("#dialogEditButton");
 106 | const dialogDeleteButton = document.querySelector("#dialogDeleteButton");
 107 | const keywordInput = document.querySelector("#keyword");
 108 | const categorySelect = document.querySelector("#category");
 109 | const locationSelect = document.querySelector("#location");
 110 | const heroKicker = document.querySelector("#heroKicker");
 111 | const heroTitle = document.querySelector("#heroTitle");
 112 | const heroDescription = document.querySelector("#heroDescription");
 113 | const heroDetailButton = document.querySelector("#heroDetailButton");
 114 | const heroJoinButton = document.querySelector("#heroJoinButton");
 115 | const heroPrevButton = document.querySelector("#heroPrevButton");
 116 | const heroNextButton = document.querySelector("#heroNextButton");
 117 | const heroPageIndicator = document.querySelector("#heroPageIndicator");
 118 | const featuredTeaserList = document.querySelector("#featuredTeaserList");
 119 | const quickFilterButtons = document.querySelectorAll("[data-quick-filter]");
 120 | const quickActionButtons = document.querySelectorAll("[data-quick-action]");
 121 | 
 122 | function getDefaultMeetings() {
~~~~
- 이 기능이 하는 일: 프로젝트가 사용할 기본 데이터와 화면 요소 참조를 준비하는 구간이다.
- 사용자에게 어떻게 보이는가: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 실행 흐름에서의 역할: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 연결되는 파일/요소: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 기능 2. 데이터 정규화와 브라우저 저장
- 범위: 122~194줄
- 기능 원문:
~~~~js
 122 | function getDefaultMeetings() {
 123 |   return defaultMeetings.map((item) => ({ ...item }));
 124 | }
 125 | 
 126 | function normalizeMeeting(item) {
 127 |   const organizer = normalizeOrganizerName(item.organizer);
 128 |   const location = normalizeLocationName(item.location);
 129 | 
 130 |   return {
 131 |     id: item.id ?? Date.now(),
 132 |     title: item.title ?? "제목 없음",
 133 |     category: item.category ?? "친목",
 134 |     location: location ?? "캠퍼스",
 135 |     date: item.date ?? new Date().toISOString().slice(0, 10),
 136 |     capacity: Number(item.capacity) || 10,
 137 |     joined: Number(item.joined) || 0,
 138 |     fee: item.fee || "미정",
 139 |     organizer,
 140 |     description: item.description || "설명이 아직 없습니다.",
 141 |     mine: Boolean(item.mine),
 142 |     createdByMe: Boolean(
 143 |       item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))
 144 |     ),
 145 |   };
 146 | }
 147 | 
 148 | function normalizeOrganizerName(value) {
 149 |   if (!value) {
 150 |     return "미정";
 151 |   }
 152 | 
 153 |   return legacyOrganizerMap[value] || value;
 154 | }
 155 | 
 156 | function normalizeLocationName(value) {
 157 |   if (!value) {
 158 |     return "캠퍼스";
 159 |   }
 160 | 
 161 |   return legacyLocationMap[value] || value;
 162 | }
 163 | 
 164 | // 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.
 165 | function loadMeetings() {
 166 |   try {
 167 |     const stored = localStorage.getItem(STORAGE_KEY);
 168 | 
 169 |     if (!stored) {
 170 |       return getDefaultMeetings();
 171 |     }
 172 | 
 173 |     const parsed = JSON.parse(stored);
 174 | 
 175 |     if (!Array.isArray(parsed)) {
 176 |       return getDefaultMeetings();
 177 |     }
 178 | 
 179 |     return parsed.map(normalizeMeeting);
 180 |   } catch (error) {
 181 |     return getDefaultMeetings();
 182 |   }
 183 | }
 184 | 
 185 | function saveMeetings() {
 186 |   try {
 187 |     localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
 188 |   } catch (error) {
 189 |     console.error("브라우저 저장에 실패했습니다.", error);
 190 |   }
 191 | }
 192 | 
 193 | // 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.
 194 | function renderStatus() {
~~~~
- 이 기능이 하는 일: 초기 데이터 복사, 예전 이름 보정, localStorage 불러오기/저장을 처리한다.
- 사용자에게 어떻게 보이는가: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 실행 흐름에서의 역할: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 연결되는 파일/요소: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 기능 3. 상태 카드와 카드 렌더링
- 범위: 194~877줄
- 기능 원문:
~~~~js
 194 | function renderStatus() {
 195 |   const totalMeetings = meetings.length;
 196 |   const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);
 197 |   const mine = meetings.filter((item) => item.mine).length;
 198 |   const openSeats = meetings.reduce(
 199 |     (sum, item) => sum + (item.capacity - item.joined),
 200 |     0
 201 |   );
 202 | 
 203 |   const items = [
 204 |     { label: "전체 모임", value: `${totalMeetings}개` },
 205 |     { label: "참여 인원", value: `${totalMembers}명` },
 206 |     { label: "내 모임", value: `${mine}개` },
 207 |     { label: "남은 자리", value: `${openSeats}석` },
 208 |   ];
 209 | 
 210 |   statusCards.innerHTML = items
 211 |     .map(
 212 |       (item) => `
 213 |         <article class="status-card">
 214 |           <p>${item.label}</p>
 215 |           <strong>${item.value}</strong>
 216 |         </article>
 217 |       `
 218 |     )
 219 |     .join("");
 220 | }
 221 | 
 222 | // 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.
 223 | function createMeetingCard(item, mode = "default") {
 224 |   const isClosed = item.joined >= item.capacity;
 225 |   const actionLabel = item.mine ? "참여 완료" : isClosed ? "모집 마감" : "참여하기";
 226 |   const archiveCode = `ARCHIVE ${String(item.id).padStart(2, "0")}`;
 227 |   const primaryLabel =
 228 |     mode === "manage" ? "운영중" : item.mine ? "참여중" : isClosed ? "마감" : "추천";
 229 |   const actionButtons =
 230 |     mode === "manage"
 231 |       ? `
 232 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 233 |             상세
 234 |           </button>
 235 |           <button class="button secondary" type="button" onclick="startEditMeeting(${item.id})">
 236 |             수정
 237 |           </button>
 238 |           <button class="button danger" type="button" onclick="deleteMeeting(${item.id})">
 239 |             삭제
 240 |           </button>
 241 |         `
 242 |       : `
 243 |           <button class="button ghost" type="button" onclick="openDetail(${item.id})">
 244 |             상세
 245 |           </button>
 246 |           <button
 247 |             class="button secondary"
 248 |             type="button"
 249 |             onclick="joinMeeting(${item.id})"
 250 |             ${item.mine || isClosed ? "disabled" : ""}
 251 |           >
 252 |             ${actionLabel}
 253 |           </button>
 254 |         `;
 255 | 
 256 |   return `
 257 |     <article class="meeting-card">
 258 |       <div class="card-poster">
 259 |         <div class="card-pills">
 260 |           <span class="card-pill primary">${primaryLabel}</span>
 261 |           ${item.createdByMe ? '<span class="card-pill">개설</span>' : ""}
 262 |         </div>
 263 |         <span class="card-code">${archiveCode}</span>
 264 |       </div>
 265 |       <div class="card-copy">
 266 |         <p class="card-location">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>
 267 |         <h3>${escapeHtml(item.title)}</h3>
 268 |         <p class="description-preview">${escapeHtml(truncateText(item.description, 42))}</p>
 269 |         <div class="meta-row">
 270 |           <span class="meta-chip">주최 ${escapeHtml(item.organizer)}</span>
 271 |           <span class="meta-chip">참여 ${item.joined}/${item.capacity}</span>
 272 |           <span class="meta-chip">${escapeHtml(item.fee)}</span>
 273 |         </div>
 274 |         <div class="card-footer">
 275 |           <p class="card-schedule">${formatDate(item.date)} · ${getSeatMessage(item)}</p>
 276 |           <div class="card-actions">
 277 |             ${actionButtons}
 278 |           </div>
 279 |         </div>
 280 |       </div>
 281 |     </article>
 282 |   `;
 283 | }
 284 | 
 285 | function renderMeetings(list) {
 286 |   searchResultText.textContent = buildResultMessage(list.length);
 287 | 
 288 |   if (list.length === 0) {
 289 |     meetingList.innerHTML =
 290 |       '<div class="empty-state">조건에 맞는 모임이 없습니다.</div>';
 291 |     return;
 292 |   }
 293 | 
 294 |   meetingList.innerHTML = list.map(createMeetingCard).join("");
 295 | }
 296 | 
 297 | function renderMyMeetings() {
 298 |   const myList = meetings.filter((item) => item.mine);
 299 | 
 300 |   if (myList.length === 0) {
 301 |     myMeetingList.innerHTML =
 302 |       '<div class="empty-state">아직 참여한 모임이 없습니다.</div>';
 303 |     return;
 304 |   }
 305 | 
 306 |   myMeetingList.innerHTML = myList.map(createMeetingCard).join("");
 307 | }
 308 | 
 309 | function renderManagedMeetings() {
 310 |   const managedList = meetings.filter((item) => item.createdByMe);
 311 | 
 312 |   if (managedList.length === 0) {
 313 |     managedMeetingList.innerHTML =
 314 |       '<div class="empty-state">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';
 315 |     return;
 316 |   }
 317 | 
 318 |   managedMeetingList.innerHTML = managedList
 319 |     .map((item) => createMeetingCard(item, "manage"))
 320 |     .join("");
 321 | }
 322 | 
 323 | function getQuickFilterLabel(filterName) {
 324 |   const labels = {
 325 |     recommend: "추천",
 326 |     today: "당일",
 327 |     small: "소규모",
 328 |     weekend: "주말",
 329 |     campus: "캠퍼스",
 330 |     sports: "운동",
 331 |     study: "공부",
 332 |     social: "취향",
 333 |     mine: "내 모임",
 334 |   };
 335 | 
 336 |   return labels[filterName] || "추천";
 337 | }
 338 | 
 339 | function getNearestMeetingDate(list) {
 340 |   const uniqueDates = [...new Set(list.map((item) => item.date))];
 341 | 
 342 |   if (uniqueDates.length === 0) {
 343 |     return null;
 344 |   }
 345 | 
 346 |   return uniqueDates.sort((a, b) => new Date(a) - new Date(b))[0];
 347 | }
 348 | 
 349 | function matchesWeekend(item) {
 350 |   const day = new Date(item.date).getDay();
 351 |   return day === 0 || day === 6;
 352 | }
 353 | 
 354 | function applyQuickFilterRule(list) {
 355 |   if (activeQuickFilter === "today") {
 356 |     const nearestDate = getNearestMeetingDate(list);
 357 |     return nearestDate ? list.filter((item) => item.date === nearestDate) : list;
 358 |   }
 359 | 
 360 |   if (activeQuickFilter === "small") {
 361 |     return list.filter((item) => item.capacity <= 8);
 362 |   }
 363 | 
 364 |   if (activeQuickFilter === "weekend") {
 365 |     return list.filter(matchesWeekend);
 366 |   }
 367 | 
 368 |   if (activeQuickFilter === "social") {
 369 |     return list.filter(
 370 |       (item) => item.category === "친목" || item.category === "게임"
 371 |     );
 372 |   }
 373 | 
 374 |   return list;
 375 | }
 376 | 
 377 | function syncQuickFilterUi() {
 378 |   quickFilterButtons.forEach((button) => {
 379 |     const isActive = button.dataset.quickFilter === activeQuickFilter;
 380 |     button.classList.toggle("is-active", isActive);
 381 |     button.classList.toggle("is-current", isActive);
 382 |     button.setAttribute("aria-pressed", String(isActive));
 383 |   });
 384 | }
 385 | 
 386 | function buildResultMessage(count) {
 387 |   const prefix =
 388 |     activeQuickFilter === "recommend"
 389 |       ? "현재 조건에 맞는"
 390 |       : `${getQuickFilterLabel(activeQuickFilter)} 기준으로 찾은`;
 391 | 
 392 |   return `${prefix} 모임은 ${count}개입니다.`;
 393 | }
 394 | 
 395 | function getFeaturedMeetings() {
 396 |   const openMeetings = meetings.filter((item) => item.joined < item.capacity);
 397 |   const baseList = openMeetings.length > 0 ? openMeetings : meetings;
 398 | 
 399 |   return sortMeetings(baseList, "popular").slice(0, 6);
 400 | }
 401 | 
 402 | function getCurrentFeaturedMeeting() {
 403 |   const featured = getFeaturedMeetings();
 404 | 
 405 |   if (featured.length === 0) {
 406 |     return null;
 407 |   }
 408 | 
 409 |   if (featuredMeetingIndex >= featured.length) {
 410 |     featuredMeetingIndex = 0;
 411 |   }
 412 | 
 413 |   return featured[featuredMeetingIndex];
 414 | }
 415 | 
 416 | function renderFeaturedSection() {
 417 |   const featured = getFeaturedMeetings();
 418 | 
 419 |   if (featured.length === 0) {
 420 |     heroKicker.textContent = "추천 모임 준비 중";
 421 |     heroTitle.textContent = "새로운 모임을 만들면 이곳에 추천 배너가 표시됩니다.";
 422 |     heroDescription.textContent =
 423 |       "아직 보여 줄 모임이 없습니다. 아래 폼으로 새 모임을 만들면 첫 화면 추천 영역이 함께 갱신됩니다.";
 424 |     heroPageIndicator.textContent = "추천 0 / 0";
 425 |     heroDetailButton.disabled = true;
 426 |     heroJoinButton.disabled = true;
 427 |     heroJoinButton.textContent = "바로 참여";
 428 |     heroPrevButton.disabled = true;
 429 |     heroNextButton.disabled = true;
 430 |     featuredTeaserList.innerHTML = "";
 431 |     return;
 432 |   }
 433 | 
 434 |   const current = getCurrentFeaturedMeeting();
 435 |   const teaserItems = Array.from(
 436 |     { length: Math.min(featured.length, 3) },
 437 |     (_, index) => featured[(featuredMeetingIndex + index) % featured.length]
 438 |   );
 439 |   const isClosed = current.joined >= current.capacity;
 440 | 
 441 |   heroKicker.textContent = `${current.location} · ${current.category} 추천`;
 442 |   heroTitle.textContent = current.title;
 443 |   heroDescription.textContent = `${current.description} ${formatDate(
 444 |     current.date
 445 |   )}에 열리고, ${getSeatMessage(current)} 상태입니다.`;
 446 |   heroPageIndicator.textContent = `추천 ${featuredMeetingIndex + 1} / ${
 447 |     featured.length
 448 |   }`;
 449 |   heroDetailButton.disabled = false;
 450 |   heroJoinButton.disabled = current.mine || isClosed;
 451 |   heroJoinButton.textContent = current.mine
 452 |     ? "참여 완료"
 453 |     : isClosed
 454 |     ? "모집 마감"
 455 |     : "바로 참여";
 456 |   heroPrevButton.disabled = featured.length <= 1;
 457 |   heroNextButton.disabled = featured.length <= 1;
 458 | 
 459 |   featuredTeaserList.innerHTML = teaserItems
 460 |     .map(
 461 |       (item, index) => `
 462 |         <button
 463 |           class="hero-teaser-card ${index === 0 ? "wide" : ""} ${
 464 |             item.id === current.id ? "is-active" : ""
 465 |           }"
 466 |           type="button"
 467 |           data-featured-id="${item.id}"
 468 |         >
 469 |           <span>${escapeHtml(item.location)} · ${formatDate(item.date)}</span>
 470 |           <strong>${escapeHtml(item.title)}</strong>
 471 |         </button>
 472 |       `
 473 |     )
 474 |     .join("");
 475 | }
 476 | 
 477 | // 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.
 478 | function getFilteredMeetings() {
 479 |   const keyword = keywordInput.value.trim().toLowerCase();
 480 |   const category = categorySelect.value;
 481 |   const location = locationSelect.value;
 482 |   const status = statusFilter.value;
 483 |   const sort = sortOrder.value;
 484 | 
 485 |   const filtered = meetings.filter((item) => {
 486 |     const matchesKeyword = item.title.toLowerCase().includes(keyword);
 487 |     const matchesCategory = category === "all" || item.category === category;
 488 |     const matchesLocation = location === "all" || item.location === location;
 489 |     const matchesStatus =
 490 |       status === "all" ||
 491 |       (status === "open" && item.joined < item.capacity) ||
 492 |       (status === "mine" && item.mine) ||
 493 |       (status === "closed" && item.joined >= item.capacity);
 494 | 
 495 |     return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
 496 |   });
 497 | 
 498 |   return sortMeetings(applyQuickFilterRule(filtered), sort);
 499 | }
 500 | 
 501 | function applyFiltersAndRender() {
 502 |   renderMeetings(getFilteredMeetings());
 503 | }
 504 | 
 505 | function resetFilters() {
 506 |   searchForm.reset();
 507 |   activeQuickFilter = "recommend";
 508 |   applyQuickPreset(activeQuickFilter);
 509 |   applyFiltersAndRender();
 510 |   syncQuickFilterUi();
 511 | }
 512 | 
 513 | function applyQuickPreset(filterName) {
 514 |   keywordInput.value = "";
 515 |   categorySelect.value = "all";
 516 |   locationSelect.value = "all";
 517 |   statusFilter.value = "all";
 518 |   sortOrder.value = filterName === "recommend" ? "popular" : "soon";
 519 | 
 520 |   if (filterName === "campus") {
 521 |     locationSelect.value = "캠퍼스";
 522 |   }
 523 | 
 524 |   if (filterName === "sports") {
 525 |     categorySelect.value = "운동";
 526 |   }
 527 | 
 528 |   if (filterName === "study") {
 529 |     categorySelect.value = "공부";
 530 |   }
 531 | 
 532 |   if (filterName === "mine") {
 533 |     statusFilter.value = "mine";
 534 |   }
 535 | }
 536 | 
 537 | function applyQuickFilter(filterName) {
 538 |   activeQuickFilter = filterName;
 539 |   applyQuickPreset(filterName);
 540 |   applyFiltersAndRender();
 541 |   syncQuickFilterUi();
 542 |   document.querySelector("#search").scrollIntoView({ behavior: "smooth" });
 543 | }
 544 | 
 545 | function handleQuickAction(actionName) {
 546 |   if (actionName === "create") {
 547 |     document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 548 |   }
 549 | }
 550 | 
 551 | function moveFeaturedMeeting(step) {
 552 |   const featured = getFeaturedMeetings();
 553 | 
 554 |   if (featured.length <= 1) {
 555 |     return;
 556 |   }
 557 | 
 558 |   featuredMeetingIndex =
 559 |     (featuredMeetingIndex + step + featured.length) % featured.length;
 560 |   renderFeaturedSection();
 561 | }
 562 | 
 563 | function selectFeaturedMeeting(id) {
 564 |   const featured = getFeaturedMeetings();
 565 |   const nextIndex = featured.findIndex((item) => item.id === id);
 566 | 
 567 |   if (nextIndex === -1) {
 568 |     return;
 569 |   }
 570 | 
 571 |   featuredMeetingIndex = nextIndex;
 572 |   renderFeaturedSection();
 573 | }
 574 | 
 575 | function getFormValues() {
 576 |   return {
 577 |     title: document.querySelector("#newTitle").value.trim(),
 578 |     category: document.querySelector("#newCategory").value,
 579 |     location: document.querySelector("#newLocation").value,
 580 |     date: document.querySelector("#newDate").value,
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
 583 |     fee: document.querySelector("#newFee").value.trim(),
 584 |     description: document.querySelector("#newDescription").value.trim(),
 585 |   };
 586 | }
 587 | 
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
 589 | function resetFormState() {
 590 |   editingMeetingId = null;
 591 |   createForm.reset();
 592 |   formTitle.textContent = "폼으로 새 모임 추가하기";
 593 |   formModeText.textContent =
 594 |     "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
 595 |   submitButton.textContent = "모임 추가";
 596 |   cancelEditButton.classList.add("is-hidden");
 597 | }
 598 | 
 599 | // 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
 600 | function startEditMeeting(id) {
 601 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 602 | 
 603 |   if (!selected) {
 604 |     return;
 605 |   }
 606 | 
 607 |   editingMeetingId = id;
 608 |   document.querySelector("#newTitle").value = selected.title;
 609 |   document.querySelector("#newCategory").value = selected.category;
 610 |   document.querySelector("#newLocation").value = selected.location;
 611 |   document.querySelector("#newDate").value = selected.date;
 612 |   document.querySelector("#newOrganizer").value = selected.organizer;
 613 |   document.querySelector("#newCapacity").value = selected.capacity;
 614 |   document.querySelector("#newFee").value = selected.fee;
 615 |   document.querySelector("#newDescription").value = selected.description;
 616 | 
 617 |   formTitle.textContent = "기존 모임 수정하기";
 618 |   formModeText.textContent =
 619 |     "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
 620 |   submitButton.textContent = "수정 내용 저장";
 621 |   cancelEditButton.classList.remove("is-hidden");
 622 |   closeDetail();
 623 |   document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 624 | }
 625 | 
 626 | // editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
 627 | function handleFormSubmit(event) {
 628 |   event.preventDefault();
 629 | 
 630 |   const formValues = getFormValues();
 631 | 
 632 |   if (editingMeetingId !== null) {
 633 |     meetings = meetings.map((item) =>
 634 |       item.id === editingMeetingId
 635 |         ? normalizeMeeting({
 636 |             ...item,
 637 |             ...formValues,
 638 |             createdByMe: true,
 639 |           })
 640 |         : item
 641 |     );
 642 |   } else {
 643 |     const newMeeting = normalizeMeeting({
 644 |       id: Date.now(),
 645 |       ...formValues,
 646 |       joined: 1,
 647 |       mine: true,
 648 |       createdByMe: true,
 649 |     });
 650 | 
 651 |     meetings.unshift(newMeeting);
 652 |   }
 653 | 
 654 |   saveMeetings();
 655 |   resetFormState();
 656 |   renderAll();
 657 | }
 658 | 
 659 | function getSeatMessage(item) {
 660 |   const remaining = item.capacity - item.joined;
 661 |   return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
 662 | }
 663 | 
 664 | function formatDate(value) {
 665 |   const date = new Date(value);
 666 |   return date.toLocaleDateString("ko-KR");
 667 | }
 668 | 
 669 | function sortMeetings(list, sort) {
 670 |   const sorted = [...list];
 671 | 
 672 |   if (sort === "late") {
 673 |     return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
 674 |   }
 675 | 
 676 |   if (sort === "seats") {
 677 |     return sorted.sort(
 678 |       (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
 679 |     );
 680 |   }
 681 | 
 682 |   if (sort === "popular") {
 683 |     return sorted.sort((a, b) => b.joined - a.joined);
 684 |   }
 685 | 
 686 |   return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
 687 | }
 688 | 
 689 | function truncateText(text, maxLength) {
 690 |   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
 691 | }
 692 | 
 693 | function escapeHtml(value) {
 694 |   return value
 695 |     .replaceAll("&", "&amp;")
 696 |     .replaceAll("<", "&lt;")
 697 |     .replaceAll(">", "&gt;")
 698 |     .replaceAll('"', "&quot;")
 699 |     .replaceAll("'", "&#39;");
 700 | }
 701 | 
 702 | // 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
 703 | function joinMeeting(id) {
 704 |   const selected = meetings.find((item) => item.id === id);
 705 | 
 706 |   if (!selected) {
 707 |     return;
 708 |   }
 709 | 
 710 |   if (selected.joined >= selected.capacity) {
 711 |     alert("이미 모집이 끝난 모임입니다.");
 712 |     return;
 713 |   }
 714 | 
 715 |   if (selected.mine) {
 716 |     alert("이미 참여한 모임입니다.");
 717 |     return;
 718 |   }
 719 | 
 720 |   selected.joined += 1;
 721 |   selected.mine = true;
 722 |   saveMeetings();
 723 |   renderAll();
 724 | }
 725 | 
 726 | // 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
 727 | function deleteMeeting(id) {
 728 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 729 | 
 730 |   if (!selected) {
 731 |     return;
 732 |   }
 733 | 
 734 |   const isConfirmed = window.confirm(
 735 |     `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
 736 |   );
 737 | 
 738 |   if (!isConfirmed) {
 739 |     return;
 740 |   }
 741 | 
 742 |   meetings = meetings.filter((item) => item.id !== id);
 743 | 
 744 |   if (editingMeetingId === id) {
 745 |     resetFormState();
 746 |   }
 747 | 
 748 |   if (dialogMeetingId === id) {
 749 |     closeDetail();
 750 |   }
 751 | 
 752 |   saveMeetings();
 753 |   renderAll();
 754 | }
 755 | 
 756 | // 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
 757 | function openDetail(id) {
 758 |   const selected = meetings.find((item) => item.id === id);
 759 | 
 760 |   if (!selected) {
 761 |     return;
 762 |   }
 763 | 
 764 |   dialogTitle.textContent = selected.title;
 765 |   dialogMeta.innerHTML = [
 766 |     `카테고리 ${escapeHtml(selected.category)}`,
 767 |     `지역 ${escapeHtml(selected.location)}`,
 768 |     `주최자 ${escapeHtml(selected.organizer)}`,
 769 |     `날짜 ${formatDate(selected.date)}`,
 770 |     `참가비 ${escapeHtml(selected.fee)}`,
 771 |     `참여 ${selected.joined}/${selected.capacity}`,
 772 |   ]
 773 |     .map((text) => `<span class="meta-chip">${text}</span>`)
 774 |     .join("");
 775 |   dialogDescription.textContent = selected.description;
 776 |   dialogMeetingId = id;
 777 | 
 778 |   if (selected.createdByMe) {
 779 |     dialogOwnerActions.classList.remove("is-hidden");
 780 |   } else {
 781 |     dialogOwnerActions.classList.add("is-hidden");
 782 |   }
 783 | 
 784 |   if (detailDialog.open) {
 785 |     return;
 786 |   }
 787 | 
 788 |   if (typeof detailDialog.showModal === "function") {
 789 |     detailDialog.showModal();
 790 |     return;
 791 |   }
 792 | 
 793 |   detailDialog.setAttribute("open", "open");
 794 | }
 795 | 
 796 | function closeDetail() {
 797 |   if (detailDialog.open && typeof detailDialog.close === "function") {
 798 |     detailDialog.close();
 799 |   } else if (detailDialog.hasAttribute("open")) {
 800 |     detailDialog.removeAttribute("open");
 801 |   }
 802 | 
 803 |   dialogMeetingId = null;
 804 | }
 805 | 
 806 | // 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
 807 | function renderAll() {
 808 |   renderStatus();
 809 |   renderFeaturedSection();
 810 |   applyFiltersAndRender();
 811 |   renderMyMeetings();
 812 |   renderManagedMeetings();
 813 |   syncQuickFilterUi();
 814 | }
 815 | 
 816 | // 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
 817 | searchForm.addEventListener("submit", (event) => {
 818 |   event.preventDefault();
 819 |   applyFiltersAndRender();
 820 | });
 821 | 
 822 | resetButton.addEventListener("click", resetFilters);
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
 825 | createForm.addEventListener("submit", handleFormSubmit);
 826 | cancelEditButton.addEventListener("click", resetFormState);
 827 | closeDialogButton.addEventListener("click", closeDetail);
 828 | dialogEditButton.addEventListener("click", () => {
 829 |   if (dialogMeetingId !== null) {
 830 |     startEditMeeting(dialogMeetingId);
 831 |   }
 832 | });
 833 | dialogDeleteButton.addEventListener("click", () => {
 834 |   if (dialogMeetingId !== null) {
 835 |     deleteMeeting(dialogMeetingId);
 836 |   }
 837 | });
 838 | heroDetailButton.addEventListener("click", () => {
 839 |   const featured = getCurrentFeaturedMeeting();
 840 | 
 841 |   if (featured) {
 842 |     openDetail(featured.id);
 843 |   }
 844 | });
 845 | heroJoinButton.addEventListener("click", () => {
 846 |   const featured = getCurrentFeaturedMeeting();
 847 | 
 848 |   if (featured) {
 849 |     joinMeeting(featured.id);
 850 |   }
 851 | });
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
 854 | featuredTeaserList.addEventListener("click", (event) => {
 855 |   const card = event.target.closest("[data-featured-id]");
 856 | 
 857 |   if (!card) {
 858 |     return;
 859 |   }
 860 | 
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
 862 | });
 863 | quickFilterButtons.forEach((button) => {
 864 |   button.addEventListener("click", () =>
 865 |     applyQuickFilter(button.dataset.quickFilter)
 866 |   );
 867 | });
 868 | quickActionButtons.forEach((button) => {
 869 |   button.addEventListener("click", () =>
 870 |     handleQuickAction(button.dataset.quickAction)
 871 |   );
 872 | });
 873 | 
 874 | saveMeetings();
 875 | resetFormState();
 876 | applyQuickPreset(activeQuickFilter);
 877 | renderAll();
~~~~
- 이 기능이 하는 일: 숫자 카드, 모임 카드, 내 모임, 개설 관리 목록을 그린다.
- 사용자에게 어떻게 보이는가: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 실행 흐름에서의 역할: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 연결되는 파일/요소: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 기능 4. 검색과 빠른 이동
- 범위: 478~589줄
- 기능 원문:
~~~~js
 478 | function getFilteredMeetings() {
 479 |   const keyword = keywordInput.value.trim().toLowerCase();
 480 |   const category = categorySelect.value;
 481 |   const location = locationSelect.value;
 482 |   const status = statusFilter.value;
 483 |   const sort = sortOrder.value;
 484 | 
 485 |   const filtered = meetings.filter((item) => {
 486 |     const matchesKeyword = item.title.toLowerCase().includes(keyword);
 487 |     const matchesCategory = category === "all" || item.category === category;
 488 |     const matchesLocation = location === "all" || item.location === location;
 489 |     const matchesStatus =
 490 |       status === "all" ||
 491 |       (status === "open" && item.joined < item.capacity) ||
 492 |       (status === "mine" && item.mine) ||
 493 |       (status === "closed" && item.joined >= item.capacity);
 494 | 
 495 |     return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
 496 |   });
 497 | 
 498 |   return sortMeetings(applyQuickFilterRule(filtered), sort);
 499 | }
 500 | 
 501 | function applyFiltersAndRender() {
 502 |   renderMeetings(getFilteredMeetings());
 503 | }
 504 | 
 505 | function resetFilters() {
 506 |   searchForm.reset();
 507 |   activeQuickFilter = "recommend";
 508 |   applyQuickPreset(activeQuickFilter);
 509 |   applyFiltersAndRender();
 510 |   syncQuickFilterUi();
 511 | }
 512 | 
 513 | function applyQuickPreset(filterName) {
 514 |   keywordInput.value = "";
 515 |   categorySelect.value = "all";
 516 |   locationSelect.value = "all";
 517 |   statusFilter.value = "all";
 518 |   sortOrder.value = filterName === "recommend" ? "popular" : "soon";
 519 | 
 520 |   if (filterName === "campus") {
 521 |     locationSelect.value = "캠퍼스";
 522 |   }
 523 | 
 524 |   if (filterName === "sports") {
 525 |     categorySelect.value = "운동";
 526 |   }
 527 | 
 528 |   if (filterName === "study") {
 529 |     categorySelect.value = "공부";
 530 |   }
 531 | 
 532 |   if (filterName === "mine") {
 533 |     statusFilter.value = "mine";
 534 |   }
 535 | }
 536 | 
 537 | function applyQuickFilter(filterName) {
 538 |   activeQuickFilter = filterName;
 539 |   applyQuickPreset(filterName);
 540 |   applyFiltersAndRender();
 541 |   syncQuickFilterUi();
 542 |   document.querySelector("#search").scrollIntoView({ behavior: "smooth" });
 543 | }
 544 | 
 545 | function handleQuickAction(actionName) {
 546 |   if (actionName === "create") {
 547 |     document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 548 |   }
 549 | }
 550 | 
 551 | function moveFeaturedMeeting(step) {
 552 |   const featured = getFeaturedMeetings();
 553 | 
 554 |   if (featured.length <= 1) {
 555 |     return;
 556 |   }
 557 | 
 558 |   featuredMeetingIndex =
 559 |     (featuredMeetingIndex + step + featured.length) % featured.length;
 560 |   renderFeaturedSection();
 561 | }
 562 | 
 563 | function selectFeaturedMeeting(id) {
 564 |   const featured = getFeaturedMeetings();
 565 |   const nextIndex = featured.findIndex((item) => item.id === id);
 566 | 
 567 |   if (nextIndex === -1) {
 568 |     return;
 569 |   }
 570 | 
 571 |   featuredMeetingIndex = nextIndex;
 572 |   renderFeaturedSection();
 573 | }
 574 | 
 575 | function getFormValues() {
 576 |   return {
 577 |     title: document.querySelector("#newTitle").value.trim(),
 578 |     category: document.querySelector("#newCategory").value,
 579 |     location: document.querySelector("#newLocation").value,
 580 |     date: document.querySelector("#newDate").value,
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
 583 |     fee: document.querySelector("#newFee").value.trim(),
 584 |     description: document.querySelector("#newDescription").value.trim(),
 585 |   };
 586 | }
 587 | 
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
 589 | function resetFormState() {
~~~~
- 이 기능이 하는 일: 검색 조건 읽기, 초기화, 빠른 필터 적용, 추천 배너 이동을 처리한다.
- 사용자에게 어떻게 보이는가: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 실행 흐름에서의 역할: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 연결되는 파일/요소: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.
### 기능 5. 폼 값 읽기와 추가/수정
- 범위: 575~877줄
- 기능 원문:
~~~~js
 575 | function getFormValues() {
 576 |   return {
 577 |     title: document.querySelector("#newTitle").value.trim(),
 578 |     category: document.querySelector("#newCategory").value,
 579 |     location: document.querySelector("#newLocation").value,
 580 |     date: document.querySelector("#newDate").value,
 581 |     organizer: document.querySelector("#newOrganizer").value.trim(),
 582 |     capacity: Number(document.querySelector("#newCapacity").value),
 583 |     fee: document.querySelector("#newFee").value.trim(),
 584 |     description: document.querySelector("#newDescription").value.trim(),
 585 |   };
 586 | }
 587 | 
 588 | // 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
 589 | function resetFormState() {
 590 |   editingMeetingId = null;
 591 |   createForm.reset();
 592 |   formTitle.textContent = "폼으로 새 모임 추가하기";
 593 |   formModeText.textContent =
 594 |     "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
 595 |   submitButton.textContent = "모임 추가";
 596 |   cancelEditButton.classList.add("is-hidden");
 597 | }
 598 | 
 599 | // 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
 600 | function startEditMeeting(id) {
 601 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 602 | 
 603 |   if (!selected) {
 604 |     return;
 605 |   }
 606 | 
 607 |   editingMeetingId = id;
 608 |   document.querySelector("#newTitle").value = selected.title;
 609 |   document.querySelector("#newCategory").value = selected.category;
 610 |   document.querySelector("#newLocation").value = selected.location;
 611 |   document.querySelector("#newDate").value = selected.date;
 612 |   document.querySelector("#newOrganizer").value = selected.organizer;
 613 |   document.querySelector("#newCapacity").value = selected.capacity;
 614 |   document.querySelector("#newFee").value = selected.fee;
 615 |   document.querySelector("#newDescription").value = selected.description;
 616 | 
 617 |   formTitle.textContent = "기존 모임 수정하기";
 618 |   formModeText.textContent =
 619 |     "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
 620 |   submitButton.textContent = "수정 내용 저장";
 621 |   cancelEditButton.classList.remove("is-hidden");
 622 |   closeDetail();
 623 |   document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
 624 | }
 625 | 
 626 | // editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
 627 | function handleFormSubmit(event) {
 628 |   event.preventDefault();
 629 | 
 630 |   const formValues = getFormValues();
 631 | 
 632 |   if (editingMeetingId !== null) {
 633 |     meetings = meetings.map((item) =>
 634 |       item.id === editingMeetingId
 635 |         ? normalizeMeeting({
 636 |             ...item,
 637 |             ...formValues,
 638 |             createdByMe: true,
 639 |           })
 640 |         : item
 641 |     );
 642 |   } else {
 643 |     const newMeeting = normalizeMeeting({
 644 |       id: Date.now(),
 645 |       ...formValues,
 646 |       joined: 1,
 647 |       mine: true,
 648 |       createdByMe: true,
 649 |     });
 650 | 
 651 |     meetings.unshift(newMeeting);
 652 |   }
 653 | 
 654 |   saveMeetings();
 655 |   resetFormState();
 656 |   renderAll();
 657 | }
 658 | 
 659 | function getSeatMessage(item) {
 660 |   const remaining = item.capacity - item.joined;
 661 |   return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
 662 | }
 663 | 
 664 | function formatDate(value) {
 665 |   const date = new Date(value);
 666 |   return date.toLocaleDateString("ko-KR");
 667 | }
 668 | 
 669 | function sortMeetings(list, sort) {
 670 |   const sorted = [...list];
 671 | 
 672 |   if (sort === "late") {
 673 |     return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
 674 |   }
 675 | 
 676 |   if (sort === "seats") {
 677 |     return sorted.sort(
 678 |       (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
 679 |     );
 680 |   }
 681 | 
 682 |   if (sort === "popular") {
 683 |     return sorted.sort((a, b) => b.joined - a.joined);
 684 |   }
 685 | 
 686 |   return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
 687 | }
 688 | 
 689 | function truncateText(text, maxLength) {
 690 |   return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
 691 | }
 692 | 
 693 | function escapeHtml(value) {
 694 |   return value
 695 |     .replaceAll("&", "&amp;")
 696 |     .replaceAll("<", "&lt;")
 697 |     .replaceAll(">", "&gt;")
 698 |     .replaceAll('"', "&quot;")
 699 |     .replaceAll("'", "&#39;");
 700 | }
 701 | 
 702 | // 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
 703 | function joinMeeting(id) {
 704 |   const selected = meetings.find((item) => item.id === id);
 705 | 
 706 |   if (!selected) {
 707 |     return;
 708 |   }
 709 | 
 710 |   if (selected.joined >= selected.capacity) {
 711 |     alert("이미 모집이 끝난 모임입니다.");
 712 |     return;
 713 |   }
 714 | 
 715 |   if (selected.mine) {
 716 |     alert("이미 참여한 모임입니다.");
 717 |     return;
 718 |   }
 719 | 
 720 |   selected.joined += 1;
 721 |   selected.mine = true;
 722 |   saveMeetings();
 723 |   renderAll();
 724 | }
 725 | 
 726 | // 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
 727 | function deleteMeeting(id) {
 728 |   const selected = meetings.find((item) => item.id === id && item.createdByMe);
 729 | 
 730 |   if (!selected) {
 731 |     return;
 732 |   }
 733 | 
 734 |   const isConfirmed = window.confirm(
 735 |     `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
 736 |   );
 737 | 
 738 |   if (!isConfirmed) {
 739 |     return;
 740 |   }
 741 | 
 742 |   meetings = meetings.filter((item) => item.id !== id);
 743 | 
 744 |   if (editingMeetingId === id) {
 745 |     resetFormState();
 746 |   }
 747 | 
 748 |   if (dialogMeetingId === id) {
 749 |     closeDetail();
 750 |   }
 751 | 
 752 |   saveMeetings();
 753 |   renderAll();
 754 | }
 755 | 
 756 | // 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
 757 | function openDetail(id) {
 758 |   const selected = meetings.find((item) => item.id === id);
 759 | 
 760 |   if (!selected) {
 761 |     return;
 762 |   }
 763 | 
 764 |   dialogTitle.textContent = selected.title;
 765 |   dialogMeta.innerHTML = [
 766 |     `카테고리 ${escapeHtml(selected.category)}`,
 767 |     `지역 ${escapeHtml(selected.location)}`,
 768 |     `주최자 ${escapeHtml(selected.organizer)}`,
 769 |     `날짜 ${formatDate(selected.date)}`,
 770 |     `참가비 ${escapeHtml(selected.fee)}`,
 771 |     `참여 ${selected.joined}/${selected.capacity}`,
 772 |   ]
 773 |     .map((text) => `<span class="meta-chip">${text}</span>`)
 774 |     .join("");
 775 |   dialogDescription.textContent = selected.description;
 776 |   dialogMeetingId = id;
 777 | 
 778 |   if (selected.createdByMe) {
 779 |     dialogOwnerActions.classList.remove("is-hidden");
 780 |   } else {
 781 |     dialogOwnerActions.classList.add("is-hidden");
 782 |   }
 783 | 
 784 |   if (detailDialog.open) {
 785 |     return;
 786 |   }
 787 | 
 788 |   if (typeof detailDialog.showModal === "function") {
 789 |     detailDialog.showModal();
 790 |     return;
 791 |   }
 792 | 
 793 |   detailDialog.setAttribute("open", "open");
 794 | }
 795 | 
 796 | function closeDetail() {
 797 |   if (detailDialog.open && typeof detailDialog.close === "function") {
 798 |     detailDialog.close();
 799 |   } else if (detailDialog.hasAttribute("open")) {
 800 |     detailDialog.removeAttribute("open");
 801 |   }
 802 | 
 803 |   dialogMeetingId = null;
 804 | }
 805 | 
 806 | // 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
 807 | function renderAll() {
 808 |   renderStatus();
 809 |   renderFeaturedSection();
 810 |   applyFiltersAndRender();
 811 |   renderMyMeetings();
 812 |   renderManagedMeetings();
 813 |   syncQuickFilterUi();
 814 | }
 815 | 
 816 | // 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
 817 | searchForm.addEventListener("submit", (event) => {
 818 |   event.preventDefault();
 819 |   applyFiltersAndRender();
 820 | });
 821 | 
 822 | resetButton.addEventListener("click", resetFilters);
 823 | statusFilter.addEventListener("change", applyFiltersAndRender);
 824 | sortOrder.addEventListener("change", applyFiltersAndRender);
 825 | createForm.addEventListener("submit", handleFormSubmit);
 826 | cancelEditButton.addEventListener("click", resetFormState);
 827 | closeDialogButton.addEventListener("click", closeDetail);
 828 | dialogEditButton.addEventListener("click", () => {
 829 |   if (dialogMeetingId !== null) {
 830 |     startEditMeeting(dialogMeetingId);
 831 |   }
 832 | });
 833 | dialogDeleteButton.addEventListener("click", () => {
 834 |   if (dialogMeetingId !== null) {
 835 |     deleteMeeting(dialogMeetingId);
 836 |   }
 837 | });
 838 | heroDetailButton.addEventListener("click", () => {
 839 |   const featured = getCurrentFeaturedMeeting();
 840 | 
 841 |   if (featured) {
 842 |     openDetail(featured.id);
 843 |   }
 844 | });
 845 | heroJoinButton.addEventListener("click", () => {
 846 |   const featured = getCurrentFeaturedMeeting();
 847 | 
 848 |   if (featured) {
 849 |     joinMeeting(featured.id);
 850 |   }
 851 | });
 852 | heroPrevButton.addEventListener("click", () => moveFeaturedMeeting(-1));
 853 | heroNextButton.addEventListener("click", () => moveFeaturedMeeting(1));
 854 | featuredTeaserList.addEventListener("click", (event) => {
 855 |   const card = event.target.closest("[data-featured-id]");
 856 | 
 857 |   if (!card) {
 858 |     return;
 859 |   }
 860 | 
 861 |   selectFeaturedMeeting(Number(card.dataset.featuredId));
 862 | });
 863 | quickFilterButtons.forEach((button) => {
 864 |   button.addEventListener("click", () =>
 865 |     applyQuickFilter(button.dataset.quickFilter)
 866 |   );
 867 | });
 868 | quickActionButtons.forEach((button) => {
 869 |   button.addEventListener("click", () =>
 870 |     handleQuickAction(button.dataset.quickAction)
 871 |   );
 872 | });
 873 | 
 874 | saveMeetings();
 875 | resetFormState();
 876 | applyQuickPreset(activeQuickFilter);
 877 | renderAll();
~~~~
- 이 기능이 하는 일: 모임 생성 폼을 읽고 추가 모드와 수정 모드를 전환한다.
- 사용자에게 어떻게 보이는가: 사용자 클릭, 입력, 목록 갱신, 팝업 표시처럼 화면 반응으로 나타난다.
- 실행 흐름에서의 역할: 사용자 입력 또는 초기 렌더링 시 함수가 실행되어 데이터와 화면을 업데이트한다.
- 연결되는 파일/요소: `index.html`의 DOM 요소와 `styles.css`가 꾸미는 클래스 구조를 동시에 사용한다.

## 6. 이 파일은 어떤 것과 연결되는가
- JS가 선택하는 HTML 요소:
  - `#statusCards` → index.html 100줄
  - `#meetingList` → index.html 221줄
  - `#searchForm` → index.html 161줄
  - `#createForm` → index.html 322줄
  - `#detailDialog` → index.html 395줄
  - `#heroTitle` → index.html 66줄
  - `[data-quick-filter]` → index.html 38~54줄, 104~134줄
  - `[data-quick-action]` → index.html 139줄
- HTML ↔ CSS 연결: 이 파일은 카드 HTML 문자열 안에 `meeting-card`, `button`, `meta-chip`, `empty-state` 같은 class를 넣어 `styles.css`와 간접 연결된다.
- asset 참조 여부: 이미지 자산을 직접 읽지 않는다.
- 상대경로 사용: 브라우저 저장은 상대경로가 아니라 `localStorage` 키(`moim-meetings-v2`)를 사용한다.
