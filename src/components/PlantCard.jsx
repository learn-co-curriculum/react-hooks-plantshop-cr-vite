import React from "react";
import { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleClick() {
    setIsSoldOut((prevIsSoldOut) => !prevIsSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleClick}>Out of Stock</button>
      ) : (
        <button onClick={handleClick}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
