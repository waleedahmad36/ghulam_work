import { useRef, useState } from "react";

function ExperiencesSection() {
  const expVideoRef = useRef<HTMLVideoElement | null>(null);
  
    const [isPlaying, setIsPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleToggle = () => {
      if (!expVideoRef.current) return;
  
      if (expVideoRef.current.paused) {
        expVideoRef.current.play();
        setIsPlaying(true);
      } else {
        expVideoRef.current.pause();
        setIsPlaying(false);
      }
    };
  
    const showPauseIcon = isPlaying && isHovered;
    const showPlayIcon = !isPlaying;
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      <video
        ref={expVideoRef}
        src="https://video.wixstatic.com/video/f415e2_1ac51c5385b44512a86d3c9fd64fec69/1080p/mp4/file.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* ICON LAYER */}
      {(showPauseIcon || showPlayIcon) && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {showPlayIcon ? <PlayIcon /> : <PauseIcon />}
        </div>
      )}

      {/* LABEL */}
      <h2 className="font1 text-[45px] text-white absolute md:bottom-3 lg:bottom-2 z-10 left-1/2 -translate-x-1/2 pointer-events-none">
        EXPERIENCES
      </h2>
    </div>
  );
}

export default ExperiencesSection;




const PlayIcon = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 82 82"
      width="68"
      height="68"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="cursor-pointer"
    >
      <g>
        <path
          d="M41 10c-17.121 0-31 13.879-31 31 0 17.121 13.879 31 31 31 17.121 0 31-13.879 31-31 0-17.121-13.879-31-31-31zm2.008 35.268l-7.531 4.268V32.465l7.531 4.268L50.539 41l-7.531 4.268z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};


const PauseIcon = () => {
  return (
    <svg
      viewBox="0 0 82 82"
      width="68"
      height="68"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="cursor-pointer"
    >
      <g>
        <rect x="28" y="22" width="8" height="38" fill="#000000" rx="2" />
        <rect x="46" y="22" width="8" height="38" fill="#000000" rx="2" />
      </g>
    </svg>
  );
};

