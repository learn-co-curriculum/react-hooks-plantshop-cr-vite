import React from "react";
import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Controlled inputs so we can read values on submit
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const plantData = {
      name,
      image,
      price: parseFloat(price), // backend expects a number
    };

    // POST the new plant to the backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        // Lift the new plant up so PlantPage adds it to state
        onAddPlant(newPlant);
        // Reset form fields
        setName("");
        setImage("");
        setPrice("");
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;