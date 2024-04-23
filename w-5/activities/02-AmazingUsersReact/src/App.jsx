import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      name: {
        first: 'John',
        last: 'Doe',
      },
      email: 'john@org.com',
      picture: {
        medium:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmT1nrdZR46G1oD6xaH9S_Ky9c8tIMOTXVWQ&usqp=CAU',
      },
    },
  ]);
  //Fetch here the users from the API endpoint store in the url variable and set the data to be the value of the users state upon mounting.
  const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
  //WRITE YOUR CODE HERE

  return (
    <div className='App'>
      <h2>Amazing Users</h2>
      <div>
        <ul className='block'>
          {users.map((user) => {
            return (
              <li key={user.email}>
                <img src={user.picture.medium} alt={user.name.first} />
                <p>
                  {user.name.first} {user.name.last}
                </p>
                <div>{user.email}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
