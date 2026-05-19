import React from "react";
import PlantCard from "./PlantCard";

// PlantList receives the already-filtered `plants` array from PlantPage.
// It simply maps each plant to a PlantCard; no state lives here.
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        // key tells React how to track each item across re-renders
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
