import OneCard from './OneCard';

function CatsContainer(props) {
  console.log(props);
  return (
    <section className='animalContainer'>
      <h3>Adopt a Cat!</h3>
      <div className='cardsContainer'>
        <OneCard
          name={props.cats[0]}
          age={props.age}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU'
        />
        <OneCard
          name={props.cats[1]}
          age={props.age}
          src='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*'
        />
        <OneCard
          name={props.cats[2]}
          age={props.age}
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU'
        />
        {/* <div className='card'>
          <img
            src='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*'
            alt='Tom'
          />
          <h4>Tom</h4>
          <p>
            Tom is a really beautiful cat, with a lot of sass and snuggles to
            give. He is 2 years old and is looking for a nap companion during
            those tough winter months. He is very self sufficient, and is able
            to find a snack wherever he goes. No food at hand? Not a problem, he
            will figure out how to open your trash and invite himself to the
            delicious leftovers of that dinner you never finished! And if
            something falls on the floor, it will be gone before you can count
            to three! Take him back home with you!
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default CatsContainer;
