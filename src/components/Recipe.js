import React from "react";
import "./Recipe.css";
const Recipe = (props) => {
  const caloriesRound = (props) => {
    let calories = props.calories;
    let cal = Math.round(calories);
    return cal;
  };
  const spanStyle = {
    fontFamily: "'Pattaya', sans-serif",
  };

  return (
    <div className="cardRecipe">
      <h2 style={spanStyle}>{props.title}</h2>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        {caloriesRound(props)}
        <span> Kcal</span>
      </p>
      <img src={props.image} alt={props.title} />
    </div>
  );
};
export default Recipe;
