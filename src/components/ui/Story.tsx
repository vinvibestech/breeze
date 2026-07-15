"use client";
import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16">
      <div className="mx-auto w-[93%]">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px]">
          {/* Background Image */}
          <Image
            src="/storyImage.png"
            alt="Goli Soda Story"
            fill
            priority
            className="object-cover"
          />

    

          {/* Content */}
          <div className="relative z-10 flex min-h-[320px] items-center justify-center px-4 py-12 sm:min-h-[380px] sm:px-6 sm:py-16 md:min-h-[420px] md:py-20">
            <div className="max-w-7xl text-center">
              <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
                PURE ESSENCES. SIGNATURE MARBLE POP. UNCOMPROMISED REFRESHMENT. THE NEW TRADITION.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-sm font-normal leading-7 text-[#605F5F] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
               True craftsmanship lies in simplicity. Our specialty Goli Soda delivers bright, clean fruit profiles and a sharp, refreshing fizz that redefines traditional carbonated drinks.
              </p>

            <a href="about">
                <button className="cursor-pointer mt-6 rounded-full border border-[#333333] uppercase px-6 py-3 text-sm font-normal text-[#333333] transition-all duration-300 hover:bg-[#E21175] hover:border-[#E21175] hover:text-white sm:mt-8 sm:px-8 sm:py-3.5 sm:text-base md:mt-10 md:px-10 md:py-4 md:text-lg">
                Our Story
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}