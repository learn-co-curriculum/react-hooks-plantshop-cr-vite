import React from "react";
import { useEffect, useState } from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery,setSearchQuery] = useState("")

    useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch("http://localhost:6001/plants");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setPlants(data);
      } catch (error) {
        console.error("Failed to fetch plants:", error);
      }
    };
    fetchPlants();
  }, []);

  const handleNewPlants = (newPlant) => {
    setPlants(prev => [...prev,newPlant])
  }

  const visiblePlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewPlants}/>
      <Search onSearch={setSearchQuery}/>
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
