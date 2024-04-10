// Array Sort
// We have the values 4,3,5,8; put these values in a
// array, sort this array and console.log() this array.

const array = [4, 3, 5, 8];

console.log(array.sort());

// Or

const newArray = array.sort();
console.log(newArray);

// Sorting from biggest to smallest
const newArrayReversed = array.sort((a, b) => b - a);
