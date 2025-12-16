"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StrategyCircle from "./_components/CicleDots";
import CardsDisplay from "./_components/CardsDisplay";
import { useHeaderContext } from "@/context/useHeaderContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setColors } = useHeaderContext();

  const topBorderInnerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomBorderInnerRef = useRef<HTMLDivElement>(null);
  const circleNumberRef = useRef<HTMLDivElement>(null);
  const ideationRef = useRef<HTMLHeadingElement>(null);
  const secondBorderInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ---------------- HEADER COLOR CHANGE ---------------- */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 10%", // when Process enters header area
        end: "bottom center", // when Process leaves header area
        onEnter: () => setColors({ fillColor: "black", menuIconColor: "black" }), // light background → dark header
        onLeaveBack: () => setColors({ fillColor: "white", menuIconColor: "white" }), // reverse when scrolling up
      });

      /* ---------------- TOP BORDER ---------------- */
      gsap.fromTo(
        topBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: topBorderInnerRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      /* ---------------- HEADING ---------------- */
      gsap.fromTo(
  headingRef.current,
  { scale: 0.85 },
  {
    scale: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 75%",
      end: "top 50%",
      scrub: 1,
    },
  }
);


      /* ---------------- BOTTOM BORDER (STEP 1) ---------------- */
      gsap.fromTo(
        bottomBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: bottomBorderInnerRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      /* ---------------- CIRCLE NUMBER ---------------- */
      gsap.fromTo(
        circleNumberRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: circleNumberRef.current,
            start: "top 75%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      /* ---------------- SECOND BORDER ---------------- */
      gsap.fromTo(
        secondBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: secondBorderInnerRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      /* ---------------- IDEATION ---------------- */
      gsap.fromTo(
        ideationRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ideationRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [setColors]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col bg-[#E7E4E5] justify-center items-center text-black"
    >
      {/* ...rest of your component stays same */}
      <div className="lg:h-[25vh] flex items-start">
        <div
          ref={topBorderInnerRef}
          className="bg-black w-[1px]"
          style={{ height: 0 }}
        />
      </div>

      <h3
        ref={headingRef}
        className="text-center lg:text-[74px] my-1 font4 tracking-tight font-bold"
      >
        OUR PROCESS
      </h3>

      <div className="h-[25vh] flex items-start">
        <div
          ref={bottomBorderInnerRef}
          className="bg-black w-[1px]"
          style={{ height: 0 }}
        />
      </div>

      <div
        ref={circleNumberRef}
        className="w-12 h-12 flex justify-center items-center mt-3 mb-10 rounded-full border border-black"
        // style={{ opacity: 0 }}
      >
        <span className="text-[30px] font-extralight">1</span>
      </div>

      <StrategyCircle />

      <div className="h-[20vh] flex items-start">
        <div
          ref={secondBorderInnerRef}
          className="bg-black w-[1px]"
          style={{ height: 0 }}
        />
      </div>

      <div className="w-12 h-12 flex justify-center items-center mt-3 mb-6 rounded-full border border-black">
        2
      </div>

      <h3
        ref={ideationRef}
        className="text-[60px] my-6 font4 tracking-tight opacity-0"
      >
        IDEATION
      </h3>

      <CardsDisplay />
    </div>
  );
};

export default Process;
