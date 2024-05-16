import { Link } from 'react-router-dom';

function Recipes() {
  const recipes = [
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Pizza' },
  ];
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Link key={index} to={`/recipe/${recipe.id}`}>
          {recipe.name}
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
