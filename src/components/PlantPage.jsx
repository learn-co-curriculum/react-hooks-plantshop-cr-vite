import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, filteredPlants, onAddPlant, onSearch }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
