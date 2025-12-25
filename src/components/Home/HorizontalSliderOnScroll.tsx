"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Apple, Victoria, Marot, Netflix, TrustPilot, Naked } from "@/icons/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS = [Apple, Victoria, Marot, Netflix, TrustPilot , Naked , Marot , TrustPilot];

const HorizontalSliderOnScroll = ({ items = [], height = "600px" }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // clean old triggers
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === container) t.kill();
    });

    const setup = () => {
      const viewportWidth = window.innerWidth;
      const totalWidth = inner.scrollWidth;
      const firstItemWidth = inner.children[0]?.offsetWidth || 0;

      const initialOffset =
        viewportWidth / 2 - firstItemWidth / 2 - 70;

      gsap.set(inner, { x: initialOffset, y: 0 });

      return {
        viewportWidth,
        totalWidth,
        firstItemWidth, // ✅ RETURNED
        initialOffset,
      };
    };

    ScrollTrigger.matchMedia({
      /* -----------------------------
         SM + MD → FULL HORIZONTAL
      ------------------------------ */
      

      /* -----------------------------
         LG+ → REFERENCE BEHAVIOR
      ------------------------------ */
      /* -----------------------------
         TABLET (768px - 1023px) → FASTER SPEED
      ------------------------------ */
      "(min-width: 768px) and (max-width: 1023px)": () => {
        const {
          totalWidth,
          initialOffset,
          firstItemWidth,
        } = setup();

        const HORIZONTAL_PADDING = 28;

        const finalX =
          -initialOffset + firstItemWidth / 2 - HORIZONTAL_PADDING;

        return ScrollTrigger.create({
          trigger: container,
          start: "top 72%",
          end: "bottom 5%",
          scrub: 2, // Slightly lower scrub for "snappier/faster" feel

          onUpdate: (self) => {
            const p = self.progress;

            // Increased multiplier from 0.14 to 0.4 for higher speed/distance
            let xPos =
              initialOffset -
              p * (initialOffset + totalWidth * 0.4);

            let yPos = 0;

            if (p > 0.88) {
              const ep = (p - 0.88) / 0.16;
              yPos = -24 * ep;

              // smooth snap to exact left edge
              xPos = gsap.utils.interpolate(xPos, finalX, ep);
            }

            gsap.set(inner, {
              x: xPos,
              y: yPos,
            });
          },
        });
      },


      /* -----------------------------
         LG+ (1024px+) → ORIGINAL PERFECT BEHAVIOR
      ------------------------------ */
      "(min-width: 1024px)": () => {
        const {
          totalWidth,
          initialOffset,
          firstItemWidth,
        } = setup();

        const HORIZONTAL_PADDING = 28;

        // 🔥 exact top-left alignment (no gap)
        const finalX =
          -initialOffset + firstItemWidth / 2 - HORIZONTAL_PADDING;

        return ScrollTrigger.create({
          trigger: container,
          start: "top 72%",
          end: "bottom top",
          scrub: 7.5,

          onUpdate: (self) => {
            const p = self.progress;

            let xPos =
              initialOffset -
              p * (initialOffset + totalWidth * 0.14);

            let yPos = 0;

            if (p > 0.88) {
              const ep = (p - 0.88) / 0.16;
              yPos = -24 * ep;

              // smooth snap to exact left edge
              xPos = gsap.utils.interpolate(xPos, finalX, ep);
            }

            gsap.set(inner, {
              x: xPos,
              y: yPos,
            });
          },
        });
      }
    });

    return () => ScrollTrigger.killAll();
  }, [items]);

  const slides =
    items.length ||
    new Array(12).fill(0).map((_, i) => {
      const Icon = ICONS[i % ICONS.length];
      return (
        <div
          key={i}
          className={`shrink-0 w-30 rounded-3xl flex justify-center items-center max-h-20 ${
            i === 0 ? "mr-3 xl:mr-4" : "mx-3 xl:mx-4"
          }`}
        >
          <Icon />
        </div>
      );
    });

  return (
    <section
      ref={containerRef}
      className="hidden md:block relative w-full overflow-hidden bg-black md:h-[750px] lg:h-[600px] xl:h-[620px] "
      style={{ maxHeight: "unset" }}
    >
      <div
        ref={innerRef}
        className="absolute top-0 flex items-center gap-8 px-7 will-change-transform pointer-events-none h-full"
      >
        {slides}
      </div>
    </section>
  );
};

export default HorizontalSliderOnScroll;