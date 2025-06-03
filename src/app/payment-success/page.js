import { Suspense } from "react";
import PaymentSuccess from "@/components/PaymentSuccess";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div>Ładowanie danych płatności...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}