import { useEffect, useState } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>
          Plantsy
          <span className="logo" role="img">
            🌱
          </span>
        </h1>
      </header>

      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;