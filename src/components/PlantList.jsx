import React from "react";
import PlantCard from "./PlantCard";

// PlantList is a presentational component that receives the array of plants
// and rendering helpers from the parent. It does not manage state itself.
// Props:
// - plants: array of plant objects to render
// - outOfStock: Set of plant ids currently marked sold out
// - onToggleOutOfStock: callback(plantId) to toggle sold-out state
function PlantList({ plants, outOfStock, onToggleOutOfStock }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          isOutOfStock={outOfStock.has(plant.id)}
          onToggleOutOfStock={onToggleOutOfStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;
