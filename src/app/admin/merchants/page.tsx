import { AppShell } from "@/components/AppShell";
import { demoMerchant, formatMoney } from "@/lib/demo-data";

export default function MerchantsPage() {
  return (
    <AppShell active="merchants">
      <header className="topbar">
        <div>
          <span className="eyebrow">Marchands</span>
          <h1>Comptes clients</h1>
          <p>Creation et gestion des marchands LNS Pay.</p>
        </div>
        <a className="button primary" href="/admin/merchants/new">
          Nouveau marchand
        </a>
      </header>

      <section className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Marchand</th>
              <th>Statut</th>
              <th>Frais</th>
              <th>Volume</th>
              <th>Checkout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{demoMerchant.name}</td>
              <td><span className="status">{demoMerchant.status}</span></td>
              <td>{demoMerchant.feePercent}%</td>
              <td>{formatMoney(demoMerchant.volume * 100)}</td>
              <td><a href="/checkout/demo">Voir</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
