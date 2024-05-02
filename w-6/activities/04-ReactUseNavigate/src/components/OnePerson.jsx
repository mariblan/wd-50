function OnePerson({ name, age, address, email, src }) {
  return (
    <div className='userProfile'>
      <img src={src} alt='name' />
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default OnePerson;
