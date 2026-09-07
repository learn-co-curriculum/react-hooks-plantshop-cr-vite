import PlantCard from "./PlantCard";

function PlantList({plants, searchWord}) {
  // console.log("SEARCH WORD:", searchWord);
  // console.log("PLANTS:", plants);

  return (
    <ul className="cards">{
      plants.filter((plant) =>
          plant.name.toLowerCase().includes(searchWord.toLowerCase())
        )
        .map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
    </ul>
  );
}

export default PlantList;
