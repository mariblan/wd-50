import './App.css';
import Explanation from './Instructions/Explanation';
import Instructions from './Instructions/Instructions';
import Help from './Instructions/Help';
import WreckshipShelter from './components/WreckshipShelter';

function App() {
  // The following three variables can be moved to different files
  // as you progress through the exercise.
  const cats = ['Tom', 'Olly', 'Oreo'];
  const dogs = ['Tabby', 'Billy', 'Leila'];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <>
      <div className='row'>
        <Explanation />
      </div>

      <div className='row'>
        <Instructions />

        {/* THIS IS THE PRESENTATION COMPNENT START */}
        <WreckshipShelter cats={cats} dogs={dogs} age={age} />
        {/* THIS IS THE PRESENTATION COMPNENT END */}
      </div>
      <div className='row'>
        <Help />
      </div>
    </>
  );
}

export default App;
