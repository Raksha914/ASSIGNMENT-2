let numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0; //a variable to atore the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add current element to the sum
  }
  return sum;
}
let result = sumArray(numbers);
console.log("The sum of elements is", result); // 15
