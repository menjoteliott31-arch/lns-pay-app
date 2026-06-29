import Link from "next/link";

const proofCards = [
  {
    label: "Checkout",
    title: "Experience 100% LNS Pay",
    text: "Vos clients voient votre marque, votre domaine et un paiement fluide. Le rail technique reste derriere."
  },
  {
    label: "Risque",
    title: "Routage par profil marchand",
    text: "Standard, high-risk ou partenaire dedie : la plateforme choisit le bon chemin sans refaire le checkout."
  },
  {
    label: "Cash-flow",
    title: "Pilotage des frais et payouts",
    text: "Frais plateforme, virements, litiges et statuts sont centralises dans votre console interne."
  }
];

const transactions = [
  ["A. Bensaid", "+248,90 EUR", "Apple Pay"],
  ["M. Petrovic", "+89,00 EUR", "Mastercard"],
  ["L. Tanaka", "+1 290,00 EUR", "Google Pay"],
  ["K. Diallo", "+47,50 EUR", "Visa"]
];

export default function HomePage() {
  return (
    <main className="dark-site">
      <nav className="dark-nav">
        <Link className="dark-brand" href="/">
          <span className="dark-logo">L</span>
          <span>LNS Pay</span>
        </Link>
        <div className="dark-nav-links">
          <Link href="#features">Features</Link>
          <Link href="/checkout/demo">Checkout</Link>
          <Link href="/admin">Dashboard</Link>
          <Link className="dark-login" href="/admin/login">Connexion</Link>
          <Link className="dark-cta" href="/admin">Demarrer</Link>
        </div>
      </nav>

      <section className="dark-hero">
        <div className="trust-pill">
          <span />
          0 friction cote acheteur · routage invisible
        </div>
        <h1>
          Le checkout qui garde ton <span>cash-flow</span> en mouvement.
        </h1>
        <p>
          LNS Pay combine un checkout white-label, une console marchand et une
          couche provider pour encaisser aujourd'hui avec Stripe Connect, puis
          brancher d'autres partenaires quand ton risque evolue.
        </p>
        <div className="dark-actions">
          <Link className="dark-button primary" href="/checkout/demo">Voir le checkout</Link>
          <Link className="dark-button secondary" href="/admin">Acceder au dashboard</Link>
        </div>
        <div className="dark-bullets">
          <span>Payouts configurables</span>
          <span>Apple Pay · Google Pay</span>
          <span>Provider masque</span>
          <span>Dashboard temps reel</span>
        </div>
      </section>

      <section className="console-preview" aria-label="Apercu dashboard LNS Pay">
        <div className="browser-frame">
          <div className="browser-bar">
            <div className="window-dots"><span /><span /><span /></div>
            <div className="url-pill">dashboard.lnspay.app</div>
            <div className="live-dot">LIVE</div>
          </div>
          <div className="console-grid">
            <article className="console-card revenue-card">
              <span>REVENU · 30 J</span>
              <strong>EUR 342 890</strong>
              <small>+24,8% vs periode precedente</small>
              <div className="chart-line" />
            </article>
            <article className="console-card payout-card">
              <span>PROCHAIN REGLEMENT</span>
              <strong>EUR 28 460</strong>
              <small>Standard · J+3</small>
              <div className="progress-line"><span /></div>
            </article>
            <article className="console-card mini-stat">
              <span>TRANSACTIONS · 24 H</span>
              <strong>1 247</strong>
            </article>
            <article className="console-card mini-stat">
              <span>TAUX DE REUSSITE</span>
              <strong>98,4%</strong>
            </article>
            <article className="console-card mini-stat">
              <span>BLOCAGES</span>
              <strong>0</strong>
            </article>
            <article className="console-card transactions-card">
              <span>TRANSACTIONS RECENTES</span>
              {transactions.map((transaction) => (
                <div className="transaction-row" key={transaction[0]}>
                  <div>
                    <strong>{transaction[0]}</strong>
                    <small>{transaction[2]} · a l'instant</small>
                  </div>
                  <strong>{transaction[1]}</strong>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="dark-stats">
        <div><strong>0</strong><span>blocage visible</span></div>
        <div><strong>&lt; 10 min</strong><span>creation marchand</span></div>
        <div><strong>J + 3</strong><span>cycle de reglement</span></div>
        <div><strong>24 h</strong><span>mise en ligne apres dossier</span></div>
      </section>

      <section className="dark-section" id="features">
        <span className="section-kicker">Pourquoi LNS Pay</span>
        <h2>Tout ce qu'un processeur classique rend trop complique.</h2>
        <p>
          Une interface claire pour operer les marchands, masquer les rails et
          offrir une experience checkout propre des le premier paiement.
        </p>
        <div className="proof-grid">
          {proofCards.map((card) => (
            <article className="proof-card" key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
