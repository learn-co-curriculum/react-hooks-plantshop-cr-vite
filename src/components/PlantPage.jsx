import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Stores all plants fetched from the backend
  const [plants, setPlants] = useState([]);

  // Stores whatever the user types into the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all plants when the page first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add a new plant to the backend and update the page
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((plant) => {
        setPlants((currentPlants) => [...currentPlants, plant]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  }

  // Filter plants according to the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search onSearch={setSearchTerm} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
