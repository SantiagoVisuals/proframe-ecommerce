import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { getItemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = getItemCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">&#9677;</span>
          <span className="logo-text">PRO</span>
          <span className="logo-accent">FRAME</span>
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setMenuOpen(false)}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
              Carrito
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
