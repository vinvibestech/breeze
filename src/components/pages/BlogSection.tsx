import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-[92%]">

        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
              Blog
            </h2>

            <p className="mt-8 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
              Welcome to the Breeze Blog, where we share the fascinating
              journey of Codd Neck sodas, timeless traditions, refreshing
              flavours, and the passion behind every bottle. Explore stories,
              product insights, beverage culture, and the craftsmanship that
              makes every sip a memorable experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}