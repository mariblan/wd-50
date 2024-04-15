document.querySelector('.names').innerHTML += 'Bob is here <br />';
document.querySelector('.names').innerHTML += 'John is here <br />';
document.querySelector('.names').innerHTML += 'Sarah is here <br />';

// Option 1
const sentences = [
  'Bob is here <br />',
  'John is here <br />',
  'Sarah is here <br />',
];

function addSentences(sentences) {
  const namesContainer = document.querySelector('.names');
  sentences.forEach((sentence) => {
    namesContainer.innerHTML += sentence;
  });
}

addSentences(sentences);

// Option 2 - this one is more scalable as it allows us to be able to add new names without repeating the whole sentence again.

const names = ['Bob', 'John', 'Sarah'];
addSentences();
function addNames(names) {
  const namesContainer = document.querySelector('.names');
  names.forEach((name) => {
    namesContainer.innerHTML += `${name} is here <br />`;
  });
}

addNames(names);
