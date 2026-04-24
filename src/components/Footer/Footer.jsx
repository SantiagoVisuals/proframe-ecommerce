import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">&#9677;</span>
            <span className="logo-text">PRO</span>
            <span className="logo-accent">FRAME</span>
          </Link>
          <p className="footer-tagline">
            Equipo audiovisual profesional para creadores que exigen calidad.
          </p>
        </div>

        <div className="footer-links">
          <h4>Tienda</h4>
          <ul>
            <li><Link to="/products">Todos los Productos</Link></li>
            <li><Link to="/cart">Carrito</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Info</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Redes</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ProFrame. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
