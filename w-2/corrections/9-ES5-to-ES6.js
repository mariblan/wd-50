//ES5 to ES6
// Transform the two functions in index.js into ES6
// syntax (arrow functions)

// Function 1
function notify(name) {
  console.log(`${name} is here`);
}

// Solution:
const notify1 = (name) => {
  console.log(`${name} is here`);
};

// Function 2
setTimeout(function () {
  console.log('1000ms == 1 second');
}, 1000);

// Solution:
setTimeout(() => {
  console.log('1000ms == 1 second');
}, 1000);

// Do no edit
notify('BOB');
