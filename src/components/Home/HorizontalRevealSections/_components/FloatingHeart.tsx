"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingReactions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const spawnHeart = () => {
      const heart = document.createElement("div");

      // 1. APPEARANCE: Red Circle + Solid White Heart + Shadow
      heart.className =
        "absolute flex items-center justify-center rounded-full bg-[#E91E63] shadow-md will-change-transform";
      
      // Randomize size slightly for variety (between 40px and 50px)
      const size = gsap.utils.random(40, 50);
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      
      // 2. INITIAL POSITION: Center bottom (small random variance so they don't stack perfectly)
      const startX = gsap.utils.random(-20, 20);
      heart.style.left = `calc(50% + ${startX}px)`;
      heart.style.bottom = "0px";
      heart.style.zIndex = "50";

      // Solid Filled Heart SVG
      heart.innerHTML = `
        <svg viewBox="0 0 24 24" width="${size * 0.5}" height="${size * 0.5}" fill="white">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;

      container.appendChild(heart);

      // 3. ANIMATION PHYSICS
      const duration = gsap.utils.random(2, 3); // How long it floats
      const swayAmplitude = gsap.utils.random(30, 60); // How wide it wiggles

      const tl = gsap.timeline({
        onComplete: () => heart.remove(),
      });

      // Step A: The "Pop" (Elastic Scale)
      tl.fromTo(
        heart,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)", // Bouncy pop effect
        }
      );

      // Step B: Upward Float (Linear-ish)
      gsap.to(heart, {
        y: -300 - gsap.utils.random(0, 100), // Move up 300-400px
        duration: duration,
        ease: "power1.out",
      });

      // Step C: The "Sine Wave" Wiggle (The crucial organic movement)
      // We use keyframes to make it go Left -> Right -> Left smoothly
      gsap.to(heart, {
        x: gsap.utils.random(-20, 20), // Slight overall drift
        keyframes: {
          x: [0, swayAmplitude, -swayAmplitude, 0], // The Wiggle Pattern
          easeEach: "sine.inOut" // Smooth turning points
        },
        duration: duration,
        ease: "none",
      });

      // Step D: Fade Out at the top
      gsap.to(heart, {
        opacity: 0,
        duration: 0.5,
        delay: duration - 0.5,
      });
    };

    // Spawn Loop
    const interval = setInterval(() => {
        spawnHeart();
        // Randomly spawn a "burst" (2 hearts at once) for natural feel
        if (Math.random() > 0.6) {
            setTimeout(spawnHeart, gsap.utils.random(50, 150));
        }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-[400px] overflow-visible z-50"
    />
  );
}