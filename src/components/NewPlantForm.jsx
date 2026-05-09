import React from "react";
import {useState} from "react"

function NewPlantForm({handleAddPlant}) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e){
    e.preventDefault()


    const newPlant = { name, image, price};

        globalThis.fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newPlant),
})
  .then((res) => res.json())
  .then((data) => {
    handleAddPlant(data);
    setName("");
    setImage("");
    setPrice("");
  })
  .catch((err) => console.log("POST error:", err)); 

  }

  return(
<div className="new-plant-form">
  <form onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
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
