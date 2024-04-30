import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error');
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((json) => setData(json));

    fetchData('https://jsonplaceholder.typicode.com/users');
  }, []);

  console.log(data);
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        {data.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
