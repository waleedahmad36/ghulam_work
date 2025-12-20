"use client";

import React, { forwardRef } from "react";
import { Apple, Victoria, Marot, Netflix, TrustPilot } from "@/icons/icons";

const ICONS = [Apple, Victoria, Marot, Netflix, TrustPilot];

type ClientsSliderSecProps = {
  items?: React.ReactNode[];
  height?: string;
  containerRef?: React.Ref<HTMLDivElement>;
  innerRef?: React.Ref<HTMLDivElement>;
};

const ClientsSliderSec = forwardRef<HTMLDivElement, ClientsSliderSecProps>(
  ({ items = [], height = "40vh", containerRef, innerRef }, _) => {
    const slides =
      items.length ||
      new Array(18).fill(0).map((_, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={i}
            className={`shrink-0 rounded-3xl flex justify-center items-center ${
              i === 0 ? "mr-2" : "mx-2"
            }`}
            style={{ width: "8rem", height: "8rem" }}
          >
            <Icon fillColor="black" />
          </div>
        );
      });

    return (
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full overflow-hidden"
        style={{ height }}
      >
        <div
          ref={innerRef}
          className="absolute -top-14 flex items-center gap-8 px-8 will-change-transform pointer-events-none"
          style={{ height: "100%" }}
        >
          {slides}
        </div>
      </section>
    );
  }
);

ClientsSliderSec.displayName = "ClientsSliderSec";

export default ClientsSliderSec;