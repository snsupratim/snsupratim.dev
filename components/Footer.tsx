"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-3">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>

        {/* CENTER SECTION */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com/" target="_blank">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <Separator />
      <p className="text-center text-xs text-muted-foreground py-2">
        Built with ❤️ using Next.js & Shadcn UI
      </p>
    </footer>
  );
};

export default Footer;
