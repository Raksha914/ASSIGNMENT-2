//convert a number to string

let num = 456;

let str = num.toString(); // convert to string using Number method
console.log(str); //456
console.log(typeof str); // string

let str1 = String(num);
console.log(str1); //456
console.log(typeof str1); // string

let str2 = `${num}`; // by using templete literals
console.log(str2); //456
console.log(typeof str2); // string

let str3 = num + "";
console.log(str3); //456
console.log(typeof str3); // string
