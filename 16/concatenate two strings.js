// concatenate two strings

let str1 = "Hello";
let str2 = "Brother!";

let results = str1.concat(str2); // concatenate two strings by using concat method
console.log(results); // HelloBrother!

let result = str1.concat(" ", str2); // to give space between them " " is added
console.log(result); // Hello Brother!

let result1 = str1 + str2; // concatenate two strings by using + operator
console.log(result1); // HelloBrother!

let result2 = str1 + " " + str2; // to give space between them " " is added
console.log(result2); // Hello Brother!

if (result === result2) {
  console.log("both the methods give the same result");
} else {
  console.log("the results are different");
}
// both the methods give the same result
