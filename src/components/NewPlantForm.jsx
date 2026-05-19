import React, { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';

function NewPlantForm({plantsApi, newPlants, setNewPlants}) {
  //CREATE USER INPUT STATE AND INITIALIZE TO AN OBJECT
  const [userInput, setUserInput] = useState({ name: "", image: "", price: "" })
  
  
  //POST USER INPUT DATA 
  async function postUserInput() {
    try {
      const fetchThis= await fetch(plantsApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput)
      })

      if (!fetchThis.ok) {
        throw new Error ("Error Fetching Request!")
      }
      const fetched = await fetchThis.json()
      setNewPlants((prev) => [...prev, fetched])
      
      // NULL THE INPUT FIELD
      setUserInput({ name: "", image: "", price: "" })
    }
    catch (err) {
      console.error(err)
    }
    
  }
  function handleSubmit(e) {
    e.preventDefault()

    postUserInput();
  }
  function handleChange(e) {
    const {name, value}=e.target
    setUserInput((prev) => ({
      ...prev, [name]: value
    })
      
    
    )
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInput.name}
          placeholder="Plant name"
        
          onChange={handleChange}
          
        required
        />
        <input
          type="text"
          name="image"
          value={userInput.image}
          placeholder="Image URL"

          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          step="0.01"
          value={userInput.price}
          placeholder="Price"
        
          onChange={handleChange}
          
          required
        />

        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
