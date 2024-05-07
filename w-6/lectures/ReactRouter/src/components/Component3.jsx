import { useNavigate, Link, Outlet } from 'react-router-dom';

function Component3({ posts, onClick }) {
  const navigate = useNavigate();
  console.log(posts);
  return (
    <div>
      <h2>Component3</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={`/page3/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Go Back</button>
      <button onClick={() => navigate(+1)}>Go Forward</button>
      <Outlet />
    </div>
  );
}

export default Component3;
