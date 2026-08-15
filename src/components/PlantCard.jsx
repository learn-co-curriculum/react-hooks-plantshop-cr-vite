import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOut() {
    setIsSoldOut(true);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {isSoldOut ? (
        <button onClick={handleSoldOut}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
