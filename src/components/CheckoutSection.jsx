import { useState } from "react";
import Checkout from "./Checkout.jsx";
import { Input } from "@/components/ui/input"; // ShadCN Input

export default function CheckoutSection() {
  const [amount, setAmount] = useState("20");

  //TODO zmienić to aby nie przyjmowało liter tylko liczby
  function handleAmountChange(Event){
    const value = Event.target.value.replace(/[^0-9.]/g, ""); // strip non-numerics
    setAmount(value);
  }
  return (
    <section
      id="checkout-section"
      className="flex flex-grow flex-col text-center items-center p-5 bg-[#2b3e95] "
    >
      <h1 className="text-4xl md:text-6xl lg:text-[2.5vw] font-bold text-white uppercase px-10">
        Współtwórz
      </h1>
      <h1 className="text-4xl md:text-6xl lg:text-[2.5vw] font-bold text-white uppercase px-10 mb-2">
        z nami przyszłość!
      </h1>
      <p className="text-base md:text-3xl lg:text-[1.1vw] text-white justify-between text-wrap p-4">
        Postaw na jakość i skuteczność.{" "}
        <strong>
          Twoja darowizna pozwala nam tworzyć programy i inicjatywy, które
          zmieniają życie mieszkańców.
        </strong>{" "}
        Razem możemy działać jeszcze skuteczniej i odpowiadać na potrzeby
        lokalnych społeczności. Wspólnie możemy więcej!
      </p>
      <br />

      <div className="bg-white p-2 rounded-xl shadow-md w-full max-w-md space-y-4">
        <label className="text-left block text-sm font-medium text-gray-700">
          Wpisz kwotę darowizny (PLN)
        </label>
        <Input
          type="number"
          min="1"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Wpisz kwotę..."
          className="text-lg font-semibold"
        />

        <div className="border-t pt-2">
          <Checkout amount={parseFloat(amount || "0")} />
        </div>
      </div>
    </section>
  );
}
