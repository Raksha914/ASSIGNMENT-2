// to add , remove and create subarray

let colors = ["red", "green", "blue", "yellow", "purple"];

colors.splice(2, 1); // it will change the content by removing or adding the existing element
console.log(colors); // ['red', 'green', 'yellow', 'purple']

colors.splice(2, 0, "Orange", "Pink"); // it will change the content by removing or adding the existing element
console.log(colors); // ['red', 'green', 'Orange', 'Pink', 'yellow', 'purple']

let colorsSubArr = colors.slice(0, 3); // creating new subarray by using slice method
console.log(colorsSubArr); // ['red', 'green', 'Orange']
