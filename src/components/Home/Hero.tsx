"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "./Logo";
import HeroLeftBranding from "./HeroLeftBranding";
import HeroRightBranding from "./HeroRightBranding";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // select nodes
    const videoEl = container.querySelector("video");
    const logoWrap = container.querySelector(".hero-logo-wrap");
    const heading = container.querySelector(".hero-heading");
    const subText = container.querySelector(".hero-subtext");
    const arrowWrap = container.querySelector(".hero-arrow-wrap");

    // create timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 0.5s delay then fade in video
    tl.to(videoEl, { opacity: 1, duration: 0.8 }, "+=0.5");

    // small staggered sequence:
    // logo -> heading -> subtext -> arrow (arrow moves top -> down slightly)
    tl.to(logoWrap, { opacity: 1, y: 0, duration: 0.5 }, "+=0.08");
    tl.to(heading, { opacity: 1, y: 0, duration: 0.6 }, "+=0.12");
    tl.to(subText, { opacity: 1, y: 0, duration: 0.5 }, "+=0.12");
    tl.to(
      arrowWrap,
      {
        opacity: 1,
        y: 0, // final position
        duration: 0.6,
        // starting y is -8 via initial style, animate to 0 -> top-to-bottom subtle motion
      },
      "+=0.08"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative flex justify-center items-center">
      {/* Background Image (unchanged) */}
      <div className="absolute inset-0">
        <Image src="/hero.avif" alt="" fill className="relative" />
      </div>

      {/* Video - initially hidden via inline style (opacity:0) */}
      <video
        src="/file.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ opacity: 0 }} // start hidden to avoid flash
      />

      {/* Overlay (unchanged) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Center content - keep markup but wrap to control initial hidden state */}
      <div className="relative z-30 text-center flex justify-center items-center flex-col gap-6 px-2 lg:px-0">
        {/* Logo wrapper: hidden by default (opacity 0) and slight y offset so animation is visible */}
        <div
          className="hero-logo-wrap"
          style={{ opacity: 0, transform: "translateY(0px)" /* gsap will animate y */ }}
        >
          <Logo />
        </div>

        {/* Heading: hidden by default and slightly shifted up so animation brings it in */}
        <h1
          className="hero-heading wix text-3xl lg:text-7xl max-w-6xl font-extrabold tracking-wider"
          style={{ opacity: 0, transform: "translateY(0px)" }}
        >
          <span className="wixui-rich-text__text ">BIG MOMENTS FOR DISRUPTIVE BRANDS</span>
        </h1>
      </div>

      {/* Subtext and Arrow are separate elements and both hidden by default */}
      <div className="flex flex-col items-center gap-1 absolute bottom-6">
        <span
          className="hero-subtext text-2xl text-slate-300 mt-8 mx-2 lg:mx-0 text-center"
          style={{ opacity: 0, transform: "translateY(0px)" }}
        >
          EXPLORE OUR ONE OF A KIND APPROACH
        </span>

        {/* Arrow wrapper: start slightly above (y: -8) and opacity 0 so it moves down to its place */}
        <div
          className="hero-arrow-wrap"
          style={{ opacity: 0, transform: "translateY(-8px)" }}
        >
          <ArrowDown />
        </div>
      </div>

      {/* Side Brandings unchanged */}
      <div className="hidden lg:block z-40 absolute left-0">
        <HeroLeftBranding />
      </div>
      <div className="hidden lg:block z-40 absolute right-0">
        <HeroRightBranding />
      </div>
    </div>
  );
};

export default Hero;

/* ArrowDown kept inside same file for simplicity (unchanged path), ensures arrow renders */
export const ArrowDown = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      fill="white"
      data-bbox="46.141 20.63 107.717 158.741"
      viewBox="46.141 20.63 107.717 158.741"
      height="50"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <g>
        <path d="m153.858 130.731-53.857 48.64-53.86-48.64 1.804-1.944 50.722 45.809V20.63h2.669v153.965l50.719-45.809 1.803 1.945z"></path>
      </g>
    </svg>
  );
};
