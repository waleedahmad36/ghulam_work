"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StrategyCircle() {
  const sectionRef = useRef(null);
  const circleWrapRef = useRef(null);

  const topTextRef = useRef(null);
  const rightTexts = useRef([]);
  const leftTexts = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         TOP TEXT – PERFECT, UNTOUCHED
      -------------------------------- */
      gsap.fromTo(
        topTextRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 55%",
            scrub: true,
          },
        }
      );

      /* --------------------------------
         RIGHT SIDE TEXTS
         OPACITY ONLY — NO MOVEMENT
         INDIVIDUAL VIEWPORT TRIGGERS
      -------------------------------- */
      rightTexts.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      /* --------------------------------
         LEFT SIDE SEQUENCE (STICKY)
         OPACITY ONLY — SMOOTH
      -------------------------------- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=900",
          scrub: true,
        },
      });

      tl.fromTo(
        leftTexts.current[2],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "none" }
      )
        .fromTo(
          leftTexts.current[1],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "none" }
        )
        .fromTo(
          leftTexts.current[0],
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "none" }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full hidden lg:flex justify-center min-h-[210vh]"
    >
      <div
        ref={circleWrapRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div
          className="relative flex items-center justify-center rounded-full mt-12"
          style={{
            width: "390px",
            height: "390px",
            border: "1px solid #bfbfbf",
          }}
        >
          <h3 className="text-[48.41px]  font4 text-nowrap font-bold tracking-tight">
            THE STRATEGY
          </h3>

          {/* TOP */}
          <div className="dot absolute top-[-10px] left-1/2 -translate-x-1/2" />
          <p
            ref={topTextRef}
            className="absolute top-[-45px] left-1/2 -translate-x-1/2 text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0 whitespace-nowrap"
          >
            CONSUMER PSYCHOGRAPHICS
          </p>

          {/* RIGHT TOP */}
          <div className="dot absolute top-[48px] right-[45px]" />
          <p
            ref={(el) => (rightTexts.current[0] = el)}
            className="absolute top-[45px] right-[-250px] text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0"
          >
            COMPETITION RESEARCH
          </p>

          {/* LEFT TOP */}
          <div className="dot absolute top-[48px] left-[50px]" />
          <p
            ref={(el) => (leftTexts.current[0] = el)}
            className="absolute top-[48px] left-[-130px] text-[18px] tracking-widest text-[#4d4b4b] opacity-0 font-light"
          >
            KPI TARGETS
          </p>

          {/* LEFT CENTER */}
          <div className="dot absolute left-[-10px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (leftTexts.current[1] = el)}
            className="absolute left-[-300px] top-1/2 -translate-y-1/2 text-[18px] tracking-widest text-[#4d4b4b] opacity-0"
          >
            CHANNEL INTEGRATIONS
          </p>

          {/* RIGHT CENTER */}
          <div className="dot absolute right-[-10px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (rightTexts.current[1] = el)}
            className="absolute right-[-278px] top-1/2 -translate-y-1/2 text-[18px] tracking-widest text-[#4d4b4b] opacity-0"
          >
            BRAND AFFINITY INDEX
          </p>

          {/* RIGHT BOTTOM */}
          <div className="dot absolute bottom-[48px] right-[45px]" />
          <p
            ref={(el) => (rightTexts.current[2] = el)}
            className="absolute bottom-[45px] right-[-250px] text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0"
          >
            REGRESSION ANALYTICS
          </p>

          {/* LEFT BOTTOM */}
          <div className="dot absolute bottom-[48px] left-[40px]" />
          <p
            ref={(el) => (leftTexts.current[2] = el)}
            className="absolute bottom-[45px] left-[-250px] text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0"
          >
            CAMPAIGN POSITIONING
          </p>
        </div>
      </div>
    </section>
  );
}
