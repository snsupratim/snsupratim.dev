"use client";
import { Button } from "@/components/ui/button";

import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { useLeftSidebar } from "./contexts/LeftSiderContext";

export function LeftSidebarTrigger() {
  const { open, toggle } = useLeftSidebar();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="fixed top-4 left-4 z-50 bg-white shadow-md"
    >
      {open ? <PanelLeftClose /> : <PanelLeftOpen />}
    </Button>
  );
}
