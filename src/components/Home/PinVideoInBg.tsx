"use client";

import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PinVideoInBg = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Get all text sections
    const sections = container.querySelectorAll('.text-section');

    // Fade in animation for each section as it scrolls into view
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.3, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });

    // Control video visibility based on container position
    ScrollTrigger.create({
      trigger: container,
      start: "top 30%",
      end: "bottom top",
      onEnter: () => gsap.to(video, { opacity: 1, duration: 0.3 }),
      onLeave: () => gsap.to(video, { opacity: 0, duration: 0.3 }),
      onEnterBack: () => gsap.to(video, { opacity: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(video, { opacity: 0, duration: 0.3 }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className='w-full min-h-[500vh] relative flex flex-col justify-start px-24 gap-[80vh] py-40 overflow-hidden'>
      
      <div className='text-section relative z-10 text-center flex flex-col items-center justify-center'>
        <span className="text-6xl wix text-white">A GLOBAL 360° <br/>CREATIVE&nbsp;</span>
        <span className="text-5xl font-bold text-white">&nbsp;AGENCY   x  STUDIO</span>
        <p className="font_7 wixui-rich-text__text text-white">SPARKING STAGGERING BRAND MOVEMENTS IN ASTONISHING WAYS</p>
      </div>
      
      <div className='text-section relative z-10 text-center flex flex-col items-center justify-center'>
        <h3><span className="text-2xl shadow-2xl font-extrabold text-white">"Staying on budget, while ensuring quality, The Boathouse <br/> boosted my target KPIs by 10x in the past year."</span></h3>
        <p className="text-slate-200">OLLIE CMO</p>
      </div>
      
      <div className='text-section relative z-10 text-center flex flex-col items-end justify-center'>
        <div>
          <span className="text-2xl shadow-2xl font-extrabold text-white">"A one of a kind process with unparalleled results."</span>
          <p className="text-slate-200 text-center">RXSENSE | PRESIDENT + CMO</p>
        </div>
      </div>
      
      <div className='text-section relative z-10 text-center hidden md:flex flex-col lg:items-start justify-center'>
        <div>
          <h3 className="md:max-w-4xl xl:max-w-5xl"><span className="text-2xl shadow-2xl font-extrabold text-white ">"The Boathouse&nbsp;is&nbsp;our&nbsp;creative agency&nbsp;Navy Seals, who find a way to get it done in an exceptional manner when no one else could."</span></h3>
          <p className="text-slate-200">APPLE | COMMUNICATIONS &amp; BRAND MARKETING</p>
        </div>
      </div>
      
      <div className='text-section relative z-10 text-center flex flex-col items-end justify-center'>
        <div>
          <h3 className="font_3 wixui-rich-text__text md:max-w-4xl xl:max-w-5xl"><span className="text-2xl shadow-2xl font-extrabold text-white">"They're like nothing I've ever experienced with other agency partners."</span></h3>
          <p className="text-slate-200">APPLE | COMMUNICATIONS &amp; BRAND MARKETING</p>
        </div>
      </div>

      <video
        ref={videoRef}
        src="/pinVideo.mp4"
        autoPlay    
        muted
        loop
        className="w-full h-screen object-cover fixed top-0 left-0 -z-10 opacity-0"
      />
    </div>
  );
};

export default PinVideoInBg;