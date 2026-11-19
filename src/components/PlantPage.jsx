import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // All plants returned by the backend
  const [plants, setPlants] = useState([]);
  // Current text in the search box
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants once, when the page first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Failed to fetch plants:", error));
  }, []);

  // Add a newly created plant to state so it renders immediately
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Derive the visible list from state. An empty query matches every
  // name, so clearing the search box shows all plants again.
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;