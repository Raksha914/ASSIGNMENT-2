// remove the duplicate elements in an array

let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6];

function removeduplicateElements(arr) {
  let duplicateArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicateArr.indexOf(arr[i]) === -1) {
      duplicateArr.push(arr[i]);
    }
  }
  return duplicateArr;
}
let result = removeduplicateElements(numbers);
console.log(result); // (6) [1, 2, 3, 4, 5, 6]
