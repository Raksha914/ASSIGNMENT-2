// find the longest word in sentence

let sentence =
  "Write a functionss that finds the longest word in a given sentence ";

function isLongestWord(sentence) {
  let words = sentence.split(" "); // split the sentence into an array of words
  let longestWord = ""; // empty string to store the longest string
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
let result = isLongestWord(sentence);
console.log(result); // functionss
