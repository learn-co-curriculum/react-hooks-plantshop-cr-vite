import React, { useState ,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants,setPlants]=useState([])

 useEffect(() => {
  globalThis.fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data))
    .catch((err) => console.log(err));
}, []);


  const handleUpdatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}  handleUpdatePlant={handleUpdatePlant}
      handleAddPlant={handleAddPlant}/>
    </div>
  );
}

export default App;
