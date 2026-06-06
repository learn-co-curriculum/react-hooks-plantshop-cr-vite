import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Define states to track plants fetched from the backend and track use input in search
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  //fetch plants from backend
  useEffect(() => {
    fetch()

  });
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
