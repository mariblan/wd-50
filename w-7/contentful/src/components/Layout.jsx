import { useContentful } from 'react-contentful';
import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Layout({ recipes, setRecipes }) {
  const { data, error, isLoading } = useContentful({
    contentType: 'blog',
  });

  console.log(data);
  console.log(data?.includes);
  useEffect(() => {
    if (data) {
      setRecipes(data.includes.Asset);
    }
  }, [data, setRecipes]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/recipes'>Recipes</a>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2021</p>
      </footer>
    </div>
  );
}

export default Layout;
