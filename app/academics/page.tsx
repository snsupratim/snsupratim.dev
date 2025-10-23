"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { GraduationCap, School, Cpu } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AcademicsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10 min-h-screen">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3 justify-center">
        <GraduationCap className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Academic Journey
        </h1>
      </div>

      {/* --- Tabs --- */}
      <div className="flex items-center justify-center">
        <Tabs defaultValue="school" className="w-full max-w-4xl">
          <TabsList className="justify-center mb-8">
            <TabsTrigger value="school">School</TabsTrigger>
            <TabsTrigger value="btech">B.Tech</TabsTrigger>
          </TabsList>

          {/* ---------------- School Tab ---------------- */}
          <TabsContent value="school">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-6 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ) : (
              <Card className="shadow-lg border-border/60">
                <CardHeader className="flex flex-row items-center gap-3">
                  <School className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl font-bold">
                      Howrah Vivekananda Institution
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Classes 1–12 | West Bengal State Board (2009 – 2022)
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed">
                  <Separator />
                  <p>
                    Completed schooling with excellence in academics and active
                    participation in extracurricular activities.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <span className="font-semibold">Class 10:</span> 90.6%
                      (Board Examination)
                    </li>
                    <li>
                      <span className="font-semibold">Class 12:</span> 86.6%
                      (PCM + Computer Science)
                    </li>
                    <li>
                      Built strong foundations in mathematics, logic, and
                      problem-solving.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* ---------------- B.Tech Tab ---------------- */}
          <TabsContent value="btech">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-6 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-2/3 mx-auto" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ) : (
              <Card className="shadow-lg border-border/60">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Cpu className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl font-bold">
                      B.Tech in Compuer Science with Artificial Intelligence &
                      Machine Learning
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      MCKV Institute of Engineering (2022 – 2026*)
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed">
                  <Separator />
                  <p>
                    Currently pursuing a specialized degree focusing on Machine
                    Learning, Deep Learning, and Generative AI technologies.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <span className="font-semibold">Current CGPA:</span> 9.33
                    </li>
                    <li>
                      <span className="font-semibold">Key Projects:</span>{" "}
                      RAG-based Medical Chatbot, Rose Leaf Disease Detection
                      using CNNs, and Agentic AI Systems.
                    </li>
                    <li>
                      <span className="font-semibold">Achievements:</span>{" "}
                      Participated in IIT BHU & IIT KGP Hackathons, led AI-based
                      team projects, and contributed to open-source communities.
                    </li>
                    <li>
                      <span className="font-semibold">Internships:</span> AI
                      Intern at Vaidsys, Data Science Intern at Exposys, and SDE
                      Team Co-Lead at BlueStock.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
