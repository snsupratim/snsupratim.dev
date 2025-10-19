"use client";
import { createContext, useContext, useState } from "react";

type LeftSidebarContextType = {
  open: boolean;
  toggle: () => void;
};

const LeftSidebarContext = createContext<LeftSidebarContextType | undefined>(
  undefined
);

export function LeftSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true); // default open
  const toggle = () => setOpen((prev) => !prev);

  return (
    <LeftSidebarContext.Provider value={{ open, toggle }}>
      {children}
    </LeftSidebarContext.Provider>
  );
}

export function useLeftSidebar() {
  const ctx = useContext(LeftSidebarContext);
  if (!ctx)
    throw new Error("useLeftSidebar must be used inside LeftSidebarProvider");
  return ctx;
}
