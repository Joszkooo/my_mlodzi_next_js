'use client'

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  
  return (
    <section>
      <Image
        alt="Ręce wyciągające prezenty w ramach podziękowań"
        src="/complete.png"
        fill
        priority
        className="filter blur-sm md:blur-none"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <p className="font-bold text-3xl md:text-6xl">
            DZIĘKUJEMY ZA WSPARCIE, <br />
            DZIĘKUJEMY, ŻE JESTEŚ! <br />
            WPŁACONO {amount} zł!
          </p>

          <p className="mt-5">
            Jeśli masz jakieś pytania, proszę napisz{" "}
            <a href="mailto:mymlodzi@gmail.com" className="underline">
              mymlodzi@gmail.com
            </a>
          </p>

          <Link href="/" passHref>
            <Button variant="secondary" className="mt-5">
              Powrót do strony głównej
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
