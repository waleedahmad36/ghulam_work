"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Apple, Victoria, Marot, Netflix, TrustPilot } from "@/icons/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS = [Apple, Victoria, Marot, Netflix, TrustPilot];

const HorizontalSliderOnScroll = ({ items = [], height = "85vh" }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === container) t.kill();
    });

    const totalWidth = inner.scrollWidth;
    const viewportWidth = window.innerWidth;

    // PERFECT left-alignment start like reference
    const firstItemWidth = inner.children[0]?.offsetWidth || 0;
    const initialOffset = viewportWidth / 2 - firstItemWidth / 2 - 70; // -70 = matches reference left shift

    gsap.set(inner, { x: initialOffset, y: 0 });

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top 72%", // EXACT reference feel
      end: "bottom top",
      scrub: 7.5, // heavy, slow, reference-like movement

      onUpdate: (self) => {
        const p = self.progress;

        // VERY slow horizontal drift (reference = ~0.18–0.20)
        // EXTREMELY slow horizontal drift to sync exact exit timing
        const xPos = initialOffset - p * (initialOffset + totalWidth * 0.14); // ← was 0.19

        // smooth upward + diagonal shift
        let yPos = 0;
        let xShift = 0;

        if (p > 0.88) {
          // up + left BEGIN EXACTLY where reference starts
          const ep = (p - 0.88) / 0.12; // 0 → 1 only at late stage

          yPos = -24 * ep; // light upward movement
          xShift = -20 * ep; // soft left drift
        }

        gsap.set(inner, {
          x: xPos + xShift,
          y: yPos,
          ease: "power4.out",
        });
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  const NUM_SLIDES = 12;
  const slides = items.length
    ? items
    : new Array(NUM_SLIDES).fill(0).map((_, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={i}
            className={`shrink-0 w-30 rounded-3xl flex flex-col justify-center items-center ${
              i === 0 ? "mr-4" : "mx-4"
            }`}
          >
            <Icon />
          </div>
        );
      });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden  "
      style={{ height }}
    >
      <div
        ref={innerRef}
        className="absolute top-0 flex items-center gap-8 px-8 will-change-transform"
        style={{ height: "100%" }}
      >
        {slides}
      </div>
    </section>
  );
};

export default HorizontalSliderOnScroll;
