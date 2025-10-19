"use client";
import { createContext, useContext, useState } from "react";

type RightSidebarContextType = {
  open: boolean;
  toggle: () => void;
};

const RightSidebarContext = createContext<RightSidebarContextType | undefined>(
  undefined
);

export function RightSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false); // default closed
  const toggle = () => setOpen((prev) => !prev);

  return (
    <RightSidebarContext.Provider value={{ open, toggle }}>
      {children}
    </RightSidebarContext.Provider>
  );
}

export function useRightSidebar() {
  const ctx = useContext(RightSidebarContext);
  if (!ctx)
    throw new Error("useRightSidebar must be used inside RightSidebarProvider");
  return ctx;
}
