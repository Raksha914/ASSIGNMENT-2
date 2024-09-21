// factorial

function factorial(n) {
  // If n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
let number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`); // The factorial of 5 is 120=>5!=1*2*3*4*5=120
