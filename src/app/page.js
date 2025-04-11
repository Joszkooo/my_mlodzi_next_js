"use client";
import "./globals.css";

import CheckoutSection from "./components/CheckoutSection";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <>
      <main className="flex flex-col lg:flex-row h-screen">
        <CarouselSection />
        <CheckoutSection/>
      </main>
      <Footer />
    </>
  );
}