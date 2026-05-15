import React from "react";
import { useState } from "react";

function PlantCard({plant}) {
const [isSoldOut, setIsSoldOut] = useState(true)

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} 
      onClick={()=> alert(`${plant.name} - Price: ${plant.price}`)}
      />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {isSoldOut ? (
        <button onClick={()=> setIsSoldOut(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=> setIsSoldOut(true)}>Out of Stock</button>
      )}
    </li>
  );
};

export default PlantCard;
