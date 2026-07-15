import Image from "next/image";

export default function ProductSection() {
  const flavours = [
    "Blueberry Bliss",
    "Strawberry Serenity",
    "Mixed Berry Medley",
    "Pineapple Paradise",
    "Kiwi & Lime Fusion",
    "Lychee Elegance",
    "Rose Reverie",
    "Passion Fruit Passion",
    "Peach Perfection",
    "Raspberry Rhapsody",
    "Mango Marvel",
  ];

  return (
    <section className="bg-white py-16 lg:pt-15">
      <div className="mx-auto w-[92%] ">

        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
              Premium Product
            </h2>

            <h3 className="mt-6 max-w-xl text-2xl font-medium uppercase leading-snug text-[#333333] md:text-4xl">
              Namlet <br />
              THE NEW NAME FOR FRESHNESS! 
            </h3>

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
              <p>
             Welcome to the next major chapter of the Breeze journey. We are officially elevating the refreshment landscape with the introduction of Namlet—a premier product line where historic beverage architecture seamlessly meets contemporary purity. Driven by a passion to disrupt the standard soft drink market, Namlet reintroduces the heavy glass charm of the legendary marble-stoppered bottle, transforming the simple act of opening a drink into a premium, interactive experience built on authenticity and vintage flair.
              </p>

              <p>
              Behind the glass of this exclusive collection lies an uncompromising commitment to technical precision and clean luxury. By infusing our signature, real-fruit flavor profiles into ultra-pure water systems, we have created an elite soda experience that honors old-world craftsmanship while satisfying the modern craving for distinctive, high-end refreshments. Step closer, pop the marble, and discover how Breeze is redefining the art of the fizz.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-3xl ">
              <Image
                src="/hero/namlet.jpeg"
                alt="Namlet Bottle"
                width={520}
                height={620}
                className="h-auto w-full max-w-md object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Flavour Image */}
        <div className="mt-20 overflow-hidden rounded-[32px]">
          <Image
            src="/hero/all-namlet.jpeg"
            alt="Namlet Flavours"
            width={1400}
            height={650}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Flavours Text */}
        <div className="mx-auto mt-14 max-w-5xl text-center">

          <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
            Our Flavours
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-x-2 gap-y-3 text-lg font-medium text-[#333333] leading-8">

            {flavours.map((item, index) => (
              <span key={item}>
                {item}
                {index !== flavours.length - 1 && (
                  <span className="mx-2 text-neutral-400">|</span>
                )}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}