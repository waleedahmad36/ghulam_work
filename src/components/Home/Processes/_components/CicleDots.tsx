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
         TOP TEXT – subtle fade in
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
         RIGHT SIDE TEXTS – fade early
      -------------------------------- */
      rightTexts.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
      });

      /* --------------------------------
         LEFT SIDE SEQUENCE (STICKY PHASE)
         ORDER MUST MATCH REF:
         1. Campaign Positioning
         2. Channel Integrations
         3. KPI Targets
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
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: "power2.out" }
      )
        .fromTo(
          leftTexts.current[1],
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, ease: "power2.out" }
        )
        .fromTo(
          leftTexts.current[0],
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, ease: "power2.out" }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  


  return (
    <section
      ref={sectionRef}
      className="relative w-full hidden lg:flex justify-center min-h-[220vh]"
    >
      {/* STICKY WRAPPER (REFERENCE STYLE) */}
      <div
        ref={circleWrapRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: "400px",
            height: "400px",
            border: "1px solid #bfbfbf",
          }}
        >
          {/* CENTER TITLE */}
          <h3 className="text-4xl font-serif font-bold tracking-wide">
            THE STRATEGY
          </h3>

          {/* TOP */}
          <div className="dot absolute top-[-10px] left-1/2 -translate-x-1/2" />
          <p
            ref={topTextRef}
            className="absolute top-[-45px] left-1/2 -translate-x-1/2 text-[20px] tracking-widest text-gray-500 opacity-0 whitespace-nowrap"
          >
            CONSUMER PSYCHOGRAPHICS
          </p>

          {/* RIGHT TOP */}
          <div className="dot absolute top-[48px] right-[45px]" />
          <p
            ref={(el) => (rightTexts.current[0] = el)}
            className="absolute top-[45px] right-[-300px] text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            COMPETITION RESEARCH
          </p>

          {/* LEFT TOP */}
          <div className="dot absolute top-[48px] left-[50px]" />
          <p
            ref={(el) => (leftTexts.current[0] = el)}
            className="absolute top-[48px] left-[-130px] text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            KPI TARGETS
          </p>

          {/* LEFT CENTER */}
          <div className="dot absolute left-[-10px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (leftTexts.current[1] = el)}
            className="absolute left-[-340px] top-1/2 -translate-y-1/2 text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            CHANNEL INTEGRATIONS
          </p>

          {/* RIGHT CENTER */}
          <div className="dot absolute right-[-10px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (rightTexts.current[1] = el)}
            className="absolute right-[-320px] top-1/2 -translate-y-1/2 text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            BRAND AFFINITY INDEX
          </p>

          {/* RIGHT BOTTOM */}
          <div className="dot absolute bottom-[48px] right-[45px]" />
          <p
            ref={(el) => (rightTexts.current[2] = el)}
            className="absolute bottom-[45px] right-[-300px] text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            REGRESSION ANALYTICS
          </p>

          {/* LEFT BOTTOM */}
          <div className="dot absolute bottom-[48px] left-[40px]" />
          <p
            ref={(el) => (leftTexts.current[2] = el)}
            className="absolute bottom-[45px] left-[-300px] text-[20px] tracking-widest text-gray-500 opacity-0"
          >
            CAMPAIGN POSITIONING
          </p>
        </div>
      </div>
    </section>
  );
}
