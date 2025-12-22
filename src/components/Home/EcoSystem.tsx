"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EcoSystem = () => {
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

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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

      gsap.fromTo(
        videoTopBorderRef.current,
        { height: 0 },
        {
          height: "32.6vh",
          ease: "none",
          scrollTrigger: {
            trigger: videoTopBorderRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );

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

      gsap.fromTo(
        endH3Ref.current,
        { scale: 0.88 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: endH3Ref.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        endPRef.current,
        { scale: 0.88 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: endPRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // V-NOTCH CLIP PATH
      gsap.fromTo(
        blackSectionRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(20% 0%, 80% 0%, 50% 100%, 50% 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: blackSectionRef.current,
            start: "bottom 120%",
            end: "bottom 100%",
            scrub: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        blackSectionRef.current,
        { paddingBottom: "50vh" },
        {
          paddingBottom: "20vh",
          ease: "none",
          scrollTrigger: {
            trigger: blackSectionRef.current,
            start: "bottom 110%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    });

    // ✅ Only one cleanup
    return () => mm.revert();
  }, []);

  return (
    <div className="hidden lg:block bg-[#E7E4E5] relative h-[350vh] overflow-hidden">
      <div className="w-full min-h-screen">
        {/* Hero section */}
        <div className="w-full h-[92vh] relative bg-black">
          <Image
            ref={imageRef}
            src="/images/ss.png"
            alt=""
            className="object-center z-0"
            fill
            priority
          />
          <div className="absolute w-full h-[88vh] z-10 flex flex-col items-center gap-2">
            <div className="lg:h-[50.6vh] flex items-start">
              <div ref={topBorderRef} className="bg-white w-[0.8px] h-full" />
            </div>
            <p
              ref={heroTextRef}
              className="font5 text-[20px] tracking-wide text-white"
            >
              AN ECOSYSTEM OF CONTENT THAT&apos;S ALWAYS LEARNING AND EVOLVING
            </p>
            <div className="lg:h-[28.6vh] flex items-start">
              <div ref={bottomBorderRef} className="bg-white w-[0.8px]" />
            </div>
          </div>
        </div>

        {/* Mid text box */}
        <div className="w-full flex flex-col items-center bg-black ">
          <div className="border border-white w-[600px] h-[158px] flex flex-col justify-center items-center text-white">
            <p ref={midTitleRef} className="font5">
              AI OPTIMISATION
            </p>
            <h3 ref={midSubtitleRef} className="font4 text-[32px]">
              THAT BUILDS ON PROPRIETARY
            </h3>
          </div>
        </div>

        {/* Video section */}
        <div className="w-full flex flex-col items-center justify-center relative h-screen overflow-hidden bg-black">
          <div
            ref={videoTopBorderRef}
            className="bg-white w-[0.8px] absolute top-0 z-10"
          />
          <video
            src="https://video.wixstatic.com/video/f415e2_c9b41b05b086461ba2a34848b1c15ca9/720p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[94vh] translate-y-[18vh] object-center relative"
          />
        </div>

        {/* Ending text */}
        <div className="pb-[50vh] bg-black" ref={blackSectionRef}>
          <div className="w-full flex flex-col justify-center items-center gap-4 bg-black">
            <div className="w-fit h-[35.6vh]">
              <div
                ref={videoBottomBorderRef}
                className="bg-white w-[0.8px]"
              />
            </div>
            <h3
              ref={endH3Ref}
              className="text-white font4 text-[58px] leading-tight tracking-tight text-center"
            >
              DRIVING ENGAGEMENT AT ALL <br /> STAGES OF THE FUNNEL
            </h3>
            <p
              ref={endPRef}
              className="font5 text-white/80 text-[28px] tracking-wide mt-3"
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