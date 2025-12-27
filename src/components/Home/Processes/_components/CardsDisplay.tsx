"use client";

import { useEffect, useRef, ComponentType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { CircleOne, TextOne, TextTwo } from "@/icons/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CardProps {
  imageSrc: string;
  CircleIcon: ComponentType;
  TextIcon?: ComponentType;
}

const cardsData: CardProps[] = [
  { imageSrc: "/card1.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card2.avif", CircleIcon: CircleOne, TextIcon: TextTwo },
  { imageSrc: "/card3.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card4.avif", CircleIcon: CircleOne, TextIcon: TextOne },
  { imageSrc: "/card5.avif", CircleIcon: CircleOne },
  { imageSrc: "/card6.avif", CircleIcon: CircleOne, TextIcon: TextOne },
];

const CardsDisplay = () => {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row) => {
        if (!row) return;

        const cards = row.querySelectorAll(".card");

        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "+=400",
              scrub: 1,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:pb-3 lg:pb-6">
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => el && (rowRefs.current[rowIndex] = el)}
          className="
            hidden md:grid 
            md:grid-cols-3 
            md:gap-x-4 md:space-y-4 
            lg:space-y-8 
            justify-center 
            max-w-[96vw]  mx-auto
          "
        >
          {cardsData
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((card, i) => (
              <Card key={i} {...card} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default CardsDisplay;

const Card = ({ imageSrc, CircleIcon, TextIcon }: CardProps) => {
  return (
    <div className="card flex justify-center">
      <div
        className="
          relative bg-black overflow-hidden
          w-[320px] h-[35vh] 
          lg:h-[230px] lg:w-[32vw]
          xl:w-[30vw] xl:h-[300px] 
          2xl:w-[30vw] 2xl:h-[321px] 
        "
      >
        <Image src={imageSrc} alt="" fill className="object-cover opacity-95" />

        <div className="absolute left-4 top-2 w-10 h-10">
          <CircleIcon />
        </div>

        {TextIcon && (
          <div
            className={`absolute ${
              imageSrc.includes("2")
                ? "-right-6 -top-1 rotate-8"
                : "right-2 top-3 rotate-12"
            }`}
          >
            <TextIcon />
          </div>
        )}

        <div
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            w-[90%] h-[52px] bg-white
            flex justify-center items-center
            px-2 text-center
          "
        >
          <span className="text-[9.9px] leading-tight">
            Begin with a captivating perspective, gazing upward from
            <br />
            beneath the earth's surface.
          </span>
        </div>
      </div>
    </div>
  );
};