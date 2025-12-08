import React from "react";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (!r.ok) { throw new Error("Failed to fetch plans")}
        return r.json()
      })
      .then(plants => {
        setPlants(plants)
        setLoading(false)})
      .catch(err => {
        setError(err.message)
        setLoading(false)
      });
  }, []);

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  const plantsToDisplay = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearchChange} term={searchTerm}/>
      <PlantList plants={plantsToDisplay} loading={loading} error={error}/>
    </main>
  );
}

export default PlantPage;
