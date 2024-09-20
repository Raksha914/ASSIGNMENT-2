let sentence =
  "learning javascript string method is important for effective web development ";

//slice
let sliceString = sentence.slice(9, 27);
console.log(sliceString); // javascript string

console.log(sentence.slice(9, 27)); // javascript string
console.log(sentence.slice(20, 34)); // string method
console.log(sentence.slice(9, 50)); // javascript string method is important for

//substring
let subString = sentence.substring(9, 27);
console.log(subString); // javascript string

console.log(sentence.substring(9, 27)); // javascript string
console.log(sentence.substring(20, 34)); // string method
console.log(sentence.substring(9, 50)); // javascript string method is important for

//substr
let subStr = sentence.substr(11, 10);
console.log(subStr); //vascript s

//split
let arr = sentence.split(" "); // split the sentence
let portion = arr.slice(5, 10); //extract the portion from 5th word to 10th word
let extractedportion = portion.join(" "); // join the extracted portion
console.log(extractedportion); // important for effective web development

//charAt
console.log(sentence.charAt(10)); //a extract the charecter at index 10
console.log(sentence.charAt(0)); //l  extract the charecter at index 10

//lastIndexOf
let lastIndex = sentence.lastIndexOf("important"); // find the last occurrence of a specified word
let extractedLastIndex = sentence.slice(lastIndex); // extract the portion of the string from lastindex
console.log(extractedLastIndex); //important for effective web development

//includes
let wordExists = sentence.includes("method"); // we need to check if mentioned word is there in sentence
if (wordExists) {
  let startIndex = sentence.indexOf("method"); // if the word is found then extract the portion
  let extractedPortion = sentence.slice(startIndex); // extracting portion
  console.log(extractedPortion); // prints the extracted portion
} else {
  console.log("The word 'method' was not found in the sentence."); // else prints not found
}

// UpperCase
let toUpperCase = sentence.slice(0, 10); // Extract first
let extractuppercase = sentence.toUpperCase(); // vonvert to upper case
console.log(extractuppercase); //LEARNING JAVASCRIPT STRING METHOD IS IMPORTANT FOR EFFECTIVE WEB DEVELOPMENT

// LowerCase
let toLowerCase = sentence.slice(10, 30); // Extract portion
let extractlowercase = sentence.toLowerCase(); //convert to lowercase
console.log(extractlowercase); //learning javascript string method is important for effective web development
