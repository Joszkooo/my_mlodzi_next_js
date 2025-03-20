"use client";
import "./globals.css";
import Autoplay from "embla-carousel-autoplay"
import Checkout from './components/checkout'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import TextFiles from './components/TextFiles';
export default function Home() {
  const photos = [
    "/slide1.png",
    "/slide2.png",
    "/slide3.png",
    "/slide4.png",
    "/slide5.png",
    "/slide6.png",
    "/slide7.png",
  ]
  return (
    <>
      <main>
        <div className="flex flex-col lg:flex-row h-screen">
          <div className="relative min-w-[70%] min-h-full bg-cover">
            <div
              className="relative min-h-full overflow-hidden min-w-full bg-cover bg-center block"
            >
              <Carousel
              // plugins={[
              //   Autoplay({
              //     delay: 15000,
              //   }),
              // ]}
              opts={{
                align: "start",
                loop: true,
              }}
              >
                <CarouselContent>
                  {photos.map((photo, i) => (
                    <CarouselItem key={i}>
                      <div className="relative w-full h-full aspect-auto min-h-[100vh]">
                        <Image
                          alt="Opis działań fundacji"
                          src={photo}
                          quality={100}
                          fill
                          sizes="100vw"
                          className={`object-cover ${i === 1 || i === 4 ? 'object-right' : 'object-center'}`}
                          priority
                        />
                      <TextFiles index={i}/>
                      </div>
                  </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="z-20"/>
                <CarouselNext className="z-20"/>
              </Carousel>
            </div>

            {/* <div v-show="isMobile" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <div v-show="showScrollButton">
                <button
                  @click="scrollToBottom"
                  className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>

          <div id="checkout" className="flex flex-grow flex-col text-center items-center p-7 bg-[#2b3e95]">
            <h1 className="text-4xl md:text-6xl lg:text-[3vw] font-bold text-white uppercase px-10">Współtwórz</h1>
            <h1 className="text-4xl md:text-6xl lg:text-[3vw] font-bold text-white uppercase px-10 mb-5">z nami przyszłość!</h1>
            <p className="text-base md:text-3xl lg:text-[1.4vw] text-white justify-between text-wrap p-4">
              Postaw na jakość i skuteczność. <strong>Twoja darowizna pozwala nam tworzyć programy i inicjatywy, które zmieniają życie mieszkańców.</strong> Razem możemy działać jeszcze skutecznie j i odpowiadać na potrzeby lokalnych społeczności. Wspólnie możemy więcej!
            </p>
            <br/>
            <div className="bg-white rounded-lg overflow-scroll">
              <Checkout />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}