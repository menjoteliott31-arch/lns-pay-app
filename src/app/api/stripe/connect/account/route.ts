import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrimaryPaymentProvider } from "@/lib/payments/provider-registry";

const schema = z.object({
  merchantId: z.string().min(1)
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid merchant" }, { status: 400 });
  }

  const provider = getPrimaryPaymentProvider();
  const result = await provider.createMerchantAccount(parsed.data.merchantId);

  return NextResponse.json(result);
}
