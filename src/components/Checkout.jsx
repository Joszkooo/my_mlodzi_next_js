"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import { useEffect, useState } from "react";
import convertToSubcurrency from "../lib/convertToSubcurrency.js";

export const dynamic = "force-dynamic";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

export default function Checkout({ amount }) {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })

      .catch(() => console.error("PI creation failed"));
  }, [amount]);

  if (!clientSecret) {
    return <span className="loader" />; // or any skeleton component
  }

  return (
    <Elements 
      stripe={stripePromise} 
      options={{ 
        clientSecret, 
        locale: "pl",
      }}>
      <CheckoutPage amount={amount} />
    </Elements>
  );
}
