import {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(event) {
    event.preventDefault();

    const firstPlant = {
      name,
      image,
      price
    };

    fetch("http://localhost:6001/plants",
      {method: "POST", 
      headers: {
         "Content-Type": "application/json",
      }, 
      body: JSON.stringify(firstPlant),})
    .then((response) => response.json())
    .then((createdPlant) =>{
      onAddPlant(createdPlant);
      setName("");
      setPrice("");
      setImage("");
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit ={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        value ={name}
        placeholder="Plant name" 
        onChange={(event) => setName(event.target.value)} required
        />
        <input 
        type="text" 
        name="image" 
        value ={image}
        placeholder="Image URL" 
        onChange={(event) => setImage(event.target.value)} required 
        />
        <input type="number" 
        name="price" 
        step="0.01" 
        value ={price}
        placeholder="Price"
        onChange={(event)=> setPrice(event.target.value) }/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm;
