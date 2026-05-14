import React, { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  useEffect(() => {
    fetch ("http://localhost:3000/plants")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setDestinations)
      .catch(() => setError('Could not connect to the server.'))
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
