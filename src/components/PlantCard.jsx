function PlantCard({ plant, onSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => onSoldOut(id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
