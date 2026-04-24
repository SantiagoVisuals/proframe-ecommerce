import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import formatPrice from "../data/formatPrice";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="section" style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ color: "#fafafa", marginBottom: 12 }}>Producto no encontrado</h2>
        <Link to="/products" className="hero-cta" style={{ display: "inline-flex" }}>
          Volver a Productos
        </Link>
      </section>
    );
  }

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 2);

  return (
    <section className="section">
      <Link to="/products" className="back-link">
        &#8592; Volver a productos
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">{formatPrice(product.price)}</p>
          <p className="product-detail-desc">{product.description}</p>

          <div className="product-detail-features">
            <div className="feature">
              <svg className="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Envio gratis a toda Colombia</span>
            </div>
            <div className="feature">
              <svg className="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Devolucion hasta 30 dias</span>
            </div>
            <div className="feature">
              <svg className="feature-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>Garantia de calidad</span>
            </div>
          </div>

          <button
            className={`product-detail-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "Agregado al Carrito" : "Agregar al Carrito"}
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h3 className="related-title">Tambien te puede gustar</h3>
          <div className="products-grid products-grid-small">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="related-card">
                <img src={p.image} alt={p.name} loading="lazy" />
                <div className="related-card-info">
                  <span className="related-card-name">{p.name}</span>
                  <span className="related-card-price">{formatPrice(p.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
