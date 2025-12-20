"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Narrative = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const brandHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading: starts at original size, scales down smoothly when in view
      gsap.fromTo(
        headingRef.current,
        { scale: 1 },
        {
          scale: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%", // when heading enters viewport
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Border: grows when 70% away from top
      gsap.fromTo(
        borderRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: borderRef.current,
            start: "top 70%", // 70% from top of viewport
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Span text: scale up smoothly
      gsap.fromTo(
        spanRef.current,
        { scale: 0.85 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: spanRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Brand heading: scale up smoothly
      gsap.fromTo(
        brandHeadingRef.current,
        { scale: 0.85 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: brandHeadingRef.current,
            start: "top 75%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // clean up only this component’s animations
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#E7E4E5] hidden  lg:flex flex-col items-center"
    >
      {/* Top heading */}
      <h3
        ref={headingRef}
        className="text-center text-[80px] font4 text-black tracking-tight leading-tight"
      >
        ONE COHESIVE <br /> NARRATIVE
      </h3>

      {/* Border */}
      <div className="lg:h-[21.6vh] flex items-start my-3">
        <div
          ref={borderRef}
          className="bg-black w-[0.9px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Bottom texts */}
      <div className="flex flex-col items-center justify-center text-black mt-2">
        <span ref={spanRef} className="font5 text-[18px]">
          TO SPARK A
        </span>
        <p
          ref={brandHeadingRef}
          className="text-[72px] font4 "
        >
          BRAND MOVEMENT
        </p>
      </div>
    </div>
  );
};

export default Narrative;

