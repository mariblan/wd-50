import React from 'react';

function OneCard(props) {
  console.log(props);
  return (
    <div className='card'>
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
      <p>
        {props.name} is a charming older cat with {props.age()} years on her
        back. She is calm and moves about as if she owns the place. She is
        friendly with younger cats and kids, until a darn youngster tries to
        take her out of her cool. She dislikes being picked up and will let you
        know just how much she dislikes it if you try to, so best to leave her
        to her own antics. {props.name} really likes to nibble on feet at night
        so make sure to wear thick socks while sleeping! Take her back home with
        you!
      </p>
    </div>
  );
}

export default OneCard;
