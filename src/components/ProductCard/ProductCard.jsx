import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import formatPrice from "../../data/formatPrice";
import "./ProductCard.css";

export default function ProductCard({ product, index }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img src={product.image} alt={product.name} loading="lazy" />
          <div className="product-card-overlay">
            <button
              className={`product-card-btn ${added ? "added" : ""}`}
              onClick={handleAdd}
            >
              {added ? "Agregado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
        <div className="product-card-info">
          <div className="product-card-top">
            <span className="product-card-category">{product.category}</span>
            <span className="product-card-price">{formatPrice(product.price)}</span>
          </div>
          <h3 className="product-card-name">{product.name}</h3>
        </div>
      </Link>
    </article>
  );
}
