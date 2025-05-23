"use client";
import "./globals.css";
import CheckoutSection from "../components/CheckoutSection";
import CarouselSection from "../components/CarouselSection";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { useRef } from "react";

export default function Home() {
  const checkoutRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen" >
      <main className="flex flex-col lg:flex-row flex-1">
        <CarouselSection />
        <div ref={checkoutRef}>
          <CheckoutSection/>
        </div>
      </main>
      <ScrollButton targetRef={checkoutRef}/>
      <Footer />
    </div>
  );
}