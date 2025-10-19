"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { GraduationCap } from "lucide-react";

export default function AcademicsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10 ">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Projects
        </h1>
      </div>
      {/* <h1 className="text-3xl font-bold text-primary mb-6">Academics</h1> */}

      <div className="flex items-center justify-center">
        {" "}
        <Tabs defaultValue="school" className="w-full max-w-3xl items-center">
          <TabsList className="justify-center mb-6">
            <TabsTrigger value="school">School</TabsTrigger>
            <TabsTrigger value="btech">B.Tech</TabsTrigger>
            <TabsTrigger value="mtech">M.Tech</TabsTrigger>
          </TabsList>

          {/* ---------------- School Tab ---------------- */}
          <TabsContent value="school">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  Completed schooling from{" "}
                  <span className="font-semibold">XYZ School</span>, Classes
                  1–12.
                </p>
                <p>
                  <span className="font-semibold">Class 10:</span> 94% (Board
                  Exam)
                </p>
                <p>
                  <span className="font-semibold">Class 12:</span> 90% (PCM +
                  Computer Science)
                </p>
                <p>
                  Developed strong foundation in mathematics, logical reasoning,
                  and problem-solving.
                </p>
              </div>
            )}
          </TabsContent>

          {/* ---------------- B.Tech Tab ---------------- */}
          <TabsContent value="btech">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  Pursuing{" "}
                  <span className="font-semibold">
                    B.Tech in Artificial Intelligence and Machine Learning
                  </span>{" "}
                  at{" "}
                  <span className="font-semibold">
                    MCKV Institute of Engineering
                  </span>
                  .
                </p>
                <p>
                  <span className="font-semibold">Duration:</span> 2021 – 2025
                </p>
                <p>
                  <span className="font-semibold">Current CGPA:</span> 9.3
                </p>
                <p>
                  Worked on multiple AI and web projects, participated in
                  hackathons hosted by IIT BHU and IIT KGP, and completed
                  internships at top companies.
                </p>
              </div>
            )}
          </TabsContent>

          {/* ---------------- M.Tech Tab ---------------- */}
          <TabsContent value="mtech">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ) : (
              <div className="space-y-4">
                {/* <p>
                <span className="font-semibold">
                  M.Tech in Artificial Intelligence
                </span>{" "}
                at <span className="font-semibold">ABC University</span>{" "}
                (planned/ongoing).
              </p>
              <p>
                <span className="font-semibold">Focus Areas:</span> Deep
                Learning, Generative AI, and Multi-Agent Systems.
              </p>
              <p>
                Working on research-oriented projects and advanced AI
                applications.
              </p> */}
                <p>In Future</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
