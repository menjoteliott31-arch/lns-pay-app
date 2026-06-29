import Link from "next/link";
import { demoPayments, formatMoney } from "@/lib/demo-data";

const totalVolume = demoPayments.reduce((sum, payment) => sum + payment.amount, 0);

export default function HomePage() {
  return (
    <main className="marketing-page">
      <nav className="marketing-nav">
        <Link className="brand dark" href="/">
          <span className="brand-mark">L</span>
          <span>
            LNS Pay
            <span>White-label processing</span>
          </span>
        </Link>
        <div className="marketing-nav-links">
          <Link href="/checkout/demo">Checkout demo</Link>
          <Link href="/admin">Dashboard</Link>
          <Link className="button primary" href="/admin/login">Connexion</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Gateway white-label</span>
          <h1>Une plateforme de paiement qui porte ton nom.</h1>
          <p>
            LNS Pay fournit un checkout premium, un dashboard marchand et une couche
            de routage provider pour encaisser sous ta marque, avec Stripe Connect
            derriere aujourd'hui et d'autres rails demain.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/checkout/demo">Voir le checkout</Link>
            <Link className="button ghost" href="/admin">Ouvrir l'admin</Link>
          </div>
        </div>

        <div className="product-showcase" aria-label="Apercu LNS Pay">
          <div className="showcase-top">
            <span>LNS Pay Console</span>
            <strong>{formatMoney(totalVolume)}</strong>
          </div>
          <div className="showcase-grid">
            <div className="showcase-panel large">
              <span className="eyebrow">Live checkout</span>
              <h2>Atelier Nova</h2>
              <div className="checkout-mini">
                <div className="checkout-mini-image" />
                <div>
                  <strong>Sneakers S x M</strong>
                  <p>Quantite 1 · EUR</p>
                </div>
                <strong>{formatMoney(8900)}</strong>
              </div>
              <div className="pay-field">4242 4242 4242 4242</div>
              <div className="pay-button">Payer avec LNS Pay</div>
            </div>
            <div className="showcase-panel">
              <span className="eyebrow">Marchands</span>
              <strong>12 actifs</strong>
              <p>Frais, statuts et verification centralises.</p>
            </div>
            <div className="showcase-panel">
              <span className="eyebrow">Routage</span>
              <strong>2 rails</strong>
              <p>Standard aujourd'hui, high-risk demain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band">
        <article>
          <span className="eyebrow">Checkout</span>
          <h2>Des pages de paiement a ta marque</h2>
          <p>Domaine LNS Pay, design marchand, panier Shopify-compatible et experience acheteur sans mention visible du partenaire technique.</p>
        </article>
        <article>
          <span className="eyebrow">Admin</span>
          <h2>Controle des comptes clients</h2>
          <p>Creation de marchands, frais personnalises, suivi des paiements, remboursements, litiges et statut d'onboarding.</p>
        </article>
        <article>
          <span className="eyebrow">Infrastructure</span>
          <h2>Stripe cache derriere une couche provider</h2>
          <p>Le code est prepare pour ajouter un autre partenaire sans refaire le dashboard ou les checkouts.</p>
        </article>
      </section>
    </main>
  );
}
