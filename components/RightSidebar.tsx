"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { useRightSidebar } from "./contexts/RightSidebarContext";

export function RightSidebar() {
  const { open } = useRightSidebar();

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out border-l border-gray-200 bg-white",
        open ? "w-72" : "w-0 overflow-hidden"
      )}
    >
      <Sidebar side="right" className="w-72">
        <SidebarHeader>
          <h2 className="text-lg font-semibold">Profile</h2>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Notifications</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
