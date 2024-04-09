const num1 = 2;
const num2 = 5;

function greaterNum(num1, num2) {
  let message;

  if (num1 > num2) {
    message = `The greater number of ${num1} and ${num2} is ${num1}`;
  } else if (num1 < num2) {
    message = `The greater number of ${num1} and ${num2} is ${num2}`;
  } else {
    message = `${num1} and ${num2} are equal.`;
  }
  console.log(message);
  return message;
}

greaterNum(3, 6);

greaterNum(5, 3);

greaterNum(4, 4);
