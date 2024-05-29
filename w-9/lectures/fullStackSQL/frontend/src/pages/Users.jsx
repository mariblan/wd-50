import UserLink from '../components/UserLink';

function Users({users}) {
  return (
    <div>
      <h1>Users</h1>
      <p>Here you can find all the users</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <UserLink user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
