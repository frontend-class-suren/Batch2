import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './components/Recipe.jsx';

const App = () => {
  const APP_ID = "aa3fcd5e";
  const APP_KEY = "597c15b6d710ef6ef081530edfffae5d";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
 
  const getRecipes = async () => {
    const response = await fetch
          (`http://localhost:8000/recipes`);
    const data = await response.json();
    setRecipes(data);
    console.log(data);

  };
  useEffect(() => {
    getRecipes();
  }, [query]);
  // var thing = new thing(); // eslint-disable-line no-use-before-define
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            // key={recipe.recipe.label}
            title={recipe.title}
            calories={recipe.calories}
            // image={recipe.image}
            // ingredients={recipe.ingredients}
          />

        ))}
      </div>

    </div>
  );
}


export default App;
