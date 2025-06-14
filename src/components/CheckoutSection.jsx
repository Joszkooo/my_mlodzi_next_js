import { useState } from "react";
import Checkout from "./Checkout.jsx";
import { Input } from "@/components/ui/input"; // ShadCN Input

export default function CheckoutSection() {
  const [amount, setAmount] = useState("20");

  
  function handleAmountChange(e) {
    const rawValue = e.target.value;

    // Allow only digits and one dot (.) for decimal values
    const cleaned = rawValue.replace(/[^0-9.]/g, "");

    // Only allow one decimal point
    const valid = cleaned.split(".").length > 2
      ? cleaned.slice(0, cleaned.lastIndexOf(".")).replace(/\./g, "") + "." + cleaned.split(".").pop()
      : cleaned;

    setAmount(valid);
}

  return (
    <section
      id="checkout-section"
      className="flex flex-col text-center items-center p-5 bg-[#2b3e95] min-h-screen"
    >
      <h1 className="text-4xl md:text-6xl lg:text-[2.5vw] font-bold text-white uppercase px-10">
        Współtwórz
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-[2.5vw] font-bold text-white uppercase px-10 mb-2">
        z nami przyszłość!
      </h1>
      <p className="text-base md:text-3xl lg:text-[1.1vw] text-white justify-between text-wrap p-4">
        Twoja darowizna realnie zmienia życie lokalnych społeczności.{" "} 
        <strong>Wspieraj nas, by rozwijać talenty, infrastrukturę i wydarzenia, które łączą mieszkańców.</strong>{" "}
        Działajmy razem!
      </p>
      <br />

      <div className="mt-auto bg-white p-2 rounded-xl shadow-md w-full max-w-md space-y-4">
        <label className="text-left block text-sm font-medium text-gray-700">
          Wpisz kwotę darowizny (PLN)
        </label>
        <Input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Wpisz kwotę..."
          className="text-lg font-semibold"
        />

        <div className="border-t pt-2">
          <Checkout amount={parseFloat(amount) > 0 ? parseFloat(amount) : 1} />
        </div>
      </div>
    </section>
  );
}
