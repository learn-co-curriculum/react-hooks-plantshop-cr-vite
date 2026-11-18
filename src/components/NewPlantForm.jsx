import React,{useState}from "react";


function NewPlantForm({onAddPlant}) {
  const[name,setName] =useState("")
  const[price,setPrice] =useState(0)
  const[image,setImage] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const plantData= {
      name: name,
      image: image,
      price: price,}
    
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(plantData),
    } )
    .then(r=>{
        if(!r.ok){
          throw new Error("The item was not added ");
        }
        return r.json()
    })
    .then(plant=> onAddPlant(plant))
    .catch(err=>
      console.log(err))
      
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form  className="New plant" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" name="image" placeholder="Image URL"
        onChange={(e)=>setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" 
        onChange={(e)=>setPrice(Number(e.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
