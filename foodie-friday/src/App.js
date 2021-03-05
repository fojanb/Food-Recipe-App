import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
// import InputComponent from "./components/InputComponent";

const App = () => {
  // Authenticate API --> Use Environment Tools to protect the APP_ID and APP_KEY :)
  const APP_ID = "0a558300";
  const APP_KEY = "181f226856b2e1b79a5770bcf412a99a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  //We need useEffect() while working with API in react function component
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data.hits); //hits has all the recipes
    setRecipes(data.hits);
  };
  const updateSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  // __________________________________________________________________________

  return (
    <div className="App">
      <h1>Foodie Friday</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {/* List of Recipe components : */}
      {recipes.map((recipe, index) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          // key should be something unique
        />
      ))}
    </div>
  );
};

export default App;
