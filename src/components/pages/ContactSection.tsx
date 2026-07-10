import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-[92%] px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-xl font-medium uppercase leading-tight tracking-tight text-[#333333] sm:text-2xl md:text-4xl lg:text-5xl">
            CONTACT US
          </h2>

          <h3 className="mt-6 max-w-xl text-2xl font-medium leading-snug text-[#333333] md:text-4xl">
            Get in Touch
          </h3>

          <p className="mt-3 space-y-6 text-[15px] leading-8 text-[#605F5F] md:text-base">
        Whether you 're a customer, retailer, distributor, or business partner, we're always happy to connect. Send your enquiry, and our team will respond promptly with the information you need.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-2">

          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/contact/contact-bottle.jpg"
                alt="Bottle"
                width={420}
                height={520}
                className="h-auto w-full max-w-[420px] object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div>

            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

              </div>

              {/* Row 2 */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block font-normal text-[#333333]">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Enter your Message"
                  className="w-full rounded-[30px] border border-gray-400 p-6 outline-none transition"
                />
              </div>

              {/* Button */}

              <div className="flex justify-center lg:justify-center">
                <button
                  type="submit"
                  className="rounded-full border border-[#333] px-8 py-4 uppercase text-[#333] transition hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                >
                  Send Your Message
                </button>
              </div>

            </form>

          </div>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Address */}

          <div className="rounded-3xl bg-[#FFE9A8] p-8">

         

            <h4 className="text-xl text-[#333333] font-medium">
              Address
            </h4>

            <p className="mt-3 text-[#605F5F] leading-7">
            P.O. Box: 294189, Aweer, Dubai, UAE
            </p>

          </div>

          {/* Email */}

          <div className="rounded-3xl bg-[#FFD88C] p-8">

            

            <h4 className="text-xl text-[#333333] font-medium">
              Email
            </h4>

            <p className="mt-3 text-[#605F5F]">
              Info@breezesoftdrinks.com
            </p>

          </div>

          {/* Phone */}

          <div className="rounded-3xl bg-[#DDF4B8] p-8">

        

            <h4 className="text-xl text-[#333333] font-medium">
              Phone Number
            </h4>

            <p className="mt-3 text-[#605F5F]">
              +971
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}