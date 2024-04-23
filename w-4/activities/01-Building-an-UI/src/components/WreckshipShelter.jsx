import Form from './Form';
import DogsContainer from './DogsContainer';
import CatsContainer from './CatsContainer';

function WreckshipShelter(props) {
  console.log(props);
  return (
    <div className='block1'>
      {' '}
      <h2>Wreckship Shelter</h2>
      <p>
        In our beautiful shelter we have lots of animals with quirky qualities
        to them. Are you in search of a challenge? Here you can find the perfect
        animal for you!
      </p>
      {/* CATS CONTAINER */}
      <CatsContainer cats={props.cats} age={props.age} />
      {/* DOGS CONTAINER */}
      <DogsContainer dogs={props.dogs} age={props.age} />
      {/* FORM */}
      <Form />
    </div>
  );
}

export default WreckshipShelter;
