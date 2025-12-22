"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import RevealVideoOnScrollSection from "./_components/RevealVideoOnScrollSection";
import MaskSection from "./_components/MaskSection";
import DigitalSection from "./_components/DigitalSection";
import OohAndInfluencerSection from "./_components/OohAndInfluencerSection";
import ExperiencesSection from "./_components/ExperiencesSection";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalRevealWrapper() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !maskRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current!;
      const mask = maskRef.current!;
      const track = trackRef.current!;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const getVW = () => window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      window.__HORIZONTAL_TL__ = tl;


      // SECTION 1: Mask shrink
      tl.fromTo(
        mask,
        { width: "100%" },
        {
          width: "0%",
          ease: "none",
          duration: 1,
        }
      );

      // SECTION 2: Reveal video
      tl.to(track, {
        x: () => -getVW(),
        ease: "none",
        duration: 1,
      });

      // SECTION 3: Digital
      tl.to(track, {
        x: () => -getVW() * 2,
        ease: "none",
        duration: 1,
      });

      // SECTION 4: OOH + Influencer
      tl.to(track, {
        x: () => -getVW() * 3,
        ease: "none",
        duration: 1,
      });

      // SECTION 5: Experiences
      tl.to(track, {
        x: () => -getVW() * 4,
        ease: "none",
        duration: 1,
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="hidden lg:block relative h-screen w-full overflow-hidden bg-[#EEEEEE]"
    >
      {/* SECTION 1 MASK */}
      <div ref={maskRef} className="absolute inset-0 overflow-hidden z-20 pointer-events-none ">
        <div  className="w-screen h-full" >
           <MaskSection />
        </div>
      </div>

      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="relative h-screen flex"
        style={{ width: "500dvw" }}
      >
        <RevealVideoOnScrollSection />
        <DigitalSection />
        <OohAndInfluencerSection />
        <ExperiencesSection />
      </div>
    </section>
  );
}