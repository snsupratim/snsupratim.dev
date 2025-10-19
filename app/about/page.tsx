"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Profile Section */}
      <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
        {loading ? (
          <Skeleton className="w-32 h-32 rounded-full" />
        ) : (
          <Image
            src="/profile.png" // Replace with your actual image in public/
            alt="Profile Picture"
            width={130}
            height={130}
            className="rounded-full border border-gray-300"
          />
        )}

        <div className="flex flex-col gap-2">
          {loading ? (
            <>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-72" />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-primary">Supratim Nag</h1>
              <p className="text-muted-foreground">
                AIML Developer | Full Stack Developer | Tech Content Creator
              </p>
            </>
          )}
        </div>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </>
          ) : (
            <>
              <p>
                I’m a passionate developer currently in my 7th semester of
                B.Tech at MCKV Institute of Engineering with a CGPA of 9.3. I
                specialize in Artificial Intelligence and Machine Learning
                (AIML), along with building full-stack web applications using
                modern frameworks like Next.js, Django, and Flask.
              </p>
              <p>
                Over the years, I’ve worked on various GenAI, ML, and agentic AI
                projects. I’ve also contributed to real-world applications as an
                intern at BlueStock, Exposys, and Vaidsys, where I worked on AI
                and backend development.
              </p>
              <p>
                Apart from coding, I enjoy creating tech content, mentoring
                peers, and keeping up with global politics and innovations in
                AI.
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Quick Info Section */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Info</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loading ? (
            <>
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-40" />
            </>
          ) : (
            <>
              <p>
                <span className="font-semibold">📍 Location:</span> Howrah, West
                Bengal, India
              </p>
              <p>
                <span className="font-semibold">🎓 Education:</span> B.Tech in
                CSE-AIML
              </p>
              <p>
                <span className="font-semibold">💼 Experience:</span>{" "}
                Internships in AI, Web, and Data Science.
              </p>
              <p>
                <span className="font-semibold">⚡ Interests:</span> Cricket,
                Tech Content, Geo-Politics
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
