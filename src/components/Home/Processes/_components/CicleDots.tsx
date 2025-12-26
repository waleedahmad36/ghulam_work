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
            start: "top 75%",
            end: "top 45%",
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
      className="relative w-full hidden md:flex justify-center min-h-[210vh]"
    >
      <div
        ref={circleWrapRef}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <div
          className="relative top-3 flex items-center justify-center rounded-full mt-12
          w-[390px] h-[390px] xl:w-[450px] xl:h-[450px]"
          style={{
            border: "1px solid #000000",
          }}
        >
          <h3 className="text-[50px] xl:text-[60px]  font4 text-nowrap font-bold tracking-tight">
            THE STRATEGY
          </h3>

          {/* TOP */}
          <div className="dot absolute top-[-10px] left-1/2 -translate-x-1/2" />
          <p
            ref={topTextRef}
            className="absolute top-[-45px] left-1/2 -translate-x-1/2 md:text-[16px] lg:text-[18px] tracking-widest text-[#656363] font-light opacity-0 whitespace-nowrap"
          >
            CONSUMER PSYCHOGRAPHICS
          </p>

          {/* RIGHT TOP */}
          <div className="dot absolute top-[48px] right-[50px] xl:right-[60px]" />
          <p
            ref={(el) => (rightTexts.current[0] = el)}
            className="absolute top-[45px] md:right-[-230px]  lg:right-[-250px] md:text-[16px] lg:text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0"
          >
            COMPETITION RESEARCH
          </p>

          {/* LEFT TOP */}
          <div className="dot absolute top-[48px] left-[50px] xl:left-[60px]" />
          <p
            ref={(el) => (leftTexts.current[0] = el)}
            className="absolute top-[48px] md:left-[-120px] lg:left-[-130px] md:text-[16px] lg:text-[18px] tracking-widest text-[#4d4b4b] opacity-0 font-light"
          >
            KPI TARGETS
          </p>

          {/* LEFT CENTER */}
          <div className="dot absolute  left-[-8px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (leftTexts.current[1] = el)}
            className="absolute md:left-[-275px] lg:left-[-300px] top-1/2 -translate-y-1/2 md:text-[16px] lg:text-[18px] tracking-widest text-[#4d4b4b] opacity-0"
          >
            CHANNEL INTEGRATIONS
          </p>

          {/* RIGHT CENTER */}
          <div className="dot absolute right-[-8px] top-1/2 -translate-y-1/2" />
          <p
            ref={(el) => (rightTexts.current[1] = el)}
            className="absolute  md:right-[-258px] lg:right-[-278px] top-1/2 -translate-y-1/2 md:text-[16px] lg:text-[18px] tracking-widest text-[#4d4b4b] opacity-0"
          >
            BRAND AFFINITY INDEX
          </p>

          {/* RIGHT BOTTOM */}
          <div className="dot absolute bottom-[48px] right-[50px] xl:right-[60px]" />
          <p
            ref={(el) => (rightTexts.current[2] = el)}
            className="absolute bottom-[45px]
            md:right-[-230px]
            lg:right-[-250px] md:text-[16px] lg:text-[18px] tracking-widest text-[#4d4b4b] font-light opacity-0"
          >
            REGRESSION ANALYTICS
          </p>

          {/* LEFT BOTTOM */}
          <div className="dot absolute bottom-[48px] left-[50px] xl:left-[60px]" />
          <p
            ref={(el) => (leftTexts.current[2] = el)}
            className="absolute bottom-[45px] 
            md:left-[-245px]
            lg:left-[-270px] md:text-[16px] lg:text-[18px] tracking-[2px] text-[#4d4b4b] font-light opacity-0"
          >
            CAMPAIGN POSITIONING
          </p>
        </div>
      </div>
    </section>
  );
}
