let num1, num2;
let operator;

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    let buttonValue = e.target.innerHTML;
    displayOnScreen(buttonValue);
  });
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
    case "*":
      result = multiplyNumbers(num1, num2);
      break;
    case "/":
      result = divideNumbers(num1, num2);
      break;
    default:
      result = "There is no such operator";
      break;
  }

  return result;
}

function displayOnScreen(displayValue) {
  const currentResultDiv = document.querySelector(".current-result");
  currentResultDiv.innerHTML = displayValue;
}

//console.log(chooseOperation(3, 5, "+"));
