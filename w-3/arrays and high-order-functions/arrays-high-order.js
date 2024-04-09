// const array = ["Bolita", "Tom", "Pita", "Miki"];
// const number = [1, 4, 5]
// const boolean = [true, false];
// const arrayOfArrays = [array, number]

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

console.log(greet("Denis", hi))
console.log(greet("Ruth", hi))

// as return
const greetings = (name) => {
    return (greeting) => {
        return `${greeting}, ${name}`;
    }
}
console.log(greetings("Hi")("Rabia"))

// const helloGreet = greetings("Hello");
// console.log(helloGreet)
// console.log(helloGreet("Royce"))

const helloGreet = greetings("Rabia");
console.log(helloGreet("Hello"))

const greetingMsg = greetings("Rabia")("Hi");
const greetingMsg2 = greetings("Royce")("Hello");
console.log(greetingMsg);
console.log(greetingMsg2);



