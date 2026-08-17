import React, { useState } from "react";

function PlantCard({ plant, onSoldOut }) {
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock(false);
    onSoldOut(plant.id);
  }

  return (
    <div className="plant-card" data-testid="plant-item">
      <img
        src={plant.image}
        alt={plant.name}
        className="plant-image"
      />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {inStock ? (
        <button onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button disabled>
          Out of Stock
        </button>
      )}
    </div>
  );
}

export default PlantCard;