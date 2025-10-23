"use client";

import {
  Brain,
  ChevronUp,
  FileUser,
  Github,
  GraduationCap,
  Home,
  Instagram,
  Linkedin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  School,
  Timer,
  User,
  X,
} from "lucide-react";
import { Youtube, Code, Book, Package } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// === Items per tab ===
const snsupratimItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Academics", url: "/academics", icon: GraduationCap },
  { title: "Experience", url: "/experience", icon: Timer },
  { title: "Top Projects", url: "/projects", icon: PanelsTopLeft },
  { title: "Courses & Certifications", url: "/certified", icon: GraduationCap },
  // { title: "Contact", url: "/contact", icon: Phone },
  // { title: "Resume", url: "/resumes", icon: FileUser },
];

const sndevItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Generative AI", url: "/projects", icon: Code },
  { title: "ML & DL Projects", url: "/projects", icon: Code },
  { title: "Agentice AI", url: "/projects", icon: Code },
  { title: "Blogs / Articles", url: "/blogs", icon: Book },
  { title: "Algorithms form Scratch", url: "/blogs", icon: Book },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* HEADER WITH TABS */}
      <SidebarHeader className="py-4 border-b border-gray-200 dark:border-gray-700">
        <Tabs defaultValue="snsupratim" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger value="snsupratim" className="text-sm">
              snsupratim
            </TabsTrigger>
            <TabsTrigger value="sndev" className="text-sm">
              sndev
            </TabsTrigger>
          </TabsList>

          {/* SIDEBAR BODY CHANGES BASED ON ACTIVE TAB */}
          <TabsContent value="snsupratim" className="mt-3">
            <SidebarGroup>
              <SidebarGroupLabel>snsupratim</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {snsupratimItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </TabsContent>

          <TabsContent value="sndev" className="mt-3">
            <SidebarGroup>
              <SidebarGroupLabel>sndev</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sndevItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </TabsContent>
        </Tabs>
      </SidebarHeader>

      {/* FOOTER SECTION */}
      <SidebarContent className="flex-1"></SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  Connect with me!
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Linkedin /> LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <X /> X
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Instagram /> Instagram
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Github /> GitHub
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
