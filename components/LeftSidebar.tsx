"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { useLeftSidebar } from "./contexts/LeftSiderContext";

export function LeftSidebar() {
  const { open } = useLeftSidebar();

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out border-r border-gray-200 bg-white",
        open ? "w-64" : "w-0 overflow-hidden"
      )}
    >
      <Sidebar side="left" className="w-64">
        <SidebarHeader>
          <h2 className="text-lg font-semibold">Navigation</h2>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Projects</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <p className="text-sm text-gray-500">© 2025</p>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
