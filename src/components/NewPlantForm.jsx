import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });
  const { name, image, price } = formData;

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ name, image, price: parseFloat(price) }),
    })
        .then((res) => res.json())
        .then((newPlant) => {
            onAddPlant(newPlant);
            
            setFormData ({
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
          value={formData.name}
          onChange={(e) => {
            {setPlants({...plants, name: e.target.value})}
          }} 
          required
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={(e) => {
            {setPlants({...plants, image: e.target.value})}
          }} 
          required
        />
        <input 
          type="number" 
          name="price" step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={(e) => {
            {setPlants({...plants, price: e.target.value})}
          }} 
          required
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
