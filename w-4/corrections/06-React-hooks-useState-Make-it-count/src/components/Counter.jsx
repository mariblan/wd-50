import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const increment2 = () => setCount2((prevCount) => prevCount + 1);
  const increment3 = () => setCount3((prevCount) => prevCount + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const decrement2 = () => setCount2((prev) => prev - 1);
  const decrement3 = () => setCount3((prev) => prev - 1);

  const decreaseAll = () => {
    setCount((prev) => prev - 1);
    setCount2((prev) => prev - 1);
    setCount3((prev) => prev - 1);
  };

  const increaseAll = () => {
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
    setCount3((prev) => prev + 1);
  };

  return (
    <div>
      <div className='counter' id='counter1'>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className='counter__button'
        >
          -
        </button>
        <span className='counter__count'>{count}</span>
        <button onClick={increment} className='counter__button'>
          +
        </button>
      </div>
      <div className='counter' id='counter2'>
        <button
          onClick={() => setCount2((prev) => prev - 1)}
          className='counter__button'
        >
          -
        </button>
        <span className='counter__count'>{count2}</span>
        <button onClick={increment2} className='counter__button'>
          +
        </button>
      </div>
      <div className='counter' id='counter3'>
        <button onClick={decrement3} className='counter__button'>
          -
        </button>
        <span className='counter__count'>{count3}</span>
        <button onClick={increment3} className='counter__button'>
          +
        </button>
      </div>
      <div>
        <button onClick={decreaseAll}>Decrease All</button>
        <button onClick={increaseAll}>Increase All</button>
      </div>
    </div>
  );
}

export default Counter;
