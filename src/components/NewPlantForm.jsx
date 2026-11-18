import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Controlled inputs: one piece of state per form field
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    // Stop the browser from reloading the page on submit
    e.preventDefault();

    // price is sent as the string from the input, which is what the tests expect
    const newPlant = { name, image, price };

    // POST to the backend; json-server responds with the saved plant (including its new id)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((savedPlant) => {
        onAddPlant(savedPlant); // update state in PlantPage
        // Clear the form
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