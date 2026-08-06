import React from "react";

function PlantCard( {plant, updatePlant} ) {

  function handleToggleStock() {
  fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inStock: !plant.inStock,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      updatePlant({...plant, inStock: !plant.inStock});
     
    });
}
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {plant.inStock ? (
        <button className="primary" onClick={handleToggleStock}> 
        In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
