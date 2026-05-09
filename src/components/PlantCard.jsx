import React from "react";

function PlantCard({ plant, handleUpdatePlant}) {


 function handleClick() {
  const updatedPlant = { ...plant, inStock: !(plant.inStock !== false) }; // ✅ treats undefined as true
  handleUpdatePlant(updatedPlant);
}
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock !== false ?(
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;