import Image from "next/image";
import Link from "next/link";
import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/footer.png')" }}
        >

            <div className="relative z-10 mx-auto flex min-h-[600px] w-[92%] max-w-[1600px] flex-col py-16 lg:flex-row lg:items-center lg:justify-start lg:gap-40">

                {/* LEFT */}
                <div className="max-w-xl">

                    {/* Logo */}
                    <Image
                        src="/logos.png"
                        alt="logos"
                        width={190}
                        height={70}
                        className="mb-7"
                    />

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-4 font-semibold uppercase tracking-tight text-[#333333]">
                        STAY REFRESHED.
                    </h2>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold uppercase tracking-tight text-[#333333]">
                        GET EXCLUSIVE OFFERS
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-sm font-normal leading-7 text-[#605F5F] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
                        Be the first to discover new flavours,
                        seasonal launches, exclusive offers,
                        and exciting updates from Breeze.
                        Join our community and never miss a
                        refreshing moment.
                    </p>

                    {/* Social */}
                    <div className="mt-10 flex items-center gap-5">

                        <Link
                            href="#"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 text-gray-700 transition hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                        >
                            <FaInstagram size={28} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 text-gray-700 transition hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                        >
                            <FaLinkedinIn size={28} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 text-gray-700 transition hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                        >
                            <FaFacebookF size={28} />
                        </Link>

                        <Link
                            href="#"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-600 text-gray-700 transition hover:bg-[#E21175] hover:border-[#E21175] hover:text-white"
                        >
                            <FaYoutube size={28} />
                        </Link>

                    </div>
                </div>
                {/* CENTER */}
                <div className="mt-20 lg:mt-0">
                    <nav className="flex flex-col items-start gap-8 text-left text-xl font- text-[#333333]">
                        <Link href="/" className="transition hover:text-[#E21175]">
                            Home
                        </Link>

                        <Link href="/about" className="transition hover:text-[#E21175]">
                            About Us
                        </Link>

                        <Link href="/blog" className="transition hover:text-[#E21175]">
                            Premium Product
                        </Link>

                           <Link href="/blog" className="transition hover:text-[#E21175]">
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}