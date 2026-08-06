import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] =useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => {
      const plantWithStock = data.map((plant) => ({
        ...plant,
        inStock:true,
      }));
      setPlants(plantWithStock);
    });
  }, []);

  const filteredPlants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);

function addPlant(newPlant) {
  setPlants([...plants, newPlant]);
}

function updatePlant(updatedPlant) {
  const updatedPlants = plants.map((plant) => 
  plant.id === updatedPlant.id ? updatedPlant : plant 
);

setPlants(updatedPlants);
}

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList 
      plants={filteredPlants}
      updatePlant={updatePlant} />
    </main>
  );
}

export default PlantPage;
