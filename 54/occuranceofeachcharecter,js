// counting the occurance of each charecter

function countCharacterOccurrences(str) {
  charCount = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

console.log(countCharacterOccurrences("Hello World")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
