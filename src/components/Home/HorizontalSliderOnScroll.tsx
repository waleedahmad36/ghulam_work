"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Apple, Victoria, Marot, Netflix, TrustPilot } from "@/icons/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS = [Apple, Victoria, Marot, Netflix, TrustPilot];

const HorizontalSliderOnScroll = ({ items = [], height = "70vh" }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Kill existing ScrollTriggers for this container
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === container) t.kill();
    });

    const totalWidth = inner.scrollWidth;

    // ⭐ NEW: Start the slider slightly in view (center-ish)
    const initialOffset = window.innerWidth / 2; 
    gsap.set(inner, { x: initialOffset });

    // Create animation
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top 60%", // ⭐ NEW: Start when section is ~10% visible
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        // ⭐ NEW formula uses initialOffset
        const xPos = initialOffset - (self.progress * (initialOffset + totalWidth));
        gsap.set(inner, { x: xPos });
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      st.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  // Build slides from icons
  const NUM_SLIDES = 8;
  const slides = items.length
    ? items
    : new Array(NUM_SLIDES).fill(0).map((_, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={i}
            className="shrink-0 w-30 rounded-3xl shadow-2xl flex flex-col justify-center items-center mx-20"
          >
            <Icon />
          </div>
        );
      });

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
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
