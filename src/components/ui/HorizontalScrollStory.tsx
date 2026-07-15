"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Device = "desktop" | "tablet" | "mobile" | "laptop";

const storyPoints = [
  {
    id: 1,
    desktop: { left: "2%", top: "35%" },
    laptop: { left: "2%", top: "35%" },
    tablet: { left: "6%", top: "35%" },
    mobile: { left: "6%", top: "40%" },
    title: "THE LAST STAND OF THE VINTAGE POP.",
    description: "While the world transitioned to disposable cans and twisting plastic caps, one icon held its ground. It is the definitive tactile ritual of carbonation—a heavy glass relic that turns the simple act of opening a drink into an echoing statement of heritage, craftsmanship, and pure, unfiltered chill.",
  },
  {
    id: 2,
    
  desktop: { left: "100%", top: "65%" },
  laptop: { left: "110%", top: "67%" },
    tablet: { left: "145%", top: "65%" },
    mobile: { left: "280%", top: "65%" },
    title: "THE GENIUS OF 1872.",
    description: "The soul of Goli Soda lies in its mechanics, invented and patented by English engineer Hiram Codd in 1872. Seeking a way to seal fizzy drinks without using corks, he designed a revolutionary globe-stoppered system that changed beverage bottling forever.",
  },
  {
    id: 3,
   desktop: { left: "185%", top: "65%" },
   laptop: { left: "200%", top: "67%" },
    tablet: { left: "280%", top: "65%" },
    mobile: { left: "520%", top: "65%" },
    title: "SCIENCE ENCLOSED IN GLASS.",
    description: "A Goli Soda bottle or Codd-neck bottle is a marvel of physics. Filled upside down under extreme gas pressure, a glass marble is forced upward against a tight rubber washer, naturally locking in the sharp carbonation without any artificial caps.",
  },
  {
    id: 4,
      desktop: { left: "270%", top: "55%" },
      laptop: { left: "315%", top: "57%" },
    tablet: { left: "425%", top: "60%" },
    mobile: { left: "800%", top: "60%" },
    title: "THE BOTTLE THAT CONQUERED THE OCEANS.",
    description: "Launched in 1872, the Codd-neck design instantly went global, dominating the soft-drink and brewing industries from Europe to Australasia. While industrial steel caps eventually replaced them in the West, the design found an eternal home in the East. Japan adopted it entirely, transforming this Victorian marvel into Ramune—their iconic national marble soda.",
  },
  {
    id: 5,
      desktop: { left: "357%", top: "75%" },
      laptop: { left: "420%", top: "75%" },
    tablet: { left: "580%", top: "75%" },
    mobile: { left: "1035%", top: "75%" },
    title: "THE REFRESHMENT OF THE PEOPLE.",
    description: "From children breaking the bottles just to collect the shiny marbles to exhausted workers seeking a sharp midday chill from street-side carts, Goli Soda belongs to everyone. It has become an enduring cultural icon of social gatherings and simpler times. ",
  },
  {
    id: 6,
     desktop: { left: "440%", top: "65%" },
     laptop: { left: "525%", top: "67%" },
    tablet: { left: "720%", top: "65%" },
    mobile: { left: "1280%", top: "65%" },
    title: "THE GLOBAL RESURGENCE.",
    description: "After nearly disappearing under the shadow of multinational giants, Goli Soda is making a premium comeback. Reimagined with gourmet, natural flavors and exported globally to the US, UK, and Gulf markets, India’s authentic street-side treasure is officially capturing the global stage.",
  },
];

export default function HorizontalScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setDevice("mobile");
      } else if (window.innerWidth < 1024) {
        setDevice("tablet");
          } else if (window.innerWidth == 1024) {
      setDevice("laptop");
    } else {
      setDevice("desktop");
    }
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const navbar = document.getElementById("navbar");

    const tween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Hide navbar while this section is active
    if (navbar) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        onEnter: () =>
          gsap.to(navbar, {
            y: -100,
            opacity: 0,
            duration: 0.3,
          }),
        onLeave: () =>
          gsap.to(navbar, {
            y: 0,
            opacity: 1,
            duration: 0.1,
          }),
        onEnterBack: () =>
          gsap.to(navbar, {
            y: -100,
            opacity: 0,
            duration: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to(navbar, {
            y: 0,
            opacity: 1,
            duration: 0.3,
          }),
      });
    }

    gsap.utils.toArray<HTMLElement>(".story-text").forEach((el) => {
      gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          containerAnimation: tween,
          start: "left 75%",
          end: "left 45%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div ref={trackRef} className="relative h-full will-change-transform">

        <Image
          src="/AGENTS.jpeg"
          alt="Story"
          width={9222}
          height={300}
          priority
          className="h-full w-auto max-w-none"
        />

        {storyPoints.map((item) => (
          <div
            key={item.id}
              className={`
    story-text absolute px-2 text-white
    ${
      item.id === 5
        ? "w-[680px] sm:w-[550px] md:w-[650px] lg:w-[900px] xl:w-[1000px] text-center"
        : "w-[400px] sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[500px]"
    }
  `}
            style={{
              left: item[device].left,
              top: item[device].top,
            }}
          >
            <h2 className="mb-3 font-bold leading-tight text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {item.title}
            </h2>

            <p className="text-white leading-relaxed text-md sm:text-sm md:text-base lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}