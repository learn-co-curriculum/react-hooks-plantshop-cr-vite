import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(()=>{
async function fetchPlants(){
 try{
  const response = await fetch ("http://localhost:6001/plants");
   if (response.ok){
    const data = await response.json()
    setPlants(data)
  } else {
    console.log("fetch failed!")
  }
 } catch (error){
  console.log(error)
 }
}
fetchPlants()
  }, []);

  function handleAddPlant(newPlant){
    setPlants((prev) =>[...prev, newPlant])

  };

  const plantsToDisplay = plants.filter((plant)=>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <main>
      <NewPlantForm addPlant = {handleAddPlant}/>
      <Search searchQuery={searchQuery} searchChange={setSearchQuery} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
