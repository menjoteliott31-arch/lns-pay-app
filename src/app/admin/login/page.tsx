export default function LoginPage() {
  return (
    <main className="checkout-shell">
      <section className="card" style={{ width: "min(100%, 420px)" }}>
        <span className="eyebrow">LNS Pay Admin</span>
        <h1 style={{ fontSize: 42 }}>Connexion</h1>
        <form className="form">
          <label>
            Email
            <input type="email" placeholder="admin@lnspay.com" />
          </label>
          <label>
            Mot de passe
            <input type="password" />
          </label>
          <button className="primary" type="button">Se connecter</button>
        </form>
      </section>
    </main>
  );
}
