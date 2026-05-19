import React, { useState } from "react";

// NewPlantForm manages its own controlled input state.
// On submit it hands the new plant object up to PlantPage via `onAddPlant`.
function NewPlantForm({ onAddPlant }) {
  // One state object keeps all three fields in sync
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Generic handler — keeps every field as the raw string from the input
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Send price as-is (string) — the test expects JSON.stringify({price: "10"})
    onAddPlant({
      name: formData.name,
      image: formData.image,
      price: formData.price,
    });

    // Reset controlled inputs back to empty strings
    setFormData({ name: "", image: "", price: "" });
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
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
