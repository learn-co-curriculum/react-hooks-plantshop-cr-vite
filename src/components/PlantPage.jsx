
import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants when the page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants((currentPlants) => {
          // Identify plants already returned by the backend
          const serverIds = new Set(
            data.map((plant) => plant.id)
          );

          // Preserve plants added while the GET request was loading
          const newlyAddedPlants = currentPlants.filter(
            (plant) => !serverIds.has(plant.id)
          );

          return [...data, ...newlyAddedPlants];
        });
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  // Add a new plant to the backend
  async function handleAddPlant(newPlant) {
    const response = await fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });

    if (response.ok === false) {
      throw new Error("Could not add plant");
    }

    const addedPlant = await response.json();

    setPlants((currentPlants) => [
      ...currentPlants,
      addedPlant,
    ]);
  }

  // Filter plants by name
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
