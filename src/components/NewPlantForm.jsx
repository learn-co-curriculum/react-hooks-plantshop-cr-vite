import React from "react";

function NewPlantForm({setPlants}) {
  
  function handleSubmit(event) {
    event.preventDefault();

    const formData= new FormData(event.target);
    const newPlant = {
    name: formData.get("name"),
    image: formData.get("image"),
    price: formData.get("price"),
    };
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((response) => response.json())
    .then((plant) => {
    setPlants((currentPlants) => [...currentPlants, plant])  // The added plant in the backend is added to the end of the currentPlants
    //event.target.reset();
    });
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
