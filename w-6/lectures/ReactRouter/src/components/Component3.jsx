import { useNavigate } from 'react-router-dom';

function Component3({ onClick }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Component3</h2>
      <button onClick={onClick}>Go Back</button>
      <button onClick={() => navigate(+1)}>Go Forward</button>
    </div>
  );
}

export default Component3;
