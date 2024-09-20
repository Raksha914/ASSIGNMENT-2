//convert to Boolean()

let num1 = 0;
let num2 = 1;
let str1 = "";
let str2 = "Hello!";
let isNull = null;
let isUndefined = undefined;

let result1 = Boolean(num1); // in boolean 0 = false
console.log(result1); //false

let result2 = Boolean(num2); // in boolean 1 = true
console.log(result2); // true

let result3 = Boolean(str1); // in boolean empty string = false
console.log(result3); // false

let result4 = Boolean(str2); // in boolean whatever inside the string = true
console.log(result4); // true

let result5 = Boolean(isNull); // null represents the absence of value => nothing => 0 => false
console.log(result5); // false

let result6 = Boolean(isUndefined); // undefined represents the absence of value or uninitialized value = false
console.log(result6); // false
