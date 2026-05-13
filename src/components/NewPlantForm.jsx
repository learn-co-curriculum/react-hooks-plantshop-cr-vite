import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, price: parseFloat(price) }),
    })
    .then(r => r.json())
    .then(newPlant => {setPlants(prev => [...prev, newPlant]);
     setName("");
     setImage("");
     setPrice("");
  });
};

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit ={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
