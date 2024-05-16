import { useState } from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Recipes from './components/Recipes';
import OneRecipe from './components/OneRecipe';

function App() {
  const contentfulClient = new ContentfulClient({
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
  });
  // State to store information from Contentful
  const [contentfulRecipes, setContentfulRecipes] = useState([]);
  const [contentfulWines, setContentfulWines] = useState([]);

  console.log(contentfulRecipes);
  return (
    <ContentfulProvider client={contentfulClient}>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              recipes={contentfulRecipes}
              setRecipes={setContentfulRecipes}
            />
          }
        >
          <Route path='/' element={<Recipes recipes={contentfulRecipes} />} />
          <Route path='/onerecipe' element={<OneRecipe />} />
        </Route>
      </Routes>
    </ContentfulProvider>
  );
}

export default App;
