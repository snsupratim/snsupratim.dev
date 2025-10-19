"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EducationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 flex flex-col gap-10">
      {/* ---------- Page Title ---------- */}
      <div>
        {loading ? (
          <Skeleton className="h-8 w-48" />
        ) : (
          <h1 className="text-3xl font-bold text-primary">Education</h1>
        )}
      </div>

      {/* ---------- School Section ---------- */}
      <Card className="shadow-none border-none bg-transparent p-0">
        <CardHeader>
          {loading ? (
            <Skeleton className="h-6 w-32" />
          ) : (
            <CardTitle className="text-xl font-semibold">Schooling</CardTitle>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </>
          ) : (
            <>
              <p>
                I completed my school education from{" "}
                <span className="font-semibold">[Your School Name Here]</span>,
                where I studied from Class 1 to Class 12.
              </p>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">
                    🏫 Class 10 (Board Exam):
                  </span>{" "}
                  Scored <span className="font-semibold">94%</span>
                </p>
                <p>
                  <span className="font-semibold">
                    🏫 Class 12 (Board Exam):
                  </span>{" "}
                  Scored <span className="font-semibold">90%</span> with a focus
                  on Science (PCM + Computer Science).
                </p>
              </div>

              <p>
                My school years helped me build a strong foundation in logical
                reasoning, mathematics, and problem-solving — skills that became
                the cornerstone of my later journey into AI and software
                development.
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* ---------- College Section ---------- */}
      <Card className="shadow-none border-none bg-transparent p-0">
        <CardHeader>
          {loading ? (
            <Skeleton className="h-6 w-32" />
          ) : (
            <CardTitle className="text-xl font-semibold">College</CardTitle>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </>
          ) : (
            <>
              <p>
                I am currently pursuing{" "}
                <span className="font-semibold">
                  B.Tech in Artificial Intelligence and Machine Learning
                </span>{" "}
                from{" "}
                <span className="font-semibold">
                  MCKV Institute of Engineering, Howrah
                </span>
                .
              </p>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">🎓 Duration:</span> 2021 –
                  2025
                </p>
                <p>
                  <span className="font-semibold">📘 Current Semester:</span>{" "}
                  7th
                </p>
                <p>
                  <span className="font-semibold">📊 CGPA:</span>{" "}
                  <span className="font-semibold">9.3</span>
                </p>
              </div>

              <p>
                Throughout my college years, I have worked on multiple AI, ML,
                and web-based projects, participated in hackathons hosted by IIT
                BHU and IIT KGP, and interned at reputed companies such as
                BlueStock, Exposys, and Vaidsys.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
