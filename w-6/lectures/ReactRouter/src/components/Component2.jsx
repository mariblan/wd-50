import { useNavigate } from 'react-router-dom';

function Component2({ onClick }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Component2</h2>
      <button onClick={onClick}>Go Back</button>
      <button onClick={() => navigate(+1)}>Go Forward</button>
      <button onClick={() => navigate(`/`)}>Home</button>
    </div>
  );
}

export default Component2;
