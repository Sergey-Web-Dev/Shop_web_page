const dropdown = document.getElementById("dropdown");
const slide = document.getElementById("slide");
const scroll = document.getElementById("scroll");

dropdown.addEventListener("click", () => {
  slide.classList.toggle("active-1");
  scroll.classList.toggle("scroll");
});
