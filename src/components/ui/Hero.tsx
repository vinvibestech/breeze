"use client";

import Image from "next/image";
import { useState } from "react";
import FlavorSelector from "./FlavorSelector";
import { gsap } from "gsap";
import { flavorData } from "../../data/flavors";

const flavors = [
     "Lemon",
    "Pineapple",
    "Strawberry",
    "Mango",
    "Orange"
];

export default function Hero() {
    type Flavor = keyof typeof flavorData;

    const [active, setActive] = useState<Flavor>("Lemon");
    const [isAnimating, setIsAnimating] = useState(false);

    const current = flavorData[active];

    const changeFlavor = (flavor: Flavor) => {
        if (flavor === active || isAnimating) return;

        setIsAnimating(true);

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 0.6,
            },
            onComplete: () => setIsAnimating(false),
        });

        // 1. Animate OUT the currently visible bottle only
        tl.to(".bottle", {
            opacity: 0,
            y: -100,
            rotate: -30,
            scale: 0.8,
            duration: 0.35,
            ease: "power2.in",
        });

        // 2. Swap the data + instantly hide the elements that are about
        //    to show new content, so nothing flashes before its turn
        tl.add(() => {
            setActive(flavor);

            gsap.set(".heroTitle", { opacity: 0, y: -10 });
            gsap.set(".bgImage", { opacity: 0, scale: 1.08 });
            gsap.set(".cardImage", { opacity: 0, x: 40 });
            gsap.set(".description", { opacity: 0, y: 20 });
            gsap.set(".bottle", { opacity: 0, y: -100, rotate: -30, scale: 0.8 });
        });

        // 3. Background + new bottle animate IN
        gsap.set(".bgImage", {
            opacity: 0,
            scale: 1,
        });

        tl.to(".bgImage", {
            opacity: 1,
            scale: 1,
            duration: 0.09,
            ease: "power2.out",
        });

        // Hero Title (First)
        gsap.set(".heroTitle", {
            opacity: 0,
            y: -10,
            filter: "blur(8px)",
        });

        tl.to(".heroTitle", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
        });

        // Bottle (After Title)
        gsap.set(".bottle", {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotate: 8,
        });

        tl.to(".bottle", {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 12,
            duration: 0.7,
            ease: "back.out(1.4)",
        }, "-=0.2");


        // 5. The two images
        tl.to(".cardImage", {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
        });

        // 6. Description, last
        tl.to(".description", {
            opacity: 1,
            y: 0,
            duration: 0.4,
        });
    };

    return (
        <section className="relative overflow-hidden bg-white min-h-screen h-screen">

            {/* Background */}
            <Image
                src={current.bg}
                fill
                alt=""
                className="bgImage object-cover object-bottom"
            />

            {/* White Overlay */}
            <div className="absolute inset-0 backdrop-blur-[1px]" />

            <div className="relative z-10 h-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

                {/* Top */}
                <div className="z-50 flex flex-col md:flex-row justify-between items-center md:items-start pt-6 sm:pt-8 md:pt-10 gap-4 md:gap-0">

                    <FlavorSelector
                        active={active}
                        setActive={changeFlavor}
                        flavors={flavors}
                    />
                    <div className="hidden lg:block w-[330px] xl:w-[370px]">

                        <div className="flex gap-4 w-full">

                            <div className="relative flex-[2] aspect-square rounded-3xl overflow-hidden">
                                <Image
                                    src={current.img1}
                                    fill
                                    alt=""
                                    className="cardImage object-cover"
                                />
                            </div>

                            <div className="relative flex-[2] aspect-square rounded-3xl overflow-hidden">
                                <Image
                                    src={current.img2}
                                    fill
                                    alt=""
                                    className="cardImage object-cover"
                                />
                            </div>

                        </div>

                        <p className="mt-4 text-base text-gray-700 leading-8 description">
                            {current.description}
                        </p>

                    </div>

                </div>

                {/* Middle */}
                <div className="absolute inset-0 flex items-center mt-5 md:mt-0 justify-center pointer-events-none px-2">
                    <h1 className="heroTitle text-[17vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] xl:text-[220px] font-black uppercase tracking-tight text-black text-center leading-none whitespace-nowrap">
                        {current.title}
                    </h1>
                </div>

                {/* Bottle */}
                <div className="absolute left-1/2 top-[40%] sm:top-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] mt-10 md:mt-0 sm:w-[35vw] md:w-[300px] lg:w-[320px] xl:w-[400px]">
                    <Image
                        src={current.bottle}
                        width={650}
                        height={500}
                        alt=""
                        className="bottle rotate-12 w-full h-auto"
                    />
                </div>

            </div>
        </section>
    );
}