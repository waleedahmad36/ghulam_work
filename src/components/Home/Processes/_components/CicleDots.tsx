"use client";

export default function StrategyCircle() {
  return (
    <div className="w-full hidden lg:flex justify-center items-center text-black bg-white py-20 overflow-hidden">
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "360px",
          height: "360px",
          border: "1px solid #bfbfbf",
        }}
      >
        {/* CENTER TITLE */}
        <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-black">
          THE STRATEGY
        </h3>

        {/* DOT 1 (Top Center) */}
        <div className="dot absolute top-[-10px] left-1/2 -translate-x-1/2" />
        <p className="absolute top-[-45px] left-1/2 -translate-x-1/2 text-sm tracking-widest text-nowrap">
          CONSUMER PSYCHOGRAPHICS
        </p>

        {/* DOT 2 (Top Right Diagonal) */}
        <div className="dot absolute top-[48px] right-[38px]" />
        <p className="absolute top-[48px] right-[-180px] text-sm tracking-widest">
          COMPETITION RESEARCH
        </p>

        {/* DOT 3 (Top Left Diagonal) */}
        <div className="dot absolute top-[48px] left-[40px]" />
        <p className="absolute top-[48px] left-[-130px] text-sm tracking-widest">
          KPI TARGETS
        </p>

        {/* DOT 4 (Left Center) */}
        <div className="dot absolute left-[-10px] top-1/2 -translate-y-1/2" />
        <p className="absolute left-[-230px] top-1/2 -translate-y-1/2 text-sm tracking-widest">
          CHANNEL INTEGRATIONS
        </p>

        {/* DOT 5 (Right Center) */}
        <div className="dot absolute right-[-10px] top-1/2 -translate-y-1/2" />
        <p className="absolute right-[-230px] top-1/2 -translate-y-1/2 text-sm tracking-widest">
          BRAND AFFINITY INDEX
        </p>

        {/* DOT 6 (Bottom Right Diagonal) */}
        <div className="dot absolute bottom-[48px] right-[45px]" />
        <p className="absolute bottom-[48px] right-[-200px] text-sm tracking-widest">
          REGRESSION ANALYTICS
        </p>

        {/* DOT 7 (Bottom Left Diagonal) */}
        <div className="dot absolute bottom-[48px] left-[40px]" />
        <p className="absolute bottom-[48px] left-[-200px] text-sm tracking-widest">
          CAMPAIGN POSITIONING
        </p>
      </div>
    </div>
  );
}
