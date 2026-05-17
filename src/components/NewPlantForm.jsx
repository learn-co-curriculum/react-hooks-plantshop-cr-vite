import React from "react";

function NewPlantForm() {
  function handleSubmit(e) {
  e.preventDefault();

  const newPlant = {
    name: e.target.name.value,
    image: e.target.image.value,
    price: Number(e.target.price.value),
  };

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((res) => res.json())
    .then((plant) => {
      onAddPlant(plant);
      e.target.reset();
    });
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
