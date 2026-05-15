import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [outOfStock, setOutOfStock] = useState(new Set());
  const [loading, setLoading] = useState(true);

  // plants: array of plant objects fetched from backend
  // search: current search string
  // outOfStock: Set tracking locally toggled sold-out plant ids (non-persistent)
  // loading: boolean while initial fetch completes

  // Fetch plants from backend on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, []);

  // Handle adding a new plant
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => {
        setPlants([...plants, data]);
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  // Handle toggling out of stock status
  const handleToggleOutOfStock = (plantId) => {
    setOutOfStock((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(plantId)) {
        newSet.delete(plantId);
      } else {
        newSet.add(plantId);
      }
      return newSet;
    });
  };

  // Filter plants based on search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      {loading && <p>Loading plants...</p>}
      <PlantList 
        plants={filteredPlants} 
        outOfStock={outOfStock}
        onToggleOutOfStock={handleToggleOutOfStock}
      />
    </main>
  );
}

export default PlantPage;
