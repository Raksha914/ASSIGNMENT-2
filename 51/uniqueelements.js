// unique elements from an array

let number = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6];

function uniqueElements(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
let uniqueArray = uniqueElements(number);
console.log(uniqueArray);
