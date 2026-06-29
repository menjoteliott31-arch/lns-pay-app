import { demoMerchant, formatMoney } from "@/lib/demo-data";

const item = {
  title: "S x M white & black - 36",
  amount: 9900,
  description: "Edition premium · livraison suivie · retour sous 14 jours"
};

export default function DemoCheckoutPage() {
  return (
    <main className="checkout-shell premium-checkout">
      <section className="checkout-card checkout-card-wide">
        <div className="checkout-brandbar" style={{ background: demoMerchant.checkout.primaryColor }}>
          <div className="brand-mark">A</div>
          <div>
            <strong>{demoMerchant.checkout.displayName}</strong>
            <p style={{ margin: 0, color: "#0b2b27" }}>Paiement securise par LNS Pay</p>
          </div>
        </div>

        <div className="checkout-body refined">
          <section className="order-summary">
            <span className="eyebrow">Votre commande</span>
            <div className="product-line" style={{ marginTop: 18 }}>
              <div className="product-image product-photo" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Quantite 1 · EUR</p>
              </div>
            </div>
            <div className="summary-lines">
              <div><span>Sous-total</span><strong>{formatMoney(item.amount)}</strong></div>
              <div><span>Livraison</span><strong>Offerte</strong></div>
              <div><span>Protection paiement</span><strong>Incluse</strong></div>
            </div>
            <div className="total-line">
              <span>Total</span>
              <strong>{formatMoney(item.amount)}</strong>
            </div>
          </section>

          <section className="payment-panel payment-panel-premium">
            <div className="payment-tabs">
              <button className="active" type="button">Carte</button>
              <button type="button">Wallet</button>
            </div>
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
                Paiement chiffre et traite par LNS Pay. Aucune donnee carte n'est stockee par le marchand.
              </p>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
