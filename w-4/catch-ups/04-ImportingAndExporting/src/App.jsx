import './App.css';
import Explanation from './Instructions/Explanation';
import Instructions from './Instructions/Instructions';
import Help from './Instructions/Help';
function App() {
  return (
    <>
      <div className='row'>
        <Explanation />
      </div>

      <div className='row'>
        <Instructions />

        <div className='block2'>
          {/* THIS IS THE PARAGRAPH START */}
          <p id='presentation'>
            Hi! My name is Ana and I am 30 years old. I live in Wales with my
            two cats. Their names are Shrimpy and Snappy. I love to read books,
            travel to new places, and try new foods.
          </p>
          {/* THIS IS THE PARAGRAPH END */}
        </div>
      </div>
      <div className='row'>
        <Help />
      </div>
    </>
  );
}

export default App;
