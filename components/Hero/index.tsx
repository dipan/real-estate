import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10  overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
        <div className="absolute top-0 z-[-1] opacity-60 lg:opacity-60">
        <img
      src="/images/hero/bn.jpg"
      width={2000}
      height="10px"
      alt="Picture of the construction"
    />
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
                <h1 className="mb-1  text-3xl font-bold leading-tight dark:text-white white:text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Real Estate Commercial Construction Builders.
                </h1>
                <p className=" dark:text-white mb-1 text-base !leading-relaxed white:text-black sm:text-lg md:text-xl">
                IN INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
