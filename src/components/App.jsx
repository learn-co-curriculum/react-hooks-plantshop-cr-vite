import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plants, setPlants] = useState([])
const API = "http://localhost:6001/plants"

const fetchPlants = async()=> {
  const response = await fetch(API)
  const data = await response.json()
  console.log(data)

  setPlants(data)
}
useEffect(() => {
  fetchPlants()
}, []);

const newPlant = async (plant) => {
  await fetch (API, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name: plant.name,
      image: plant.image,
      price: plant.price,
    }),
  })
  .then((resp)=> resp.json())
  .then((savedPlant)=> setPlants([...plants, savedPlant]));
  fetchPlants()
}

  return (
    <div className="app">
      <Header />
      <PlantPage  plants={plants} newPlant= {newPlant}/>
    </div>
  );
}

export default App;
