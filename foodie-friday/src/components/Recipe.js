import React from "react";
import './Recipe.css'

const Recipe = (props) => {
  const spanStyle = {
    fontSize:"20px"
  }
  return (
    <div className="cardRecipe">
      <h2><span style={spanStyle}>🥄</span>{props.title}<span></span></h2>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories : {props.calories}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
};
export default Recipe;
