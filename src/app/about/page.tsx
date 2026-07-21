import AboutSection from "@/src/components/pages/AboutSection";
import Footer from "@/src/components/pages/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Breeze Soft Drinks and our story.",
};

export default function page() {
  return (
    <>
      <AboutSection />
      <Footer />
    </>
  );
}