// let data;
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok)
      throw new Error(`Request failed with status of ${response.status}`);
    return response.json();
  })
  .then((json) => {
    console.log(json);
    mapUsers(json);
  })
  .catch((error) => console.log(error));

  

const mapUsers = (data) => {
  const ulElement = document.getElementById('users');
  data.map((data) => {
    const div = document.createElement('div');
    const nameElement = document.createElement('p');
    nameElement.innerText = `${data.name}`;
    div.appendChild(nameElement);
    const addressElement = document.createElement('p');
    addressElement.innerText = `${data.adress}`;
    div.appendChild(addressElement);
    const emailElement = document.createElement('p');
    emailElement.innerText = `${data.email}`;
    div.appendChild(emailElement);
    ulElement.appendChild(div);
  });
};


// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })