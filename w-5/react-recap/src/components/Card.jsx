import { useState, useEffect } from 'react';

function Card({
  cardObject: { id, src, name, email, busy, active },
  setCards,
  cards,
}) {
  const [isActive, setIsActive] = useState(active);
  const [newCard, setNewCard] = useState({});
  //   console.log(setCards);
  // Destructuralizing
  // const {src, name, email} = props;

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    let removedArray = cards.filter((card) => card.id !== id);
    console.log(removedArray);
    let card = {
      id,
      src,
      name,
      email,
      busy,
      active: isActive,
    };
    console.log(card);
    setCards([...removedArray, card]);
  }, [isActive]);

  console.log(cards);
  return (
    <div className={`card-container ${busy ? 'redBg' : ''}`}>
      {active && (
        <div>
          <div className='image-container'>
            <img src={src} alt='profile' />
          </div>
          <div className='card-text'>
            <p>Name: {name}</p>
            <p>Email:{email}</p>
          </div>
        </div>
      )}
      <button onClick={handleClick}>Activate</button>
    </div>
  );
}

export default Card;
