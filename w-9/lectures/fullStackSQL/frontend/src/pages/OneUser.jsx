import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserById } from '../Service/fetchDB';

function OneUser({ users }) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserById(id).then((data) => setUser(data));
  }, [id]);

  console.log(user);
  // const user = users.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h1>One User</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default OneUser;
