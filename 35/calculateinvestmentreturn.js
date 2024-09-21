// calculate investment return

function calculateInvestmentReturn(principal, intresetRate, years) {
  let typeOFInvestment;
  if (intresetRate < 5) {
    typeOFInvestment = "Low Risk";
  } else if (intresetRate >= 5 && intresetRate <= 10) {
    typeOFInvestment = "Medium Risk";
  } else {
    typeOFInvestment = "High Risk";
  }
  let totalAmount = principal + (principal * intresetRate * years) / 100;
  return {
    typeOFInvestment: typeOFInvestment,
    totalAmount: totalAmount,
  };
}
let result = calculateInvestmentReturn(1000, 6, 5); // 1000=>principal,6=>intreset rate,5=>years
console.log("Investment Type: " + result.investmentType); // Investment Type: undefined
console.log("Total Amount after 5 years: $" + result.totalAmount); // Total Amount after 5 years: $1300
