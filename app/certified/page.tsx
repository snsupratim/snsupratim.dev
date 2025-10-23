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
import { FileText, Download, GraduationCap } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Python for Data Science",
    platform: "Udemy (Sara Academy)",
    year: "2024",
    certificate: "/certificates/python_data_science_certificate.pdf",
  },
  {
    id: 2,
    title: "RAG with Embeddings & VectorDB",
    platform: "Coursera",
    year: "2025",
    certificate: "certificates/Coursera_RAG.pdf",
  },
  {
    id: 3,
    title: "Programming using Java",
    platform: "Infosys Springboard",
    year: "2025",
    certificate: "/certificates/java.pdf",
  },
  {
    id: 4,
    title: "Database Management Systems",
    platform: "Infosys Springboard",
    year: "2025",
    certificate: "/certificates/dbms.pdf",
  },
];

// Skeleton during loading
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

  // Simulate a delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* Page Title */}
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Courses & Certifications
        </h1>
      </div>

      {/* Certification Grid */}
      <ScrollArea className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <CertificationSkeleton key={idx} />
              ))
            : certifications.map((cert) => (
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

                    {/* Dialog with PDF Preview */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <FileText size={16} /> View Certificate
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl w-full h-[100vh] p-0 overflow-hidden flex flex-col">
                        <DialogHeader className="p-4 border-b">
                          <DialogTitle>{cert.title}</DialogTitle>
                        </DialogHeader>

                        {/* PDF Preview */}
                        <div className="flex-1 overflow-hidden">
                          <iframe
                            src={cert.certificate}
                            width="100%"
                            height="100%"
                            className="rounded-none"
                          ></iframe>
                        </div>

                        {/* Download Button */}
                        <div className="p-4 border-t flex justify-end bg-muted/20">
                          <Button
                            asChild
                            variant="default"
                            className="flex items-center gap-2"
                          >
                            <a href={cert.certificate} download>
                              <Download className="h-4 w-4" />
                              Download Certificate
                            </a>
                          </Button>
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
