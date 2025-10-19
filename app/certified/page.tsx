"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Download, GraduationCap } from "lucide-react"; // Added GraduationCap for the page title
import Image from "next/image";

// NOTE: Ensure these image and file paths are correct in your project's public directory!
const certifications = [
  {
    id: 1,
    title: "Deep Learning Specialization",
    platform: "Coursera",
    year: "2023",
    file: "/certificates/Vaidsys.pdf",
    image: "/profile.png", // Image for preview
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    platform: "Udemy",
    year: "2022",
    file: "/certificates/Vaidsys.pdf",
    image: "/profile.png",
  },
  {
    id: 3,
    title: "Generative AI Bootcamp",
    platform: "AI Academy",
    year: "2024",
    file: "/certificates/Vaidsys.pdf",
    image: "/profile.png",
  },
  // Adding a fourth item for a better grid look
  {
    id: 4,
    title: "Data Structures & Algorithms",
    platform: "Codecademy",
    year: "2022",
    file: "/certificates/Vaidsys.pdf",
    image: "/profile.png",
  },
];

// --- Skeleton Component for Loading State ---
const CertificationSkeleton = () => (
  <Card className="flex flex-col p-4 space-y-3 h-64 border-2">
    <Skeleton className="h-10 w-3/4 rounded-md" />
    <Skeleton className="h-4 w-1/2 rounded-md" />
    <div className="flex-grow"></div>
    <div className="flex justify-between items-center">
      <Skeleton className="h-4 w-1/4 rounded-md" />
      <Skeleton className="h-8 w-1/3 rounded-md" />
    </div>
  </Card>
);

export default function CoursesPage() {
  const [loading, setLoading] = useState(true);

  // Simulate a network fetch delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Courses & Certifications
        </h1>
      </div>

      <ScrollArea className="w-full ">
        {/* --- Certification Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* --- Loading State: Skeletons --- */}
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <CertificationSkeleton key={idx} />
              ))
            : /* --- Loaded State: Certifications --- */
              certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="group flex flex-col hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg border-2"
                >
                  <CardHeader className="space-y-1 pb-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {cert.platform}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between flex-grow pt-2">
                    <p className="text-xs text-muted-foreground mb-4">
                      Completed: {cert.year}
                    </p>

                    {/* Dialog Trigger */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <FileText size={16} /> View Details
                        </Button>
                      </DialogTrigger>

                      {/* Dialog Content (Modal) */}
                      <DialogContent className="max-w-xl sm:max-w-2xl lg:max-w-3xl w-full">
                        <DialogHeader>
                          <DialogTitle>{cert.title}</DialogTitle>
                        </DialogHeader>

                        <div className="mt-4 flex flex-col gap-4">
                          {/* Download Button */}
                          <a href={cert.file} download className="w-full">
                            <Button className="w-full flex items-center justify-center gap-2">
                              <Download size={16} /> Download Certificate PDF
                            </Button>
                          </a>

                          {/* Image Preview Section */}
                          <div className="text-center text-sm text-muted-foreground pt-2">
                            Certificate Preview
                          </div>
                          <div className="relative w-full aspect-video border rounded-lg overflow-hidden">
                            <Image
                              src={cert.image}
                              alt={`Certificate for ${cert.title}`}
                              fill
                              style={{ objectFit: "contain" }}
                              className="p-2"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
        </div>
      </ScrollArea>
    </div>
  );
}
