"use client";

import React from "react";

const CircleWithLabeledDots = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E8E4DC] relative">
      <div className="relative" style={{ width: "1400px", height: "700px" }}>
        
        {/* ================================
            CIRCLE
        ================================= */}
        <div
          className="absolute rounded-full border border-gray-400 bg-[#E8E4DC]"
          style={{
            width: "440px",
            height: "440px",
            left: "480px",
            top: "130px",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <h1
              className="font-serif text-black"
              style={{
                fontSize: "52px",
                letterSpacing: "0.05em",
                fontWeight: "400",
              }}
            >
              THE STRATEGY
            </h1>
          </div>
        </div>

        {/* Circle center point (for reference) */}
        {/* Center X = 480 + 220 = 700
            Center Y = 130 + 220 = 350 */}

        {/* ======================================================
            TOP DOT + TEXT (CONSUMER PSYCHOGRAPHICS)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="700" y2="130" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "692px", top: "122px" }}
        />

        <div
          className="absolute text-center"
          style={{ left: "580px", top: "55px", width: "240px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            CONSUMER PSYCHOGRAPHICS
          </span>
        </div>

        {/* ======================================================
            KPI TARGETS (TOP-LEFT)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="560" y2="200" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "552px", top: "192px" }}
        />

        <div
          className="absolute text-right"
          style={{ left: "330px", top: "182px", width: "210px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            KPI TARGETS
          </span>
        </div>

        {/* ======================================================
            COMPETITION RESEARCH (TOP-RIGHT)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="840" y2="200" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "832px", top: "192px" }}
        />

        <div
          className="absolute"
          style={{ left: "880px", top: "182px", width: "260px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            COMPETITION RESEARCH
          </span>
        </div>

        {/* ======================================================
            RIGHT (BRAND AFFINITY INDEX)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="920" y2="350" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "912px", top: "342px" }}
        />

        <div
          className="absolute"
          style={{ left: "950px", top: "335px", width: "260px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            BRAND AFFINITY INDEX
          </span>
        </div>

        {/* ======================================================
            BOTTOM-RIGHT (REGRESSION ANALYTICS)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="840" y2="500" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "832px", top: "492px" }}
        />

        <div
          className="absolute"
          style={{ left: "880px", top: "482px", width: "260px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            REGRESSION ANALYTICS
          </span>
        </div>

        {/* ======================================================
            BOTTOM (CAMPAIGN POSITIONING)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="700" y2="570" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "692px", top: "562px" }}
        />

        <div
          className="absolute text-center"
          style={{ left: "580px", top: "585px", width: "240px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            CAMPAIGN POSITIONING
          </span>
        </div>

        {/* ======================================================
            BOTTOM-LEFT (CHANNEL INTEGRATIONS)
        ======================================================= */}
        <svg className="absolute inset-0 pointer-events-none">
          <line x1="700" y1="350" x2="560" y2="500" stroke="#BBB" strokeWidth="1" />
        </svg>

        <div
          className="absolute bg-[#E8E4DC] border border-gray-500 rounded-full"
          style={{ width: "16px", height: "16px", left: "552px", top: "492px" }}
        />

        <div
          className="absolute text-right"
          style={{ left: "250px", top: "482px", width: "300px" }}
        >
          <span
            className="uppercase tracking-wider text-gray-700"
            style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: "300" }}
          >
            CHANNEL INTEGRATIONS
          </span>
        </div>

      
      </div>
    </div>
  );
};

export default CircleWithLabeledDots;
