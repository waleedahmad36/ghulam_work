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

  const heroSectionRef = useRef(null);
  const heroTopRef = useRef(null);
  const heroBottomRef = useRef(null);
  const heroSubRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const video = videoRef.current;
    const heroSection = heroSectionRef.current;
    const heroTop = heroTopRef.current;
    const heroBottom = heroBottomRef.current;
    const heroSub = heroSubRef.current;

    if (!container || !video || !heroSection || !heroTop || !heroBottom) return;

    const localTriggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      /* -------------------------------------------------
         HERO TOP LINE: A GLOBAL 360° CREATIVE
         - Fade + rise + subtle uniform scale
      ------------------------------------------------- */
      const heroTopST = ScrollTrigger.create({
        trigger: heroSection,
        start: "top 65%",
        end: "top 10%",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;

          const enterP = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0, 0.4, 0, 1, p)
          );
          const exitP = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0.4, 1, 0, 1, p)
          );

          const opacity = gsap.utils.interpolate(0.3, 1, enterP);
          const y = gsap.utils.interpolate(40, 0, enterP);
          const scale = gsap.utils.interpolate(1, 0.94, exitP);

          gsap.set(heroTop, {
            opacity,
            y,
            scale,
            transformOrigin: "center center",
            force3D: true,
            willChange: "transform, opacity",
          });
        },
      });
      localTriggers.push(heroTopST);

      /* -------------------------------------------------
         HERO BOTTOM LINE: AGENCY x STUDIO
         - Fade + rise
         - Horizontal compression + slight vertical scale
         - Letter-spacing tightening
      ------------------------------------------------- */
      const heroBottomST = ScrollTrigger.create({
        trigger: heroSection,
        start: "top 65%",
        end: "top 10%",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;

          const enterP = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0, 0.4, 0, 1, p)
          );
          const exitP = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0.4, 1, 0, 1, p)
          );

          const opacity = gsap.utils.interpolate(0.3, 1, enterP);
          const y = gsap.utils.interpolate(40, 0, enterP);

          // desktop-like behavior; on md/sm it still looks clean
          const scaleX = gsap.utils.interpolate(1, 0.88, exitP);
          const scaleY = gsap.utils.interpolate(1, 0.96, exitP);
          const letterSpacingPx = gsap.utils.interpolate(1.2, 0.2, exitP);

          gsap.set(heroBottom, {
            opacity,
            y,
            scaleX,
            scaleY,
            letterSpacing: `${letterSpacingPx}px`,
            transformOrigin: "center center",
            force3D: true,
            willChange: "transform, opacity, letter-spacing",
          });
        },
      });
      localTriggers.push(heroBottomST);

      /* -------------------------------------------------
         HERO SUBLINE: SPARKING STAGGERING…
         - Only fade + rise (no scale)
      ------------------------------------------------- */
      if (heroSub) {
        const heroSubST = ScrollTrigger.create({
          trigger: heroSection,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const opacity = gsap.utils.interpolate(0.3, 1, p);
            const y = gsap.utils.interpolate(30, 0, p);

            gsap.set(heroSub, {
              opacity,
              y,
              transformOrigin: "center center",
              force3D: true,
              willChange: "transform, opacity",
            });
          },
        });
        localTriggers.push(heroSubST);
      }

      /* -------------------------------------------------
         OTHER TEXT SECTIONS
         - Independent ScrollTrigger per section
         - Simple, linear, no stacking
      ------------------------------------------------- */
      const sections = Array.from(
        container.querySelectorAll(".pb-text-section")
      ) as HTMLElement[];

      sections.forEach((section) => {
        if (section === heroSection) return; // hero already handled

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress;

            const enterP = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0, 0.4, 0, 1, p)
            );
            const exitP = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(0.4, 1, 0, 1, p)
            );

            const opacity = gsap.utils.interpolate(0.3, 1, enterP);
            const y = gsap.utils.interpolate(40, 0, enterP);
            const scale = gsap.utils.interpolate(1, 0.92, exitP);

            gsap.set(section, {
              opacity,
              y,
              scale,
              transformOrigin: "center center",
              force3D: true,
              willChange: "transform, opacity",
            });
          },
        });

        localTriggers.push(st);
      });

      /* -------------------------------------------------
         PINNED VIDEO (fully isolated)
      ------------------------------------------------- */
      const pinST = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: video,
        pinSpacing: false,
        anticipatePin: 1,
      });
      localTriggers.push(pinST);
    }, container);

    return () => {
      localTriggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pb-pin-section w-full min-h-[300vh] relative flex flex-col justify-start px-6 md:px-10 lg:px-16 gap-[25vh] pt-32 md:pt-40 pb-14 overflow-hidden"
    >
      {/* HERO SECTION */}
      <div
        ref={heroSectionRef}
        className="pb-text-section pb-hero-wrap relative z-10 text-center flex flex-col items-center justify-center px-4 font3 my-12"
      >
        <div className="max-w-6xl">
          <h2
            ref={heroTopRef}
            className="pb-hero-top text-4xl md:text-6xl lg:text-[87px] font-light text-white mb-1 font1"
          >
            A GLOBAL 360° CREATIVE
          </h2>
          <h2
            ref={heroBottomRef}
            className="pb-hero-bottom text-4xl md:text-6xl lg:text-[87px] font-bold text-white mt-[15px] mb-4 font1"
          >
            AGENCY{" "}
            <span className="pb-hero-x font3 text-[40px] md:text-[48px] lg:text-[55px] relative bottom-1 md:bottom-2 lg:bottom-3">
              x
            </span>{" "}
            STUDIO
          </h2>
          <p
            ref={heroSubRef}
            className="pb-hero-sub text-[16px] md:text-[18px] lg:text-[20px]  text-slate-100 tracking-[1.5px] md:tracking-[2px] mt-6 font3"
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
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      />
    </div>
  );
};

export default PinVideoInBg;