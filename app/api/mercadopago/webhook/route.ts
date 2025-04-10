import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = process.env.MERCADO_PAGO_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature");

  const expectedSignature = crypto
    .createHmac("sha256", SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.log("🚨 Assinatura inválida!");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);
  console.log("📬 Webhook recebido:", body);

  return NextResponse.json({ received: true });
}

export async function GET() {
  return NextResponse.json({ status: "Webhook ativo" });
}
