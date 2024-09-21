// weather advice by using switch statement:is useful when checking multiple possible values for a single variable

let weatherCondition = function (weather) {
  let advice;

  switch (weather) {
    case "Sunny":
      advice = "Wear Sunglasses";
      break;
    case "Rainy":
      advice = "Take an Umbrella";
      break;
    case "Snowy":
      advice = "Wear a Heavyu Coat";
      break;
    case "Cloudy":
      advice = "Might rain;carry an Umbrella";
      break;
    default:
      advice = "Weather condition not recognized";
  }
  return advice;
};
console.log(weatherCondition("Sunny")); // Wear Sunglasses
console.log(weatherCondition("Rainy")); // Take an Umbrella
console.log(weatherCondition("Snowy")); // Wear a Heavyu Coat
console.log(weatherCondition("Cloudy")); // Might rain;carry an Umbrella
console.log(weatherCondition("R")); // Weather condition not recognized
