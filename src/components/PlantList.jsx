// Import necessary states, effects, components
import { useEffect, useState } from "react";
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map(plant => (<PlantCard key={plant.id} plant={plant} />))}
    </ul>
  );
}

// Make globally available
export default PlantList;
