import profilePic from '../assets/profilePic.jpeg';

function Presentation() {
  return (
    <div className='block2'>
      <div className='card'>
        <div className='cardImage'>
          <img src={profilePic} alt='Ana Smith' />
        </div>
        <div className='presentation-container'>
          <h2>Ana Smith</h2>
          <p id='presentation'>
            Hi! My name is Ana and I am 30 years old. I live in Wales with my
            two cats. Their names are Shrimpy and Snappy. I love to read books,
            travel to new places, and try new foods.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
