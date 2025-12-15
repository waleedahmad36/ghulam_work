"use client";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import HorizontalSliderOnScroll from "@/components/Home/HorizontalSliderOnScroll";
import PinVideoInBg from "@/components/Home/PinVideoInBg";
import Process from "@/components/Home/Processes/Process";
import { HeaderProvider } from "@/context/useHeaderContext";
import Image from "next/image";

export default function Home() {
  return (
    <HeaderProvider>
      <>
        <Hero />
        <Header />
        <HorizontalSliderOnScroll />
        <PinVideoInBg />
        <Process />
        <div className="w-full h-[40vh] bg-black text-3xl font-extrabold shadow-2xl flex flex-col text-center justify-center items-center ">
          <h3>Next Section Continue</h3>
        </div>
      </>
    </HeaderProvider>
  );
}
