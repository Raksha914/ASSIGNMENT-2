// calculate discount

let calculateDiscount = function (totalAmount) {
  let discountpercentage = 0; //determined the discountPercentage based on the total amount so we can use to further calculation
  if (totalAmount < 50) {
    discountpercentage = 0;
  } else if (totalAmount >= 50 && totalAmount < 100) {
    discountpercentage = 10; //totalAmount is 75, the condition for the range 50–100 will be true
  } else if (totalAmount >= 100 && totalAmount <= 200) {
    discountpercentage = 20; //totalAmount is 150, the condition for the range 100–200 will be true
  } else {
    discountpercentage = 30;
  }
  let discountAmount = (discountpercentage / 100) * totalAmount;
  let finalAmount = totalAmount - discountAmount;
  return finalAmount;
};
let totalPurchase = 160;
let finalPrice = calculateDiscount(totalPurchase);
console.log(finalPrice); //(20/100)*160=>32, 160-32=>128
