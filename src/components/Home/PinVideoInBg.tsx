"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PinVideoInBg = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const sections = container.querySelectorAll(".text-section");

    sections.forEach((section) => {
      /* -----------------------------
         APPEAR (UNCHANGED)
      ----------------------------- */
      gsap.fromTo(
        section,
        { opacity: 0.3, y: 30, scale: 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      /* -----------------------------
         DISAPPEAR (FIXED)
         ✔ SCALE ONLY
         ✔ NO OPACITY CHANGE
         ✔ LINEAR
         ✔ HAPPENS WHILE VISIBLE
      ----------------------------- */
      gsap.to(section, {
        scale: 0.92,
        ease: "none", // linear = no glitch
        scrollTrigger: {
          trigger: section,
          start: "top 55%", // still clearly visible
          end: "top 25%",   // before it leaves screen
          scrub: 2,         // smooth & cinematic
        },
      });
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: video,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[300vh] relative flex flex-col justify-start px-16 gap-[25vh] pt-40 pb-14 overflow-hidden badoni"
    >
      <div className="text-section relative z-10 text-center flex flex-col items-center justify-center px-4 badoni my-12">
        <div className="max-w-6xl">
          <h2 className="text-5xl md:text-6xl lg:text-[68px] font-light text-white tracking-wide mb-1 badoni shadow-2xl">
            A GLOBAL 360° CREATIVE
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-wide mb-4 badoni">
            AGENCY <span className="font-light">x</span> STUDIO
          </h2>
          <p className="text-[17px] font-semibold shadow-2xl md:text-sm text-white tracking-wider mt-6">
            SPARKING STAGGERING BRAND MOVEMENTS IN ASTONISHING WAYS
          </p>
        </div>
      </div>

      <div className="text-section relative z-10 flex flex-col items-center justify-center px-8 mt-12">
        <div className="max-w-5xl">
          <h3 className="text-2xl md:text-3xl lg:text-[30px] font-light text-white leading-normal tracking-tight mb-2 text-center shadow-2xl">
            "Staying on budget, while ensuring quality, The <br /> Boathouse boosted my
            target KPIs by 10x in the past year."
          </h3>
          <p className="text-slate-100 text-xl md:text-sm tracking-wider mt-2 text-center">
            OLLIE CMO
          </p>
        </div>
      </div>

      <div className="text-section relative z-10 text-center flex flex-col items-end justify-center px-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl lg:text-[30px] shadow-2xl font-light text-white leading-snug mb-2">
            "A one of a kind process with unparalleled results."
          </h3>
          <p className="text-slate-300 text-center text-xs md:text-sm tracking-wider mt-2">
            RXSENSE | PRESIDENT + CMO
          </p>
        </div>
      </div>

      <div className="text-section relative z-10 text-center hidden md:flex flex-col lg:items-start justify-center px-2 lg:px-0">
        <div className="max-w-[700px] 2xl:max-w-3xl">
          <h3 className="text-2xl md:text-3xl lg:text-[30px] shadow-2xl font-light text-white leading-snug mb-2 max-w-4xl">
            "The Boathouse is our creative agency Navy Seals, who find a way to
            get it done in an exceptional manner when no one else could."
          </h3>
          <p className="text-slate-300 text-xs md:text-sm tracking-wider mt-2">
            APPLE | COMMUNICATIONS &amp; BRAND MARKETING
          </p>
        </div>
      </div>

      <div className="text-section relative z-10 text-center flex flex-col items-end justify-center px-4 lg:px-0 badoni">
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl lg:text-[30px] font-light text-white leading-snug mb-2 max-w-4xl shadow-2xl">
            "They're like nothing I've ever experienced with other agency
            partners."
          </h3>
          <p className="text-slate-300 text-xs md:text-sm tracking-wider mt-2">
            APPLE | COMMUNICATIONS &amp; BRAND MARKETING
          </p>
        </div>
      </div>

      <video
        ref={videoRef}
        src="/pinVideo.mp4"
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      />
    </div>
  );
};

export default PinVideoInBg;
