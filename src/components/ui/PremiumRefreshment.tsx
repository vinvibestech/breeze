"use client";
import Image from "next/image";

const gallery = [
  {
    src: "/per2.png",
    alt: "Drink 1",
  },
  {
    src: "/per.png",
    alt: "Drink 2",
  },
  {
    src: "/per3.png",
    alt: "Drink 3",
  },
];

export default function PremiumRefreshment() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-10">
      <div className="mx-auto w-[92%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold uppercase tracking-tight text-[#333333]">
              Premium Refreshment
            </h2>

            <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#605F5F]">
              Sip into Tradition, Refresh with Innovation.
            </p>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 font-normal text-[#605F5F] max-w-3xl">
         We invite you to explore a whole new side of refreshment. Welcome to the world of Namlet an exclusive, premium collection where vintage architecture meets contemporary taste. Driven by a passion to revive the legendary charm of the iconic glass marble bottle, we’ve crafted an elevated soda experience that honours raw nostalgia while satisfying the modern craving for unique, clean flavours.

            </p>

            <button className="mt-8 rounded-full border border-[#333333] uppercase px-6 py-3 text-sm sm:px-8 sm:text-base lg:px-10 lg:py-4 lg:text-lg font-normal text-[#333333] transition-all duration-300 hover:bg-[#E21175] hover:border-[#E21175] hover:text-white">
              Premium Product
            </button>
          </div>

          {/* Right Images */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[560px]">
              {/* Left Large */}
              <div className="pt-10 sm:pt-16 lg:pt-24">
                <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[300px] overflow-hidden rounded-3xl">
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Stack */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[250px] overflow-hidden rounded-3xl">
                  <Image
                    src={gallery[1].src}
                    alt={gallery[1].alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[250px] overflow-hidden rounded-3xl">
                  <Image
                    src={gallery[2].src}
                    alt={gallery[2].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}