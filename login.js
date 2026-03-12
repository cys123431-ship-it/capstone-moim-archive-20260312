const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const passwordInput = document.querySelector("#passwordInput");
const togglePasswordButton = document.querySelector("#togglePasswordButton");
const googleButton = document.querySelector("#googleButton");

// 실제 인증 대신, 현재 단계가 UI 데모라는 점을 같은 위치에 안내한다.
function showLoginMessage(message) {
  loginMessage.textContent = message;
}

// 비밀번호 칸의 type만 바꿔 가장 기본적인 보기/숨기기 흐름을 만든다.
function togglePasswordVisibility() {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordButton.setAttribute(
    "aria-label",
    isPassword ? "비밀번호 숨기기" : "비밀번호 보기"
  );
}

// 지금 단계는 API 제외 범위라서 제출 시 실제 로그인 대신 안내 문구만 보여 준다.
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!loginForm.reportValidity()) {
    return;
  }

  showLoginMessage(
    "지금은 로그인 UI만 구현된 상태입니다. 실제 인증 기능은 아직 연결하지 않았습니다."
  );
});

togglePasswordButton.addEventListener("click", togglePasswordVisibility);

googleButton.addEventListener("click", () => {
  showLoginMessage(
    "구글 로그인 버튼도 현재는 디자인 데모 단계입니다. 실제 OAuth 연결은 나중에 붙이면 됩니다."
  );
});
