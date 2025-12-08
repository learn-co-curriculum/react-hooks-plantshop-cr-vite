import React from "react";
import { useState } from "react";

function PlantCard({onSearch, plant, ...props}) {
  const [inStock, setInStock] = useState(true)

  function updateStock() {
    if(inStock === true) {
      return setInStock(false)
    }
    return setInStock(true)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={updateStock}>In Stock</button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
