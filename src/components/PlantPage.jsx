import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsData) => setPlants(plantsData));
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((addedPlant) => setPlants([...plants, addedPlant]));
  }

  function handleUpdatePlant(updatedPlant) {
    fetch(`http://localhost:6001/plants/${updatedPlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((r) => r.json())
      .then((updatedPlantData) => {
        const updatedPlants = plants.map((plant) => {
          if (plant.id === updatedPlantData.id) {
            return updatedPlantData;
          }
          return plant;
        });

        setPlants(updatedPlants);
      });
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <PlantList
        plants={displayedPlants}
        onUpdatePlant={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;