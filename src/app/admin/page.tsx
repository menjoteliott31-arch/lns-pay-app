import { AppShell } from "@/components/AppShell";
import { demoMerchant, demoPayments, formatMoney } from "@/lib/demo-data";

export default function AdminPage() {
  const totalFees = demoPayments.reduce((sum, payment) => sum + payment.fee, 0);

  return (
    <AppShell active="admin">
      <header className="topbar">
        <div>
          <span className="eyebrow">Admin LNS Pay</span>
          <h1>Operations paiement</h1>
          <p>Controle les marchands, les frais, les risques et les paiements depuis une console unique.</p>
        </div>
        <a className="button primary" href="/admin/merchants/new">
          Creer un marchand
        </a>
      </header>

      <section className="grid cols-3">
        <article className="card metric">
          <span className="eyebrow">Volume</span>
          <strong>{formatMoney(demoMerchant.volume * 100)}</strong>
          <p>Marchand demo actif</p>
        </article>
        <article className="card metric">
          <span className="eyebrow">Frais plateforme</span>
          <strong>{formatMoney(totalFees)}</strong>
          <p>{demoMerchant.feePercent}% sur le marchand demo</p>
        </article>
        <article className="card metric">
          <span className="eyebrow">Litiges</span>
          <strong>{demoMerchant.disputes}</strong>
          <p>A surveiller dans la V1 Stripe</p>
        </article>
      </section>

      <section className="dashboard-layout">
        <article className="card">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">Transactions recentes</span>
              <h2>Flux plateforme</h2>
            </div>
            <a className="button ghost" href="/admin/payments">Tout voir</a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Montant</th>
                <th>Frais</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {demoPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.customer}</td>
                  <td>{formatMoney(payment.amount)}</td>
                  <td>{formatMoney(payment.fee)}</td>
                  <td><span className="status">{payment.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card risk-card">
          <span className="eyebrow">Routage provider</span>
          <h2>LNS Pay Standard</h2>
          <p>Rail actif pour les marchands approuves. Le partenaire reste cote serveur.</p>
          <div className="risk-row">
            <span>Checkout white-label</span>
            <strong>Actif</strong>
          </div>
          <div className="risk-row">
            <span>Onboarding</span>
            <strong>A connecter</strong>
          </div>
          <div className="risk-row">
            <span>Webhooks Stripe</span>
            <strong>Prepare</strong>
          </div>
        </article>
      </section>
    </AppShell>
  );
}
