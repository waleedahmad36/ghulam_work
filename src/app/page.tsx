"use client";
import BoathouseCTA from "@/components/Footer";
import ClientsSlider from "@/components/Home/ClientsSlider";
import EcoSystem from "@/components/Home/EcoSystem";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import HorizontalRevealWrapper from "@/components/Home/HorizontalRevealSections/HorizontalRevealWrapper";
import HorizontalSliderOnScroll from "@/components/Home/HorizontalSliderOnScroll";
import Narrative from "@/components/Home/Narrative";
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
        <HorizontalRevealWrapper/> 
        <EcoSystem/> 
         <Narrative/>
        <ClientsSlider/>
        <BoathouseCTA/>
      </>
    </HeaderProvider>
  );
}
