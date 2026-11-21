import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, searchItem, onSearchChange }) {
  
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={searchItem} onSearchChange={onSearchChange} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;