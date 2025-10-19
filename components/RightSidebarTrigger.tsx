"use client";
import { Button } from "@/components/ui/button";
import { useRightSidebar } from "@/components/contexts/RightSidebarContext";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

export function RightSidebarTrigger() {
  const { open, toggle } = useRightSidebar();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-white shadow-md"
    >
      {open ? <PanelRightClose /> : <PanelRightOpen />}
    </Button>
  );
}
