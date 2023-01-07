btn = document.querySelector(".button-theme");
btn_slider = document.querySelector(".btn-slider");
test = document.querySelector("ul");
const tombol = document.querySelector(".toggle2");
const navRespon = document.querySelector("nav ul");
tombol.addEventListener("click", () => {
  tombol.classList.toggle("tod");
  navRespon.classList.toggle("slide");
  document
    .querySelector(".toggle2 span:first-child")
    .classList.toggle("silang1");
  document
    .querySelector(".toggle2 span:last-child")
    .classList.toggle("silang2");
  document
    .querySelector(".toggle2 span:nth-child(2)")
    .classList.toggle("scale");
});

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  btn_slider.classList.toggle("active");
  document.body.classList.toggle("dark");
});
