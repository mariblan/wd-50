import { Link } from 'react-router-dom';

function UserLink({ user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <p>{user.name}</p>
    </Link>
  );
}

export default UserLink;
