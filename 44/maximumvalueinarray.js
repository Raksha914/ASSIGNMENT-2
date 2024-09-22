let numbers = [10, 20, 50, 6];

function maxValue(arr) {
  let max = arr[0]; // let the first element is maximum
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxNumber = maxValue(numbers);
console.log("The maximum value is ", maxNumber); // The maximum value is  50
