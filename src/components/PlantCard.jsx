function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price, inStock } = plant

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>Price: ${price}</p>

      <button
        onClick={() => onSoldOut(id)}
        disabled={!inStock}
      >
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  )
}

export default PlantCard