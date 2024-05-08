function OnePerson({ person: { name, age, address, email, src } }) {
  console.log(name, age, address, email, src);
  console.log(src);
  return (
    <div className='userProfile'>
      <div className='imageWrapper'>
        <img src={src} alt='name' />
      </div>
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
