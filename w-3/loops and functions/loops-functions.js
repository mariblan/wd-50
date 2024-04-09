console.log('Connected!');

// LOOPS

// FOR

// console.log(students.length)
// console.log(students[0])

// for (let i = 0; i < 10; i++) {
//     console.log(`This loop is in run number ${i}`)
// }

// for (let i = 0; i < students.length; i++) {
//     console.log(`Hi, ${students[i]}`)
// }

// // WHILE

// let score = 0;

// while(score < 5) {
//     score++
//     console.log(score)
// }

// console.log(score)

// while(score < 5) {
//     console.log(score)
//     score++
// }

// do {
//     console.log(score)
//     score++
// } while(score < 5)

const name = 'Maria';
let age = 30;

// ES5 functions
function greet(name) {
    console.log(`Hi, ${name}!`);
    return `Hi, ${name}!`;
}

// console.log(greet('Denis'));

greet(name);
// console.log(greet);

//ES6 Functions or Arrow functions

const students1 = ['Iga', 'Rabia', 'Hamed', 'Denis'];
const students2 = ["Daniele", "Royce", "Anitha"];

const greeting = (number, array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(number, `Hi, ${array[i]}`);
  }
};

// greeting("Students array 1", students1);
// greeting("Students array 2",  students2);
