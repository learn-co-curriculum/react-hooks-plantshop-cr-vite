import React, { useState } from "react";

function PlantCard({ plant }) {

  const [ stockStatus, setStockStatus ] = useState(true);

  function setStatusOut() {
    setStockStatus(false);
  }

  function setStatusIn() {
    setStockStatus(true);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stockStatus ? (
        <button className="primary" onClick={setStatusOut}>In Stock</button>
      ) : (
        <button onClick={setStatusIn}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
