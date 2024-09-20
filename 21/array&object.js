// convert array to string & number , convert object to string & number

let arr = [1, 2, 3];

let convertedArr = String(arr); // conerting array to string using String method
console.log(convertedArr);
console.log(typeof convertedArr); // string

let convertedArray = Number(arr);
console.log(convertedArray); // NaN => it tries to convert array to number but array contains multiple elements
console.log(typeof convertedArray); // number

let obj = {
  name: "abc",
  age: 30,
};

let objToString = String(obj); // converts the object to string
let objToNumber = Number(obj); // cannot directly convert an object to a number because
// object contains a specific value that can be interpreted as a number.

console.log(objToString); // [object Object]
console.log(objToNumber); // NaN
