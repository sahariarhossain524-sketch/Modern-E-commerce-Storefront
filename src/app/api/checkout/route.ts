import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-05-27.dahlia" as any, // Use the latest API version or your account's default
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return new NextResponse("Cart is empty", { status: 400 });
    }

    // Format the line items for Stripe Checkout
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
      },
      quantity: item.quantity,
    }));

    // Create the Stripe Checkout Session
    const origin = req.headers.get("origin") || "http://localhost:3000";
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU'], // Example countries
      },
      billing_address_collection: "required",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
