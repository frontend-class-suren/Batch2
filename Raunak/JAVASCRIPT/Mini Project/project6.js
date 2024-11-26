const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupBtn.addEventListener("click", () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});
