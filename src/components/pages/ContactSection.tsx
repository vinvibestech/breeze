"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New enquiry from Breeze Goli Soda website",
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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

          <p className="mt-3 max-w-xl text-[15px] leading-8 text-[#605F5F] md:text-base">
            Whether you're a customer, retailer, distributor, or business partner, we're always
            happy to connect. Send your enquiry, and our team will respond promptly with the
            information you need.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/hero/contactUs.jpeg"
                alt="Bottle"
                width={420}
                height={420}
                className="h-auto w-full max-w-[420px] object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot - spam protection, keep hidden */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              {/* Row 1 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-normal text-[#333333]">Full Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Last Name"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-normal text-[#333333]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your Email"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-normal text-[#333333]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="h-14 w-full rounded-full border border-gray-400 px-6 outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-normal text-[#333333]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Enter your Message"
                  className="w-full rounded-[30px] border border-gray-400 p-6 outline-none transition"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center lg:justify-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full border border-[#333] px-8 py-4 uppercase text-[#333] transition hover:border-[#E21175] hover:bg-[#E21175] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Your Message"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-center text-green-600">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-center text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Cards — unchanged */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-[#FFE9A8] p-8">
            <h4 className="text-xl font-medium text-[#333333]">Address</h4>
            <p className="mt-3 leading-7 text-[#605F5F]">
              New Industrial Area
              <br />
              Umm Al Quwain, UAE
            </p>
          </div>
          <div className="rounded-3xl bg-[#F8E7D9] p-8">
            <h4 className="text-xl font-medium text-[#333333]">Manufactured by</h4>
            <p className="mt-3 text-[#605F5F]">Breeze Soft Drinks</p>
          </div>
          <div className="rounded-3xl bg-[#FFD88C] p-8">
            <h4 className="text-xl font-medium text-[#333333]">Email</h4>
            <p className="mt-3 text-[#605F5F]">Info@breezesoftdrinks.com</p>
          </div>
          <div className="rounded-3xl bg-[#DDF4B8] p-8">
            <h4 className="text-xl font-medium text-[#333333]">Phone Number</h4>
            <p className="mt-3 text-[#605F5F]">+971557568007</p>
          </div>
        </div>
      </div>
    </section>
  );
}