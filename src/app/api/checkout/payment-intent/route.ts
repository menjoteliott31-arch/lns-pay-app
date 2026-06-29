import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrimaryPaymentProvider } from "@/lib/payments/provider-registry";

const checkoutSchema = z.object({
  merchantId: z.string().min(1),
  amount: z.number().int().positive(),
  currency: z.string().default("EUR"),
  customerEmail: z.string().email().optional(),
  description: z.string().optional(),
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      price: z.number().positive(),
      quantity: z.number().int().positive(),
      image: z.string().url().optional()
    })
  )
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid checkout payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const provider = getPrimaryPaymentProvider();
  const result = await provider.createCheckoutPayment(parsed.data);

  return NextResponse.json(result);
}
