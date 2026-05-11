import React, { useEffect, useState } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) =>
      setPlants(
        data.map((plant) => ({
          ...plant,
          inStock: plant.inStock ?? true,
        }))
      )
    );
}, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleToggleSoldOut(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id
          ? { ...plant, inStock: !plant.inStock }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Plant Shop</h1>

      <PlantPage
        plants={filteredPlants}
        addPlant={addPlant}
        search={search}
        setSearch={setSearch}
        onSoldOut={handleToggleSoldOut}
      />
    </div>
  );
}

export default App;