let operator;
let currentDisp1, currentDisp2;

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    if (!currentDisp1 && !currentDisp2) {
      currentDisp1 = parseFloat(e.target.innerHTML);
      displayOnScreen(currentDisp1);
    } else if (currentDisp1 && !currentDisp2) {
      currentDisp2 = parseFloat(e.target.innerHTML);
      displayOnScreen(currentDisp2);
    }
    console.log(`curr1: ${currentDisp1}, curr2: ${currentDisp2}`);
  });
});

const operationButtons = document.querySelectorAll(".operation-button");
operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", (e) => {
    operator = e.target.innerHTML;
    displayOnScreen(operator);
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
      result = divideNumbers(num1, num2);
      break;
    default:
      result = "There is no such operator";
      break;
  }

  currentDisp1 = result;
  displayOnScreen(currentDisp1);
  currentDisp2 = undefined;
  console.log(`curr1: ${currentDisp1}, curr2: ${currentDisp2}`);
}

function displayOnScreen(displayValue) {
  const currentResultDiv = document.querySelector(".current-result");
  let html = ` ${displayValue} `;
  currentResultDiv.innerHTML = html;
}

//console.log(chooseOperation(3, 5, "+"));
