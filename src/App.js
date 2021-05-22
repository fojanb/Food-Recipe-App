import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
// import InputComponent from "./components/InputComponent";

const App = () => {
  // Authenticate API --> Use Environment Tools to protect the APP_ID and APP_KEY :)
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  // ***********************State Updating**********************
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  // ***********************************************************
  //We need useEffect() while working with API in react function component
  useEffect(() => {
    getRecipes();
  }, [query]);
  // ***********************************************************

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data.hits); //hits has all the recipes
    setRecipes(data.hits); // data go to reciepes
  };
  // ***********************EventHandler************************

  const updateSearch = (event) => {
    setSearch(event.target.value); //"search" will get this e.target.value
    // console.log(search);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const styles = {
    display: "flex",
    justifyContent: "center",
    // color:"white"
  };
  const spanStyle = {
    fontSize: "20px",
  };
  // ***********************************************************
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <span></span>
        <input
          type="text"
          placeholder="🥂 Type Something Yummy... "
          className="search-bar"
          value={search}
          onChange={updateSearch}
        ></input>
        <button type="submit" className="search-button">
          <img src="https://img.icons8.com/android/24/000000/search.png" />
        </button>
      </form>
      {/* List of Recipe components : */}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.label}
            // key should be something unique that's why I used "label"
          />
        ))}
      </div>
    </div>
  );
};

export default App;

// 🍓&nbsp;🍬&nbsp;🍹&nbsp;🍪&nbsp;
// &nbsp;🍰&nbsp;🍩&nbsp;🍄&nbsp;🍦
