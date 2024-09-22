// count the number of properties in an object

let person = {
  name: "Rakesh",
  age: 35,
  city: "Bangalore",
};

function countProperties(obj) {
  let count = 0; // to store the count
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}
let countProperty = countProperties(person);
console.log(countProperty); // 3
