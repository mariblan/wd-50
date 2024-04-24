import Instructions from './instructions/Instructions';
import Header from './components/Header';
import Presentation from './components/Presentation';
import PieceOfCake from './components/PieceOfCake';
import './App.css';

export default function App() {
  const title = 'React is amazing!';
  const handleClick = () => console.log('piece of cake');
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        Insert your components here
        <Header title='React is amazing!' />
        <Presentation title={title} name="Maria"   />
        <PieceOfCake title={title} handleClick={handleClick}  />
      </div>
    </div>
  );
}
