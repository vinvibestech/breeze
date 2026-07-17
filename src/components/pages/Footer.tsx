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
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero/footer1.png')" }}
        >
            <div className="relative z-10 mx-auto flex w-[92%] max-w-[1600px] flex-col gap-14 py-12 sm:py-16 lg:min-h-[600px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">

                {/* LEFT */}
                <div className="max-w-xl">
                    {/* Logo */}
                    <Image
                        src="/logos.png"
                        alt="logos"
                        width={190}
                        height={70}
                        className="mb-6 h-auto w-[140px] sm:w-[160px] lg:w-[190px]"
                    />

                    <h2 className="text-2xl font-semibold uppercase leading-tight tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
                        STAY REFRESHED.
                    </h2>

                    <h2 className="text-2xl font-semibold uppercase leading-tight tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
                        GET EXCLUSIVE OFFERS
                    </h2>

                    <p className="mt-5 max-w-md text-sm font-normal leading-6 text-black sm:mt-6 sm:text-base sm:leading-7 md:mt-8 md:text-lg md:leading-8">
                        Be the first to discover new flavours,
                        seasonal launches, exclusive offers,
                        and exciting updates from Breeze.
                        Join our community and never miss a
                        refreshing moment.
                    </p>

                    {/* Social */}
                    <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-5">
                        {[FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-black text-black transition hover:border-[#E21175] hover:bg-[#E21175] hover:text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                            >
                                <Icon size={20} className="sm:size-6 lg:size-7" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CENTER + RIGHT wrapper (stacks together on mobile/tablet, row on lg) */}
                <div className="flex flex-col gap-12 sm:flex-row sm:justify-between lg:contents">

                    {/* CENTER — nav */}
                    <div>
                        <nav className="flex flex-col items-start gap-5 text-lg text-black sm:gap-6 sm:text-xl">
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

                    {/* RIGHT — icons */}
                    <div className="flex justify-start self-start sm:justify-end lg:justify-start lg:self-end">
                        <div className="grid grid-cols-4 gap-5 sm:gap-6">
                            <Image
                                src="/hero/icon2.png"
                                alt="Product of UAE"
                                width={130}
                                height={130}
                                className="h-auto w-16 drop-shadow-lg transition hover:scale-105 sm:w-20 lg:w-[70px]"
                            />
                            <Image
                                src="/hero/icon10.png"
                                alt="RO Water"
                                width={130}
                                height={130}
                                className="h-auto w-16 drop-shadow-lg transition hover:scale-105 sm:w-20 lg:w-[70px]"
                            />
                            <Image
                                src="/hero/icon11.png"
                                alt="Natural Ingredients"
                                width={130}
                                height={130}
                                className="h-auto w-16 drop-shadow-lg transition hover:scale-105 sm:w-20 lg:w-[70px]"
                            />
                            <Image
                                src="/hero/icon12.png"
                                alt="Premium Quality"
                                width={130}
                                height={130}
                                className="h-auto w-16 drop-shadow-lg transition hover:scale-105 sm:w-20 lg:w-[70px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}