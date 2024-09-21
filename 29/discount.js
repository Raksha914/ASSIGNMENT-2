// calculate discount

let calculateDiscount = function (totalAmount) {
  let discountpercentage = 0;
  if (totalAmount < 50) {
    discountpercentage = 0;
  } else if (totalAmount >= 50 && totalAmount < 100) {
    discountpercentage = 10;
  } else if (totalAmount >= 100 && totalAmount <= 200) {
    discountpercentage = 20;
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
