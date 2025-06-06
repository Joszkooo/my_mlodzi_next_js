'use client'

import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "../lib/convertToSubcurrency.js";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

export const dynamic = "force-dynamic";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout({amount}) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode:"payment",
        amount:convertToSubcurrency(amount),
        currency:"pln"
      }}
    >
      <CheckoutPage amount={amount}/>
    </Elements>
  )
}
