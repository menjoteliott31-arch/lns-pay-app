import { StripeConnectProvider } from "@/lib/payments/stripe-provider";

export function getPrimaryPaymentProvider() {
  return new StripeConnectProvider();
}
