import {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// export const UserContext = createContext();
function App() {
  const [plants, setPlants] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plants =>setPlants(plants))
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  },[])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}/>
    </div> 
  );
}

export default App;
