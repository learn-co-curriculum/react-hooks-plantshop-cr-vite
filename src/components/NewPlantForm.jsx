import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newPlantData = {
      name: name.trim(),
      image: image.trim(),
      price: Number(price),
    };

    try {
      const res = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlantData),
      });
      if (!res.ok) throw new Error("Failed to create plant");
      const created = await res.json();
      onAddPlant(created);
      setName("");
      setImage("");
      setPrice("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "16px 0" }}>
      <h2>Add a Plant</h2>
      <div style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <label>
          Name
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Plant name"   // exact text the tests expect
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"    // exact text the tests expect
          />
        </label>

        <label>
          Price
          <input
            type="number"
            step="0.01"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"        // exact text the tests expect
          />
        </label>

        <button type="submit">Add Plant</button>
      </div>
    </form>
  );
}

export default NewPlantForm;