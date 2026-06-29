export type CheckoutItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

export type CreateCheckoutPaymentInput = {
  merchantId: string;
  amount: number;
  currency: string;
  customerEmail?: string;
  description?: string;
  items: CheckoutItem[];
};

export type CreateCheckoutPaymentResult = {
  paymentId: string;
  clientSecret: string;
  publicProviderName: "LNS Pay";
};

export interface PaymentProvider {
  createCheckoutPayment(input: CreateCheckoutPaymentInput): Promise<CreateCheckoutPaymentResult>;
  createMerchantAccount(merchantId: string): Promise<{ providerAccountId: string }>;
}
