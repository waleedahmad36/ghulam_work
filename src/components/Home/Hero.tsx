"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroLeftBranding from "./HeroLeftBranding";
import HeroRightBranding from "./HeroRightBranding";
import gsap from "gsap";
import Logo from "./Logo";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const imageWrap = container.querySelector(".hero-image-wrap");
    const videoEl = container.querySelector("video");
    const logoWrap = container.querySelector(".hero-logo-wrap");
    const heading = container.querySelector(".hero-heading");
    const subText = container.querySelector(".hero-subtext");
    const arrowWrap = container.querySelector(".hero-arrow-wrap");

    const tl = gsap.timeline({
      defaults: { ease: "none" }, // 🚨 critical
    });

    /* -------------------------------------------------
       IMAGE → VIDEO TRANSITION
    -------------------------------------------------- */
    if (imageWrap && videoEl) {
      gsap.set(imageWrap, {
        scale: 1,
        opacity: 1,
        transformOrigin: "50% 50%",
        zIndex: 20,
      });

      gsap.set(videoEl, { opacity: 0 });

      // IMAGE SCALE
      tl.to(imageWrap, {
        scale: 0,
        duration: 0.9,
        ease: "power3.inOut",
        onUpdate: () => {
          const progress = gsap.getProperty(imageWrap, "scale") as number;
          gsap.set(imageWrap, { opacity: progress * 1.2 });

          // Fade in video near end
          if (progress < 0.05) {
            gsap.to(videoEl, { opacity: 1, duration: 0.3, ease: "power2.out" });
          }
        },
      });
    }

    /* -------------------------------------------------
       CONTENT SEQUENCE (LOGO → HEADING → SUBTEXT → ARROW)
    -------------------------------------------------- */
    const contentDelay = 1.3; // after image/video animation

    if (logoWrap) {
      gsap.set(logoWrap, { opacity: 0, y: 12 });
      tl.fromTo(
        logoWrap,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        `+=${contentDelay}`
      );
    }

    if (heading) {
      gsap.set(heading, { opacity: 0, y: 12 });
      tl.fromTo(
        heading,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" },
        "-=0.15"
      );
    }

    if (subText) {
      gsap.set(subText, { opacity: 0, y: 12 });
      tl.fromTo(
        subText,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        "-=0.25"
      );
    }

    if (arrowWrap) {
      gsap.set(arrowWrap, { opacity: 0, y: -8 });
      tl.fromTo(
        arrowWrap,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.65, ease: "none" },
        "-=0.25"
      );
    }

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[102vh] relative flex justify-center items-start overflow-hidden"
    >
      {/* IMAGE */}
      <div className="hero-image-wrap absolute inset-0 z-20">
        <Image src="/hero.avif" alt="" fill className="object-cover" />
      </div>

      {/* VIDEO */}
      <video
        src="/file.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* CONTENT */}
      <div className="relative h-screen z-30 flex flex-col justify-center items-center w-full">
        <div className="relative text-center flex flex-col gap-6 px-2 lg:px-0">
          <div className="hero-logo-wrap w-60 flex justify-center mx-auto">
            <Logo width={60} />
          </div>

          <h1 className="hero-heading badoni text-3xl lg:text-[80px] max-w-6xl font-extrabold">
            <span className="tracking-tight">
              BIG MOMENTS FOR<br/> DISRUPTIVE BRANDS
            </span>
          </h1>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-7">
          <span className="hero-subtext text-[14px] text-[#b4b0b0] mt-8 text-center tracking-wider shadow-2xl">
            EXPLORE OUR ONE OF A KIND APPROACH
          </span>

          <div className="hero-arrow-wrap">
            <ArrowDown />
          </div>
        </div>

        <div className="hidden lg:block absolute left-9 z-40 w-fit">
          <HeroLeftBranding />
        </div>

        <div className="hidden lg:block absolute right-9 z-40 w-fit">
          <HeroRightBranding />
        </div>
      </div>
    </div>
  );
};

export default Hero;

/* Arrow */
export const ArrowDown = () => (
  <svg fill="white" viewBox="46.141 20.63 107.717 158.741" height="40" width="40">
    <path d="m153.858 130.731-53.857 48.64-53.86-48.64 1.804-1.944 50.722 45.809V20.63h2.669v153.965l50.719-45.809 1.803 1.945z" />
  </svg>
);
