import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";

export default function Products() {
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section">
      <div className="page-header">
        <h1 className="page-title">Todos los Productos</h1>
        <p className="page-subtitle">
          Explora nuestro catalogo completo de equipo audiovisual
        </p>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No hay productos en esta categoria.</p>
      )}
    </section>
  );
}
