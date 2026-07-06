export default function Home() {
  return (
    <main className="home">

      <nav className="navbar">
        <h1>SHOP-PC</h1>

        <div className="links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/reviews">Reviews</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-track">

          <span>
            🚚 FREE SHIPPING ON ALL ORDERS • ⭐ CHECK OUT OUR REVIEWS • 💬 CLICK CONTACT TO JOIN OUR DISCORD • 🔥 NEW PRODUCTS ADDED WEEKLY • ❤️ THANK YOU FOR SHOPPING WITH P.C SHOPS •
          </span>

          <span>
            🚚 FREE SHIPPING ON ALL ORDERS • ⭐ CHECK OUT OUR REVIEWS • 💬 CLICK CONTACT TO JOIN OUR DISCORD • 🔥 NEW PRODUCTS ADDED WEEKLY • ❤️ THANK YOU FOR SHOPPING WITH P.C SHOPS •
          </span>

        </div>
      </div>

      <section className="hero">

        <div className="shipping-banner">
          FREE SHIPPING ALL PHYSICAL PRODUCTS
          <br />
          CLOTHING, SHOES, COLOGNES, PURSES, BEANIES, WALLETS, AND MORE!
        </div>

        <div className="red-line"></div>

        <a href="/shop" className="shop-button">
          SHOP NOW
        </a>

        <h2>
          Premium Clothing Marketplace
        </h2>

        <p>
          Trusted sellers for clothing, shoes, hoodies, cologne, and more.
        </p>

      </section>

    </main>
  );
}