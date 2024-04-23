import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        {data.map(user => <li>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
