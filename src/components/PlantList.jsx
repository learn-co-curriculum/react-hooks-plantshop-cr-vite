import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16 }}>
      {plants.map((plant) => (
        <li key={plant.id} data-testid="plant-item">
          <PlantCard plant={plant} />
        </li>
      ))}
    </ul>
  );
}

export default PlantList;