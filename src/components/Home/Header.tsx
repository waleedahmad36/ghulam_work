"use client";

import { useState, useEffect, useRef } from "react";
import { MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { useHeaderContext } from "@/context/useHeaderContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const { fillColor, menuIconColor } = useHeaderContext();

  const headerRef = useRef<HTMLElement>(null);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#hero-section", // 👈 HERO IS THE TRIGGER
        start: "bottom top",      // when hero ends
        end: 99999,               // stay pinned until user scrolls up
        pin: headerRef.current,
        pinSpacing: false,        // IMPORTANT (no layout space)
        anticipatePin: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="py-8 px-4 lg:px-[75px] bg-transparent"
        style={{ zIndex: 9999 }}
      >
        <div className="lg:max-w-7xl 2xl:max-w-[1400px] mx-auto flex justify-between items-center">
         <div  className="w-32 relative flex items-center" >
          <Logo width={"32"} fillLogo={fillColor} />
         </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className="w-fit flex items-center justify-center cursor-pointer"
            style={{ color: menuIconColor }}
          >
            {open ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Slide-out menu */}
      <div
        className={[
          "fixed top-0 right-0 h-screen z-[10000]",
          "bg-black/95 w-full md:w-1/2",
          "transition-transform duration-500 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="h-full py-8 relative">
          <X  className="size-8 text-white absolute right-20 top-12 cursor-pointer"  onClick={() => setOpen((s) => !s)}  />
          <nav className="mt-24 flex flex-col px-16 gap-8 text-2xl font-semibold text-white">
            <Link href="">Projects</Link>
            <Link href="">Contact Us</Link>
          </nav>

          <video
            src="/navBg.mp4"
            autoPlay
            muted
            loop
            className="absolute bottom-0 left-0 w-full opacity-60"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
