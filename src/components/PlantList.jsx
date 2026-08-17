import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOut }) {
  return (
    <div id="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;