// find the second largest number in an array

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest) {
      secondLargest;
      largest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > largest && arr[i] != secondLargest) {
      largest = arr[i];
    }
  }
  return largest;
}
let array = [10, 5, 20, 8, 12];
console.log(secondLargest(array));
