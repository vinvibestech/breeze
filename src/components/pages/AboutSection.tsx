import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="w-full bg-white py-16 lg:pt-10 lg:pb-1">
        <div className="mx-auto w-[93%]">

          {/* Top Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
                About Us
              </h2>

              <h3 className="mt-6 max-w-xl text-2xl font-medium uppercase leading-snug text-[#333333] md:text-4xl">
                SIP INTO TRADITION, <br /> REFRESH WITH INNOVATION.
              </h3>

              <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
                <p>
                  Welcome to the refreshing world of Breeze Soft Drinks, where tradition meets innovation in the Codd Neck Soda Revolution. At Breeze, we're not just crafting beverages; we're curating experiences that harken back to a bygone era while embracing the contemporary thirst for distinctive flavours. Our journey began with a passion for reviving the charm of the iconic Codd-neck bottle, a vessel that encapsulates nostalgia and authenticity in every sip.
                </p>

                <p>‹
                  In a world inundated with mass-produced beverages, Breeze Soft Drinks emerges as a unique player, celebrating the heritage of soda craftsmanship. The Codd Neck Soda Revolution signifies our commitment to redefining the soda experience by reintroducing a classic design that not only preserves the effervescence of our handcrafted concoctions but also adds a touch of vintage flair to modern refreshment. Join us as we embark on a fizzy adventure, where tradition meets a contemporary twist, encapsulating the essence of breeze Soft Drinks.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/aboutus.png"
                  alt="Bottle"
                  width={520}
                  height={600}
                  className="h-auto w-full max-w-md object-cover"
                />
              </div>
            </div>

          </div>

          {/* Mission Vision */}

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* Mission */}

            <div className="rounded-[28px] bg-[#E7F6C9] p-8 lg:p-10">
              <h3 className="font-medium uppercase leading-snug text-[#333333] md:text-4xl">
                MISSION
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[#555]">
                At Breeze Soft Drinks, our mission is to delight taste buds and evoke cherished memories through our handcrafted Codd Neck sodas. We aim to revive the lost art of soda craftsmanship, offering a refreshing alternative to mainstream beverages. Committed to quality, authenticity, and sustainability, we strive to create an experience that transcends time, embracing the past while delighting the present.
              </p>
            </div>

            {/* Vision */}

            <div className="rounded-[28px] bg-[#E7F6C9] p-8 lg:p-10">
              <h3 className="font-medium uppercase leading-snug text-[#333333] md:text-4xl">
                VISION
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-[#555]">
                Our vision at Breeze is to be the preferred choice for those seeking a genuine and distinctive soda experience. We aspire to be a global symbol of craftsmanship and innovation in the beverage industry, with a commitment to environmental responsibility. Through our Codd Neck Soda Revolution, we envision a world where every sip is a breeze.
              </p>
            </div>

          </div>

          {/* Bottom Section */}

          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
                THE CODD NECK REVOLUTION
              </h2>

              <h3 className="mt-6 max-w-xl text-2xl font-medium  leading-snug text-[#333333] md:text-3xl">
                What is a Codd Neck Bottle
              </h3>

              <p className="mt-4 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
                Discover the essence of our iconic bottle in the Codd Neck Revolution. Named after its inventor Hiram Codd, this antique bottle features a distinctive marble seal and a hinged stopper mechanism, preserving soda packaging history and embodying Breeze Soft Drinks' commitment to 
              </p>

            </div>

            {/* Right */}

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/thecodd.png"
                alt="Codd Neck Bottle"
                width={500}
                height={520}
                className="h-auto w-full max-w-md"
              />
            </div>

          </div>
            <div className="my-20 grid items-center gap-12 lg:grid-cols-2">

              {/* Left */}

              <div>

                <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
                  Our Process

                </h2>



                <p className="mt-4 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
                  The process is characterized by a tidy precision, ensuring that only the highest quality, responsibly sourced ingredients are used in our handcrafted sodas. Equally, our bottle-cleaning procedures are executed with exacting standards, leaving no room for compromise. This commitment to cleanliness permeates every stage of production, from the careful treatment of ingredients to the presentation of our iconic Codd-neck bottles. Each Breeze Soft Drink is a testament to the purity and excellence maintained within our factory, reflecting our steadfast commitment to delivering a superior beverage experience.
                </p>

              </div>

              {/* Right */}

              <div className="flex justify-center lg:justify-end ">
                <Image
                  src="/proccess.png"
                  alt="Codd Neck Bottle"
                  width={500}
                  height={520}
                  className="h-auto w-full max-w-md rounded-3xl"
                />
              </div>

            </div>
        </div>
      </section>
    </>
   ) ;
}