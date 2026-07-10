"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const products = [
  {
    name: "PINEAPPLE",
    size: "300 ML",
    image: "/image-removebg-preview (2).png",
    color: "#FFE8A6",
    desc: "Tropical fizz in every sip.",
    price: "Dhs. 4.00",
  },
  {
    name: "ORANGE",
    size: "300 ML",
    image: "/image-removebg-preview (3).png",
    color: "#FFD99A",
    desc: "Refreshing citrus sparkle.",
    price: "Dhs. 4.00",
  },
  {
    name: "MINT LEMON",
    size: "300 ML",
    image: "/",
    color: "#DDF0B7",
    desc: "Cool, crisp, and refreshing.",
    price: "Dhs. 4.00",
  },
  {
    name: "TAMARIND",
    size: "300 ML",
    image: "/",
    color: "#F8E7D9",
    desc: "Tangy tamarind refreshment.",
    price: "Dhs. 4.00",
  },
  {
    name: "ROSE",
    size: "300 ML",
    image: "/",
    color: "#F8DDE4",
    desc: "Sweet floral refreshment.",
    price: "Dhs. 4.00",
  },
];

export default function FeaturedProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    checkScroll();

    slider.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount =
      window.innerWidth < 640
        ? 260
        : window.innerWidth < 1024
        ? 320
        : 380;

    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 350);
  };

  return (
    <section className="bg-white py-5 sm:py-16 lg:py-8 pl-6">
      <div className="w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold uppercase tracking-tight text-[#333333]">
            Featured products
          </h2>

          <p className="mt-3 text-sm sm:text-base lg:text-lg font-normal text-[#605F5F] max-w-xl mx-auto">
            Real-fruit energy in every single drop.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-6 lg:px-8"
        >
          {products.map((item) => (
            <div
              key={item.name}
              style={{ backgroundColor: item.color }}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[330px] lg:min-w-[360px] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shrink-0"
            >
              {/* Top */}
              <div className="flex justify-between items-start">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#333333]">
                  {item.name}
                </h3>

                <span className="text-base sm:text-lg lg:text-xl font-medium text-[#333333]">
                  {item.size}
                </span>
              </div>

              {/* Bottle */}
              <div className="flex justify-center py-4 sm:py-0">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={320}
                    className="relative z-10 w-[150px] sm:w-[180px] md:w-[210px] lg:w-[250px] h-auto"
                  />

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/25 blur-md"></div>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-end gap-4">
                <p className="max-w-[150px] sm:max-w-[170px] text-xs sm:text-sm lg:text-base text-[#605F5F] leading-relaxed">
                  {item.desc}
                </p>

                <span className="whitespace-nowrap text-base sm:text-lg lg:text-xl font-medium text-[#333333]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-end sm:justify-end gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-11 h-11 sm:w-14 sm:h-14 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "bg-[#E21175] text-white border-[#E21175] hover:scale-105"
                : "bg-white text-black border-black"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-11 h-11 sm:w-14 sm:h-14 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "bg-[#E21175] border-[#E21175] text-white bg-[#E21175] hover:scale-105"
                : "bg-white text-black border-[#333333]"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}