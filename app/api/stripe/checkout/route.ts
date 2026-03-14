import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { DEPOSIT_AMOUNT_STRIPE, SALON_NAME } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service } = body;

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "huf",
            product_data: {
              name: `${SALON_NAME} – Foglalási előleg`,
              description: service || "Szolgáltatás foglalási előleg",
            },
            unit_amount: DEPOSIT_AMOUNT_STRIPE,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/foglaljas/sikeres?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/foglaljas?step=payment&cancelled=true`,
      metadata: {
        service: service || "general",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Hiba történt a fizetési munkamenet létrehozásakor." },
      { status: 500 }
    );
  }
}
