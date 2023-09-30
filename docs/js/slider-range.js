const firstRange = document.getElementById("myRange-1");
const firstValue = document.getElementById("first-value");
const secondRange = document.getElementById("myRange-2");
const secondValue = document.getElementById("second-value");
const progress = document.getElementById("progress");

firstRange.addEventListener("input", () => {
  firstValue.value = `$${firstRange.value}`;
  progress.style.left = (firstRange.value / firstRange.max) * 100 + "%";
  if (firstRange.value >= secondRange.value - 250) {
    firstRange.value = secondRange.value - 250;
    firstValue.value = `$${firstRange.value}`;
    progress.style.left = firstRange.value / 10 + "%";
  }
  
});

firstValue.addEventListener("input", () => {
  if (firstValue.value[0] == "$") {
    firstRange.value = firstValue.value.slice(1);
    progress.style.left = (firstRange.value / firstRange.max) * 100 + "%";
  } else {
    firstRange.value = firstValue.value;
    progress.style.left = (firstRange.value / firstRange.max) * 100 + "%";
  }
});

secondRange.addEventListener("input", () => {
  secondValue.value = `$${secondRange.value}`;
  progress.style.right = ((secondRange.max - secondRange.value) * 10) / 100 + "%";
  if (secondRange.value <= +firstRange.value + 250) {
    secondRange.value = +firstRange.value + 250;
    secondValue.value = `$${secondRange.value}`;
    progress.style.right = (secondRange.max - secondRange.value) / 10 + "%";
  }
});

secondValue.addEventListener("input", () => {
  if (secondValue.value[0] == "$") {
    secondRange.value = secondValue.value.slice(1);
    progress.style.right =
      ((secondRange.max - secondRange.value) * 10) / 100 + "%";
  } else {
    secondRange.value = secondValue.value;
    progress.style.right =
      ((secondRange.max - secondRange.value) * 10) / 100 + "%";
  }
});
