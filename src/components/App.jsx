import { useEffect, useState } from "react"
import PlantList from "./PlantList"
import Search from "./Search"
import NewPlantForm from "./NewPlantForm"

function App() {
  // Stores all plant data from backend
  const [plants, setPlants] = useState([])

  // Stores search input value
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch all plants when component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error))
  }, [])

  // Filters plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Adds newly created plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  // Marks a plant as sold out
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: false }
        : plant
    )

    setPlants(updatedPlants)
  }

  return (
    <main>
      <h1>Plant Shop</h1>

      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </main>
  )
}

export default App