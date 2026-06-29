import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripe();
  const body = await request.text();
  const signature = headers().get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook signature is missing" }, { status: 400 });
  }

  const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

  await prisma.webhookEvent.upsert({
    where: { id: event.id },
    update: {
      processedAt: new Date(),
      payload: event as object
    },
    create: {
      id: event.id,
      provider: "STRIPE_CONNECT",
      type: event.type,
      processedAt: new Date(),
      payload: event as object
    }
  });

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    await prisma.payment.updateMany({
      where: { providerPaymentId: paymentIntent.id },
      data: { status: "SUCCEEDED" }
    });
  }

  if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object;
    await prisma.payment.updateMany({
      where: { providerPaymentId: paymentIntent.id },
      data: { status: "FAILED" }
    });
  }

  return NextResponse.json({ received: true });
}
