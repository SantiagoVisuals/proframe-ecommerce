import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&h=900&fit=crop"
          alt="Estacion de edicion de video profesional"
        />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Captura<br />
            cada <span className="highlight">frame</span>
          </h1>
          <p className="hero-subtitle">
            Equipo audiovisual profesional para cineastas,
            fotografos y creadores de contenido.
          </p>
          <Link to="/products" className="hero-cta">
            Ver Catalogo
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">8</span>
            <span className="stat-label">Productos</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Categorias</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">24h</span>
            <span className="stat-label">Despacho</span>
          </div>
        </div>
      </div>
    </section>
  );
}
