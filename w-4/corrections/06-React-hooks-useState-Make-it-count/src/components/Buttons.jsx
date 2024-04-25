import React from 'react';

function Buttons({decreaseAll, increaseAll}) {
  return (
    <div>
      <button onClick={decreaseAll}>Decrease All</button>
      <button onClick={increaseAll}>Increase All</button>
    </div>
  );
}

export default Buttons;
