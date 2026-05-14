import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({ name: "", image: "", price: "" });
  const { name, image, price, status } = formData;

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ name, image, price: parseFloat(price), status }),
    })
        .then((res) => res.json())
        .then((newPlant) => {
            onAddPlant(newPlant);
            
            setFormData ({
                name: "",
                image: "",
                price: "",
                status: ""
            });
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
          value={formData.name}
          onChange={(e) => {
            {setFormData({...formData, name: e.target.value})}
          }} 
          required
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={(e) => {
            {setFormData({...formData, image: e.target.value})}
          }} 
          required
        />
        <input 
          type="number" 
          name="price" step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={(e) => {
            {setFormData({...formData, price: e.target.value})}
          }} 
          required
        />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px"}}>
          <label htmlFor="" >
            <input type="radio" 
              value={"In Stock"} 
              checked={formData.status === 'In Stock'} 
              onChange={(e) => 
                {setFormData({...formData, status: e.target.value})}} 
              required
              style={{display: "flex", gap: "5px"}} 
            />
            <span>In Stock</span>
          </label>

          <label htmlFor="">
            <input type="radio" 
              value={"Out of Stock"} 
              checked={formData.status === 'Out of Stock'} 
              onChange={(e) => 
                {setFormData({...formData, status: e.target.value})}} 
              required
              style={{display: "flex", gap: "5px"}} 
            />
            <span>Out of Stock</span>
          </label>
        </div>

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
