"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Blogflavors } from "../../data/blog";

type Flavor = (typeof Blogflavors)[number];

function DescriptionBody({ text }: { text: string }) {
    const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean); // drops empty AND whitespace-only lines

    type Segment = { type: "list" | "text"; lines: string[] };
    const segments: Segment[] = [];

    for (const line of lines) {
        const isBullet = /^[*•]\s*/.test(line);
        const last = segments[segments.length - 1];

        if (isBullet) {
            if (last?.type === "list") last.lines.push(line);
            else segments.push({ type: "list", lines: [line] });
        } else {
            if (last?.type === "text") last.lines.push(line);
            else segments.push({ type: "text", lines: [line] });
        }
    }

    function parseBullet(line: string) {
        const withoutMarker = line.replace(/^[*•]\s*/, "");
        const match = withoutMarker.match(/^(.+?):\s+(\S.*)$/); // requires real content after colon
        if (match) {
            return { label: match[1], rest: match[2] };
        }
        return { label: null, rest: withoutMarker };
    }

    return (
        <>
            {segments.map((seg, si) => {
                if (seg.type === "list") {
                    return (
                        <ul key={si} className="mb-5 space-y-3 last:mb-0">
                            {seg.lines.map((line, j) => {
                                const { label, rest } = parseBullet(line);
                                return (
                                    <li key={j} className="flex gap-3">
                                        <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-white" />
                                        <span className="text-[#605F5F]">
                                            {label && (
                                                <span className="font-normal text-[#333333]">
                                                    {label}:{" "}
                                                </span>
                                            )}
                                            {rest}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    );
                }

                return (
                    <p key={si} className="mb-4 leading-8 text-[#605F5F] last:mb-0">
                        {seg.lines.join(" ")}
                    </p>
                );
            })}
        </>
    );
}

function FlavorModal({
    flavor,
    onClose,
}: {
    flavor: Flavor;
    onClose: () => void;
}) {
    // Lock body scroll while the modal is open, and restore on close/unmount.
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, []);

    // Close on Escape.
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flavor-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] bg-white  animate-[modalIn_0.25s_ease-out]">
                <div className={`relative flex-none bg-gradient-to-b`}>
               

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className=" z-20 absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#333333] transition "
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L15 15M15 1L1 15"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="overflow-y-auto px-7 py-7 sm:px-6 sm:py-6">
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                                <Image
                                    src={flavor.image}
                                    alt="Flavor"
                                    fill
                                    className="object-cover "
                                />
                            </div>
                    <h3
                        id="flavor-modal-title"
                        className="my-6 space-y-6 text-[15px] leading-8 text-[#333333] md:text-lg"
                    >
                        {flavor.shortDescription}
                    </h3>

                    <DescriptionBody  text={flavor.fullDescription} />
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: translateY(12px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}

export default function FlavorsSection() {
    const [activeFlavor, setActiveFlavor] = useState<Flavor | null>(null);

    return (
        <section className="py-14 bg-white">
            <div className="mx-auto w-[92%]">
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {Blogflavors.map((item) => (
                        <div
                            key={item.id}
                            className={`overflow-hidden rounded-3xl px-3 py-3 bg-gradient-to-b ${item.bg} transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px]">
                                <Image
                                    src={item.image}
                                    alt="Flavor"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="px-3 pb-3">
                                <p className="mt-3 space-y-3 text-[15px] leading-8 text-[#333333] md:text-base">
                                    {item.shortDescription}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setActiveFlavor(item)}
                                    className="mt-2 text-sm font-normal text-[#605F5F] underline underline-offset-2 hover:text-[#E21175] transition-colors"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeFlavor && (
                <FlavorModal
                    flavor={activeFlavor}
                    onClose={() => setActiveFlavor(null)}
                />
            )}
        </section>
    );
}