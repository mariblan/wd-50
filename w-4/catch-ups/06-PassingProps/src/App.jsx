import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(true);

  useEffect(() => {
    console.log('useEffect');
    setName((prevName) => !prevName);
  }, [count]);
  console.log(name)
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className='card'>
        <button onClick={handleClick}>count is {count}</button>
        <button onClick={() => setName('Tom')}>My name is {name}</button>
      </div>
    </>
  );
}

export default App;
