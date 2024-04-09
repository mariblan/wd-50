// console.warn('This is a warning!', "Fix this issue", 404);
// console.error('This is an error!');
// console.log('This is a log');

// VARIABLES
//ES5 Keword for variables -> NOT a good practice
// var postalcode = 20000;
// console.log('Postal code: ', postalcode);
// ES6 Keyword for variables
const myName = 'Maria';
// console.log('My name: ', myName);
let age = null;
// console.log('My age: ', age);

// let age = 40;
// myName = 'Yago';

// age = 30;
// console.log('My age: ', age);
// postalcode = 30000;
// console.log('Postal code: ', postalcode);

// var postalcode = 40000;
// console.log('Postal code: ', postalcode);

//CONDITIONALS
//Operators for conditionals
// && -> and
// || -> or
// ! -> not

// == vs ===
//!= vs !==

// If/else if/else

// if (myName === 'Maria') {
//   console.log(`My name is ${myName}`);
// }

// if (age < 18) {
//   console.log("I'm underage.");
// } else {
//   console.log('I am an adult.');
// }

// console.log(typeof age);
// falsy values null, undefined, 0

// !age => age === null || age === undefined || age === 0 || age === false  
// if(!age){
//     age = 30
//     console.log(age);
// };

// if (age <= 0 || age >= 110 || typeof age !== 'number') {
//   console.log('Please, add a correct age.');
// } else if (age < 18) {
//   console.log("I'm underage.");
// } else {
//   console.log('I am an adult.');
// }

//Ternary

// age == "30" ? console.log("ternary", true) : console.log("ternary", false)
// age === "30" ? console.log("ternary", true) : console.log("ternary", false)

//SWITCH
let fruit = "banana";

switch(fruit){
    case "apple":
        console.log("apple");
        break;
    case "banana":
        console.log("banana");
        break;
    case "mango":
        console.log("mango");
        break;
    default:
        fruit = "mango";
        console.log(fruit);
        break;
}