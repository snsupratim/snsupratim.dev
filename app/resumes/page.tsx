import { GraduationCap } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-10">
      {/* --- Page Title --- */}
      <div className="flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          My Resume
        </h1>
      </div>
    </div>
  );
};

export default page;
