"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LANES = [0, 1, 2, 3, 4]; // 5 lanes
const LANE_GAP = 42;          // vertical spacing safety
const BASE_LEFT = 24;         // spawn X
const BASE_TOP = 24;          // spawn Y

export default function FloatingReactions() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeLanes = useRef<boolean[]>(Array(LANES.length).fill(false));

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const spawnHeart = () => {
      // find free lane
      const laneIndex = activeLanes.current.findIndex((v) => !v);
      if (laneIndex === -1) return; // all lanes busy

      activeLanes.current[laneIndex] = true;

      const heart = document.createElement("div");
      heart.className =
        "absolute flex items-center justify-center rounded-full bg-[#ff4d6d]";
      heart.style.width = "34px";
      heart.style.height = "34px";

      // lane-based positioning
      const laneOffset = laneIndex * LANE_GAP;
      heart.style.left = `${BASE_LEFT + laneOffset}px`;
      heart.style.top = `${BASE_TOP + laneOffset}px`;
      heart.style.zIndex = String(100 + laneIndex);

      heart.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
          <path d="M12 21s-6.716-4.686-9.657-9.071C-1.598 7.543.322 3 4.343 3c2.09 0 3.657 1.343 4.657 2.343C10 4.343 11.567 3 13.657 3c4.02 0 5.94 4.543 2 8.929C18.716 16.314 12 21 12 21z"/>
        </svg>
      `;

      container.appendChild(heart);

      const driftX = gsap.utils.random(-8, 8);
      const rise = gsap.utils.random(140, 180);
      const duration = gsap.utils.random(2.6, 3.2);

      gsap.fromTo(
        heart,
        {
          opacity: 0,
          scale: 0.85,
          y: 0,
        },
        {
          opacity: 1,
          scale: 1,
          y: -rise,
          x: driftX,
          duration,
          ease: "power1.out",
          onComplete: () => {
            heart.remove();
            activeLanes.current[laneIndex] = false;
          },
        }
      );

      gsap.to(heart, {
        opacity: 0,
        scale: 0.75,
        duration: 0.5,
        delay: duration - 0.5,
        ease: "power1.in",
      });
    };

    const interval = setInterval(spawnHeart, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-50"
    />
  );
}
