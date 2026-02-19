import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  onSearchChange,
  onToggleSoldOut
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearchChange={onSearchChange} />
      <PlantList plants={plants} onToggleSoldOut={onToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
