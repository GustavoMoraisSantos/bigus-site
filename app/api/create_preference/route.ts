/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_API_SECRET!,
});

export async function POST(req: NextRequest) {
  const { cart, customerName, customerEmail, customerPhone } = await req.json();

  const preference = new Preference(client);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

  try {
    const response = await preference.create({
      body: {
        items: cart.map((item: any) => ({
          title: item.name,
          quantity: item.quantity,
          currency_id: "BRL",
          unit_price: item.price,
        })),

        payer: {
          name: customerName,
          email: customerEmail,
        },

        metadata: {
          customerName,
          customerEmail,
          customerPhone,
          cart,
        },

        back_urls: {
          success: `${BASE_URL}/success`,
          failure: `${BASE_URL}/failure`,
          pending: `${BASE_URL}/pending`,
        },
        notification_url: `${BASE_URL}/api/mercadopago/webhook`,
        auto_return: "approved",
        external_reference: `pedido-${Date.now()}-${Math.floor(
          Math.random() * 1000
        )}`,
      },
    });

    return NextResponse.json({ init_point: response.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
