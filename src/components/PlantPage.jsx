import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Task: See all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Task: Add a new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Task: Mark a plant as sold out (non-persisting)
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return { ...plant, soldOut: true };
      }
      return plant;
    });
    setPlants(updatedPlants);
  }

  // Task: Search / filter plants
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={plantsToDisplay} onSoldOut={handleSoldOut} />
    </main>
  );
}

export default PlantPage;