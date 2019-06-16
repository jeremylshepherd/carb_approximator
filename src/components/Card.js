import React from "react";

function Card({ name, ounces, abv, carbCount, calories }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <hr />
      <div className="card-row">
        <span>Calories</span>
        <span>Ounces</span>
        <span>ABV</span>
        <span>CARBS</span>
      </div>
      <div className="card-row">
        <span>{calories}</span>
        <span>{ounces}</span>
        <span>{abv}</span>
        <span>{carbCount}</span>
      </div>
    </div>
  );
}

export default Card;
