const numberButtons = document.querySelectorAll(".data-number");
const currentDisplay = document.querySelector(".current-output");
const clearButtons = document.querySelector(".data-clear-all");

let currentOutput = "";
let previousOutput = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentOutput += event.target.textContent;
    currentDisplay.textContent = currentOutput;
  });
});

clearButtons.addEventListener("click", () => {
  currentOutput = "0";
  currentDisplay.textContent = currentOutput;
});
