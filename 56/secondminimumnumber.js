// second minimum number

function forSecondMinimum(arr) {
  let minimum = arr[0];
  let secondMinimum = arr[1];

  if (minimum > secondMinimum) {
    [minimum, secondMinimum] = [secondMinimum, minimum];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < minimum) {
      secondMinimum = minimum;
      minimum = arr[i];
    } else if (arr[i] < secondMinimum && arr[i] !== minimum) {
      secondMinimum = arr[i];
    }
  }
  return secondMinimum;
}
let number = [10, 20, 15, 26, 75, 36, 25, 2];
console.log(forSecondMinimum(number)); // 10
