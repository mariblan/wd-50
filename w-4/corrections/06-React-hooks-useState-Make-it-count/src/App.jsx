import './App.css';
import Instructions from './instructions/Instructions';
import Counter from './components/Counter';
import OneCounter from './components/OneCounter';
import { useState } from 'react';
import Buttons from './components/Buttons';

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const decreaseAll = () => {
    // Decrease all counters
    setCount((prev) => prev - 1);
    setCount2((prev) => prev - 1);
    setCount3((prev) => prev - 1);
  };
  const increaseAll = () => {
    // Increase all counters
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount3((prev) => prev + 1);
  };
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <Counter />
        <OneCounter count={count} setCount={setCount} />
        <OneCounter count={count2} setCount={setCount2} />
        <OneCounter count={count3} setCount={setCount3} />
        <Buttons decreaseAll={decreaseAll} increaseAll={increaseAll} />
        {/* <div>
          <button onClick={decreaseAll}>Decrease All</button>
          <button onClick={increaseAll}>Increase All</button>
        </div> */}
      </div>
    </div>
  );
}
