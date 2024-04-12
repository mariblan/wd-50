const pets = ['Bolita', 'Tom', 'Pita', 'Miki'];
const numbers = [1, 4, 5, 4, 5, 6];
const boolean = [true, false];

const logPetName = (pet) => {
  console.log(pet);
};

//map and forEach
// numbers.forEach((num) => console.log(num));
// pets.map((pet) => {
//   console.log(pet);
// });

//filter method

const filteredNumber = numbers.filter((num) => {
  return num === 4;
});

const filteredNumber2 = numbers.filter((num) => num === 4);

const filteredNames = pets
  .filter((pet) => pet.includes('a') === true)
  .map((pet) => console.log(pet));
console.log(filteredNames);

console.log(pets[0].includes('a'));

console.log(filteredNumber2);

//find method

const findNumber = numbers.find((num) => num === 4);
console.log(findNumber);

// console.log(array.length);

// console.log(arrayOfArrays[1][0])

//High order function

// as arguments
const greet = (name, greetings) => {
  return greetings(name);
};

const hi = (name) => {
  return `Hi, ${name}`;
};

console.log(greet('Denis', hi));
console.log(greet('Ruth', hi));

// as return
const greetings = (name) => {
  return (greeting) => {
    return `${greeting}, ${name}`;
  };
};
console.log(greetings('Hi')('Rabia'));

// const helloGreet = greetings("Hello");
// console.log(helloGreet)
// console.log(helloGreet("Royce"))

const helloGreet = greetings('Rabia');
console.log(helloGreet('Hello'));

const greetingMsg = greetings('Rabia')('Hi');
const greetingMsg2 = greetings('Royce')('Hello');
console.log(greetingMsg);
console.log(greetingMsg2);
