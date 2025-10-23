"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Globe, User, Brain } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 p-6 lg:p-20 bg-background">
      {/* --- Welcome Heading --- */}
      {loading ? (
        <Skeleton className="h-14 w-96 rounded-lg" />
      ) : (
        <h1 className="text-5xl font-extrabold text-primary text-center">
          Welcome to My Portfolio
        </h1>
      )}

      {/* --- Subtitle --- */}
      {loading ? (
        <Skeleton className="h-6 w-3/4 rounded-md" />
      ) : (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl text-center">
          Hi, I’m{" "}
          <span className="font-semibold text-foreground">Supratim Nag</span>,
          an AI & Full-Stack Developer. Explore my portfolio to learn about my
          skills, projects, and contributions.
        </p>
      )}

      {/* --- Highlighted Tabs Info --- */}
      {loading ? (
        <Skeleton className="h-6 w-1/2 rounded-md mt-6" />
      ) : (
        <div className="flex flex-col sm:flex-row gap-6 items-center mt-6">
          <div className="flex items-center gap-2 bg-primary/10 rounded-xl px-4 py-2">
            <User className="w-5 h-5 text-primary" />
            <span className="text-sm sm:text-base text-primary font-medium">
              Click <strong>snsupratim</strong> tab to see my personal info,
              education, and experience.
            </span>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 rounded-xl px-4 py-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm sm:text-base text-primary font-medium">
              Click <strong>sndev</strong> tab to explore my projects, tech
              blogs, and development work.
            </span>
          </div>
        </div>
      )}

      {/* --- Skills Section --- */}
      {loading ? (
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton key={idx} className="h-6 w-24 rounded-full" />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TailwindCSS</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">PyTorch</Badge>
          <Badge variant="outline">LangChain</Badge>
          <Badge variant="outline">MongoDB</Badge>
          <Badge variant="outline">FastAPI</Badge>
        </div>
      )}

      {/* --- Footer Info --- */}
      {loading ? (
        <Skeleton className="h-4 w-1/2 rounded-md mt-16" />
      ) : (
        <p className="text-muted-foreground text-center mt-16 max-w-xl">
          🌐 This portfolio showcases my journey as a developer, AI enthusiast,
          and tech content creator. Use the tabs above to navigate through my
          personal info and development work.
        </p>
      )}
    </main>
  );
}
