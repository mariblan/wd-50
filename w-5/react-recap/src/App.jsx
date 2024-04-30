import './App.css';
import profile from './assets/profile.jpeg';
import profile2 from './assets/profile2.jpeg';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([
    {
      id: `${new Date()}maria`,
      src: profile,
      name: 'Maria',
      email: 'maria@gmail.com',
      active: true,
      busy: false,
    },
    {
      id: `${new Date()}ana`,
      src: profile2,
      name: 'Ana',
      email: 'ana@gmail.com',
      active: true,
      busy: true,
    },
    {
      id: `${new Date()}mario`,
      src: profile2,
      name: 'Mario',
      email: 'Mario@gmail.com',
      active: false,
      busy: false,
    },
  ]);

  return (
    <div className='App'>
      <h1>Hello</h1>
      {cards.map((cardObject) => (
        <Card
          key={cardObject.id}
          cards={cards}
          setCards={setCards}
          cardObject={cardObject}
        />
      ))}
    </div>
  );
}

export default App;
