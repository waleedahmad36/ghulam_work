"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingReactions from "./FloatingHeart"; // ✅ hearts component

gsap.registerPlugin(ScrollTrigger);

function OohAndInfluencerSection() {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const strip = stripRef.current;
    if (!section || !strip) return;

    const checkTimeline = setInterval(() => {
      const tl = (window as any).__HORIZONTAL_TL__;
      if (!tl) return;

      clearInterval(checkTimeline);

      // ✅ Calculate total width of strip
      const totalImageWidth = 6 * 235 + 5 * 16; // 6 images * 235px + 5 gaps * 16px
      const containerWidth =
        window.innerWidth * 0.5 - window.innerWidth * 0.04; // subtract 4vw padding
      const maxScroll =
        totalImageWidth - containerWidth - window.innerWidth * 0.1; // leave ~10vw blank

      // ✅ Start slightly overlapping left side
      gsap.set(strip, { x: -window.innerWidth * 0.1 });

      gsap.to(strip, {
        x: -maxScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          containerAnimation: tl,
          start: "left 80%",
          end: "right 20%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, 50);

    return () => {
      clearInterval(checkTimeline);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex items-center overflow-hidden relative"
      style={{ width: "200vw" }}
    >
      {/* LEFT */}
      <div className="w-[50%] h-screen relative flex items-center justify-center z-10">
        <Image
          src="/images/ohhBanner.avif"
          alt=""
          fill
          className="object-cover relative"
        />
        <h2 className="font4 text-[45px] text-white absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          OOH
        </h2>
      </div>

      {/* RIGHT */}
      <div className="w-[50%] relative h-screen flex items-center -translate-x-[2vw] z-20">
        <h2 className="font4 text-[45px] text-black absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          INFLUENCERS
        </h2>
      </div>

      {/* ✅ STRIP OVERLAY ABOVE BOTH HALVES */}
      <div className="absolute inset-0 px-[4vw] z-50 flex justify-end items-center">
        <div 
        ref={stripRef} 
        className="flex gap-4 will-change-transform relative md:left-[70vw] lg:left-[45vw] xl:left-[30vw] 2xl:left-[13vw]">
          <div  className=" relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <Image
            src="/images/storyImage1.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 object-center"
          />
          </div>
         <div  className="relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <div className="absolute top-14 z-10" >
            <FloatingReactions/>
          </div>
           <Image
            src="/images/storyImage2.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 relative z-0"
          />
         </div>
          <div  className=" relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <Image
            src="/images/storyImage3.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 object-center"
          />
          </div>
          <div  className=" relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <Image
            src="/images/storyImage4.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 object-center"
          />
          </div>
           <div  className=" relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <Image
            src="/images/storyImage5.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 object-center"
          />
          </div>
           <div  className=" relative md:w-[205px] md:h-[350px] lg:w-[235px] lg:h-[410px]" >
          <Image
            src="/images/storyImage6.avif"
            alt=""
            fill
            className="rounded-lg shrink-0 object-center"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OohAndInfluencerSection;