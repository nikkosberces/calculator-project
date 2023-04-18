const numberBtn = document.querySelectorAll(".is-num");
const currentDisplay = document.querySelector(".current-output");
const clearBtn = document.querySelector(".is-clear");
const deleteBtn = document.querySelector(".is-delete");

currentOutput = "";
previousOutput = "";

numberBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentOutput += event.target.textContent;

    currentDisplay.textContent = currentOutput;
  });
});

clearBtn.addEventListener("click", () => {
  currentOutput = "0";

  currentDisplay.textContent = currentOutput;
});
