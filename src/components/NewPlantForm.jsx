import React, { useState } from "react";

const API_URL = "http://localhost:6001/plants";

function NewPlantForm() {
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setProducts((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!products.name.trim()) newErrors.name = "Enter plant name";
    if (!products.price.trim()) newErrors.price = "Enter price";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(products)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Cannot reach API");
          }
          return response.json();
        })
        .then(() => {
          // Reset form after success
          setProducts({
            name: "",image: "", price: ""
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={products.name} onChange={handleChange}/>
        {errors.name && <p>{errors.name}</p>}

        <input type="text" name="image" placeholder="Image URL" value={products.image} onChange={handleChange}  />

        <input type="number" name="price" step="0.01" placeholder="Price" value={products.price} onChange={handleChange}/>
        {errors.price && <p>{errors.price}</p>}

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
