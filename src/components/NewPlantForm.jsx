import { useState } from 'react';
import { API_URL } from '../api';

const EMPTY_FORM = { name: '', image: '', price: '' };

function NewPlantForm({ onAddPlant }) {
  // Controlled form: React state is the single source of truth for the inputs.
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Each input's `name` attribute matches a key in formData.
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Persist the plant first, then update the page with the saved record.
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Send the form values exactly as entered (name, image, price).
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        onAddPlant(newPlant);
        setFormData(EMPTY_FORM); // clear the form for the next plant
      })
      .catch((err) => console.error('Could not add plant:', err));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"
          value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL"
          value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price"
          value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;