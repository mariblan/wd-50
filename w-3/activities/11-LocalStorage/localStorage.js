const forms = document.querySelectorAll('form');

forms.forEach((form) =>
  form.addEventListener('submit', (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector('.results');
const keyInput = document.querySelector('.key');
const valueInput = document.querySelector('.value');
const removeInput = document.querySelector('.remove');
const storeBtn = document.querySelector('.store');
const showBtn = document.querySelector('.show');
const clearOneBtn = document.querySelector('.clearOne');
const clearAllBtn = document.querySelector('.clearAll');

// Add your code below
