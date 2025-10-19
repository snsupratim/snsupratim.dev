import {
  Brain,
  ChevronDown,
  ChevronUp,
  FileUser,
  Github,
  Globe,
  GraduationCap,
  Home,
  Hourglass,
  Instagram,
  Linkedin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Plus,
  Projector,
  School,
  User,
  User2,
  X,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Education", url: "/education", icon: School },
  { title: "Experience", url: "/experience", icon: Hourglass },
  { title: "Academics", url: "/academics", icon: GraduationCap },
  { title: "Courses & Certifications", url: "/certified", icon: GraduationCap },
  { title: "Top Projects", url: "/projects", icon: PanelsTopLeft },
  { title: "Contact", url: "/contact", icon: Phone },
  { title: "Resume", url: "/resumes", icon: FileUser },
];

export function AppSidebar() {
  return (
    <>
      <Sidebar collapsible="icon">
        {/* Main Header */}
        <SidebarHeader className="py-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Image src="/vercel.svg" alt="next" width={20} height={20} />
                  <span>snsupratim | sndev</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        {/* <SidebarSeparator /> */}
        {/* Main Content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Content</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
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

          {/*  */}
          {/* COLLAPSIBLE */}
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Projects
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/web-projects">
                          {" "}
                          <Globe /> Web Projects
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/aiml-projects">
                          {" "}
                          <Brain /> AIML Projects
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {/* NEW PROJECTS */}
                    {/* <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/#">
                          <Plus />
                          Add Projects
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem> */}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={"/"}>
                      <MessageCircle />
                      <span>Ask me anything!</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {/* Main Footer */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    {/* <User2 /> */}
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
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
    </>
  );
}
