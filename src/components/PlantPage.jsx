import PlantCard from "./PlantCard";

function PlantPage({ plants }) {
  const plantCards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return <ul className="cards">{plantCards}</ul>;
}

export default PlantPage;