import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function handleAddPlant(newPlant) {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
