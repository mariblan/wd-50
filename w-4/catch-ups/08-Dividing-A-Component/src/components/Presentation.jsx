import profilePic from '../assets/profilePic.jpeg';
import profilePic2 from '../assets/profilePic2.jpeg';
import profilePic3 from '../assets/profilePic3.jpeg';

function Presentation() {
  return (
    <div className='block2'>
      {/* NAVBAR */}
      <nav className='studentsNavbar'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Students</a>
          </li>
          <li>
            <a href='#'>Teachers</a>
          </li>
        </ul>
      </nav>
      <div id='cardsContainer' className='cardsContainer'>
        <h2>Our students</h2>
        <p>Here is a list of our students and some informationa about them</p>
        {/* CARD 1 */}
        <div className='card' id='card1'>
          <div className='cardImage'>
            <img src={profilePic} alt='Ana Smith' />
          </div>
          <div className='presentation-container'>
            <h2>Ana Smith</h2>
            <p id='presentation'>
              Hi! My name is Ana and I am 30 years old. I live in Wales with my
              two cats. Their names are Shrimpy and Snappy. I love to read
              books, travel to new places, and try new foods.
            </p>
          </div>
        </div>
        {/* CARD 2 */}
        <div className='card'>
          <div className='cardImage'>
            <img src={profilePic2} alt='Ana Smith' />
          </div>
          <div className='presentation-container' id='card2'>
            <h2>Peter Malone</h2>
            <p id='presentation'>
              Hi! My name is Peter and I am 36 years old. I live in Scotland
              with my two rabbits. Their names are Totto and Whity. I love to
              watch sports games, play video games and.
            </p>
          </div>
        </div>
        {/* CARD 3 */}
        <div className='card' id='card3'>
          <div className='cardImage'>
            <img src={profilePic3} alt='Ana Smith' />
          </div>
          <div className='presentation-container'>
            <h2>Pablo Garcia</h2>
            <p id='presentation'>
              Hi! My name is Pablo and I am 40 years old. I live in Madrid with
              my two dogs. Their names are Tor and Blacky. I love to read books,
              go to the cinema and hangout with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
