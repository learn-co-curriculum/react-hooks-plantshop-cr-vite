import React from "react";

function PlantCard({ plant, toggleStock }) {
  return (
    <li data-testid="plant-item" className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      <button onClick={() => toggleStock(plant.id)}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;