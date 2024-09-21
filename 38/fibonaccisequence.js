// fibinacci sequence

function generateFibinacci(maxNumber) {
  let fib = [0, 1]; // starts with first fibinacchi numbers
  for (let i = 2; ; i++) {
    let nextNumber = fib[i - 1] + fib[i - 2]; // 0,1,0+1=1,1+1=2,2+1=3......
    if (nextNumber > maxNumber) break;
    fib.push(nextNumber);
  }
  return fib;
}
console.log(generateFibinacci(25)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(generateFibinacci(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibinacci(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
