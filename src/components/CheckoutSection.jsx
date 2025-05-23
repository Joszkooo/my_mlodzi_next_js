import Checkout from "./Checkout.jsx";

export default function CheckoutSection() {
  return (
    <section
      id="checkout-section"
      className="flex flex-grow flex-col text-center items-center p-7 bg-[#2b3e95]"
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

      <div className="bg-white p-2 rounded-lg ">
        <Checkout />
      </div>
    </section>
  );
}
