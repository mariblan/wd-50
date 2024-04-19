import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Setting the states always at the top of the page
  const [count, setCount] = useState(0);
  const [name, setName] = useState(true);

  //Triggerint the console log and the setName function in the mounting of the component only
  useEffect(() => {
    console.log('useEffect');
    setName((prevName) => !prevName);
  }, []); // The empty array is for the mounting of the component only

  // Triggerint the console log and the setName function in the mounting of the component only
  useEffect(() => {
    console.log('useEffect');
    setName((prevName) => !prevName);
  }, [count]); // The count is the dependency of the useEffect, so it will trigger the useEffect when the count changes

  // logging the name to check the value of the name and see if the changes are happening
  console.log(name);

  // Function to handle the click event to trigger the setCount function
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
