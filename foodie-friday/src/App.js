import React, { useEffect,useState } from "react";
import "./App.css";
// import InputComponent from "./components/InputComponent";

const App = () => {
  
    // Authenticate API --> Use Environment Tools to protect the APP_ID and APP_KEY :)
   const APP_ID = "0a558300";
   const APP_KEY = "181f226856b2e1b79a5770bcf412a99a";

  const [recipes , setRecipes]= useState([]);

  //We need useEffect() while working with API in react function component
  useEffect ( () =>{
    getRecipes();
  } ,[]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log(data.hits); //hits has all the recipes
    setRecipes(data.hits);
  }

  
    return (
      <div className="App">
        <h1>Foodie Friday</h1>
        <form className="search-form">
          <input type="text" className="search-bar"></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  
}

export default App;
