export default function Contact() {
  return (
    <main className="shop-page">

      <a href="/" className="back-arrow">
        ← Home
      </a>

      <div className="contact-container">

        <h1>P.C SHOPS</h1>

        <p className="contact-subtitle">
          Need help, have a question, or want to stay updated?
        </p>

        <div className="contact-grid">

          <a
            href="https://discord.gg/wgc3ZYMaq"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h2>💬 Discord</h2>
            <p>
              Join our community, receive updates, ask questions, and get support.
            </p>

            <span>JOIN DISCORD →</span>
          </a>

          <div className="contact-card coming-soon">
            <h2>📸 Instagram</h2>
            <p>Coming Soon</p>
          </div>

          <div className="contact-card coming-soon">
            <h2>🎵 TikTok</h2>
            <p>Coming Soon</p>
          </div>

          <div className="contact-card coming-soon">
            <h2>𝕏 X (Twitter)</h2>
            <p>Coming Soon</p>
          </div>

        </div>

      </div>

    </main>
  );
}