"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroLeftBranding from "./HeroLeftBranding";
import HeroRightBranding from "./HeroRightBranding";
import gsap from "gsap";
import Logo from "./Logo";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // select nodes (may be null)
    const videoEl = container.querySelector("video");
    const logoWrap = container.querySelector(".hero-logo-wrap");
    const heading = container.querySelector(".hero-heading");
    const subText = container.querySelector(".hero-subtext");
    const arrowWrap = container.querySelector(".hero-arrow-wrap");

    // ---- Remove debug outline: do NOT apply any debug styles here ----
    // Ensure wrapper visible and sized so Logo doesn't collapse
    if (logoWrap) {
      logoWrap.style.zIndex = "60";
      logoWrap.style.opacity = "1";
      logoWrap.style.position = logoWrap.style.position || "relative";
      logoWrap.style.display = logoWrap.style.display || "inline-block";
      // IMPORTANT: clear any debug/outline left from earlier runs
      logoWrap.style.outline = "";
      logoWrap.style.border = ""; 
      // Force svg/img to display if present so wrapper gets size
      const svgs = logoWrap.querySelectorAll("svg");
      if (svgs.length) {
        svgs.forEach((s) => {
          s.style.display = s.style.display || "block";
          s.setAttribute("aria-hidden", "true");
          try {
            s.querySelectorAll("path, circle, rect, g").forEach((shape) => {
              if (!shape.getAttribute("fill")) shape.setAttribute("fill", "#fff");
              if (shape.getAttribute("stroke")) shape.setAttribute("stroke", "none");
            });
          } catch (e) {
            // ignore
          }
        });
      } else {
        const imgs = logoWrap.querySelectorAll("img");
        if (imgs.length) {
          imgs.forEach((img) => {
            img.style.display = "block";
          });
        }
      }
    }

    // Build timeline safely: only add tweens for elements that exist
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Add video fade only if video exists
    if (videoEl) {
      gsap.set(videoEl, { opacity: 0 });
      tl.to(videoEl, { opacity: 1, duration: 0.8 }, "+=0.5");
    } else {
      tl.to({}, { duration: 0.5 });
    }

    // Logo tween (only if present)
    if (logoWrap) {
      gsap.set(logoWrap, { opacity: 0, y: 12 });
      tl.fromTo(logoWrap, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "+=0.08");
    }

    // Heading
    if (heading) {
      gsap.set(heading, { opacity: 0, y: 12 });
      tl.fromTo(heading, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, "+=0.12");
    }

    // Sub text
    if (subText) {
      gsap.set(subText, { opacity: 0, y: 12 });
      tl.fromTo(subText, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "+=0.12");
    }

    // Arrow
    if (arrowWrap) {
      gsap.set(arrowWrap, { opacity: 0, y: -8 });
      tl.fromTo(arrowWrap, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.6 }, "+=0.08");
    }

    // cleanup
    return () => {
      tl.kill();
      // also clear any leftover outline just in case
      if (logoWrap) {
        logoWrap.style.outline = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[102vh] relative flex justify-center items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/hero.avif" alt="" fill className="relative" />
      </div>

      {/* Video - initially hidden via inline style (opacity:0) */}
      <video
        src="/file.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        style={{ opacity: 0 }}
      />

      {/* Center content */}
      <div className="relative z-30 text-center flex justify-center items-center flex-col gap-6 px-2 lg:px-0">
        {/* Logo wrapper — keep sizing so it doesn't collapse (no debug outline) */}
        <div className="hero-logo-wrap w-48" style={{ opacity: 0, transform: "translateY(12px)" }}>
          <Logo width={48} />
        </div>

        {/* Heading */}
        <h1
          className="hero-heading playfair text-3xl lg:text-7xl max-w-6xl font-extrabold tracking-normal leading-22"
          style={{ opacity: 0, transform: "translateY(12px)" }}
        >
          <span className=" leading-0.5 ">BIG MOMENTS FOR DISRUPTIVE BRANDS</span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-1 absolute bottom-12">
        <span
          className="hero-subtext text-[18.44px] text-slate-300 mt-8 mx-2 lg:mx-0 text-center tracking-wide font-bold"
          style={{ opacity: 0, transform: "translateY(12px)" }}
        >
          EXPLORE OUR ONE OF A KIND APPROACH
        </span>

        <div className="hero-arrow-wrap" style={{ opacity: 0, transform: "translateY(-8px)" }}>
          <ArrowDown />
        </div>
      </div>

      {/* Side Brandings unchanged */}
      <div className="hidden lg:block z-40 absolute -left-5">
        <HeroLeftBranding />
      </div>
      <div className="hidden lg:block z-40 absolute -right-5">
        <HeroRightBranding />
      </div>
    </div>
  );
};

export default Hero;

/* ArrowDown */
export const ArrowDown = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      fill="white"
      data-bbox="46.141 20.63 107.717 158.741"
      viewBox="46.141 20.63 107.717 158.741"
      height="40"
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
