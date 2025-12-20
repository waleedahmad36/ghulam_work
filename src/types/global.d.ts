import gsap from "gsap";

declare global {
  interface Window {
    __HORIZONTAL_TL__?: gsap.core.Timeline;
  }
}

export {};