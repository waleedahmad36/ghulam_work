"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TalentGallery = () => {
  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/talent${i + 1}.avif`
  );
    const upperBorderRef = useRef<HTMLDivElement>(null);
    const lowerBorderRef = useRef<HTMLDivElement>(null);
    const awardTextRef = useRef<HTMLParagraphElement>(null);
    const executionTextRef = useRef<HTMLParagraphElement>(null);

  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.85, y: 10 },
      {
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 76%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
        upperBorderRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: upperBorderRef.current,
            start: "top 90%",
            end: "top 46%",
            scrub: 1,
          },
        }
      );

       gsap.fromTo(
      awardTextRef.current,
      { scale: 0.85, y: 10 },
      {
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: awardTextRef.current,
          start: "top 76%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      executionTextRef.current,
      { scale: 0.85, y: 10 },
      {
        scale: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: executionTextRef.current,
          start: "top 76%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

        gsap.fromTo(
        lowerBorderRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: lowerBorderRef.current,
            start: "top 78%",
            end: "top 42%",
            scrub: 1,
          },
        }
      );
  }, []);

  return (
   <>
   <TelantTop/>
    <div className="hidden w-full lg:grid lg:grid-cols-5 overflow-hidden mt-4 relative">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-[20vw] h-[170px] relative bg-black"
        >
          <Image
            src={src}
            alt={`Talent ${index + 1}`}
            fill
            className=" object-center opacity-55 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
          />
        </div>
      ))}

      <p
        ref={textRef}
        className="font5 absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        text-white text-[21px] text-nowrap tracking-[1px] pointer-events-none"
      >
        THE FACES OF OUR RECENT CAMPAIGNS
      </p>
    </div>
    <div className="h-[22vh] flex items-start">
        <div
          ref={upperBorderRef}
          className="bg-black w-[0.9px]"
          style={{ height: 0 }}
        />
      </div>
      <p  className="font5 text-[18px]"   ref={awardTextRef} >
        AWARD-WINNING
      </p>
      <p  className="font4 text-[68px] "  ref={executionTextRef}  >EXECUTION</p>
      <div className="h-[22vh] flex items-start">
        <div
          ref={lowerBorderRef}
          className="bg-black w-[0.9px]"
          style={{ height: 0 }}
        />
      </div>
   </>
  );
};

export default TalentGallery;


const TelantTop = ()=> {
    return (
        <>
          <div className="w-12 h-12 flex justify-center items-center mt-2 mb-3 rounded-full border text-[30px] font5 border-black">
                3
              </div>
        
              <h3 className="text-[52px]  font4 tracking-tight">TALENT ACQUISITION</h3>
              <div className="flex items-center gap-5 font5 my-2 text-[16px]">
                <p>NEGOTIATION</p>
                <ArrowRight />
                <p>PAYROLL</p>
                <ArrowRight />
                <p>RESIDUALS</p>
              </div>
              <p className="font2 mb-1 text-[34px]">ALL IN-HOUSE</p>
        </>
    )
}


const ArrowRight = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      data-bbox="21.1 72.3 158.1 49.8"
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="20"
      viewBox="21.1 72.3 158.1 49.8"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <g>
        <path d="M154.8 72.3l-2 2L174 94.9 21.1 95v2.7l153-.1-22.2 22.5 1.9 2 25.4-25.8-24.4-24z"></path>
      </g>
    </svg>
  );
};
