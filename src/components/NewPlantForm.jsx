import React, { useState } from "react";

function NewPlantForm({ plants, onAddPlant }) {
  const [plants, setPlants] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(plants),
    })
        .then(res = res.json())
        .then((newPlant) => {
            onAddPlant(newPlant);
            
            setPlants ({
                name: "",
                image: "",
                price: "",
            });
        });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={name}
          onChange={(e) => {
            {setPlants({...product, name: e.target.value})}
          }} 
          required
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image}
          onChange={(e) => {
            {setPlants({...product, image: e.target.value})}
          }} 
          required
        />
        <input 
          type="number" 
          name="price" step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={(e) => {
            {setPlants({...product, price: e.target.value})}
          }} 
          required
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
