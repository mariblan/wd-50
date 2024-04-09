const date = new Date();

const hour = date.getHours();
const minutes = date.getMinutes();
let message = `${hour}:${minutes < 10? "0" + minutes : minutes}`;
console.log(message);

const day = date.getDate();
// const dayOfWeek = date.getDay();
const month = date.getMonth()

let message2 = `${day}.${month + 1}`;
console.log(message2)
