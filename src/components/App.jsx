import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch ("http://localhost:6001/plants")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setPlants)
      .catch(() => setError('Could not connect to the server.'))
  }, []);

  function handleNewPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  return (
    <div className="app">
      <Header />
      {error && <p style={{color: "red"}}>{error}</p>}
      <PlantPage />
    </div>
  );
}

export default App;
