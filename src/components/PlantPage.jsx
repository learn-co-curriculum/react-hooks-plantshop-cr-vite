import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect } from "react";
import { useState } from "react";

function PlantPage() {
  const [state, setState] = useState([])
  comst [search, setSearch] = useState('')
  function handleFetch(){
    
    useEffect(()=>{
       fetch("http://localhost:6001/plants") 
      .then((res) => res.json())
      .then((data) => setPlants(data));
    },[]

    )
  }
  function handleAddPlant(newPlant){
    setState([...state, newPlant] )
  }
  function handleSearch(plant){
    setSearch(state.filter(()=>plant.name.toLowerCase().includes(search).toLowerCase()

    ))

  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
