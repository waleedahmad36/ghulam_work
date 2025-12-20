"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ClientsSliderSec from "./ClientsSliderSec";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ClientsSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const border = borderRef.current;
    const container = sliderContainerRef.current;
    const inner = sliderInnerRef.current;
    if (!section || !border || !container || !inner) return;

    const ctx = gsap.context(() => {
      // Desktop-only behavior (matches your production approach)
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          // Top border grows smoothly when entering viewport
          gsap.fromTo(
            border,
            { height: 0 },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: border,
                start: "top 65%",
                end: "top -125%",
                scrub: 1,
              },
            }
          );

          // Measurements
          const viewportWidth = container.clientWidth;
          const totalWidth = inner.scrollWidth;
          const firstItemWidth = inner.children[0]?.clientWidth || 0;
          const HORIZONTAL_PADDING = 32; // equals px-8 in Tailwind

          // Initial: center first item
          const initialX = viewportWidth / 2 - firstItemWidth / 2 - 70;

          // Final: slide until the last icons are fully visible near the right edge
          // This keeps content in-view and prevents "over-sliding"
          const maxLeft = totalWidth - viewportWidth; // amount of content overflow
          const finalX = -maxLeft + HORIZONTAL_PADDING;

          gsap.set(inner, { x: initialX, y: 0 });

          // Pinned horizontal-only scroll
          gsap.to(inner, {
            x: finalX,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => {
                // Pin length based on content width for natural pacing
                // Longer content -> longer pin distance
                const base = Math.max(800, viewportWidth * 0.9);
                const factor = Math.min(1.2, Math.max(0.6, totalWidth / (viewportWidth * 2.5)));
                return `+=${Math.round(base * factor)}`;
              },
              pin: true, // pin the whole section
              anticipatePin: 1,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        },

        // Tablet/mobile: no pin, gentle horizontal scroll only (optional fallback)
        "(max-width: 1023px)": () => {
          const viewportWidth = container.clientWidth;
          const totalWidth = inner.scrollWidth;
          const firstItemWidth = inner.children[0]?.clientWidth || 0;

          const initialX = viewportWidth / 2 - firstItemWidth / 2 - 70;
          const finalX = -(totalWidth - viewportWidth) + 32;

          gsap.set(inner, { x: initialX, y: 0 });

          gsap.to(inner, {
            x: finalX,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: "bottom top",
              scrub: 1,
            },
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen bg-[#E7E4E5] flex flex-col items-center"
    >
      {/* Top border */}
      <div className="lg:h-[35vh] flex items-start">
        <div
          ref={borderRef}
          className="bg-black w-[0.9px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Slider (presentational) */}
      <div className="w-full">
        <ClientsSliderSec
          height="40vh"
          containerRef={sliderContainerRef}
          innerRef={sliderInnerRef}
        />
      </div>

      {/* Footer label */}
      <p className="font5 text-[25px] text-black tracking-wide">Our Clients</p>
    </div>
  );
};

export default ClientsSlider;