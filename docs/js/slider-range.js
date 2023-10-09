const firstRange = document.getElementById("myRange-1");
const firstValue = document.getElementById("first-value");
const secondRange = document.getElementById("myRange-2");
const secondValue = document.getElementById("second-value");
const progress = document.getElementById("progress");


firstRange.addEventListener("input", () => {
  firstValue.value = `$${firstRange.value}`;
  progress.style.left = (firstRange.value / firstRange.max) * 100 + "%";
  if (firstRange.value >= secondRange.value - 20) {
    firstRange.value = secondRange.value - 20;
    firstValue.value = `$${firstRange.value}`;
    progress.style.left = (firstRange.value / firstRange.max) * 100 + "%";
  }
  
});

firstRange.addEventListener('change', () => {
  firstValue.ariaValueNow = `${firstRange.value}`;

});

secondRange.addEventListener('change', () => {
  secondValue.ariaValueNow = `${secondRange.value}`;

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
  progress.style.right = 100 - ((secondRange.value / secondRange.max) * 100)+ "%";
  if (secondRange.value <= +firstRange.value + 20) {
    secondRange.value = +firstRange.value + 20;
    secondValue.value = `$${secondRange.value}`;
    progress.style.right = 100 - ((secondRange.value / secondRange.max) * 100)+ "%";
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
