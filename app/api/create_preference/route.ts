/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_API_SECRET!,
});

export async function POST(req: NextRequest) {
  const { cart } = await req.json();

  const preference = new Preference(client);

  try {
    const response = await preference.create({
      body: {
        items: cart.map((item: any) => ({
          title: item.name,
          quantity: item.quantity,
          currency_id: "BRL",
          unit_price: item.price,
        })),
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
          pending: "http://localhost:3000/pending",
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({ init_point: response.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
