// advanced calculator

function advancedCalculator(num1, num2, operator) {
  let calculation;
  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error:Division by zero is not allowed";
      } else {
        calculation = num1 / num2; //it checks if the second number is zero before dividing to prevent division by zero
        break;
      }
    case "%":
      calculation = num1 % num2;
      break;
    default:
      return "Error: Invalid operator .Please use +,-,*,/,%";
  }
  return calculation;
}
console.log(advancedCalculator(4, 5, "+")); // 9
console.log(advancedCalculator(4, 5, "-")); // -1
console.log(advancedCalculator(4, 5, "*")); // 20
console.log(advancedCalculator(4, 5, "/")); // 0.8
console.log(advancedCalculator(4, 5, "%")); // 4
