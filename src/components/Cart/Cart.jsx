import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import formatPrice from "../../data/formatPrice";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotal, clearCart } =
    useCart();
  const navigate = useNavigate();
  const [checkoutDone, setCheckoutDone] = useState(false);

  function handleCheckout() {
    setCheckoutDone(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }

  if (checkoutDone) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2a9d5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h2>Compra realizada con exito</h2>
        <p>Gracias por tu compra. Seras redirigido al inicio.</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </div>
        <h2>Tu carrito esta vacio</h2>
        <p>Agrega algunos productos para comenzar</p>
        <Link to="/products" className="cart-empty-btn">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
              loading="lazy"
            />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <span className="cart-item-price">{formatPrice(item.price)}</span>
            </div>
            <div className="cart-item-quantity">
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                aria-label="Disminuir cantidad"
              >
                &minus;
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                aria-label="Aumentar cantidad"
              >
                &#43;
              </button>
            </div>
            <span className="cart-item-subtotal">
              {formatPrice(item.price * item.quantity)}
            </span>
            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
              aria-label="Eliminar producto"
            >
              &#10005;
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>{formatPrice(getTotal())}</span>
        </div>
        <div className="cart-summary-row">
          <span>Envio</span>
          <span className="free-shipping">Gratis</span>
        </div>
        <div className="cart-summary-row cart-total">
          <span>Total</span>
          <span>{formatPrice(getTotal())}</span>
        </div>
        <button className="cart-checkout-btn" onClick={handleCheckout}>
          Finalizar Compra
        </button>
        <button className="cart-clear-btn" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}
