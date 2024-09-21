// determining game level

let determineGameLevel = function (score) {
  let level;
  let message;

  if (score >= 0 && score <= 49) {
    level = "Beginner";
    message = "Keep going,you're off to a great start";
  } else if (score >= 50 && score <= 79) {
    level = "Intermediate";
    message = "You're making progress, keep going";
  } else if (score >= 80 && score <= 100) {
    level = "Advanced";
    message = "Amazing work, you're mastering the game";
  } else {
    return "Invalid score ,Please enter the score between 0 and 100";
  }
  return level, message;
};
console.log(determineGameLevel("50")); // You're making progress, keep going
console.log(determineGameLevel("15")); // Keep going,you're off to a great start
console.log(determineGameLevel("70")); // You're making progress, keep going
console.log(determineGameLevel("150")); // Invalid score ,Please enter the score between 0 and 100
