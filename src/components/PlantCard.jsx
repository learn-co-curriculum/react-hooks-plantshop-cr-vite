import { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;

  const [isOutOfStock, setIsOutOfStock] = useState(false);

  function handleToggleStock() {
    setIsOutOfStock((prev) => !prev);
  }

  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 12,
        maxWidth: 360,
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "auto", borderRadius: 6 }}
      />
      {/* tests query for h4, not h3 */}
      <h4 style={{ margin: "8px 0" }}>{name}</h4>
      <p style={{ margin: "4px 0" }}>${Number(price).toFixed(2)}</p>

      <button onClick={handleToggleStock}>
        {isOutOfStock ? "Out of Stock" : "In Stock"}
      </button>

      {isOutOfStock && (
        <p style={{ color: "#b00", marginTop: 8 }}>This plant is sold out</p>
      )}
    </article>
  );
}

export default PlantCard;