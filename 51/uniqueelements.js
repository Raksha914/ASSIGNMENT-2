// unique elements from an array

let number = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6];

function uniqueElements(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      //Check if the element is not already in the uniqueArray
      unique.push(arr[i]);
    }
  }
  return unique;
}
let uniqueArray = uniqueElements(number);
console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]
