//SetInterval
// Write a script that displays "hello" in the console
// every 2 seconds.

const myInterval = setInterval(() => {
  console.log('hello');
}, 2000);

clearInterval(myInterval);
