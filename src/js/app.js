var slider = document.getElementsByClassName("slider");
var btnBack = document.querySelector(".btn-back");
var btnNext = document.querySelector(".btn-next");
var number = document.getElementsByClassName("number");
var i = 0;
var n;
// header shadow
let header = document.getElementById("header");
document.onscroll = function () {
  header.style.boxShadow = "0 0 2px 2px #eee";
};
// popup message
function popUP() {
  let popUpimage = document.getElementById("popup-image");
  let closePopup = document.getElementById("btn-close-popup");
  popUpimage.style.right = '0px';
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    popUpimage.style.right = '-500px';
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