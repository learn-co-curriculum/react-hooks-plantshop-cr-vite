import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage({ plants, onAddPlant, onUpdatePlant }) {
  const [search, setSearch] = useState("");

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={displayedPlants} onUpdatePlant={onUpdatePlant} />
    </main>
  );
}

export default PlantPage;