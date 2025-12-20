"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PinVideoInBg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroTopRef = useRef<HTMLHeadingElement>(null);
  const heroBottomRef = useRef<HTMLHeadingElement>(null);
  const heroBottomInnerRef = useRef<HTMLSpanElement>(null); // inner wrapper for transform-only tracking
  const heroSubRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Rendering hints to keep text crisp during transforms
      gsap.set([heroTopRef.current, heroBottomRef.current, heroBottomInnerRef.current, heroSubRef.current], {
        willChange: "transform, opacity",
        transformOrigin: "center center",
      });

      // Smooth, scroll-linked timeline (no manual onUpdate)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 65%",
          end: "top 10%",
          scrub: 1.2,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Top line: fade in + rise + gentle scale down
      tl.fromTo(
        heroTopRef.current,
        { autoAlpha: 0.3, y: 40, scale: 1 },
        { autoAlpha: 1, y: 0, scale: 0.84 },
        0
      );

      // Bottom line: fade in + rise; tracking-tight via scaleX on inner span
      // We avoid letterSpacing to prevent layout thrash — scaleX is GPU smooth.
      tl.fromTo(
        heroBottomRef.current,
        { autoAlpha: 0.3, y: 40 },
        { autoAlpha: 1, y: 0 },
        0
      ).fromTo(
        heroBottomInnerRef.current,
        { scaleX: 1, scaleY: 1 },
        { scaleX: 0.84, scaleY: 0.88 },
        "<"
      );

      // Sub line: gentle fade + rise
      if (heroSubRef.current) {
        gsap.fromTo(
          heroSubRef.current,
          { autoAlpha: 0.3, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top 70%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      // Other text sections (kept smooth with transform-only)
      const sections = Array.from(
        containerRef.current.querySelectorAll(".pb-text-section")
      ) as HTMLElement[];

      sections.forEach((section) => {
        if (section === heroSectionRef.current) return;
        gsap.fromTo(
          section,
          { autoAlpha: 0.3, y: 40, scale: 1 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 0.92,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });

      // Pin background video
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: videoRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-pin-section w-full min-h-[300vh] relative flex flex-col justify-start px-6 md:px-10 lg:px-16 gap-[25vh] pt-32 md:pt-40 pb-14 overflow-hidden"
    >
      {/* HERO SECTION */}
      <div
        ref={heroSectionRef}
        className="pb-text-section pb-hero-wrap relative z-10 text-center flex flex-col items-center justify-center px-4 font3 mt-6 mb-12"
        style={{
          // Optional rendering hints to reduce font jitter on some browsers
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <div className="max-w-6xl">
          <h2
            ref={heroTopRef}
            className="pb-hero-top text-4xl md:text-6xl lg:text-[80px] font-light text-white mb-1 font4"
          >
            A GLOBAL 360° CREATIVE
          </h2>

          {/* Bottom line with inner transform wrapper for smooth tracking-tight */}
          <h2
            ref={heroBottomRef}
            className="pb-hero-bottom text-4xl md:text-6xl lg:text-[80px] font-bold text-white mt-[15px] mb-4 font4"
          >
            <span
              ref={heroBottomInnerRef}
              className="inline-block"
              style={{
                display: "inline-block",
                willChange: "transform",
              }}
            >
              AGENCY{" "}
              <span className="pb-hero-x font3 text-[40px] md:text-[48px] lg:text-[50px] relative bottom-1 md:bottom-2 lg:bottom-3">
                x
              </span>{" "}
              STUDIO
            </span>
          </h2>

          <p
            ref={heroSubRef}
            className="pb-hero-sub text-[16px] md:text-[18px] lg:text-[20px] text-white/90 tracking-[1.5px] md:tracking-[2px] mt-6 font5"
          >
            SPARKING STAGGERING BRAND MOVEMENTS IN ASTONISHING WAYS
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="pb-text-section relative z-10 flex flex-col items-center justify-center px-4 md:px-8 mt-12">
        <div className="max-w-5xl">
          <h3 className="pb-quote text-2xl md:text-3xl lg:text-[34px] font-light text-white mb-2 text-center font1 leading-[32px] md:leading-[38px] lg:leading-[40px] tracking-[0.5px] md:tracking-[1px]">
            "Staying on budget, while ensuring quality, The{" "}
            <br className="hidden md:block" />
            Boathouse boosted my target KPIs by 10x in the past year."
          </h3>
          <p className="pb-author text-slate-100 text-xs md:text-sm tracking-[2px] mt-2 text-center font1">
            OLLIE CMO
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="pb-text-section relative z-10 text-center flex flex-col items-end justify-center px-4 lg:pr-32">
        <div className="max-w-3xl">
          <h3 className="pb-quote text-2xl md:text-3xl lg:text-[34px] font-light text-white leading-snug mb-2 font1">
            "A one of a kind process with unparalleled results."
          </h3>
          <p className="pb-author text-slate-300 text-xs md:text-sm tracking-[2px] mt-2">
            RXSENSE | PRESIDENT + CMO
          </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="pb-text-section relative z-10 text-center hidden md:flex flex-col lg:items-start justify-center px-2 lg:px-0 lg:pr-[25px]">
        <div className="max-w-[700px] 2xl:max-w-3xl">
          <h3 className="pb-quote text-2xl md:text-3xl lg:text-[34px] font-light text-white leading-snug mb-2 max-w-4xl font1">
            "The Boathouse is our creative agency Navy Seals, who find a way to
            get it done in an exceptional manner when no one else could."
          </h3>
          <p className="pb-author text-slate-300 text-xs md:text-sm tracking-[2px] mt-2">
            APPLE | COMMUNICATIONS & BRAND MARKETING
          </p>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="pb-text-section relative z-10 text-center flex flex-col items-end justify-center px-4 lg:px-0 font1">
        <div className="max-w-3xl">
          <h3 className="pb-quote text-2xl md:text-3xl lg:text-[34px] font-light text-white leading-snug mb-2 max-w-4xl">
            "They're like nothing I've ever experienced with other agency
            partners."
          </h3>
          <p className="pb-author text-slate-300 text-xs md:text-sm tracking-[2px] mt-2">
            APPLE | COMMUNICATIONS & BRAND MARKETING
          </p>
        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        src="/pinVideo.mp4"
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover absolute top-0 left-0 z-0 opacity-80"
      />
    </div>
  );
};

export default PinVideoInBg;