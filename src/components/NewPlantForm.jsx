import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewPlantForm({ onAddNewPlant }) {
  
  const [ name, setName ] = useState("");
  const [ image, setImage ] = useState("");
  const [ price, setPrice ] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const newPlant = {
      id: uuidv4(),
      name: name,
      image: image,
      price: parseFloat(price),
    }

    onAddNewPlant(newPlant);

    setName("");
    setImage("");
    setPrice("");
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Plant name" />
        <input type="text" name="image" value={image} onChange={(e) => {setImage(e.target.value)}} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={price} onChange={(e) => {setPrice(e.target.value)}} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
