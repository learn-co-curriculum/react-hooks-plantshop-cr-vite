import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onMarkSoldOut }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onMarkSoldOut={onMarkSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;