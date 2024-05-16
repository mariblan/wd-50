import { useParams } from 'react-router-dom';
function OneRecipe() {
  const { id } = useParams();
  console.log(id);
  return <div>OneRecipe id: {id}</div>;
}

export default OneRecipe;