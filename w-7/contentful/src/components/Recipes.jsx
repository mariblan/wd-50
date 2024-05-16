import { Link } from 'react-router-dom';

function Recipes({ recipes }) {
  return (
    <div>
      {recipes?.map((recipe, index) => (
        <Link key={index} to={`/recipe/${recipe.id}`}>
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
