"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExecutionPinVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pinnedBlockRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const pinnedBlock = pinnedBlockRef.current;
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const line = lineRef.current;

    if (!container || !video || !pinnedBlock || !heading || !subheading || !line) {
      return;
    }

    const ctx = gsap.context(() => {
      const triggers: ScrollTrigger[] = [];
      const tweens: gsap.core.Tween[] = [];

      // ✅ Pin the video only (your original ranges, so it unpins correctly)
      const pinVideo = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: video,
        pinSpacing: false,
        anticipatePin: 1,
      });
      triggers.push(pinVideo);

      // ✅ Pin the block: circle + welcome + heading (same as yours)
      const pinBlock = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: pinnedBlock,
        pinSpacing: false,
        anticipatePin: 1,
      });
      triggers.push(pinBlock);

      // ✅ Heading scale (keep your feel, just slightly smoother if needed)
      const headingScale = gsap.fromTo(
        heading,
        { scale: 0.74 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top+=10% 95%",
            end: "top center",
            scrub: 1.6,
          },
        }
      );
      tweens.push(headingScale);

      // ✅ Subheading: small → rise → scale (same timing window)
      const subRise = gsap.fromTo(
        subheading,
        { scale: 0.65, y: 60, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top+=20% center",   // your original timing
            end: "top+=40% center",     // just reused
            scrub: true,
          },
        }
      );
      tweens.push(subRise);

      // ✅ Subheading stays alive after reaching position
      const subPulse = gsap.to(subheading, {
        scale: 1.12,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container,
          start: "top+=40% center",     // right after its initial settle
          end: "bottom-=10% center",    // continues into natural scroll
          scrub: 1.2,
        },
      });
      tweens.push(subPulse);

      // ✅ Vertical line grow from center (same timing, different technique)
      // parent div already has fixed height (23vh), so we animate scaleY.
      const lineGrow = gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top+=40% center",   // your original timing
            end: "bottom center",
            scrub: true,
          },
        }
      );
      tweens.push(lineGrow);

      ScrollTrigger.refresh();

      return () => {
        tweens.forEach((tw) => tw.kill());
        triggers.forEach((st) => st.kill());
      };
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[140vh] relative flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Pinned Video */}
      <video
        ref={videoRef}
        src="/videos/pinVideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      />

      {/* Pinned Block: Circle + Welcome + Heading */}
      <div
        ref={pinnedBlockRef}
        className="relative -top-8 z-40 h-screen w-full flex flex-col items-center justify-center text-center"
      >
        <div className="w-12 h-12 flex justify-center items-center mt-16 mb-2 rounded-full border border-white text-white text-[20px] font-medium">
          4
        </div>

        <p className="text-white text-[18px] md:text-[22px] font5 tracking-widest mb-2">
          WELCOME TO
        </p>

        <h3
          ref={headingRef}
          className="font4 text-white leading-[75px] text-[68px] md:text-[50px] lg:text-[68px] tracking-tight "
        >
          THE BOATHOUSE
          <br />
          STUDIO
        </h3>
      </div>

      {/* Subheading + Line */}
      <div className="relative z-30 flex flex-col items-center justify-start mt-[10vh]">
        <p
          ref={subheadingRef}
          className="text-white text-[20px] md:text-[20px] font5 tracking-widest mt-8"
        >
          MAKING THE IMPOSSIBLE POSSIBLE – ON BUDGET
        </p>

        <div className="h-[21.2vh] flex items-start mt-4">
          {/* ✅ NOTE: added h-full so scaleY works from center over full height */}
          <div ref={lineRef} className="bg-white w-[0.9px] h-full" />
        </div>
      </div>
    </div>
  );
}

