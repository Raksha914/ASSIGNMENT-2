// palindrome numbers

let numbers = 121;
let numbers1 = 123;

function isPalindromeNumber(num) {
  let str = num.toString(); // converting number to string
  let reverse = ""; // reversing the string
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return str === reverse; //it will check original string is equal to reverse
}

console.log(isPalindromeNumber(numbers)); // true
console.log(isPalindromeNumber(numbers1)); // false
