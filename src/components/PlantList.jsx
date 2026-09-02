import React from "react";
import PlantCard from "./PlantCard";



function PlantList({ Plants }) {
 

 

  return (
    <ul className="cards">
      
      {Plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
      {/* render PlantCards components in here */}
    </ul>
  );
}

export default PlantList;
