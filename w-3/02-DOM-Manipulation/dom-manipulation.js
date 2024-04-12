// document; => targets the whole document
// document.querySelector("body"); => targets the first element with that tag name
// document.querySelector(".body"); => targets the first element with that class name
// document.querySelector("#body");=> targets the first element with that class id
// const list = document.getElementById("list1");
// const lists = document.getElementsByClassName("list");
// const lists2 = document.querySelectorAll(".list");

const h1 = document.getElementById('title');
h1.innerText = 'Hello';
// console.log(h1.getAttribute('class'));
// console.log(h1.getAttributeNames());
h1.setAttribute('name', 'title');
// console.log(h1);
h1.classList.add('hidden');
h1.classList.remove('hidden');

const ulElement = document.getElementById('list1');
const addBtn = document.getElementById('addBtn');

const addItem = () => {
  const listItem = document.createElement('li');
  //   listItem.innerText = 'Item 2';
  const listItemText = document.createElement('span');
  listItemText.innerText = 'Item 2';
  listItem.appendChild(listItemText);

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', (e) => {
    console.log(e.target.previousSibling);
    const itemToEdit = e.target.previousSibling;
    const isContentEditable = itemToEdit.hasAttribute('contenteditable');
    if (isContentEditable) {
      itemToEdit.removeAttribute('contenteditable');
    } else if (!isContentEditable) {
      itemToEdit.setAttribute('contenteditable', 'true');
    }
  });
  listItem.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    const itemToDelete = e.target.parentElement;
    ulElement.removeChild(itemToDelete);
  });
  listItem.appendChild(deleteBtn);

  listItem.style.fontFamily = 'Tahoma';
  listItem.classList.add('list-item');
  ulElement.appendChild(listItem);
};

const removeItem = (event) => {
  //   console.log(event.target);
  const itemToRemove = event.target;
  ulElement.removeChild(itemToRemove);
};

const editItem = (e) => {
  const itemToEdit = e.target;
  console.log(itemToEdit);
  const isContentEditable = itemToEdit.hasAttribute('contenteditable');
  if (!isContentEditable) {
    itemToEdit.setAttribute('contenteditable', 'true');
    console.log(isContentEditable);
  } else if (isContentEditable) {
    itemToEdit.removeAttribute('contenteditable');
  }
};

addBtn.addEventListener('click', addItem);
// ulElement.addEventListener('click', (e) => console.log(e.target));
// ulElement.addEventListener('click', removeItem);
// ulElement.addEventListener('click', editItem);
