import { AppShell } from "@/components/AppShell";

export default function NewMerchantPage() {
  return (
    <AppShell active="merchants">
      <header className="topbar">
        <div>
          <span className="eyebrow">Nouveau marchand</span>
          <h1>Creation compte</h1>
          <p>Cette page sera connectee a PostgreSQL dans la prochaine etape.</p>
        </div>
      </header>

      <section className="card">
        <form className="form">
          <label>
            Nom commercial
            <input name="name" placeholder="Atelier Nova" />
          </label>
          <label>
            Email du marchand
            <input name="email" type="email" placeholder="merchant@example.com" />
          </label>
          <label>
            Frais LNS Pay
            <input name="feePercent" type="number" defaultValue="4.9" step="0.1" />
          </label>
          <button className="primary" type="button">Creer le marchand</button>
        </form>
      </section>
    </AppShell>
  );
}
