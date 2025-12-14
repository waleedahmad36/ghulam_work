"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CircleOne, TextOne } from "@/icons/icons";
import Image from "next/image";
import { ComponentType } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------------- DATA ---------------- */
const cardsData: CardProps[] = [
  { imageSrc: "/card1.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card2.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card3.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card4.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card5.avif", CircleIcon: CircleOne },
  { imageSrc: "/card6.avif", CircleIcon: CircleOne, TextIcon: TextOne },
];

const CardsDisplay = () => {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((row) => {
      const cards = row.querySelectorAll(".card");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "top 45%",
            scrub: true,          // 🔥 THIS is the key
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="py-4 space-y-4">
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => el && (rowRefs.current[rowIndex] = el)}
          className="grid grid-cols-3 gap-4"
        >
          {cardsData.slice(rowIndex * 3, rowIndex * 3 + 3).map((card, i) => (
            <div key={i} className="overflow-hidden">
              <Card {...card} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardsDisplay;

/* ---------------- CARD ---------------- */

export interface CardProps {
  imageSrc: string;
  CircleIcon: ComponentType;
  TextIcon?: ComponentType;
}

const Card = ({ imageSrc, CircleIcon, TextIcon }: CardProps) => {
  return (
    <div className="card">
      <div className="w-[380px] h-[200px] relative bg-black">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover opacity-70"
        />

        <div className="w-10 h-10 absolute left-4 top-2">
          <CircleIcon />
        </div>

        {TextIcon && (
          <div className="absolute rotate-12 right-2 top-3">
            <TextIcon />
          </div>
        )}

        <div className="w-[90%] mx-auto bg-white h-[9vh] absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center">
          <span className="text-[9.9px] text-center">
            Begin with a captivating perspective, gazing upward from
            <br />
            beneath the earth&apos;s surface.
          </span>
        </div>
      </div>
    </div>
  );
};
