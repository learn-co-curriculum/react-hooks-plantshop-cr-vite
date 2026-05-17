import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() { 
  const [search, setSearch] = useState("");
  const filteredPlants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
