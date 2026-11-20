import React from "react";

function NewPlantForm({ onAddPlant }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const plant = Object.fromEntries(new FormData(form).entries());

    if (await onAddPlant(plant)) {
      form.reset();
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
