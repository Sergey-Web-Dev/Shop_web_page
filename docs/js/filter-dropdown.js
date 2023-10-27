// Price Block
const priceBlock = document.getElementById("price-block");
const hidenPrice = document.getElementById("hiden-price");
const colorsBlock = document.getElementById("colors");
const arrowRight = document.getElementById("arrow-right");


priceBlock.addEventListener("click", () => {
  hidenPrice.classList.toggle("active-1");
  colorsBlock.classList.toggle("active-1");
  arrowRight.classList.toggle("arr-right");
});

// Colors Block
const hidenColors = document.getElementById("hiden-colors");
const sizeBlock = document.getElementById("size-block");
const arrowRight2 = document.getElementById("arrow-right-2");

colorsBlock.addEventListener("click", () => {
  hidenColors.classList.toggle("active-1");
  sizeBlock.classList.toggle("active-1");
  arrowRight2.classList.toggle("arr-right");
});

// Size Block
const hidenSizes = document.getElementById("hiden-sizes");
const dressBlock = document.getElementById("dress-block");
const arrowRight3 = document.getElementById("arrow-right-3");

sizeBlock.addEventListener("click", () => {
  hidenSizes.classList.toggle("active-1");
  dressBlock.classList.toggle("active-1");
  arrowRight3.classList.toggle("arr-right");
});

// Dress Block
const hidenDress = document.getElementById("hiden-dress");
const clothingIndiaBlock = document.getElementById('clothingIndia');
const arrowRight4 = document.getElementById("arrow-right-4");

dressBlock.addEventListener("click", () => {
  hidenDress.classList.toggle("active-1");
  if (filtedCards.length <= 7) clothingIndiaBlock.classList.toggle("active-1");
  arrowRight4.classList.toggle("arr-right");
});
