"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Timer } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "AI Intern",
    company: "Vaidsys",
    duration: "June 2023 - August 2023",
    description:
      "Worked on building AI-based healthcare models for early diagnosis and clinical data processing using Python and TensorFlow. Contributed to optimizing model performance and automating preprocessing pipelines.",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    duration: "May 2023 - June 2023",
    description:
      "Developed data analysis workflows using Pandas and Matplotlib, worked with large datasets for trend prediction, and built dashboards for insights presentation.",
  },
  {
    id: 3,
    title: "SDE Team Co-Lead",
    company: "BlueStock Fintech",
    duration: "July 2024 - September 2024",
    description:
      "Led a small engineering team to build full-stack web features using the MERN stack, integrated REST APIs, and improved deployment workflows using Docker and GitHub Actions.",
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Vaidsys",
    duration: "June 2023 - August 2023",
    description:
      "Worked on building AI-based healthcare models for early diagnosis and clinical data processing using Python and TensorFlow. Contributed to optimizing model performance and automating preprocessing pipelines.",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    duration: "May 2023 - June 2023",
    description:
      "Developed data analysis workflows using Pandas and Matplotlib, worked with large datasets for trend prediction, and built dashboards for insights presentation.",
  },
  {
    id: 6,
    title: "SDE Team Co-Lead",
    company: "BlueStock Fintech",
    duration: "July 2024 - September 2024",
    description:
      "Led a small engineering team to build full-stack web features using the MERN stack, integrated REST APIs, and improved deployment workflows using Docker and GitHub Actions.",
  },
];

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state for skeleton
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <div className="p-6 lg:p-10 flex flex-col lg:flex-row items-start gap-10">
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <Timer className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Experience
        </h1>
      </div>
      {/* Left Side - Timeline */}
      <div className="flex-1 w-full">
        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-10 ml-6 group">
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full -left-4 ring-8 ring-background">
                <Briefcase size={18} />
              </span>

              {loading ? (
                <div className="space-y-2">
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-3 w-1/5" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              ) : (
                <Card className="bg-card text-card-foreground shadow-none border-none transition-transform duration-300 group-hover:translate-x-1">
                  <CardContent className="p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-xs mb-2">
                        {exp.duration}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Right-side Image (responsive avatar on mobile) */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                      {loading ? (
                        <Skeleton className="w-24 h-24 lg:w-40 lg:h-40 rounded-full lg:rounded-xl" />
                      ) : (
                        <Image
                          src="/profile.png" // 🔁 replace with your actual image path
                          alt={`${exp.company} logo`}
                          width={160}
                          height={160}
                          className="rounded-full lg:rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image Section */}
      {/* <div className="w-full lg:w-1/3 flex justify-center">
        {loading ? (
          <Skeleton className="w-80 h-80 rounded-xl" />
        ) : (
          <Image
            src="/profile.png" // 🔁 replace with your actual image path
            alt="Work Experience"
            width={320}
            height={320}
            className="rounded-xl object-cover shadow-md"
          />
        )}
      </div> */}
    </div>
  );
}
