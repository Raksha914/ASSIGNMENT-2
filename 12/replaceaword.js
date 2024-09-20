//replace a word

let sentence = "Learning JavaScript is interesting and fun.";
let wordPosition = sentence.indexOf("interesting"); // used indexof to find position of word
console.log(wordPosition); // 23

let updatedSentence = sentence.replace("interesting", "challenging"); // used replace to replace the word
console.log(updatedSentence); // Learning JavaScript is challenging and fun.
