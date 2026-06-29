import Stripe from "stripe";

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is missing");
  }

  return new Stripe(secretKey, {
    apiVersion: "2024-10-28.acacia",
    appInfo: {
      name: "LNS Pay"
    }
  });
}
