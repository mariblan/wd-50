import OneCard from './OneCard';

function DogsContainer(props) {
  return (
    <section className='animalContainer'>
      <h3>Adopt a Dog!</h3>
      <div className='cardsContainer'>
        <OneCard
          name={props.dogs[0]}
          age={props.age}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq8XOIHZips8a8a2r6TVcR7bYl3-hDVgrUw&usqp=CAU'
        />
        <OneCard
          name={props.dogs[1]}
          age={props.age}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq8XOIHZips8a8a2r6TVcR7bYl3-hDVgrUw&usqp=CAU'
        />
        <OneCard
          name={props.dogs[2]}
          age={props.age}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq8XOIHZips8a8a2r6TVcR7bYl3-hDVgrUw&usqp=CAU'
        />
        {/* <div className='card'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq8XOIHZips8a8a2r6TVcR7bYl3-hDVgrUw&usqp=CAU'
            alt='Tabby'
          />
          <h4>Tabby</h4>
          <p>
            Tabby is the perfect combination between sweet and protective. This
            3 year old dog will give you loads of love, but it will also protect
            your house from the mailman like nobody's business, so you will
            never receive unwanted mail again (or any other kind). She enjoys
            the ocasional fetch ball game, but in general she would rather eat
            your shoes or dig a hole where you just planted that new Gardenia.
            Take her with you back home!
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default DogsContainer;
