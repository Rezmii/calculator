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

console.log(addNumbers(4, 2));
console.log(subtractNumbers(4, 2));
console.log(multiplyNumbers(4, 2));
console.log(divideNumbers(4, 0));
