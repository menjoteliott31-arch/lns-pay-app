export const demoMerchant = {
  id: "demo_merchant",
  slug: "atelier-nova",
  name: "Atelier Nova",
  status: "ACTIVE",
  feePercent: 4.9,
  volume: 24890,
  disputes: 1,
  checkout: {
    displayName: "Atelier Nova",
    primaryColor: "#35d4bf"
  }
};

export const demoPayments = [
  {
    id: "pay_001",
    customer: "Mila R.",
    amount: 14900,
    fee: 730,
    status: "SUCCEEDED",
    createdAt: "Aujourd'hui"
  },
  {
    id: "pay_002",
    customer: "Noah B.",
    amount: 8900,
    fee: 436,
    status: "SUCCEEDED",
    createdAt: "Hier"
  },
  {
    id: "pay_003",
    customer: "Emma T.",
    amount: 21900,
    fee: 1073,
    status: "REQUIRES_ACTION",
    createdAt: "Hier"
  }
];

export function formatMoney(amountInCents: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR"
  }).format(amountInCents / 100);
}
