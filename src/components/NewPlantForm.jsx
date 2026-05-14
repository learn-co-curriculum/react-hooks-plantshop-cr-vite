import React, { useState } from "react";

function NewPlantForm() {
  const [product, setProduct] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(product),
    })
        .then(res = res.json())
        .then((response) => {
            console.log(response);
            
            setUser ({
                name: "",
                image: "",
                price: "",
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
          value={product.name}
          onChange={(e) => {
            {setProduct({...product, name: e.target.value})}
          }} 
          required
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={product.image}
          onChange={(e) => {
            {setProduct({...product, image: e.target.value})}
          }} 
          required
        />
        <input 
          type="number" 
          name="price" step="0.01" 
          placeholder="Price" 
          value={product.price}
          onChange={(e) => {
            {setProduct({...product, price: e.target.value})}
          }} 
          required
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
