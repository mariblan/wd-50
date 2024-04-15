// Onsubmit
// Display an alert if the form is empty when the form is submitted.

// Get the form
const form = document.getElementById('submit-container');

// Get the input of the form
const input = document.getElementById('submit');

// Add the submit event to the form
form.addEventListener('submit', (event) => {
  // Avoid the automatic submission and reset of the form when clicking
  // the submit button.
  event.preventDefault();

  // Check if the value of the input is an empty string
  if (input.value === '') {
    // Add the alert method and pass the message in between the parenthesis
    // that will render inside the alert window
    alert('Fill all the fields!');
  }
});
