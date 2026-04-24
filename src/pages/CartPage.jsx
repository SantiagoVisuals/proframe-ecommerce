import Cart from "../components/Cart/Cart";

export default function CartPage() {
  return (
    <section className="section">
      <div className="page-header">
        <h1 className="page-title">Tu Carrito</h1>
        <p className="page-subtitle">Revisa tus productos antes de comprar</p>
      </div>
      <Cart />
    </section>
  );
}
