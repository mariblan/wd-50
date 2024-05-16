import './App.css';
import Instructions from './instructions/Instructions';
import Metronome from './components/Metronome';

function App() {
  return (
    <>
      <Instructions />
      <div className='block'>
        <Metronome />
      </div>
    </>
  );
}

export default App;
