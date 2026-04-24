import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="section">
        <div className="section-divider">
          <h2 className="section-title">Destacados</h2>
          <Link to="/products" className="section-link">
            Ver todo
          </Link>
        </div>
        <div className="products-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-inner">
          <div className="promo-left">
            <h2 className="promo-title">Envio gratis<br />en todo tu equipo</h2>
          </div>
          <div className="promo-right">
            <p className="promo-text">
              Envio asegurado a toda Colombia.
              Recibe tu equipo en 3-5 dias habiles
              con tracking en tiempo real.
            </p>
            <Link to="/products" className="promo-cta">
              Ver Catalogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
