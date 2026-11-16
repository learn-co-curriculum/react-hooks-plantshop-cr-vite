


import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants when the component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add a new plant to the backend and state
  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((plant) => setPlants((currentPlants) => [...currentPlants, plant]))
      .catch((error) => console.error("Error adding plant:", error));
  };

  // Update a plant's sold-out status locally
  const handleSoldOut = (id) => {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: true } : plant
      )
    );
  };

  // Filter plants by their names
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={filteredPlants} onSoldOut={handleSoldOut} />
    </main>
  );
}

export default PlantPage;

