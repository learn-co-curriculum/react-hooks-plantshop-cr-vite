import React from "react";

// PlantCard displays a single plant and a toggle button for sold-out state.
// Props:
// - plant: { id, name, image, price }
// - isOutOfStock: boolean indicating local sold-out state
// - onToggleOutOfStock: function to call with plant id when toggling
function PlantCard({ plant, isOutOfStock, onToggleOutOfStock }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!isOutOfStock ? (
        <button className="primary" onClick={() => onToggleOutOfStock(plant.id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleOutOfStock(plant.id)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
