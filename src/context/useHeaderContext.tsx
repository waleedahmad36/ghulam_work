"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeaderContextProps {
  fillColor: string;
  menuIconColor: string;
  setColors: (colors: { fillColor?: string; menuIconColor?: string }) => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [fillColor, setFillColor] = useState("white");
  const [menuIconColor, setMenuIconColor] = useState("white");

  const setColors = (colors: { fillColor?: string; menuIconColor?: string }) => {
    if (colors.fillColor) setFillColor(colors.fillColor);
    if (colors.menuIconColor) setMenuIconColor(colors.menuIconColor);
  };

  return (
    <HeaderContext.Provider value={{ fillColor, menuIconColor, setColors }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Custom hook for easy usage
export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within HeaderProvider");
  }
  return context;
};
