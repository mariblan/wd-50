// Get the div with the class logo
const logo = document.querySelector('#logo');

// Get the div with the class screen
const screen = document.querySelector('.screen');

// Get the h1 element inside the div with the class screen
const text = document.querySelector('.screen-text');

// Add a click event to the logo
logo.addEventListener('click', () => {
  // Create the alert inside
  alert('system on');

  // Change the background color of the screen
  screen.style.backgroundColor = '#444';

  // Insert the text on the h1 element
  text.innerText = 'Hello World!';
});
