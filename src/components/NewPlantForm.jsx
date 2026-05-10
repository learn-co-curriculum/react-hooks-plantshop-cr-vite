import { useState } from "react"

function NewPlantForm({ onAddPlant }) {
  // Form state for new plant
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  // Updates form inputs dynamically
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  // Sends POST request to backend
  function handleSubmit(event) {
    event.preventDefault()

    const newPlant = {
      ...formData,
      price: Number(formData.price),
      inStock: true,
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        // Updates App state with new plant
        onAddPlant(data)

        // Resets form after submission
        setFormData({
          name: "",
          image: "",
          price: "",
        })
      })
      .catch((error) => console.error("Error adding plant:", error))
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">Add Plant</button>
    </form>
  )
}

export default NewPlantForm