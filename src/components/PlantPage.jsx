import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantsApi = "http://localhost:6001/plants";

  //CREATE PLANTS STATE
  const [newPlants, setNewPlants] = useState([])
  //CREATE FILTERED PLANTS STATE
  const [searchTerm, setSearchTerm] = useState("")
  
  //FETCH DATA FROM SERVER - GET
  async function getPlantsData() {
    try {
      const newPlant = await fetch(plantsApi)
      const fetchedData = await newPlant.json()
    
      setNewPlants(fetchedData);
    }
    catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getPlantsData() 
  }, [])
  
  //FILTER THE PLANTS WHEN USER SEARCHES AND SEND STATES TO Search COMPONENT
  const visiblePlants = newPlants.filter((plant) => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
      
  )
  
  return (
    <main>
      <NewPlantForm plantsApi={plantsApi} newPlants={newPlants} setNewPlants={setNewPlants} />
      <Search searchTerm={searchTerm } setSearchTerm={setSearchTerm} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
