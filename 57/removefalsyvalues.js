// removing falsy values

let array = [0, "", false, null, undefined, NaN, 1, "Hello", true, 42];

function removeFalsyValues(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeFalsyValues(array)); // (4) [1, 'Hello', true, 42]
