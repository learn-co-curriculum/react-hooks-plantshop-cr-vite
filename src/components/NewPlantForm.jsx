import React from "react";

function NewPlantForm({ onAddPlant }) {
  // Handle form submission to create a new plant
  function handleSubmit(event) {
    event.preventDefault();

    // Use FormData to extract form values
    const formData = new FormData(event.target);
    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: formData.get("price"),
    };

    
    onAddPlant(newPlant);

    
    event.target.reset();
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" required />
        <input type="text" name="image" placeholder="Image URL" required />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
