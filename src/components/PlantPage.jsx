import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState} from "react";

function PlantPage({plants, setPlants}) {
  
  const [searchWord, setSearchWord] = useState("");
  function handlePlantAdded(newPlant) {
    setPlants((prevPlants)=>[...prevPlants, newPlant]);
  }
  return (
    <main>
      <NewPlantForm handlePlantAdded={handlePlantAdded} setPlants={setPlants} />
      <Search searchWord={searchWord} setSearchWord={setSearchWord} />
      <PlantList plants={plants} searchWord={searchWord}/>
    </main>
  );
}

export default PlantPage;
