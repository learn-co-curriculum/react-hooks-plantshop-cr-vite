import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  //console.log("Visible Plants", plants)
  
  return (
    <div>
    <ul className="cards">{/* render PlantCards components in here */}
      {plants.map((plant) => 
        <PlantCard key={plant.id} plants={plant} />
      )}
      </ul>
    </div>
  );
}

export default PlantList;
