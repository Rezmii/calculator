let operator;
let currentDisp1, currentDisp2;
let displayValue;
let dot = false;

const dotButton = document.querySelector(".dot-button");
dotButton.addEventListener("click", () => {
  let checkCurrentDisp1;
  let checkCurrentDisp2;
  if (currentDisp1 !== null && currentDisp1 !== undefined) {
    checkCurrentDisp1 = String(currentDisp1);
    if (checkCurrentDisp1.includes(".") === false) {
      currentDisp1 += ".";
      displayValue = displayOnScreen(currentDisp1);
    }
  }
  if (currentDisp2 !== null && currentDisp2 !== undefined) {
    checkCurrentDisp2 = String(currentDisp2);
    if (checkCurrentDisp2.includes(".") === false) {
      currentDisp2 += ".";
      displayValue = displayOnScreen(currentDisp2);
    }
  }
});

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    if (!currentDisp1 && !currentDisp2) {
      currentDisp1 = parseFloat(e.target.innerHTML);
      displayValue = displayOnScreen(currentDisp1);
      console.log(currentDisp1);
    } else if (currentDisp1 && !operator) {
      currentDisp1 += e.target.innerHTML;
      currentDisp1 = parseFloat(currentDisp1);
      displayValue = displayOnScreen(currentDisp1);
    } else if (currentDisp1 && !currentDisp2) {
      currentDisp2 = parseFloat(e.target.innerHTML);
      displayValue = displayOnScreen(currentDisp2);
    } else if (currentDisp2 && currentDisp1) {
      currentDisp2 += e.target.innerHTML;
      currentDisp2 = parseFloat(currentDisp2);
      displayValue = displayOnScreen(currentDisp2);
    }
    console.log(`curr1: ${currentDisp1}, curr2: ${currentDisp2}`);
  });
});

const operationButtons = document.querySelectorAll(".operation-button");
operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", (e) => {
    if (operator && currentDisp1 && currentDisp2) {
      chooseOperation(currentDisp1, currentDisp2, operator);
      operator = e.target.innerHTML;
    } else {
      operator = e.target.innerHTML;
      displayOnScreen(operator);
    }
  });
});

const resultButton = document.querySelector(".result-button");
resultButton.addEventListener("click", () => {
  chooseOperation(currentDisp1, currentDisp2, operator);
});

function addNumbers(num1, num2) {
  return (result = num1 + num2);
}
function subtractNumbers(num1, num2) {
  return (result = num1 - num2);
}
function multiplyNumbers(num1, num2) {
  return (result = num1 * num2);
}
function divideNumbers(num1, num2) {
  if (num2 === 0) return "Can't divide by 0";
  else return (result = num1 / num2);
}

function chooseOperation(num1, num2, operator) {
  let result;
  let msg;
  switch (operator) {
    case "+":
      result = addNumbers(num1, num2);
      break;
    case "-":
      result = subtractNumbers(num1, num2);
      break;
    case "x":
      result = multiplyNumbers(num1, num2);
      break;
    case "/":
      if (typeof divideNumbers(num1, num2) === "string")
        msg = divideNumbers(num1, num2);
      else result = divideNumbers(num1, num2);
      break;
    default:
      msg = "There is no such operator";
      break;
  }

  displayValue = result;
  currentDisp1 = result;
  if (!msg) displayOnScreen(displayValue);
  else displayOnScreen(msg);
  currentDisp2 = undefined;
  operator = undefined;
  console.log(`curr1: ${currentDisp1}, curr2: ${currentDisp2}`);
}

function displayOnScreen(displayValue) {
  let html;
  const currentResultDiv = document.querySelector(".current-result");
  if (displayValue === "xd") currentResultDiv.innerHTML = "";
  else {
    html = ` ${displayValue} `;
    currentResultDiv.innerHTML = html;
  }
  return currentResultDiv;
}

const clearButton = document.querySelector(".control-button1");
clearButton.addEventListener("click", () => {
  clearEverything();
});

function clearEverything() {
  displayOnScreen("xd");
  operator = null;
  currentDisp1 = null;
  currentDisp2 = null;
  displayValue = null;
}
