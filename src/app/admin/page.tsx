import { AppShell } from "@/components/AppShell";
import { demoMerchant, demoPayments, formatMoney } from "@/lib/demo-data";

export default function AdminPage() {
  const totalFees = demoPayments.reduce((sum, payment) => sum + payment.fee, 0);

  return (
    <AppShell active="admin">
      <header className="topbar">
        <div>
          <span className="eyebrow">Admin LNS Pay</span>
          <h1>Pilotage plateforme</h1>
          <p>Vue interne pour gerer les marchands, les paiements et les rails techniques.</p>
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
    </AppShell>
  );
}
