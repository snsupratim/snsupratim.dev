"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading (1.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* ---------- PROFILE SECTION ---------- */}
      <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
        {loading ? (
          <Skeleton className="w-32 h-32 rounded-full" />
        ) : (
          <Image
            src="/profile.png" // Replace with your actual image in /public
            alt="Profile Picture"
            width={130}
            height={130}
            className="rounded-full border border-gray-300"
          />
        )}

        <div className="flex flex-col gap-2 text-center md:text-left">
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

      {/* ---------- ABOUT SECTION ---------- */}
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
                I’m a passionate software developer currently in my 7th semester
                of
                <span className="font-semibold">
                  {" "}
                  B.Tech in CSE-AIML
                </span> at{" "}
                <span className="font-semibold">
                  MCKV Institute of Engineering
                </span>{" "}
                with a CGPA of <span className="font-semibold">9.33</span>. I
                specialize in Artificial Intelligence, Machine Learning, and
                Full-Stack Web Development.
              </p>
              <p>
                I’ve built several GenAI, ML, and agentic AI projects, including
                RAG-based chatbots, deep learning models, and autonomous AI
                systems. I’ve also contributed to production-grade projects
                during my internships.
              </p>
              <p>
                Besides coding, I enjoy creating tech content, playing cricket,
                and exploring AI ethics and global politics.
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* ---------- EDUCATION & EXPERIENCE SECTION ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Education & Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <>
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </>
          ) : (
            <>
              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Education</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    <span className="font-semibold">B.Tech in CSE (AIML)</span>{" "}
                    — MCKV Institute of Engineering (2022–2026*), Current CGPA:
                    9.33
                  </li>
                  <li>
                    <span className="font-semibold">Class 12 (Science)</span> —
                    Howrah Vivekananda Institution , 86.6%
                  </li>
                  <li>
                    <span className="font-semibold">Class 10</span> — Howrah
                    Vivekananda Institution , 90.6%
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Experience</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">
                      TekAnthem - Frontend Developer Intern*
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Contributing to frontend screens of a payroll software
                      using Nextjs,Tailwindcss,Zod Validation,TypeScript and
                      React-Hook-Form .
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Uotricks – Machine Learning Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Built an Loan Approval Prediction System using various ML
                      algorithms and deployed it using Streamlit.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Vaidsys – AI Intern</p>
                    <p className="text-sm text-muted-foreground">
                      Developed and fine-tuned AI models for NLP and image-based
                      tasks.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Exposys – Data Science Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Worked on exploratory data analysis and predictive ML
                      model building.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      BlueStock – SDE Team Co-Lead
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Led development of internal tools, optimized backend APIs,
                      and mentored junior members.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* ---------- CONTACT SECTION ---------- */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <>
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-60" />
            </>
          ) : (
            <div className="flex flex-col gap-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                snsupratim@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> +91 8420945255
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Howrah, West Bengal,
                India
              </p>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/snsupratim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  href="https://github.com/snsupratim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
