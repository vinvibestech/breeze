"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const navLinks = [
        {
            id: 1,
            name: "About Us",
            href: "/about",
        },
        {
            id: 2,
            name: "PREMIUM PRODUCT",
            href: "/premium-product",
        },
        {
            id: 3,
            name: "Blog",
            href: "/blog",
        },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div
                    className={`mx-auto flex w-[94%] max-w-[1600px] items-center justify-between transition-all duration-500 ${scrolled ? "h-25" : "h-24"
                        }`}
                >
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logos.png"
                                alt="Breeze Logo"
                                width={scrolled ? 110 : 125}
                                height={60}
                                priority
                                className="h-auto w-[95px] transition-all duration-500 sm:w-[110px] lg:w-[125px]"
                            />
                        </Link>

                        {/* Left Menu */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link
                                href="/about"
                                className="text-[16px] xl:text-[18px] hover:text-[#E21175] uppercase text-[#333333] transition"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/premium-product"
                                className="text-[16px] xl:text-[18px] hover:text-[#E21175] uppercase text-[#333333] transition"
                            >
                                PREMIUM PRODUCT
                            </Link>

                            <Link
                                href="/blog"
                                className="text-[16px] xl:text-[18px] hover:text-[#E21175] uppercase text-[#333333] transition"
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="rounded-full border border-[#333333] px-7 py-3 text-[16px] xl:px-8 xl:text-[17px] uppercase text-[#333333] transition-all hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex lg:hidden"
                    >
                        {menuOpen ? (
                            <X className="h-8 w-8 text-black" />
                        ) : (
                            <Menu className="h-8 w-8 text-black" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${menuOpen ? "max-h-screen py-8" : "max-h-0"
                        }`}
                >
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="text-[16px] xl:text-[18px] uppercase text-[#333] hover:text-pink-600 transition"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 rounded-full border border-[#333333] px-8 py-3 uppercase text-[#333333] transition hover:bg-[#333333] hover:text-white"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Spacer */}
            <div className="h-24" />
        </>
    );
}