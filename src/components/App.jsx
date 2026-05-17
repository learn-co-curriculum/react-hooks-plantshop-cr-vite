import { useEffect, useState } from "react"
import Header from "./Header"
import NewPlantForm from "./NewPlantForm"
import Search from "./Search"
import PlantList from "./PlantList"

function App() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
  }, [])

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Header />

      <NewPlantForm plants={plants} setPlants={setPlants} />

      <Search search={search} setSearch={setSearch} />

      <PlantList plants={filteredPlants} />
    </div>
  )
}

export default App