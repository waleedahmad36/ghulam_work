// components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-transparent py-4 px-8">
        <div className="lg:max-w-7xl 2xl:max-w-[1400px] mx-auto flex justify-between items-center">
          <Logo   width={30} />
          {/* Keep same structure: icon here, toggles panel */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="w-8 h-8 flex items-center justify-center cursor-pointer relative z-60"
          >
            {/* show X when open, MenuIcon when closed */}
            {open ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </header>

    
      <div
        aria-hidden={!open}
        className={[
          "fixed top-0 right-0 h-screen bg-black/95 z-40 shadow-xl transition-transform duration-500 ease-in-out",
          // width responsive
          "w-full md:w-1/2",
          // transform based on open state
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{
          // ensure panel covers full height and sits above most things
          // Uses backdrop blur lightly (optional): remove if not desired
          backdropFilter: "saturate(120%) blur(6px)",
        }}
      >
        {/* Inner container for panel content */}
        <div className="h-full overflow-auto py-8 relative">
       
          <nav className="mt-24 flex flex-col items-start px-16 gap-8 text-2xl font-semibold text-white shadow-2xl">
            <Link href={""}  className="hover:text-3xl duration-300 transition-all"  >Projects</Link>
            <Link href={""}   className="hover:text-3xl duration-300 transition-all" >Contact Us</Link>
          </nav>

          <video
            src="/navBg.mp4"
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover mt-10 rounded-xl opacity-60 absolute bottom-0 left-0"
          />

        
        </div>
      </div>
    </>
  );
};

export default Header;
