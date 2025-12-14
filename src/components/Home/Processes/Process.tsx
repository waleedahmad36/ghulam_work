"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StrategyCircle from "./_components/CicleDots";
import CardsDisplay from "./_components/CardsDisplay";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const topBorderRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomBorderRef = useRef<HTMLDivElement>(null);
  const circleNumberRef = useRef<HTMLDivElement>(null);
  const ideationRef = useRef<HTMLHeadingElement>(null);
  const secondBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        topBorderRef.current,
        { height: 0 },
        {
          height: "20vh",
          scrollTrigger: {
            trigger: topBorderRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        headingRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        bottomBorderRef.current,
        { height: 0 },
        {
          height: "20vh",
          scrollTrigger: {
            trigger: bottomBorderRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

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

      gsap.fromTo(
        secondBorderRef.current,
        { height: 0 },
        {
          height: "20vh",
          scrollTrigger: {
            trigger: secondBorderRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col bg-white justify-center items-center text-black"
    >
      <div ref={topBorderRef} className="bg-black w-[1px]" style={{ height: 0 }} />

      <h3 ref={headingRef} className="text-[80px] my-6">
        Our Process
      </h3>

      <div ref={bottomBorderRef} className="bg-black w-[1px]" style={{ height: 0 }} />

      <div
        ref={circleNumberRef}
        className="w-12 h-12 flex justify-center items-center mt-3 mb-10 rounded-full border border-black"
        style={{ opacity: 0 }}
      >
        1
      </div>

      <StrategyCircle />

      <div ref={secondBorderRef} className="bg-black w-[1px]" style={{ height: 0 }} />

      <div className="w-12 h-12 flex justify-center items-center mt-3 mb-6 rounded-full border border-black">
        2
      </div>

      <h3
        ref={ideationRef}
        className="text-[60px] my-6 badoni tracking-tight opacity-0"
      >
        IDEATION
      </h3>

      <CardsDisplay />
    </div>
  );
};

export default Process;
