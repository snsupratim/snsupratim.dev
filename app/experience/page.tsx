"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase, Timer } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TekAnthem",
    duration: "September 2025 - Present",
    description:
      "Contributing to frontend development of a payroll management platform using Next.js, TypeScript, TailwindCSS, React-Hook-Form, and Zod validation. Collaborating with design and backend teams to build responsive and accessible user interfaces.",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    company: "Uotricks",
    duration: "March 2024 - May 2024",
    description:
      "Developed a Loan Approval Prediction System using various ML algorithms including Logistic Regression and Random Forest. Integrated model with a Streamlit-based interface for deployment and user testing.",
  },
  {
    id: 3,
    title: "AI Intern",
    company: "Vaidsys",
    duration: "June 2023 - August 2023",
    description:
      "Worked on AI-driven solutions for NLP and image-based tasks. Fine-tuned transformer models for healthcare domain data and contributed to image preprocessing pipelines for diagnosis assistance.",
  },
  {
    id: 4,
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    duration: "May 2023 - June 2023",
    description:
      "Performed exploratory data analysis and built predictive ML models using Python, Pandas, and Scikit-learn. Automated data-cleaning pipelines and visualized insights using Matplotlib and Seaborn.",
  },
  {
    id: 5,
    title: "SDE Team Co-Lead",
    company: "BlueStock Fintech",
    duration: "June 2024 - September 2024",
    description:
      "Led a small development team to design and deploy internal tools for financial analytics. Enhanced backend APIs, containerized services using Docker, and mentored junior developers in Git workflows and full-stack development.",
  },
];

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <Timer className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Experience
        </h1>
      </div>

      {/* --- Timeline Section --- */}
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

                    {/* Optional image or logo */}
                    {/* <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                      {loading ? (
                        <Skeleton className="w-24 h-24 lg:w-40 lg:h-40 rounded-full lg:rounded-xl" />
                      ) : (
                        <Image
                          src="/profile.png"
                          alt={`${exp.company} logo`}
                          width={160}
                          height={160}
                          className="rounded-full lg:rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-105"
                        />
                      )}
                    </div> */}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
