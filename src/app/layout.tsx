import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../components/pages/Navbar";
import WhatsAppButton from "../components/ui/WhatsAppButton";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.breezesoftdrinks.com"), 

  title: {
    default: "Breeze Soft Drinks",
    template: "%s | Breeze Soft Drinks",
  },

  description:
    "Breeze Soft Drinks offers premium beverages and traditional Goli Soda with refreshing flavours.",

  keywords: [
    "Breeze",
    "Namlet",
    "Soft Drinks",
    "Goli Soda",
    "UAE",
    "Premium Beverages",
    "Refreshing Drinks",
  ],

  authors: [{ name: "Breeze Soft Drinks" }],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Breeze Soft Drinks",
    description:
      "Premium soft drinks and traditional Goli Soda from the UAE.",
    url: "https://www.breezesoftdrinks.com",
    siteName: "Breeze Soft Drinks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/breeze-logo.png",
        width: 1200,
        height: 630,
        alt: "Breeze Soft Drinks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Breeze Soft Drinks",
    description: "Premium beverages from Breeze.",
    images: ["/og-image.jpg"],
  },

icons: {
  icon: [
    {
      url: "/hero/breeze-logo.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  shortcut: "/hero/breeze-logo.png",
  apple: "/hero/breeze-logo.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${oswald.className}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}