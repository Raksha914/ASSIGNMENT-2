//const with objects
const person = {
  name: "Raghav",
  age: 30,
  city: "Hassan",
};
person.name = "Raghu"; // allows to change the property
person.job = "Developer"; // can add new property
// person = { name: "Abhinav", age: 31, city: "Banglore" }; // cannot reassign the object
console.log(person);

//const with array
const numbers = [1, 2, 3, 4];
numbers[0] = 10; // can modify the element
numbers.push(20); // can push new elements
// number = [20, 30, 40, 50]; // cannot reassign the array
console.log(numbers);
