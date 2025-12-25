"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Apple, Victoria, Marot, Netflix, TrustPilot , Naked } from "@/icons/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS = [Apple, Victoria, Marot, Netflix, TrustPilot , Naked , TrustPilot , Marot];

const HorizontalSliderOnMobileScroll = ({ items = [], height = "400px" }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === container) t.kill();
    });

    const totalScroll = inner.scrollWidth - window.innerWidth;

    gsap.to(inner, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",   // start when section enters
        end: `+=${totalScroll}`, // scroll distance matches width
        scrub: true,           // natural speed
        pin: false,            // no pinning
      },
    });

    return () => ScrollTrigger.killAll();
  }, [items]);

  const slides =
    items.length ||
    new Array(12).fill(0).map((_, i) => {
      const Icon = ICONS[i % ICONS.length];
      return (
        <div
          key={i}
          className="shrink-0 w-28 h-28 rounded-2xl flex justify-center items-center mx-2"
        >
          <Icon />
        </div>
      );
    });

  return (
    <section
      ref={containerRef}
      className="md:hidden relative w-full overflow-hidden"
      style={{ height }}
    >
      <div
        ref={innerRef}
        className="flex items-center gap-6 px-5 will-change-transform h-full"
      >
        {slides}
      </div>
    </section>
  );
};

export default HorizontalSliderOnMobileScroll;