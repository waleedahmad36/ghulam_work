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
  const HOLD_SCROLL = 450;


useEffect(() => {
  const section = sectionRef.current;
  const border = borderRef.current;
  const container = sliderContainerRef.current;
  const inner = sliderInnerRef.current;

  if (!section || !border || !container || !inner) return;

  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 724px)": () => {
        /* ---------------- BORDER ---------------- */
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

        /* ---------------- MEASUREMENTS ---------------- */
        const viewportWidth = container.clientWidth;
        const totalWidth = inner.scrollWidth;
        const firstItemWidth = inner.children[0]?.clientWidth || 0;
        const HORIZONTAL_PADDING = 32;

        const initialX = viewportWidth / 2 - firstItemWidth / 2 - 70;
        const maxLeft = totalWidth - viewportWidth;
        const finalX = -maxLeft + HORIZONTAL_PADDING;

        gsap.set(inner, { x: initialX });

        /* ======================================================
           1️⃣ SLIDER SCROLL (NO PIN)
        ====================================================== */
        const sliderTween = gsap.to(inner, {
          x: finalX,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 95%",        // starts when slider enters view
            end: () => `+=${maxLeft}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        /* ======================================================
           2️⃣ SECTION PIN (DEPENDS ON SLIDER)
        ====================================================== */
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
           end: () => {
    const sliderST = sliderTween.scrollTrigger;
    if (!sliderST) return "+=400";
    return sliderST.end + HOLD_SCROLL;
  },
          pin: true,
          anticipatePin: 1,
          scrub: true,
          invalidateOnRefresh: true,
        });
      },
    });
  }, section);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={sectionRef}
      className="w-full h-screen bg-[#E7E4E5] hidden lg:flex flex-col items-center"
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