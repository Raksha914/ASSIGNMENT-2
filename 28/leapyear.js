// Leap year

function isLoopyear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not a Leap Year";
  }
}
console.log(isLoopyear(2024)); // Leap Year
console.log(isLoopyear(2022)); // Not a Leap Year
console.log(isLoopyear(2020)); // Leap Year
console.log(isLoopyear(2019)); // Not a Leap Year
