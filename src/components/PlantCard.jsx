import React, { useState } from "react";

function PlantCard({ plant, onSoldOut }) {
  const [inStock, setInStock] = useState(
    plant.inStock !== false
  );

  function handleClick() {
    setInStock(false);
    onSoldOut(plant.id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {inStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;