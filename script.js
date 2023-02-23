const toggleButton = document.querySelector(".toggle");
const screen = document.querySelector(".screen");

let currentPosition = 0;

toggleButton.addEventListener("click", () => {
  if (currentPosition === 0) {
    toggleButton.classList.add("second");
    currentPosition = 1;
    document.body.classList.add("second_theme");
    screen.style.color = "hsl(60, 10%, 19%)";
  } else if (currentPosition === 1) {
    toggleButton.classList.remove("second");
    toggleButton.classList.add("third");
    document.body.classList.remove("second_theme");
    document.body.classList.add("third_theme");
    screen.style.color = "hsl(52, 100%, 62%)";
    currentPosition = 2;
  } else if (currentPosition === 2) {
    toggleButton.classList.remove("third");
    currentPosition = 0;
    document.body.classList.remove("third_theme");
    document.body.classList.remove("second_theme");
    screen.style.color = "white";
  }
});
let hasResult = false;
function resultListener() {
  const currentNumber = Number(current.dataset.value);
  const previousNumber = Number(previous.dataset.value);

  if (!previous.innerText) {
    return;
  }

  let result;
  if (operator.innerText.includes("+")) {
    result = previousNumber + currentNumber;
  } else if (operator.innerText.includes("-")) {
    result = previousNumber - currentNumber;
  } else if (operator.innerText.includes("x")) {
    result = previousNumber * currentNumber;
  } else {
    if (currentNumber === 0) {
      result = "Error";
    } else {
      result = previousNumber / currentNumber;
    }
  }

  previous.innerText = "";
  operator.innerText = "";
  current.innerText = result.toLocaleString("en-US");

  hasResult = true;
}

const current = document.querySelector("#current");
const previous = document.querySelector("#previous");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operators");
const resetButton = document.querySelector("#reset");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#equal");
const operator = document.querySelector("#operator");

equalButton.addEventListener("click", () => {
  resultListener();
});

resetButton.addEventListener("click", () => {
  [current.innerText, previous.innerText, operator.innerText] = ["", "", ""];
});

deleteButton.addEventListener("click", () => {
  if (current.innerText.length > 0) {
    current.innerText = current.innerText.slice(0, -1);
  }
});

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.dataset.value;

    if (hasResult) {
      current.innerText = buttonValue;
      current.dataset.value = buttonValue;
      hasResult = false;
      return;
    }

    if (buttonValue === "." && current.innerText.includes(".")) {
      return;
    }

    current.innerText = current.innerText.concat(buttonValue);
    current.dataset.value = current.innerText.replace(/,/g, "");
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => {
    const operatorValue = event.target.dataset.value;

    if (current.innerText === "") {
      return;
    } else {
      resultListener();
    }
    operator.textContent = operatorValue;
    operator.textContent = "";
    previous.innerText = current.innerText;
    previous.dataset.value = previous.innerText.replace(/,/g, "");
    operator.textContent = operatorValue;
    current.innerText = "";
  });
});
