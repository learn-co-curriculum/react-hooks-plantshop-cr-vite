import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  function handleStockToggle() {
    onUpdatePlant({ ...plant, soldOut: !plant.soldOut });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.soldOut ? (
        <button onClick={handleStockToggle}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
