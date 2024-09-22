// reverse a string

let words = "Hello, Welcome to Javascript";

function reverseString(str) {
  let reverse = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString(words)); //  tpircsavaJ ot emocleW ,olleH
