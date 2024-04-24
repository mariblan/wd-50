import React from 'react';

function PieceOfCake({ title, handleClick }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Easy as pie</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default PieceOfCake;
