// Convert the string to a number

// number()
let strNumber = "123.456";

let num = Number(strNumber);
console.log(num); // 123.456
console.log(typeof num); // number

//parseInt()
let num1 = Number.parseInt(strNumber);
console.log(num1); // 123
console.log(typeof num1); // number

//parseFloat()
let num2 = Number.parseFloat(strNumber);
console.log(num2); // 123.456
console.log(typeof num2); // number

if (num === num1) {
  console.log("Number and parseInt are same");
} else if (num === num2) {
  console.log("Number and parsefloat are same ");
} else {
  console.log("Number is not equal to parseInt and parseFloat");
}
// Number is equal to parsefloats
