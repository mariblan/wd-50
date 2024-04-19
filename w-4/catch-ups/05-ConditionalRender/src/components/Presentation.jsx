import { useState } from 'react';

function Presentation() {
  const firstName = 'Ana';
  const lastName = 'Smith';
  // ADD THE VARIABLES HERE
  
  return (
    <div className='block2'>
      {/* ADD THE H1 ELEMENTS HERE*/}

      {/* ADD THE H2 ELEMENTS HERE*/}

      <p id='presentation'>
        Hi! My name is Ana and I am 30 years old. I live in Wales with my two
        cats. Their names are Shrimpy and Snappy. I love to read books, travel
        to new places, and try new foods.
      </p>

      {/* BUTTONS HERE */}
      <button>Show Name</button>
      <button>Show Last name</button>
    </div>
  );
}

export default Presentation;
