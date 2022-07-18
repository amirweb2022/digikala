const input = document.getElementById("input-login");
const form = document.getElementsByTagName("form");
const buttonLogin = document.getElementById("button-login");
const alertLogin = document.querySelector(".alert-login");
const inputLoginCode = document.getElementById("input-login-code");
var randomNumber = Math.floor(Math.random() * 100000)+1;  //random number code
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // validation email
const phoneno = /^[0-9]{11}$/; // validation phone nuber
// validation input email or phone
input.addEventListener("keyup", () => {
  input.style.color = "#424750";
  if (input.value === "") {
    input.style.border = "1px solid #b2001a";
    alertLogin.innerHTML = "لطفا این قسمت را خالی نگذارید";
  } else if (input.value.match(pattern) || phoneno.test(input.value)) {
    input.style.border = "1px solid #19bfd3";
    alertLogin.innerHTML = "";
  } else {
    input.style.border = "1px solid #b2001a";
    alertLogin.innerHTML = "شماره موبایل یا ایمیل نادرست است.";
  }
});
// buttonLogin validation form
buttonLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    input.style.border = "1px solid #b2001a";
    alertLogin.innerHTML = "لطفا این قسمت را خالی نگذارید";
  } else if (input.value.match(pattern) || phoneno.test(input.value)) {
    const load = document.getElementById("load-login");
    const buttonText = document.querySelector(".button-login span");
    const alertLoginCode = document.querySelector(".alert-login-code");
    const titleLogin = document.querySelector(".body-login h3");
    const textLogin = document.querySelector(".body-login span");
    const paragraphLogin = document.querySelector(".body-login p");
    const messageCodeAlert = document.querySelector(".message-code-alert");
    const messageCodeSpan = document.querySelector(".message-code-alert span");
    const messageCodeIcon = document.querySelector(".message-code-alert i");
    input.style.border = "1px solid #19bfd3";
    alertLogin.innerHTML = "";
    buttonText.style.display = "none";
    load.style.display = "flex";
    setTimeout(() => {
      buttonText.style.display = "block";
      buttonText.innerHTML = "تایید";
      load.style.display = "none";
      input.style.display = "none";
      inputLoginCode.style.display = "block"
      inputLoginCode.style.color = "#424750";
      alertLoginCode.innerHTML = "در صورت عدم دریافت کد مجدد تلاش کنید";
      titleLogin.innerHTML = "کد تایید را وارد کنید";
      textLogin.innerHTML = "";
      paragraphLogin.innerHTML = `کد تایید برای  ${input.value} پیامک شد`;
      setTimeout(() => {
        messageCodeAlert.style.right = "0";
        messageCodeSpan.innerHTML = `${randomNumber}`;
        messageCodeIcon.addEventListener("click" , ()=> {
        messageCodeAlert.style.right = "-500px";
        });
      }, 2000);
    }, 2000);
  } else {
    input.style.border = "1px solid #b2001a";
    alertLogin.innerHTML = "شماره موبایل یا ایمیل نادرست است.";
  }
});
inputLoginCode.addEventListener("keyup" , ()=> {
  if (inputLoginCode.value == randomNumber) {
    inputLoginCode.style.border = '1px solid #19bfd3';
    setTimeout(() => {
      window.location.pathname = "/public/index.html";
    }, 3000);
  }else {
    inputLoginCode.style.border = '1px solid #b2001a';
  }
});