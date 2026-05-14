import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ products }) {
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase())
    return matchesSearch;
  });

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList products={filtered} />
    </main>
  );
}

export default PlantPage;
