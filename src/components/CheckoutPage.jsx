"use client"
import {useEffect, useState} from "react";
import {
  useStripe,
  useElements,
  PaymentElement
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Button } from "./ui/button";
import CheckboxWithAgreement  from "./CheckboxWithAgreement";
import sendMail from "@/lib/sendMail";

export default function CheckoutPage({amount}) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [agreed, setAgreed] = useState(false);
  const [fieldWarning, setFieldWarning] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(() => {
        setErrorMessage("Nie udało się utworzyć sesji płatności.")});
  }, [amount]);

  useEffect(() => {
    if (agreed) setFieldWarning("")
  }, [agreed])

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!stripe || !elements) {
      return;
    } 
    setLoading(true);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    if(agreed){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      sendMail({date: today, name, email, phone, amount});
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <span className="loader"></span>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      {fieldWarning && (
        <div className="text-red-700 bg-red-50 border border-red-200 px-3 py-2 m-2 rounded text-sm">
          {fieldWarning}
        </div>
      )}

      <fieldset className="space-y-2 mt-3">
        <p className="text-muted-foreground text-sm">Dane do kontaktu (nieobowiązkowe)</p>
        <input
          type="text"
          placeholder="Imię i Nazwisko"
          className="w-full p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          readOnly={!agreed}
          onFocus={(e) => {
            if (!agreed) {
              setFieldWarning("Zaznacz zgodę, aby edytować dane.");
              e.target.blur();
            }
          }}
          />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!agreed}
          onFocus={(e) => {
            if (!agreed) {
              setFieldWarning("Zaznacz zgodę, aby edytować dane.");
              e.target.blur();
            }
          }}
          />

        <input
          type="tel"
          placeholder="Telefon"
          className="w-full p-3 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          readOnly={!agreed}
          onFocus={(e) => {
            if (!agreed) {
              setFieldWarning("Zaznacz zgodę, aby edytować dane.");
              e.target.blur();
            }
          }}
          />
      </fieldset>
      
      <CheckboxWithAgreement checked={agreed} onChange={setAgreed}/>
      
      {errorMessage && (
        <div className="text-red-600 text-sm">{errorMessage}</div>
      )}

      <Button
        type="submit"
        variant="ghost"
        className="w-full p-5 mt-6 disabled:opacity-50 disabled:animate-pulse border-2 border-[#161515]"
        disabled={!stripe || loading}
      >
        {!loading ? `Przekaż darowiznę` : "Przetwarzanie..."}
      </Button>
    </form>
  )
};
