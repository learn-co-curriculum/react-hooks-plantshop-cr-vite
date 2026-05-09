import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants ,handleUpdatePlant,handleAddPlant} ){
  
  const [search, setSearch] = useState(""); 

  

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants}   handleUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;