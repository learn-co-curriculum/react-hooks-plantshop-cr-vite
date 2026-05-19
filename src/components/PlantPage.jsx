import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // ------------------------------------------------------------------
  // STATE
  // plants      → full list fetched from the backend (source of truth)
  // searchQuery → controlled value from the Search input
  // ------------------------------------------------------------------
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ------------------------------------------------------------------
  // EFFECT: fetch all plants once on mount
  // ------------------------------------------------------------------
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to fetch plants:", err));
  }, []); // empty dependency array → runs only on initial render

  // ------------------------------------------------------------------
  // HANDLER: POST a new plant to the backend, then add it to state
  // ------------------------------------------------------------------
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((savedPlant) => {
        // Append the persisted plant (with its new id) to local state
        setPlants((prev) => [...prev, savedPlant]);
      })
      .catch((err) => console.error("Failed to add plant:", err));
  }

  // ------------------------------------------------------------------
  // DERIVED DATA: filter the plant list by the current search query.
  // String.prototype.includes() is case-insensitive after toLowerCase().
  // When searchQuery is empty every plant passes the filter.
  // ------------------------------------------------------------------
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
