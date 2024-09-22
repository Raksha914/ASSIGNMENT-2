// adding odd numbers

let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddNumber(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      sum += num[i];
    }
  }
  return sum;
}
console.log(oddNumber(odd)); // 25=>[1+3+5+7+9=25]
