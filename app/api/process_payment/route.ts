import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_API_SECRET!,
});

export async function POST(req: NextRequest) {
  const { payment_method_id, transaction_amount, payer } = await req.json();
  const payment = new Payment(client);

  try {
    const paymentData = await payment.create({
      body: {
        transaction_amount,
        payment_method_id,
        payer,
      },
    });

    const pixData = paymentData.point_of_interaction?.transaction_data;

    return NextResponse.json({
      status: paymentData.status,
      qr_code: pixData?.qr_code,
      qr_code_base64: pixData?.qr_code_base64,
      ticket_url: pixData?.ticket_url,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Erro ao processar pagamento:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
