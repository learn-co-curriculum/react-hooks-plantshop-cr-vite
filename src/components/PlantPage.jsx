import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plants, newPlant}) {
  const [searchPlant, setSearchPlant] = useState("")

  const filteredPlants = plants.filter((plant)=> 
  plant.name.toLowerCase().includes(searchPlant.toLowerCase()));
  return (
    <main>
      <NewPlantForm newPlant={newPlant} />
      <Search searchPlant={searchPlant} onSearch={setSearchPlant} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
