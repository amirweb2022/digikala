var slider = document.getElementsByClassName("slider");
var btnBack = document.querySelector(".btn-back");
var btnNext = document.querySelector(".btn-next");
var number = document.getElementsByClassName("number");
var i = 0;
var n;
// loading
window.addEventListener("load", ()=> {
  const load = document.querySelector(".load");
  load.style.display = 'none';
});
// popup message
function popUP() {
  let popUpimage = document.getElementById("popup-image");
  let closePopup = document.getElementById("btn-close-popup");
  popUpimage.style.right = "0px";
  closePopup.addEventListener("click", (e) => {
    e.preventDefault();
    popUpimage.style.right = "-500px";
  });
}
setTimeout(() => {
  popUP();
}, 20000);
// start slider
function backSlidediNone() {
  for (n = 0; n < slider.length; n++) {
    slider[n].style.display = "none";
  }
}
function noActiveNum() {
  for (n = 0; n < number.length; n++) {
    number[n].classList.remove("active-number");
  }
}
btnNext.addEventListener("click", function () {
  i++;
  if (i > slider.length - 1) {
    i = 0;
  }
  backSlidediNone();
  noActiveNum();
  slider[i].style.display = "block";
  number[i].classList.add("active-number");
});
btnBack.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = slider.length - 1;
  }
  backSlidediNone();
  noActiveNum();
  slider[i].style.display = "block";
  number[i].classList.add("active-number");
});
setInterval(() => {
  i++;
  if (i > slider.length - 1) {
    i = 0;
  }
  backSlidediNone();
  noActiveNum();
  slider[i].style.display = "block";
  number[i].classList.add("active-number");
}, 5000);
// end slider
// button validation footer
const inputEmailValidation = document.getElementById("input-email-validation");
const alertEmail = document.querySelector(".alert-email");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // validation email
const btnEmailValidation = document.getElementById("btn-email-validation");
inputEmailValidation.addEventListener('keyup' , ()=> {
  inputEmailValidation.style.color = '#424750';
  if(inputEmailValidation.value === "") {
    alertEmail.innerHTML = 'این فیلد نمی‌تواند خالی باشد';
    btnEmailValidation.style.backgroundColor = '#e0e0e2';
    btnEmailValidation.style.color = '#fff';
    btnEmailValidation.style.cursor = 'auto';
  } else if(inputEmailValidation.value.match(pattern)) {
    alertEmail.innerHTML = '';
    btnEmailValidation.style.backgroundColor = '#ef4056';
    btnEmailValidation.style.color = '#fff';
    btnEmailValidation.style.cursor = 'pointer';
  }else {
    alertEmail.innerHTML = 'پست الکترونیک وارد شده درست نیست';
    btnEmailValidation.style.backgroundColor = '#e0e0e2';
    btnEmailValidation.style.color = '#fff';
    btnEmailValidation.style.cursor = 'auto';
  } 
});