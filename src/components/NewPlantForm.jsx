import {useState} from "react";

function NewPlantForm({handlePlantAdded}) {
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    price:"",
  })

  function handleSubmit(e){
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newPlant => handlePlantAdded(newPlant))
  }

  function handleChange(e){
    const {name, value} = e.target;

    setFormData({...formData, [name]: value,});
  
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {handleSubmit}>
        <input type="text" name="name" value ={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name="image"  value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
