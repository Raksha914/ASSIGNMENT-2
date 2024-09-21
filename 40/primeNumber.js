// Prime Number

function primeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
let number = 9;
if (primeNumber(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`); // 9 is a prime number.
}

let number1 = 8;
if (primeNumber(number1)) {
  console.log(`${number1} is a prime number.`);
} else {
  console.log(`${number1} is not a prime number.`); // 8 is not a prime number.
}
