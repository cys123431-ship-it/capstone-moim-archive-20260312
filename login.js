const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const passwordInput = document.querySelector("#passwordInput");
const togglePasswordButton = document.querySelector("#togglePasswordButton");
const googleButton = document.querySelector("#googleButton");

function showLoginMessage(message) {
  loginMessage.textContent = message;
}

function togglePasswordVisibility() {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordButton.setAttribute(
    "aria-label",
    isPassword ? "비밀번호 숨기기" : "비밀번호 보기"
  );
}

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
