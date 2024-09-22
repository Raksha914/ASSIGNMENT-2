// generates triangle patterns

function generatePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    // outer loop
    let triangle = "";
    for (let j = 1; j <= i; j++) {
      // inner loop
      triangle += "+";
    }
    console.log(triangle); // each row is printed after it is fully constructed, before moving on to the next row
  }
}
generatePattern(6);
// +
// ++
// +++
// ++++
// +++++
// ++++++
