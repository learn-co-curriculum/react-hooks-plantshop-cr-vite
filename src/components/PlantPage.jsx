import React from "react";
import { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState("");
  
  //fetching plants
    useEffect(() => {
      fetch("http://localhost:6001/plants")
       .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch plants!");
        }
        return response.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => console.error(error));
    }, []);
    //Adding New Plants
    function handleAddPlant(newPlant){
      setPlants([...plants, newPlant]);
    }
    //filterplants
    const filteredPlants=plants.filter((plant)=> plant.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}  />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants ={filteredPlants} />
    </main>
  );
}

export default PlantPage;
