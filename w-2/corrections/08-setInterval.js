//SetInterval
// Write a script that displays "hello" in the console
// every 2 seconds.
const myInterval = setInterval(() => {
  console.log('Hi');
}, 2000);

// To remove the Timeout, you need to use the name of the variable
// you have assigned the timeout function to.
// eg.: clearTimeout(myTimeout)

clearInterval(myInterval);
