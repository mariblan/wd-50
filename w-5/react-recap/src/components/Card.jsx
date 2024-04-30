import profile from '../assets/profile.jpeg';

function Card({src, name, email}) {
    // console.log(props)

    // Destructuralizing
    // const {src, name, email} = props;
    console.log(src)

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={src} alt='profile' />
      </div>
      <div className='card-text'>
        <p>Name: {name}</p>
        <p>Email:{email}</p>
      </div>
    </div>
  );
}

export default Card;
