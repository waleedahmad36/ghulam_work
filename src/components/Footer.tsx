"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useHeaderContext } from "@/context/useHeaderContext";
import Link from "next/link";

export default function BoathouseCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const { setColors } = useHeaderContext();


  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const button = buttonRef.current;
    const links = linksRef.current;

    if (!section || !heading || !button || !links) return;

    // ✅ GSAP timeline (paused until in view)
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    // ✅ Heading entrance
    tl.fromTo(
      heading,
      { y: 40, scale: 0.9, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.9 }
    );

    // ✅ Button opacity only (no y)
    tl.fromTo(
      button,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      "-=0.4"
    );

    // ✅ Button border draw effect
    tl.fromTo(
      button,
      { "--border-progress": "0%" },
      {
        "--border-progress": "100%",
        duration: 0.8,
        ease: "power2.out",
        onUpdate: () => {
          const p = getComputedStyle(button).getPropertyValue("--border-progress");
          button.style.setProperty(
            "clip-path",
            `inset(0 0 calc(100% - ${p}) 0 round 999px)`
          );
        }
      },
      "-=0.5"
    );

    // ✅ Links entrance
    tl.fromTo(
      links,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );

    // ✅ Intersection Observer (play once)
   const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // ✅ CTA entered → header BLACK
        setColors({ fillColor: "black", menuIconColor: "black" });
        tl.play();
      } else {
        // ✅ CTA left (scroll back) → header WHITE
        setColors({ fillColor: "white", menuIconColor: "white" });
      }
    });
  },
  { threshold: 0.3 }
);


    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[632px] bg-black text-white font-sans overflow-hidden"
    >
      <div className="flex flex-col items-center h-full text-center z-40 relative pt-14">
        <h1
          ref={headingRef}
          className="text-[48px] sm:text-[68px] leading-tight  lg:text-[100px] font-bold  lg:leading-[120px] text-center  font4"
        >
          NOW IT’S <br /> YOUR MOVE
        </h1>

        {/* ✅ Button with border animation support */}
      <Link  href="/contacts" >
      <button
          ref={buttonRef}
          style={{ "--border-progress": "0%" } as any}
          className="border border-white text-white text-[20px] tracking-wide transition-all duration-300 rounded-full w-[202px] h-[46px] relative overflow-hidden font5 mt-2 lg:mt-0"
        >
          CONTACT US
        </button>
    </Link>

        <div
          ref={linksRef}
          className="flex flex-col md:flex-row gap-6 mt-4 text-[16px] tracking-wide font5"
        >
          <Link href="/case-studies" className="hover:text-[20px] transition-all duration-300">
            CASE STUDIES
          </Link>
          <a href="#" className="hover:text-[20px] transition-all duration-300">
            PRESS
          </a>
        </div>

        <div className="absolute bottom-8 flex flex-col gap-12  items-center text-[14px] text-white/70 font5">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[120px] font-bold mb-1 relative">
            <Image
              src="/images/bl.avif"
              alt=""
              fill
              className="object-center z-40"
            />
          </div>
          <div  className="font5" >© 2023 BH MEDIA HOLDINGS, LLC.</div>
        </div>
      </div>
    </section>
  );
}

