'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10  overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="absolute top-0 z-[-1] opacity-60 lg:opacity-60">
          <div
            className="embla"
            ref={emblaRef}
          >
            <div className="embla__container h-full">
              <div className="embla__slide flex text-center justify-center">
                {/* Slide 1  */}
                <img
            src="/images/hero/bn.jpg"
            width={2000}
            height="10px"
            alt="Picture of the construction"
          />
              </div>
              <div className="embla__slide flex text-center justify-center">
                {/* Slide 2 */}
                <img
            src="/images/hero/bnr.jpg"
            width={2000}
            height="10px"
            alt="Picture of the construction"
          />
              </div>
              <div className="embla__slide flex text-center justify-center">
                {/* Slide 3 */}
                <img
            src="/images/hero/bnr.png"
            width={2000}
            height="10px"
            alt="Picture of the construction"
          />
              </div>
            </div>
          </div>
          {/* <img
            src="/images/hero/bn.jpg"
            width={2000}
            height="10px"
            alt="Picture of the construction"
          /> */}
          {/* <Image 
        src="/images/hero/bn.jpg" 
        alt="Banner Image" 
        width={2000} 
        height={50}

      /> */}
        </div>
        <div className="container  max-w-[600px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Building dreams,
                  <br /> One brick at a time.
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  Your vision, our mission.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="#"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
