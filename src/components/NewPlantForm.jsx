import React, { useState } from "react";

// NewPlantForm receives one prop:
//   - onAddPlant: a function from PlantPage that sends the POST request
//                 and adds the new plant to state
function NewPlantForm({ onAddPlant }) {

  // Controlled inputs: each field is backed by a piece of React state.
  // Whenever the user types, we update state → React re-renders → input reflects state.
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    // Prevent the default browser behaviour of refreshing the page on form submit.
    e.preventDefault();

    // Pass the new plant object up to PlantPage.
    // IMPORTANT: send price as-is (a string) — don't convert it with parseFloat.
    // The backend and tests expect the raw string value from the input.
    onAddPlant({ name, image, price });

    // Reset all fields back to empty so the form is ready for the next entry.
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      {/* onSubmit fires when the user clicks "Add Plant" or presses Enter.
          We handle it ourselves instead of letting the browser do a page reload. */}
      <form onSubmit={handleSubmit}>

        {/* Each input is "controlled":
              value={...}          ties the displayed value to state
              onChange={(e) => …}  updates state every time the user types */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
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