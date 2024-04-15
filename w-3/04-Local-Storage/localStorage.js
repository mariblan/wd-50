// JSON.stringify

// JSON.parse

// Get html information

// Get the input
const toDoText = document.getElementById('todoText');
// Get the button
const addBtn = document.getElementById('addTodo');
// Get the form
const form = document.getElementById('form');

// Get the todolist for local storage if there is, if not,
// give the list the value of an empty array
const toDoList = JSON.parse(localStorage.getItem('toDoes')) || [];

const addTodo = (e) => {
  console.log(e);
};

// toDoText.addEventListener('change', (e) => console.log(e.target));
addBtn.addEventListener('click', (e) => {
  console.log(toDoText.value);
  const toDo = {
    id: 3,
    text: toDoText.value,
  };
  console.log(toDo);
  localStorage.setItem('toDoes', JSON.stringify([...toDoList, toDo]));
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  toDoText.value = '';
});

console.log(toDoList)
// localStorage.setItem('toDoes', JSON.stringify([toDo]));
// const toDo = {
//   id: 3,
//   text: 'Cooking dinner',
// };

// const tasksInStorage = [
//   {
//     id: 0,
//     text: 'Cooking dinner',
//   },
//   {
//     id: 1,
//     text: 'Making the dishes',
//   },
// ];
