import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useSate('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

    
  function handleSubmit(e){
    e.preventdefault()
    const newItem = {
    name: name,
    image: image,
    price: parseFloat(price)   

  }
  fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        onAddPlant(newPlant); 
        setName("");
        setImage("");
        setPrice("");
      });
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
