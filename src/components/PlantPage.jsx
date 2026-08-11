import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => setPlants(data))
  }, [])

  const addPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant])
  }

  function handleSearch(searchText) {
    setSearchTerm(searchText)
  }

  const filteredPlants = plants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
