import React, { useState } from "react";

function PlantCard({ plant }) {
  // Sold-out status only exists in the frontend
  const [soldOut, setSoldOut] = useState(false);

  function handleClick() {
    setSoldOut(!soldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {soldOut ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
