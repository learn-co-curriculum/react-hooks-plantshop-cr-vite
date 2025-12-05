import { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: name,
      image: image,
      price: parseFloat(price),
    };
    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const addedPlant = await response.json();
      setPlants((prevPlants) => [addedPlant,...prevPlants]);
      setName("");
      setImage("");
      setPrice("");
    } catch (error) {
      console.error("Failed to add new plant:", error);
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" name="image" placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input type="number" name="price" step="0.01" placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
