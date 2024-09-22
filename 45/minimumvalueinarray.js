// minimum value in an array

let numbers = [1, 50, 49, 36, 100];

function minValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      max = arr[i];
    }
  }
  return min;
}
let minNumbers = minValue(numbers);
console.log("The minimum value is", minNumbers); // The minimum value is 1
