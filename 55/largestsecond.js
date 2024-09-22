// finf the second largest number in an array

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];

  if (arr[0] < arr[1]) {
    largest = arr[1];
    secondLargest = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i !== largest]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let number = [10, 5, 8, 12, 15, 20];
console.log(secondLargest(number)); // 15
