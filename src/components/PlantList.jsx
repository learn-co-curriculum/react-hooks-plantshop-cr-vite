import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ products }) {
  return (
    <ul className="cards">
      {products.map((product) => {
        <PlantCard key={product.id} product={product} />
      })}
    </ul>
  );
}

export default PlantList;
