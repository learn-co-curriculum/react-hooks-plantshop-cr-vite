import React, { useState } from "react";

function PlantCard({ plant }) {
  // Track stock state
  const [inStock, setInStock] = useState(true);

  // Toggle stock
  function handleToggleStock() {
    setInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img
        src={plant.image}
        alt={plant.name}
      />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {inStock ? (
        <button
          className="primary"
          onClick={handleToggleStock}
        >
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;