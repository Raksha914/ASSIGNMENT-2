// convert currency
function convertCurrency(amount, currencyType) {
  let conversionRate;
  if (currencyType === "USD") {
    conversionRate = 75; // 1 USD =75 INR
  } else if (currencyType === "EUR") {
    conversionRate = 90; // 1 EUR =75 INR
  } else if (currencyType === "GBP") {
    conversionRate = 100; // 1 GBP =75 INR
  } else {
    return "Invalid currency type";
  }
  let totalAmount = amount * conversionRate;
  return totalAmount;
}
console.log(convertCurrency(100, "USD")); // 7500
console.log(convertCurrency(100, "EUR")); // 9000
console.log(convertCurrency(100, "GBP")); // 10000
console.log(convertCurrency(100, "IND")); // Invalid currency type
