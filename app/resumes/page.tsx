"use client";

import { GraduationCap, FileDown } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResumePage = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Resume
        </h1>
      </div>

      {/* --- Resume Card --- */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            View / Download My Resume
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          {/* Embedded Resume */}
          <div className="w-full h-[80vh] border rounded-lg overflow-hidden">
            <iframe
              src="/SupratimNag_CSE-AIML_2025.pdf" // 👈 put your resume file inside public/
              width="100%"
              height="100%"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Download Button */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="flex items-center gap-2"
          >
            <a href="/Supratim_Nag_Resume.pdf" download>
              <FileDown className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumePage;
