import { demoMerchant, formatMoney } from "@/lib/demo-data";

const item = {
  title: "Sneakers S x M white & black - 36",
  amount: 8900,
  description: "Commande premium avec confirmation instantanee et recu automatique."
};

export default function DemoCheckoutPage() {
  return (
    <main className="checkout-shell">
      <section className="checkout-card">
        <div className="checkout-brandbar" style={{ background: demoMerchant.checkout.primaryColor }}>
          <div className="brand-mark">A</div>
          <div>
            <strong>Paiement securise par LNS Pay</strong>
            <p style={{ margin: 0, color: "#0b2b27" }}>{demoMerchant.checkout.displayName}</p>
          </div>
        </div>

        <div className="checkout-body">
          <section>
            <span className="eyebrow">Votre commande</span>
            <div className="product-line" style={{ marginTop: 18 }}>
              <div className="product-image" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Quantite 1 · EUR</p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #dfe6e2", marginTop: 24, paddingTop: 18, display: "flex", justifyContent: "space-between" }}>
              <span>Total</span>
              <strong style={{ fontSize: 34 }}>{formatMoney(item.amount)}</strong>
            </div>
          </section>

          <section className="payment-panel">
            <form className="form">
              <label>
                Email
                <input type="email" defaultValue="client@example.com" />
              </label>
              <label>
                Numero de carte
                <input defaultValue="4242 4242 4242 4242" />
              </label>
              <div className="grid cols-2">
                <label>
                  Expiration
                  <input defaultValue="12/29" />
                </label>
                <label>
                  CVC
                  <input defaultValue="123" />
                </label>
              </div>
              <button className="primary" type="button">Payer {formatMoney(item.amount)}</button>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                Paiement traite de facon securisee par LNS Pay.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
