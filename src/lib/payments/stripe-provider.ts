import { prisma } from "@/lib/db";
import { getStripe } from "@/lib/stripe";
import type {
  CreateCheckoutPaymentInput,
  CreateCheckoutPaymentResult,
  PaymentProvider
} from "@/lib/payments/types";

export class StripeConnectProvider implements PaymentProvider {
  async createMerchantAccount(merchantId: string) {
    const stripe = getStripe();
    const merchant = await prisma.merchant.findUniqueOrThrow({
      where: { id: merchantId }
    });

    const account = await stripe.accounts.create({
      type: "express",
      business_profile: {
        name: merchant.name
      },
      metadata: {
        merchantId: merchant.id,
        platform: "lns_pay"
      }
    });

    await prisma.providerConnection.upsert({
      where: {
        merchantId_provider: {
          merchantId: merchant.id,
          provider: "STRIPE_CONNECT"
        }
      },
      update: {
        providerAccountId: account.id,
        rawStatus: account as object
      },
      create: {
        merchantId: merchant.id,
        provider: "STRIPE_CONNECT",
        providerAccountId: account.id,
        rawStatus: account as object
      }
    });

    return { providerAccountId: account.id };
  }

  async createCheckoutPayment(input: CreateCheckoutPaymentInput): Promise<CreateCheckoutPaymentResult> {
    const stripe = getStripe();
    const merchant = await prisma.merchant.findUniqueOrThrow({
      where: { id: input.merchantId },
      include: {
        providerConnections: true
      }
    });

    const providerConnection = merchant.providerConnections.find(
      (connection) => connection.provider === "STRIPE_CONNECT"
    );

    const platformFee = Math.round(input.amount * Number(merchant.feePercent) / 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: input.amount,
      currency: input.currency.toLowerCase(),
      application_fee_amount: providerConnection?.providerAccountId ? platformFee : undefined,
      automatic_payment_methods: {
        enabled: true
      },
      description: input.description,
      metadata: {
        merchantId: merchant.id,
        merchantSlug: merchant.slug,
        publicProcessor: "LNS Pay"
      },
      ...(providerConnection?.providerAccountId
        ? { transfer_data: { destination: providerConnection.providerAccountId } }
        : {})
    });

    const payment = await prisma.payment.create({
      data: {
        merchantId: merchant.id,
        provider: "STRIPE_CONNECT",
        providerPaymentId: paymentIntent.id,
        customerEmail: input.customerEmail,
        amount: input.amount,
        currency: input.currency,
        platformFee,
        description: input.description,
        metadata: {
          items: input.items
        }
      }
    });

    if (!paymentIntent.client_secret) {
      throw new Error("Stripe did not return a client secret");
    }

    return {
      paymentId: payment.id,
      clientSecret: paymentIntent.client_secret,
      publicProviderName: "LNS Pay"
    };
  }
}
