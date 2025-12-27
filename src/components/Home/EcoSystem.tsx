"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EcoSystem = ({ setColors }: { setColors?: (colors: { fillColor: string; menuIconColor: string }) => void }) => {
  const topBorderRef = useRef(null);
  const heroTextRef = useRef(null);
  const bottomBorderRef = useRef(null);
  const imageRef = useRef(null);
  const midTitleRef = useRef(null);
  const midSubtitleRef = useRef(null);
  const videoTopBorderRef = useRef(null);
  const videoBottomBorderRef = useRef(null);
  const endH3Ref = useRef(null);
  const endPRef = useRef(null);
  const blackSectionRef = useRef(null);
  const leftMaskRef = useRef(null);
  const rightMaskRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blackSecContentRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      if (setColors) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          onEnter: () => {
            setColors({ fillColor: "white", menuIconColor: "white" });
          },
          onEnterBack: () => {
            setColors({ fillColor: "white", menuIconColor: "white" });
          },
          onLeave: () => {
            setColors({ fillColor: "black", menuIconColor: "black" });
          },
          onLeaveBack: () => {
            setColors({ fillColor: "black", menuIconColor: "black" });
          },
        });
      }

      // Top border fade in
      gsap.fromTo(
        topBorderRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: topBorderRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Hero text scale
      gsap.fromTo(
        heroTextRef.current,
        { scale: 0.85 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Bottom border grow
      gsap.fromTo(
        bottomBorderRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: bottomBorderRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Image fade out
      gsap.fromTo(
        imageRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 40%",
            end: "top -40%",
            scrub: true,
          },
        }
      );

      // Mid title scale
      gsap.fromTo(
        midTitleRef.current,
        { scale: 0.9 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: midTitleRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Mid subtitle scale
      gsap.fromTo(
        midSubtitleRef.current,
        { scale: 0.9 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: midSubtitleRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Video top border
      gsap.fromTo(
        videoTopBorderRef.current,
        { height: 0 },
        {
          height: "210px",
          ease: "none",
          scrollTrigger: {
            trigger: videoTopBorderRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );

      // Video bottom border
      gsap.fromTo(
        videoBottomBorderRef.current,
        { height: 0 },
        {
          height: "35.6vh",
          ease: "none",
          scrollTrigger: {
            trigger: videoBottomBorderRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );

      // End H3 scale
      gsap.fromTo(
        endH3Ref.current,
        { scale: 0.88 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: endH3Ref.current,
            start: "top 95%",
            end: "top 70%",
            scrub: true,
          },
        }
      );

      // End P scale
      gsap.fromTo(
        endPRef.current,
        { scale: 0.88 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: endPRef.current,
            start: "top 95%",
            end: "top 70%",
            scrub: true,
          },
        }
      );

      // ✅ CRITICAL FIX: MASK ANIMATION (NOT CLIP-PATH MORPH)
      // Left mask slides in diagonally from left
      gsap.fromTo(
        leftMaskRef.current,
        {
          x: "-100%",
        },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: blackSectionRef.current,
            start: "bottom 130%",
            end: "bottom 110%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        rightMaskRef.current,
        {
          x: "100%",
        },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: blackSectionRef.current,
            start: "bottom 130%",
            end: "bottom 110%",
            scrub: true,
          },
        }
      );

      gsap.to(
        blackSecContentRef.current,
        {
          y: 300,
          ease: "none",
          scrollTrigger: {
            trigger: blackSecContentRef.current,
            start: "top 40%",
            end: "bottom -80%",
            scrub: true,
          },
        }
      );

      
      
    });

    return () => mm.revert();
  }, [setColors]);

  return (
    <div
      ref={sectionRef}
      className="hidden md:block bg-[#E7E4E5] relative md:h-[380vh] lg:h-[370vh]  xl:h-[370vh] overflow-hidden  "
    >
      <div className="w-full min-h-screen">
        {/* Hero section */}
        <div className="w-full h-[92vh] relative bg-black">
          <Image
            ref={imageRef}
            src="/images/ss.png"
            alt=""
            className="md:object-cover lg:object-center z-0"
            fill
            priority
          />
          <div className="absolute w-full h-[88vh] z-10 flex flex-col items-center gap-2">
            <div className="md:h-[40vh] lg:h-[50.6vh] flex items-start">
              <div ref={topBorderRef} className="bg-white w-[0.8px] h-full" />
            </div>
            <p
              ref={heroTextRef}
              className="font5 text-[20px] tracking-wide text-white"
            >
              AN ECOSYSTEM OF CONTENT THAT&apos;S ALWAYS LEARNING AND EVOLVING
            </p>
            <div className="md:h-[28.6vh] flex items-start">
              <div ref={bottomBorderRef} className="bg-white w-[0.8px]" />
            </div>
          </div>
        </div>

        {/* Mid text box */}
        <div className="w-full flex flex-col items-center bg-black ">
          <div className="border border-white w-[620px] h-[168px] flex flex-col justify-center items-center text-white overflow-hidden">
            <p ref={midTitleRef} className="font5">
              THAT BUILDS ON PROPRIETARY
            </p>
            <h3 ref={midSubtitleRef} className="font1 text-[68px] text-nowrap tracking-wide">
              AI OPTIMISATION 
            </h3>
          </div>
        </div>

        {/* Video section */}
        <div className="w-full flex flex-col items-center justify-center relative h-[580px] overflow-visible bg-black z-40 ">
          <div
            ref={videoTopBorderRef}
            className="bg-white w-[0.8px] absolute top-0 z-50"
          />
          <video
            src="https://video.wixstatic.com/video/f415e2_c9b41b05b086461ba2a34848b1c15ca9/720p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[600px] object-center z-20  absolute bottom-[-160px]"
          />
        </div>

        {/* Ending text with MASK REVEAL (not clip-path morph) */}
         <div className=" bg-black relative overflow-hidden pt-[60px] h-[110vh]
          // md:pb-[80vh]  lg:pb-[300px] xl:pb-[50vh] 2xl:pb-[60vh]
          " ref={blackSectionRef}>
          {/* ✅ STATIC TRIANGLE LAYER (ALWAYS A TRIANGLE) */}
        <div
  className="absolute inset-0 bg-black"
  style={{
    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
      top: "-2px",
      left: "-2px",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      transform: "scale(1.01)",
      transformOrigin: "top center",
      backfaceVisibility: "hidden",
      // WebkitBackfaceVisibility: "hidden",
      willChange: "clip-path, transform",
  }}
/>

          
          {/* ✅ LEFT MASK - slides in diagonally */}
          <div 
            ref={leftMaskRef}
            className="absolute inset-0 bg-[#E7E4E5] z-70"
           style={{
      clipPath: "polygon(0% 0%, 20% 0%, 50% 100%, 0% 100%)",
      left: "-2px",
      top: "-2px",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      backfaceVisibility: "hidden",
      // WebkitBackfaceVisibility: "hidden",
      willChange: "transform",
    }}
          />
          
          {/* ✅ RIGHT MASK - slides in diagonally */}
          <div 
            ref={rightMaskRef}
            className="absolute inset-0 bg-[#E7E4E5] z-70"
            style={{
      clipPath: "polygon(80% 0%, 100% 0%, 100% 100%, 50% 100%)",
      right: "-2px",
      top: "-2px",
      width: "calc(100% + 4px)",
      height: "calc(100% + 4px)",
      backfaceVisibility: "hidden",
      // WebkitBackfaceVisibility: "hidden",
      willChange: "transform",
    }}
          />

          {/* Content layer on top */}
          <div className="w-full flex flex-col justify-center items-center gap-4 relative z-50  "
             ref={blackSecContentRef}  
             style={{ isolation: "isolate" }}
             >
            <div className="w-fit h-[35.6vh]">
              <div ref={videoBottomBorderRef} className="bg-white w-[0.8px]" />
            </div>
            <h3
              ref={endH3Ref}
              className="text-white font4 text-[42px] leading-tight tracking-tight text-center"
            >
              DRIVING ENGAGEMENT AT ALL <br /> STAGES OF THE FUNNEL
            </h3>
            <p
              ref={endPRef}
              className="font5 font-semibold text-white/80 text-[16px] tracking-wide mt-2"
            >
              FOR A UNIQUE CUSTOMER EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;