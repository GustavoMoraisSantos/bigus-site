import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("🔔 Webhook recebido do Mercado Pago:", body);

  // Você pode tratar notificações aqui, por exemplo:
  // - Verificar o `topic` (payment, merchant_order, etc.)
  // - Consultar status do pagamento usando o ID
  // - Atualizar o status de um pedido no seu banco

  return NextResponse.json({ received: true });
}
