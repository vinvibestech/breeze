"use client";
import Image from "next/image";


type ImageCardProps = {
  src: string;
  height: string;
};

function ImageCard({ src, height }: ImageCardProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-[24px]`}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

const gallery = [
  {
    src: "/Memo1.png",
    alt: "Orange",
    className: "md:row-span-2",
  },
  {
    src: "/Memo2.png",
    alt: "Orange",
    className: "",
  },
  {
    src: "/Memo3.png",
    alt: "Orange",
    className: "",
  },
  {
    src: "/Memo4.png",
    alt: "Rose",
    className: "md:row-span-2",
  },
  {
    src: "/per.png",
    alt: "Tamarind",
    className: "",
  },
  {
    src: "/per2.png",
    alt: "Rose",
    className: "",
  },
  {
    src: "/per3.png",
    alt: "Ginger",
    className: "",
  },
  {
    src: "/Memo2.png",
    alt: "Lemon",
    className: "",
  },
];

export default function DiscoverFlavours() {
  return (
    <>
      <section className="bg-white py-16 lg:pt-20 lg:pb-10">
        <div className="mx-auto w-[92%]">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-start">

            {/* Left Content */}
            <div className="max-w-xl mt-30">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold uppercase tracking-tight text-[#333333]">
                DISCOVER THE FLAVOURS <br /> CREATE THE MEMORIES.
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 font-normal text-[#605F5F] max-w-3xl">
                Every Breeze bottle is more than a refreshing drink—it's a celebration of authentic flavours , vibrant fruit , and unforgettable moment . From the nostalgic marble pop to every sparkling sip, each flavour tells its own refreshing story.
              </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

              {/* Column 1 */}
              <div className="space-y-2">
                <ImageCard src="/MEMORIES7.png" height="h-[300px]" />
                <ImageCard src="/MEMORIES2.png" height="h-[320px]" />
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <ImageCard src="/MEMORIES9.png" height="h-[340px]" />
                <ImageCard src="/MEMORIES4.png" height="h-[330px]" />
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <ImageCard src="/MEMORIES8.png" height="h-[240px]" />
                <ImageCard src="/MEMORIES6.png" height="h-[260px]" />
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:pb-10">
        <div className="mx-auto w-[92%]">

          <div className=" gap-14 items-start">

            {/* Left Content */}
            <div className="max-w-xl mt-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold uppercase tracking-tight text-[#333333]">
                WHY CHOOSE US
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 font-normal text-[#605F5F] max-w-3xl">
                Our distinctive specialties lie in an uncompromised commitment to quality and craftsmanship. Every bottle is produced using an advanced European Standard Process, utilizing oscillated RO water to ensure absolute purity and a clean canvas for our flavors. By sourcing only premium ingredients and maintaining total transparency and precision throughout our production, we deliver a consistently flawless refreshment experience you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}