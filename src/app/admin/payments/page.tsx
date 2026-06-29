import { AppShell } from "@/components/AppShell";
import { demoPayments, formatMoney } from "@/lib/demo-data";

export default function PaymentsPage() {
  return (
    <AppShell active="payments">
      <header className="topbar">
        <div>
          <span className="eyebrow">Paiements</span>
          <h1>Transactions</h1>
          <p>Les webhooks Stripe mettront cette table a jour en temps reel.</p>
        </div>
      </header>

      <section className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Montant</th>
              <th>Frais</th>
              <th>Statut</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {demoPayments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.customer}</td>
                <td>{formatMoney(payment.amount)}</td>
                <td>{formatMoney(payment.fee)}</td>
                <td><span className="status">{payment.status}</span></td>
                <td>{payment.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
