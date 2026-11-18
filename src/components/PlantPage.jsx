import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Holds every plant fetched from the backend
  const [plants, setPlants] = useState([]);
  // Holds the current text typed into the search bar
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants once, when the component first mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantData) => setPlants(plantData));
  }, []);

  // Adds a newly created plant to state so it renders immediately
  function handleAddPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
  }

  // Derived list: only plants whose name includes the query (case-insensitive).
  // An empty query matches every name, so all plants show when the search is cleared.
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
