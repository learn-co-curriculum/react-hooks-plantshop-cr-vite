import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchPlants() {
    setLoading(true);
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch data");
        }
        return r.json();
      })
      .then((data) => setPlants(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      {loading ? <p>Loading...</p> : <PlantList plants={plantsToDisplay} />}
    </main>
  );
}

export default PlantPage;