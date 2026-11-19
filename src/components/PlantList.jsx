
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, markSoldOut, soldOutPlants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          markSoldOut={markSoldOut}
          isSoldOut={soldOutPlants.includes(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;
