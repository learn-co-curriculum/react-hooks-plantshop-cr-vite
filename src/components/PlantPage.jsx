import Search from "./Search";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // GET plants
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) =>
        console.error("Error fetching plants:", error)
      );
  }, []);

  // POST new plant
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((createdPlant) => {
        setPlants((currentPlants) => [
          ...currentPlants,
          createdPlant,
        ]);
      })
      .catch((error) =>
        console.error("Error adding plant:", error)
      );
  }

  // Mark plant as sold out
  function handleSoldOut(id) {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === id
          ? { ...plant, inStock: false }
          : plant
      )
    );
  }

  // Search
  const filteredPlants = plants.filter((plant) =>
    plant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </main>
  );
}

export default PlantPage;