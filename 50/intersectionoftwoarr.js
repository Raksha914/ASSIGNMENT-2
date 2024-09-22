// intersection of two arrays => means identifying elements that are present in both arrays

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [1, 5, 6, 16, 8, 40, 59, 2, 33];

function intersectionOfArr(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}
let result = intersectionOfArr(array1, array2);
console.log(result); // (5) [1, 2, 5, 6, 8]
