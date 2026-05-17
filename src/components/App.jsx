import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const [plants, setPlants] = useState([]);

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data));
}, []);