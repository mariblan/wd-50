import { useState } from 'react';

function OneCounter({count, setCount}) {
//   const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className='counter__button'
      >
        -
      </button>
      <span className='counter__count'>{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className='counter__button'
      >
        +
      </button>
    </div>
  );
}

export default OneCounter;
