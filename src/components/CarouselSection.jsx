
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

import TextFiles from './TextFiles';

export default function CarouselSection(){
  const photos = [
    "/slide1.png",
    "/slide2.png",
    "/slide3.png",
    "/slide4.png",
    "/slide5.png",
    "/slide6.png",
    "/slide7.png",
  ]
  return(
    <section className="min-w-[70%] relative">
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
        <CarouselContent className="h-full">
          {photos.map((photo, i) => (
            <CarouselItem key={i} className="h-[100vh]">
              <div className={`relative grid h-full ${i === 1 ? 'grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1' : 'grid-rows-[auto_1fr]'} `}>
                
                <div className="relative p-2 overflow-y-auto z-10">
                    <TextFiles index={i} />
                </div>

                <div className="relative w-full h-full">
                  <Image
                    alt="Opis działań fundacji"
                    src={photo}
                    fill
                    // jak sie nie bedzie podobac to mozna zmienic na object-fill
                    className={`object-contain ${i === 1 ? 'object-right' : 'object-center'} `}
                    priority
                    sizes="(max-width: 2048px) 100vw, 100vw"
                  />
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-100 left-2"/>
        <CarouselNext className="z-100 right-2"/>
      </Carousel>
    </section>
  );
}