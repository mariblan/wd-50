import './App.css';
import Explanation from './Instructions/Explanation';
import Instructions from './Instructions/Instructions';
import Help from './Instructions/Help';
import Presentation from './components/Presentation';

function App() {
  return (
    <>
      <div className='row'>
        <Explanation />
      </div>

      <div className='row'>
        <Instructions />

        {/* THIS IS THE PRESENTATION COMPNENT START */}
        <Presentation />
        {/* THIS IS THE PRESENTATION COMPNENT END */}
      </div>
      <div className='row'>
        <Help />
      </div>
    </>
  );
}

export default App;
