// Onkeyup
// We want to display in the console the value of the
// input at each new letter.

const input = document.getElementById('keyup');

input.addEventListener('keyup', (event) => console.log(event.target.value));
