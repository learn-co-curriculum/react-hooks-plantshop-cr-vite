import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch("http://localhost:6001/plants");
        if (!response.ok) {
          throw new Error("Unable to load plants.");
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("The plants response was invalid.");
        }
        setPlants(data.map((plant) => ({ ...plant, inStock: plant.inStock ?? true })));
      } catch (loadError) {
        setError(loadError.message || "Unable to load plants.");
      }
    }

    fetchPlants();
  }, []);

  async function handleAddPlant(plant) {
    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });
      if (!response.ok) {
        throw new Error("Unable to add plant.");
      }

      const newPlant = await response.json();
      setPlants((currentPlants) => [...currentPlants, { ...newPlant, inStock: true }]);
      setError("");
      return true;
    } catch (addError) {
      setError(addError.message || "Unable to add plant.");
      return false;
    }
  }

  function handleToggleStock(plantId) {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId ? { ...plant, inStock: !plant.inStock } : plant,
      ),
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      {error && <p role="alert">{error}</p>}
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;
