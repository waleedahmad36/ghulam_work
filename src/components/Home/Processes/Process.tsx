"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import StrategyCircle from "./_components/CicleDots";
import CardsDisplay from "./_components/CardsDisplay";
import { useHeaderContext } from "@/context/useHeaderContext";
import TalentGallery from "./_components/TalentGallery";
import ExecutionPinVideo from "./_components/ExecutionPinVideo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setColors } = useHeaderContext();

  const topBorderInnerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bottomBorderInnerRef = useRef<HTMLDivElement>(null);
  const ideationRef = useRef<HTMLHeadingElement>(null);
  const secondBorderInnerRef = useRef<HTMLDivElement>(null);
  const thirdBorderInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top 10%",
  end: "bottom 10%", // 👈 IMPORTANT (near end)

  onEnter: () => {
    setColors({ fillColor: "black", menuIconColor: "black" });
  },

  onEnterBack: () => {
    setColors({ fillColor: "black", menuIconColor: "black" });
  },

  onLeave: () => {
    // 👇 NEXT section gets control
    setColors({ fillColor: "white", menuIconColor: "white" });
  },

  onLeaveBack: () => {
    // 👇 Previous section gets control
    setColors({ fillColor: "white", menuIconColor: "white" });
  },
  
});


      gsap.fromTo(
        topBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: topBorderInnerRef.current,
            start: "top 78%",
            end: "top 42%",
            scrub: 1,
          },
        }
      );

      // INITIAL STATE — large scale down (as you want)
      gsap.set(headingRef.current, {
        scale: 0.75, // big scale difference like ref site
        transformOrigin: "center center",
        willChange: "transform",
      });

      // TIMELINE WITH INERTIA (KEY DIFFERENCE)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 2, // 👈 THIS adds smoothness even with big scale
            fastScrollEnd: true,
            preventOverlaps: true,
          },
        })
        .to(headingRef.current, {
          scale: 1,
          ease: "power2.out", // 👈 NOT linear, ref site uses easing
        });

      gsap.fromTo(
        bottomBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: bottomBorderInnerRef.current,
            start: "top 76%",
            end: "top 48%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        secondBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: secondBorderInnerRef.current,
            start: "top 74%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        thirdBorderInnerRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: thirdBorderInnerRef.current,
            start: "top 74%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ideationRef.current,
        { scale: 0.85, y: 10 },
        {
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ideationRef.current,
            start: "top 76%",
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
      className="hidden sm:flex flex-col bg-[#E7E4E5] justify-center items-center text-black"
    >
      {/* Top border */}
      <div className="md:h-[140px] lg:h-[23.6vh] xl:h-[140px] hidden md:flex items-start">
        <div
          ref={topBorderInnerRef}
          className="bg-black/90 w-[0.6px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Heading */}
      <h3
        id="process_heading"
        ref={headingRef}
        className="hidden md:block text-center md:text-[58px] lg:text-[68px] xl:text-[78px] font4 tracking-tight "
      >
        OUR PROCESS
      </h3>

      {/* Bottom border */}
      <div className="md:h-[140px] lg:h-[23vh] xl:h-[140px] hidden  md:flex items-start">
        <div
          ref={bottomBorderInnerRef}
          className="bg-black/90 w-[0.4px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Circle 1 */}
      <div className="w-12 h-12 hidden md:flex justify-center items-center mt-10 rounded-full border border-black">
        <span className="text-[35px] font-sans" id="circle_number">
          1
        </span>
      </div>

      {/* StrategyCircle */}
      <div className="hidden md:block relative md:mt-5  lg:-mt-[17px]">
        <StrategyCircle />
      </div>

      {/* Second border */}
      <div className="h-[150px] hidden md:flex items-start md:mt-6 lg:mt-0">
        <div
          ref={secondBorderInnerRef}
          className="bg-black/90 w-[0.6px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Circle 2 */}
      <div className="w-12 h-12 hidden  md:flex justify-center items-center mt-3 lg:mt-1 mb-2 rounded-full border border-black">
        <span  className="text-2xl" >2</span>
      </div>

      {/* IDEATION */}
      <h3 ref={ideationRef} className="hidden md:block md:text-[38px]  lg:text-[60px] md:my-2 lg:my-1 font4 tracking-tight">
        IDEATION
      </h3>

      {/* CardsDisplay */}
      <CardsDisplay />

      {/* Second border */}
      <div className="h-[23vh] hidden md:flex items-start">
        <div
          ref={thirdBorderInnerRef}
          className="bg-black w-[0.9px]"
          style={{ height: 0 }}
        />
      </div>

      {/* Sec 3 */}

      <TalentGallery />
      <ExecutionPinVideo/>
    </div>
  );
};

export default Process;
