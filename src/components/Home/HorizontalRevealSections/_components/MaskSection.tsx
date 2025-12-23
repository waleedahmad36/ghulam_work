"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function MaskSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topBorderRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const halfScrollbar = scrollbarWidth / 2;

  // Set the translation based on half the scrollbar width
  gsap.set(topBorderRef.current, { x: -halfScrollbar });
  gsap.set(bottomBorderRef.current, { x: -halfScrollbar });

    const ctx = gsap.context(() => {
      // ✅ Top border reveal
      gsap.fromTo(
        topBorderRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center", // when section top hits center of viewport
            end: "top 20%", // finish as it moves up
            scrub: 1,
          },
        }
      );

      // ✅ Heading scale animation
      gsap.set(headingRef.current, { scale: 0.85, transformOrigin: "center center" });
      gsap.to(headingRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // when section top hits top of viewport
          end: "top -40%", // continue a bit after
          scrub: 1,
        },
      });

      // ✅ Bottom border reveal (delayed start)
      gsap.fromTo(
        bottomBorderRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: bottomBorderRef.current,
            start: "top 80%", // when border top is 80% down from viewport top
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-full w-screen overflow-hidden flex flex-col items-center bg-white relative"
    >
      {/* Top border */}
      <div className="lg:h-[23vh] flex items-start w-fit  ">
        <div ref={topBorderRef} className="bg-black/90 w-[0.6px]" style={{ height: 0 }} />
      </div>

      {/* Heading */}
      <h3
        ref={headingRef}
        className="text-black text-[20px] font5 mt-32 tracking-wide font-normal"
      >
        CREATING A MOVEMENT ACROSS ALL TACTICS
      </h3>

      {/* Bottom border */}
      <div className="lg:h-[13vh] flex items-start mt-8 w-fit ">
        <div ref={bottomBorderRef} className="bg-black/90 w-[0.6px]" style={{ height: 0 }} />
      </div>

      {/* Footer labels */}
      <div className="w-full px-12 flex justify-between font1 text-[42px] text-black absolute bottom-3">
        <p>TV</p>
        <p>DIGITAL</p>
        <p>OOH</p>
        <p>INFLUENCER</p>
        <p>EXPERIENCES</p>
      </div>
    </div>
  );
}

export default MaskSection;

