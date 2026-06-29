import Link from "next/link";

export default function HomePage() {
  return (
    <main className="checkout-shell">
      <section className="checkout-card">
        <div className="checkout-brandbar">
          <div className="brand-mark">L</div>
          <div>
            <strong>LNS Pay</strong>
            <p style={{ margin: 0, color: "#0b2b27" }}>La plateforme de paiement white-label pour marchands modernes.</p>
          </div>
        </div>
        <div className="checkout-body">
          <div>
            <span className="eyebrow">Plateforme paiement</span>
            <h1>Encaisser sous ta marque, router derriere le bon partenaire.</h1>
            <p>
              Dashboard marchand, checkout personnalise, frais plateforme et architecture
              preparee pour Stripe Connect puis d'autres partenaires.
            </p>
            <Link className="button primary" href="/admin">
              Ouvrir l'admin
            </Link>
          </div>
          <div className="payment-panel">
            <h2>V1 en construction</h2>
            <p>Cette base est prete a recevoir Stripe, PostgreSQL et le deploiement Vercel.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
