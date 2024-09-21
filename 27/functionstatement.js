// temperature status

function temperatureStatus(temp) {
  if (temp < 15) {
    return "Cold";
  } else if (temp >= 15 && temp <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}
let temperature1 = temperatureStatus(10);
console.log(temperature1); //Cold
let temperature2 = temperatureStatus(25);
console.log(temperature2); //Warm
let temperature3 = temperatureStatus(35);
console.log(temperature3); // Hot
