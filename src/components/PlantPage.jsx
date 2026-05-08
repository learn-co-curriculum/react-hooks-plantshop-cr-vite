import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm
        plants={plants}
        setPlants={setPlants}
      />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;