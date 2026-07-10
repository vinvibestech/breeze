"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface StorySlide {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
}

interface HorizontalScrollStoryProps {
  slides: StorySlide[];
}

export default function HorizontalScrollStory({
  slides,
}: HorizontalScrollStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        duration: 1,
      });

      const dots = section.querySelectorAll<HTMLSpanElement>("[data-slide-dot]");

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const activeIndex = Math.min(
            dots.length - 1,
            Math.floor(self.progress * dots.length)
          );
          dots.forEach((dot, i) => {
            dot.style.backgroundColor =
              i === activeIndex ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.25)";
          });
        },
      });

      const slideEls = track.querySelectorAll<HTMLDivElement>("[data-slide]");
      slideEls.forEach((slideEl) => {
        const image = slideEl.querySelector("[data-slide-image]");
        const text = slideEl.querySelectorAll("[data-slide-text]");

        gsap.fromTo(
          image,
          { scale: 1.15, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: slideEl,
              containerAnimation: tween,
              start: "left 80%",
              end: "left 20%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slideEl,
              containerAnimation: tween,
              start: "left 70%",
              end: "left 30%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [slides] }
  );

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full overflow-hidden bg-neutral-950"
    >
      <div
        ref={trackRef}
        className="flex h-screen w-max items-stretch will-change-transform"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            data-slide
            className="relative flex h-screen w-screen shrink-0 items-center overflow-hidden"
          >
            <div
              data-slide-image
              className="absolute inset-0 h-full w-full bg-neutral-800"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-xl px-6 sm:px-12 lg:px-20">
             
              <h3
                data-slide-text
                className="whitespace-pre-line text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {slide.title}
              </h3>
              <p
                data-slide-text
                className="mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base"
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}