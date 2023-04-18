const numberBtn = document.querySelectorAll(".is-num");
const operatorBtns = document.querySelectorAll(".is-operator");
const currentDisplay = document.querySelector(".current-output");
const clearBtn = document.querySelector(".is-clear");
const previousDisplay = document.querySelector(".previous-output");
const equalBtn = document.querySelector(".is-equals");
const deleteBtn = document.querySelector(".is-delete");

let currentInput = "";
let previousInput = "";
let operator = undefined;

function clear() {
  currentInput = "";
  previousInput = "";
  operator = undefined;
}

function updateDisplay() {
  if (currentInput === "" && currentDisplay.textContent === "") {
    currentDisplay.textContent = "";
  } else {
    currentDisplay.textContent = currentInput;
  }

  if (operator !== undefined) {
    previousDisplay.textContent = previousInput + operator;
  } else {
    previousDisplay.textContent = "";
  }
}

function chooseOperator(chosenOperator) {
  if (currentInput === "") return;
  if (previousInput !== "") compute();

  operator = chosenOperator;
  previousInput = currentInput;
  currentInput = "";
}

function appendNumber(number) {
  currentInput += number;
}

function compute() {
  let total = 0;
  const previousNumber = parseInt(previousInput);
  const currentNumber = parseInt(currentInput);

  switch (operator) {
    case "+":
      total = previousNumber + currentNumber;
      break;
    case "−":
      total = previousNumber - currentNumber;
      break;
    case "×":
      total = previousNumber * currentNumber;
      break;
    case "÷":
      total = previousNumber / currentNumber;
      break;
    default:
      return "";
  }

  currentInput = total;
  previousInput = "";
  operator = undefined;
}

numberBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (currentDisplay.textContent === "" && event.target.textContent === "0")
      return;

    appendNumber(event.target.textContent);
    updateDisplay();
  });
});

clearBtn.addEventListener("click", () => {
  clear();
  updateDisplay();
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    chooseOperator(event.target.textContent);
    updateDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  compute();
  updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  let currentOutput = currentDisplay.textContent;
  let newOutput = currentOutput.slice(0, -1);

  currentDisplay.textContent = newOutput;
});
