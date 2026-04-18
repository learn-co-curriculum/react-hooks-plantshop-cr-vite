// Import necessary states, effects, components
import { useState, useEffect } from "react";
import React from "react";

function NewPlantForm({ onAddPlant }) {
  // Set states of name, image, and price of plant
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Create a function for submitting and prevent default behavior
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlant({ name, image, price });
    // Make sure to clear out fields
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

// Make globally available
export default NewPlantForm;
