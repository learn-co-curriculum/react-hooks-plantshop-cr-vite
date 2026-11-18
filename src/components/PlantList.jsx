
import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList() {
  const [plants, setPlant] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch");
        }
        return r.json();
      })
      .then((plants) => setPlant(plants))
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlant(newPlant) {
    setPlant((prevPlant) => [...prevPlant, newPlant]);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search onSearch={setSearchQuery} />

      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plants={plant} />
        ))}
      </ul>
    </>
  );
}

export default PlantList;
