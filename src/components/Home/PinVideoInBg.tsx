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
  const heroBottomInnerRef = useRef<HTMLSpanElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          heroTopRef.current,
          heroBottomRef.current,
          heroBottomInnerRef.current,
          heroSubRef.current,
        ],
        {
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }
      );

      // Desktop timeline (unchanged)
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

      tl.fromTo(
        heroTopRef.current,
        { autoAlpha: 0.5, y: 40, scale: 1 },
        { autoAlpha: 1, y: 0, scale: 0.84 },
        0
      )
        .fromTo(
          heroBottomRef.current,
          { autoAlpha: 0.3, y: 40 },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          heroBottomInnerRef.current,
          { scaleX: 1, scaleY: 1 },
          { scaleX: 0.84, scaleY: 0.88 },
          "<"
        );

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

      // Tablet-specific animation tuning
      ScrollTrigger.matchMedia({
        "(min-width: 768px) and (max-width: 1023px)": () => {
          gsap.to(heroBottomInnerRef.current, {
            scaleX: 0.9,
            scaleY: 0.9,
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top 75%",
              end: "top 15%",
              scrub: 2, // faster scrub for snappier feel
            },
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-pin-section w-full min-h-[300vh] relative hidden md:flex flex-col justify-start px-6 md:px-10 lg:px-16 md:gap-[18vh] lg:gap-[25vh] xl:gap-[23vh] pt-32 md:pt-40 pb-14 overflow-hidden"
    >
      {/* HERO SECTION */}
      <div
        ref={heroSectionRef}
        className="pb-text-section pb-hero-wrap relative z-10 text-center flex flex-col items-center justify-center px-4  mt-6 md:mb-6 lg:mb-12"
        style={{
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <div className=" w-full lg:max-w-6xl overflow-hidden xl:mt-9 ">
          <h2
            ref={heroTopRef}
            className="pb-hero-top md:text-[28px] lg:text-[72px] font-light text-white mb-1 font4"
          >
            A GLOBAL 360° CREATIVE
          </h2>

          <h2
            ref={heroBottomRef}
            className="pb-hero-bottom md:text-[28px] lg:text-[72px] font-bold text-white mt-[2px] mb-4 font4 text-nowrap"
          >
            <span
              ref={heroBottomInnerRef}
              className="inline-block"
              style={{ display: "inline-block", willChange: "transform" }}
            >
              AGENCY{" "}
              <span className="pb-hero-x   md:text-[28px] lg:text-[50px] relative bottom-1 md:bottom-2 lg:bottom-3">
                x
              </span>{" "}
              STUDIO
            </span>
          </h2>

          <p
            ref={heroSubRef}
            className="pb-hero-sub text-[16px] md:text-[8px] lg:text-[20px]
            xl:text-[24px] text-white/90 tracking-[1.5px] md:tracking-[2px] mt-6 font5   text-nowrap"
          >
            SPARKING STAGGERING BRAND MOVEMENTS IN ASTONISHING WAYS
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="pb-text-section relative z-10 flex flex-col items-center justify-center px-4 md:px-8 mt-12">
        <div className="max-w-5xl">
          <h3 className="pb-quote text-[20px] md:text-[28px] lg:text-[34px] font-light text-white mb-2 text-center font1 leading-[32px] md:leading-[38px] lg:leading-[40px] tracking-[0.5px] md:tracking-[1px] mt-8">
            "Staying on budget, while ensuring quality, The{" "}
            <br className="hidden md:block xl:hidden" />
            Boathouse <br className="hidden xl:block" /> boosted my target KPIs by 10x in the past year."
          </h3>
          <p className="pb-author text-[12px] md:text-[14px] lg:text-[16px] text-slate-100 tracking-[2px] mt-2 text-center font1">
            OLLIE CMO
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="pb-text-section relative z-10 text-center flex flex-col items-end justify-center px-4 lg:pr-32">
        <div className="max-w-3xl">
          <h3 className="pb-quote text-[20px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-light text-white leading-snug mb-2 font1 text-nowrap">
            "A one of a kind process with unparalleled results."
          </h3>
          <p className="pb-author text-[12px] md:text-[14px] lg:text-[16px] text-slate-300 tracking-[2px]">
            RXSENSE | PRESIDENT + CMO
          </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="pb-text-section relative z-10 text-center hidden md:flex flex-col lg:items-start justify-center px-2 lg:px-0 lg:pr-[25px]">
        <div className="max-w-[740px] xl:max-w-[870px]">
          <h3 className="pb-quote text-[20px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-light text-white leading-snug mb-2 max-w-[740px] xl:max-w-[870px] font1 xl:leading-[40px]">
            "The Boathouse is our creative agency Navy Seals, who find a way to
            get it done in an exceptional manner when no one else could."
          </h3>
                   <p className="pb-author text-[12px] md:text-[14px] lg:text-[16px] text-slate-300 tracking-[2px] ">
            APPLE | COMMUNICATIONS & BRAND MARKETING
          </p>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="pb-text-section relative z-10 text-center flex flex-col items-end justify-center px-4 lg:px-0 xl:pr-[75px] font1">
        <div className="max-w-[740px] xl:max-w-[810px]">
          <h3 className="pb-quote text-[20px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-light text-white leading-snug mb-2 max-w-[810px] xl:max-w-[810px] xl:text-nowrap">
            "They're like nothing I've ever experienced with other <br  className="hidden xl:block" /> agency
            partners."
          </h3>
          <p className="pb-author text-[12px] md:text-[14px] lg:text-[16px] text-slate-300 tracking-[2px] mt-2">
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