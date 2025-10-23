"use client";

import React, { useState, useEffect } from "react";
import { Files, Globe, Brain, Github, Link2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// ✅ Import your project data
import webprojects from "@/data/webProjects";
import aimlprojects from "@/data/aimlProjects";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // --- Loading Skeletons ---
  const renderSkeletons = () => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-4">
          <Skeleton className="h-48 w-full rounded-lg mb-4" />
          <Skeleton className="h-6 w-2/3 mb-2" />
          <Skeleton className="h-4 w-3/4 mb-1" />
          <Skeleton className="h-4 w-5/6 mb-3" />
          <Skeleton className="h-10 w-24" />
        </Card>
      ))}
    </div>
  );

  // --- Project Card ---
  interface Project {
    image: string;
    title: string;
    description: string;
    techStack?: string[];
    livedemo?: string;
    github: string;
  }

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col justify-between">
      <div>
        <CardHeader>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="flex flex-wrap gap-3 justify-end">
        {project.livedemo && (
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open(project.livedemo, "_blank")}
            className="flex items-center gap-2"
          >
            <Link2 className="h-4 w-4" /> Live Demo
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(project.github, "_blank")}
          className="flex items-center gap-2"
        >
          <Github className="h-4 w-4" /> Code
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10 min-h-screen">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <Files className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Projects
        </h1>
      </div>

      {/* --- Tabs Section --- */}
      <Tabs defaultValue="web" className="w-full">
        <TabsList className="justify-center mb-8">
          <TabsTrigger value="web" className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> Web Projects
          </TabsTrigger>
          <TabsTrigger value="aiml" className="flex items-center gap-2">
            <Brain className="h-4 w-4" /> AI / ML Projects
          </TabsTrigger>
        </TabsList>

        {/* --- WEB PROJECTS TAB --- */}
        <TabsContent value="web">
          {loading ? (
            renderSkeletons()
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webprojects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </TabsContent>

        {/* --- AI/ML PROJECTS TAB --- */}
        <TabsContent value="aiml">
          {loading ? (
            renderSkeletons()
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aimlprojects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
