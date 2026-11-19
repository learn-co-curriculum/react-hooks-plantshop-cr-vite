
import React, { useState } from "react";

function PlantCard({ plant }) {

  const [isInStock, setIsInStock] = useState(true);
// Mark the plant as out of stock when the button is clicked.
  function handleStockChange() {
    setIsInStock(false);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {isInStock ? (
        <button className="primary" onClick={handleStockChange}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
