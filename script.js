const STORAGE_KEY = "moim-meetings-v2";
const CURRENT_USER = "운영자 A";
const legacyOrganizerMap = {
  장운수: "운영자 A",
  송유찬: "운영자 B",
  조소빈: "운영자 C",
  최요섭: "운영자 D",
  곽진우: "운영자 E",
};

// 아직 DB가 없어서, 첫 화면을 바로 보여 주기 위한 샘플 데이터를 코드에 넣어 둔다.
const defaultMeetings = [
  {
    id: 1,
    title: "주말 풋살 같이 하기",
    category: "운동",
    location: "천안",
    date: "2026-03-20",
    capacity: 10,
    joined: 7,
    fee: "5,000원",
    organizer: "운영자 A",
    description:
      "주말 저녁에 가볍게 풋살하는 모임입니다. 초보도 참여 가능하고 운동장 대여비를 함께 나누는 방식입니다.",
    mine: true,
    createdByMe: true,
  },
  {
    id: 2,
    title: "자료구조 스터디",
    category: "공부",
    location: "캠퍼스",
    date: "2026-03-18",
    capacity: 6,
    joined: 4,
    fee: "무료",
    organizer: "운영자 B",
    description:
      "자료구조 수업 내용을 같이 정리하고 문제를 풀어보는 스터디입니다. 발표 순서도 돌아가면서 진행합니다.",
    mine: true,
    createdByMe: false,
  },
  {
    id: 3,
    title: "보드게임 번개 모임",
    category: "게임",
    location: "아산",
    date: "2026-03-22",
    capacity: 8,
    joined: 5,
    fee: "3,000원",
    organizer: "운영자 C",
    description:
      "카페에서 간단한 보드게임을 즐기는 번개 모임입니다. 처음 오는 사람도 바로 적응할 수 있게 쉬운 게임부터 시작합니다.",
    mine: false,
    createdByMe: false,
  },
  {
    id: 4,
    title: "카페 탐방 친목 모임",
    category: "친목",
    location: "천안",
    date: "2026-03-25",
    capacity: 12,
    joined: 9,
    fee: "각자 결제",
    organizer: "운영자 D",
    description:
      "천안 지역 카페를 함께 방문하며 이야기 나누는 친목 모임입니다. 분위기 좋은 공간을 같이 찾는 것이 목표입니다.",
    mine: false,
    createdByMe: false,
  },
];

let meetings = loadMeetings();
let editingMeetingId = null;
let dialogMeetingId = null;

const statusCards = document.querySelector("#statusCards");
const meetingList = document.querySelector("#meetingList");
const myMeetingList = document.querySelector("#myMeetingList");
const managedMeetingList = document.querySelector("#managedMeetingList");
const searchForm = document.querySelector("#searchForm");
const createForm = document.querySelector("#createForm");
const resetButton = document.querySelector("#resetButton");
const searchResultText = document.querySelector("#searchResultText");
const statusFilter = document.querySelector("#statusFilter");
const sortOrder = document.querySelector("#sortOrder");
const formTitle = document.querySelector("#formTitle");
const formModeText = document.querySelector("#formModeText");
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const detailDialog = document.querySelector("#detailDialog");
const closeDialogButton = document.querySelector("#closeDialogButton");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMeta = document.querySelector("#dialogMeta");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogOwnerActions = document.querySelector("#dialogOwnerActions");
const dialogEditButton = document.querySelector("#dialogEditButton");
const dialogDeleteButton = document.querySelector("#dialogDeleteButton");

function getDefaultMeetings() {
  return defaultMeetings.map((item) => ({ ...item }));
}

function normalizeMeeting(item) {
  const organizer = normalizeOrganizerName(item.organizer);

  return {
    id: item.id ?? Date.now(),
    title: item.title ?? "제목 없음",
    category: item.category ?? "친목",
    location: item.location ?? "캠퍼스",
    date: item.date ?? new Date().toISOString().slice(0, 10),
    capacity: Number(item.capacity) || 10,
    joined: Number(item.joined) || 0,
    fee: item.fee || "미정",
    organizer,
    description: item.description || "설명이 아직 없습니다.",
    mine: Boolean(item.mine),
    createdByMe: Boolean(
      item.createdByMe ?? (organizer === CURRENT_USER && Boolean(item.mine))
    ),
  };
}

function normalizeOrganizerName(value) {
  if (!value) {
    return "미정";
  }

  return legacyOrganizerMap[value] || value;
}

// 새로고침 후에도 데이터가 남도록 브라우저 localStorage를 우선 읽는다.
function loadMeetings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return getDefaultMeetings();
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return getDefaultMeetings();
    }

    return parsed.map(normalizeMeeting);
  } catch (error) {
    return getDefaultMeetings();
  }
}

function saveMeetings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meetings));
  } catch (error) {
    console.error("브라우저 저장에 실패했습니다.", error);
  }
}

// 상단 숫자 카드는 전체 배열을 기준으로 매번 다시 계산해 보여 준다.
function renderStatus() {
  const totalMeetings = meetings.length;
  const totalMembers = meetings.reduce((sum, item) => sum + item.joined, 0);
  const mine = meetings.filter((item) => item.mine).length;
  const openSeats = meetings.reduce(
    (sum, item) => sum + (item.capacity - item.joined),
    0
  );

  const items = [
    { label: "전체 모임", value: `${totalMeetings}개` },
    { label: "참여 인원", value: `${totalMembers}명` },
    { label: "내 모임", value: `${mine}개` },
    { label: "남은 자리", value: `${openSeats}석` },
  ];

  statusCards.innerHTML = items
    .map(
      (item) => `
        <article class="status-card">
          <p>${item.label}</p>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");
}

// 카드 HTML을 한곳에서 만들면 목록/내 모임/관리 화면이 같은 모양을 공유할 수 있다.
function createMeetingCard(item, mode = "default") {
  const isClosed = item.joined >= item.capacity;
  const actionLabel = item.mine ? "참여 완료" : isClosed ? "모집 마감" : "참여하기";
  const archiveCode = `ARCHIVE ${String(item.id).padStart(2, "0")}`;
  const primaryLabel =
    mode === "manage" ? "운영중" : item.mine ? "참여중" : isClosed ? "마감" : "추천";
  const actionButtons =
    mode === "manage"
      ? `
          <button class="button ghost" type="button" onclick="openDetail(${item.id})">
            상세
          </button>
          <button class="button secondary" type="button" onclick="startEditMeeting(${item.id})">
            수정
          </button>
          <button class="button danger" type="button" onclick="deleteMeeting(${item.id})">
            삭제
          </button>
        `
      : `
          <button class="button ghost" type="button" onclick="openDetail(${item.id})">
            상세
          </button>
          <button
            class="button secondary"
            type="button"
            onclick="joinMeeting(${item.id})"
            ${item.mine || isClosed ? "disabled" : ""}
          >
            ${actionLabel}
          </button>
        `;

  return `
    <article class="meeting-card">
      <div class="card-poster">
        <div class="card-pills">
          <span class="card-pill primary">${primaryLabel}</span>
          ${item.createdByMe ? '<span class="card-pill">개설</span>' : ""}
        </div>
        <span class="card-code">${archiveCode}</span>
      </div>
      <div class="card-copy">
        <p class="card-location">${escapeHtml(item.location)} · ${escapeHtml(item.category)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="description-preview">${escapeHtml(truncateText(item.description, 42))}</p>
        <div class="meta-row">
          <span class="meta-chip">주최 ${escapeHtml(item.organizer)}</span>
          <span class="meta-chip">참여 ${item.joined}/${item.capacity}</span>
          <span class="meta-chip">${escapeHtml(item.fee)}</span>
        </div>
        <div class="card-footer">
          <p class="card-schedule">${formatDate(item.date)} · ${getSeatMessage(item)}</p>
          <div class="card-actions">
            ${actionButtons}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderMeetings(list) {
  searchResultText.textContent = `현재 조건에 맞는 모임은 ${list.length}개입니다.`;

  if (list.length === 0) {
    meetingList.innerHTML =
      '<div class="empty-state">조건에 맞는 모임이 없습니다.</div>';
    return;
  }

  meetingList.innerHTML = list.map(createMeetingCard).join("");
}

function renderMyMeetings() {
  const myList = meetings.filter((item) => item.mine);

  if (myList.length === 0) {
    myMeetingList.innerHTML =
      '<div class="empty-state">아직 참여한 모임이 없습니다.</div>';
    return;
  }

  myMeetingList.innerHTML = myList.map(createMeetingCard).join("");
}

function renderManagedMeetings() {
  const managedList = meetings.filter((item) => item.createdByMe);

  if (managedList.length === 0) {
    managedMeetingList.innerHTML =
      '<div class="empty-state">아직 직접 만든 모임이 없습니다. 아래 폼으로 새 모임을 만들면 이곳에서 관리할 수 있습니다.</div>';
    return;
  }

  managedMeetingList.innerHTML = managedList
    .map((item) => createMeetingCard(item, "manage"))
    .join("");
}

// 검색 폼에 입력된 값을 읽어 조건에 맞는 모임만 골라낸 뒤 정렬까지 한 번에 처리한다.
function getFilteredMeetings() {
  const keyword = document.querySelector("#keyword").value.trim().toLowerCase();
  const category = document.querySelector("#category").value;
  const location = document.querySelector("#location").value;
  const status = statusFilter.value;
  const sort = sortOrder.value;

  const filtered = meetings.filter((item) => {
    const matchesKeyword = item.title.toLowerCase().includes(keyword);
    const matchesCategory = category === "all" || item.category === category;
    const matchesLocation = location === "all" || item.location === location;
    const matchesStatus =
      status === "all" ||
      (status === "open" && item.joined < item.capacity) ||
      (status === "mine" && item.mine) ||
      (status === "closed" && item.joined >= item.capacity);

    return matchesKeyword && matchesCategory && matchesLocation && matchesStatus;
  });

  return sortMeetings(filtered, sort);
}

function applyFiltersAndRender() {
  renderMeetings(getFilteredMeetings());
}

function resetFilters() {
  searchForm.reset();
  applyFiltersAndRender();
}

function getFormValues() {
  return {
    title: document.querySelector("#newTitle").value.trim(),
    category: document.querySelector("#newCategory").value,
    location: document.querySelector("#newLocation").value,
    date: document.querySelector("#newDate").value,
    organizer: document.querySelector("#newOrganizer").value.trim(),
    capacity: Number(document.querySelector("#newCapacity").value),
    fee: document.querySelector("#newFee").value.trim(),
    description: document.querySelector("#newDescription").value.trim(),
  };
}

// 추가/수정에 같은 폼을 쓰기 때문에, 현재 폼이 어떤 모드인지 먼저 초기화해 둔다.
function resetFormState() {
  editingMeetingId = null;
  createForm.reset();
  formTitle.textContent = "폼으로 새 모임 추가하기";
  formModeText.textContent =
    "지금은 추가 모드입니다. 새 모임 정보를 입력하면 목록 맨 위에 바로 추가됩니다.";
  submitButton.textContent = "모임 추가";
  cancelEditButton.classList.add("is-hidden");
}

// 수정 버튼을 누르면 기존 값을 폼에 다시 채워 넣어 "수정 모드"처럼 보이게 만든다.
function startEditMeeting(id) {
  const selected = meetings.find((item) => item.id === id && item.createdByMe);

  if (!selected) {
    return;
  }

  editingMeetingId = id;
  document.querySelector("#newTitle").value = selected.title;
  document.querySelector("#newCategory").value = selected.category;
  document.querySelector("#newLocation").value = selected.location;
  document.querySelector("#newDate").value = selected.date;
  document.querySelector("#newOrganizer").value = selected.organizer;
  document.querySelector("#newCapacity").value = selected.capacity;
  document.querySelector("#newFee").value = selected.fee;
  document.querySelector("#newDescription").value = selected.description;

  formTitle.textContent = "기존 모임 수정하기";
  formModeText.textContent =
    "지금은 수정 모드입니다. 값을 바꾼 뒤 저장하면 기존 모임 내용이 바로 바뀝니다.";
  submitButton.textContent = "수정 내용 저장";
  cancelEditButton.classList.remove("is-hidden");
  closeDetail();
  document.querySelector("#create").scrollIntoView({ behavior: "smooth" });
}

// editingMeetingId 값으로 새 모임 추가인지 기존 모임 수정인지 구분한다.
function handleFormSubmit(event) {
  event.preventDefault();

  const formValues = getFormValues();

  if (editingMeetingId !== null) {
    meetings = meetings.map((item) =>
      item.id === editingMeetingId
        ? normalizeMeeting({
            ...item,
            ...formValues,
            createdByMe: true,
          })
        : item
    );
  } else {
    const newMeeting = normalizeMeeting({
      id: Date.now(),
      ...formValues,
      joined: 1,
      mine: true,
      createdByMe: true,
    });

    meetings.unshift(newMeeting);
  }

  saveMeetings();
  resetFormState();
  renderAll();
}

function getSeatMessage(item) {
  const remaining = item.capacity - item.joined;
  return remaining > 0 ? `남은 자리 ${remaining}석` : "모집 마감";
}

function formatDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("ko-KR");
}

function sortMeetings(list, sort) {
  const sorted = [...list];

  if (sort === "late") {
    return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sort === "seats") {
    return sorted.sort(
      (a, b) => b.capacity - b.joined - (a.capacity - a.joined)
    );
  }

  if (sort === "popular") {
    return sorted.sort((a, b) => b.joined - a.joined);
  }

  return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// 참여 신청도 결국은 데이터 변경 -> 저장 -> 화면 다시 그리기 흐름을 따른다.
function joinMeeting(id) {
  const selected = meetings.find((item) => item.id === id);

  if (!selected) {
    return;
  }

  if (selected.joined >= selected.capacity) {
    alert("이미 모집이 끝난 모임입니다.");
    return;
  }

  if (selected.mine) {
    alert("이미 참여한 모임입니다.");
    return;
  }

  selected.joined += 1;
  selected.mine = true;
  saveMeetings();
  renderAll();
}

// 삭제 전 확인창을 두어 실수로 데이터를 지우는 일을 막는다.
function deleteMeeting(id) {
  const selected = meetings.find((item) => item.id === id && item.createdByMe);

  if (!selected) {
    return;
  }

  const isConfirmed = window.confirm(
    `"${selected.title}" 모임을 정말 삭제하시겠습니까?`
  );

  if (!isConfirmed) {
    return;
  }

  meetings = meetings.filter((item) => item.id !== id);

  if (editingMeetingId === id) {
    resetFormState();
  }

  if (dialogMeetingId === id) {
    closeDetail();
  }

  saveMeetings();
  renderAll();
}

// 카드에는 요약만 두고, 자세한 정보는 dialog를 열 때 채워 넣는다.
function openDetail(id) {
  const selected = meetings.find((item) => item.id === id);

  if (!selected) {
    return;
  }

  dialogTitle.textContent = selected.title;
  dialogMeta.innerHTML = [
    `카테고리 ${escapeHtml(selected.category)}`,
    `지역 ${escapeHtml(selected.location)}`,
    `주최자 ${escapeHtml(selected.organizer)}`,
    `날짜 ${formatDate(selected.date)}`,
    `참가비 ${escapeHtml(selected.fee)}`,
    `참여 ${selected.joined}/${selected.capacity}`,
  ]
    .map((text) => `<span class="meta-chip">${text}</span>`)
    .join("");
  dialogDescription.textContent = selected.description;
  dialogMeetingId = id;

  if (selected.createdByMe) {
    dialogOwnerActions.classList.remove("is-hidden");
  } else {
    dialogOwnerActions.classList.add("is-hidden");
  }

  if (detailDialog.open) {
    return;
  }

  if (typeof detailDialog.showModal === "function") {
    detailDialog.showModal();
    return;
  }

  detailDialog.setAttribute("open", "open");
}

function closeDetail() {
  if (detailDialog.open && typeof detailDialog.close === "function") {
    detailDialog.close();
  } else if (detailDialog.hasAttribute("open")) {
    detailDialog.removeAttribute("open");
  }

  dialogMeetingId = null;
}

// 데이터가 바뀌면 화면 일부만 따로 계산하지 않고 필요한 영역을 한 번에 다시 그린다.
function renderAll() {
  renderStatus();
  applyFiltersAndRender();
  renderMyMeetings();
  renderManagedMeetings();
}

// 버튼과 폼을 각각 연결해, 사용자의 입력이 곧바로 저장/필터/팝업 동작으로 이어지게 한다.
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFiltersAndRender();
});

resetButton.addEventListener("click", resetFilters);
statusFilter.addEventListener("change", applyFiltersAndRender);
sortOrder.addEventListener("change", applyFiltersAndRender);
createForm.addEventListener("submit", handleFormSubmit);
cancelEditButton.addEventListener("click", resetFormState);
closeDialogButton.addEventListener("click", closeDetail);
dialogEditButton.addEventListener("click", () => {
  if (dialogMeetingId !== null) {
    startEditMeeting(dialogMeetingId);
  }
});
dialogDeleteButton.addEventListener("click", () => {
  if (dialogMeetingId !== null) {
    deleteMeeting(dialogMeetingId);
  }
});

saveMeetings();
resetFormState();
renderAll();
