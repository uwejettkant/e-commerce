import React, { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8040/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section>
      {categories.map((category) => (
        <ul key={category._id}>
          <li>{category.name}</li>
          <ul>
            <li>{category.description}</li>
          </ul>
          <button>See Products</button>
        </ul>
      ))}
    </section>
  );
}
