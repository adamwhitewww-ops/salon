import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Kérjük, töltsd ki a kötelező mezőket." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Érvénytelen e-mail cím." },
        { status: 400 }
      );
    }

    // In production, integrate with email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", { name, email, phone, message });

    return NextResponse.json({
      success: true,
      message: "Üzeneted sikeresen elküldtük! Hamarosan felvesszük veled a kapcsolatot.",
    });
  } catch {
    return NextResponse.json(
      { error: "Hiba történt az üzenet küldésekor." },
      { status: 500 }
    );
  }
}
