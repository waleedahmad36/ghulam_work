import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import HorizontalSliderOnScroll from "@/components/Home/HorizontalSliderOnScroll";
import PinVideoInBg from "@/components/Home/PinVideoInBg";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Header/>
    <HorizontalSliderOnScroll/>
    <PinVideoInBg/>
    <div  className="w-full h-screen " />
    </>
  );
}
