import React from "react";

// PlantCard receives two props:
//   - plant: the individual plant object (has id, name, image, price, soldOut)
//   - onUpdatePlant: a function passed down from PlantPage that sends a PATCH request
//                    and updates the plant in state
function PlantCard({ plant, onUpdatePlant }) {

  // When the button is clicked, we want to FLIP the soldOut value.
  // We use the spread operator (...plant) to copy ALL of the plant's
  // existing fields, then override just the soldOut field with the opposite value.
  // e.g. if soldOut was false, it becomes true — and vice versa.
  function handleStockToggle() {
    onUpdatePlant({ ...plant, soldOut: !plant.soldOut });
  }

  return (
    // data-testid is used by the test suite to find this element — don't remove it!
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {/* If soldOut is true  → show "Out of Stock" (no special class)
          If soldOut is false → show "In Stock"     (with "primary" class for styling)
          Either way, clicking calls handleStockToggle to flip the value. */}
      {plant.soldOut ? (
        <button onClick={handleStockToggle}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;