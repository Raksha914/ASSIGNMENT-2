// calculate final price

function calculateFinalPrice(totalPrice, membershipType) {
  let discount = 0;
  if (membershipType === "silver") {
    discount = 10;
  } else if (membershipType === "gold") {
    discount = 20;
  }
  let discountPrice = (discount / 100) * totalPrice;
  let finalAmount = totalPrice - discountPrice;
  return finalAmount;
}
console.log(calculateFinalPrice(1000, "regular")); // 1000 => 0% discount
console.log(calculateFinalPrice(1000, "silver")); // 900 => 10% discount
console.log(calculateFinalPrice(1000, "gold")); // 800 => 20% discount
