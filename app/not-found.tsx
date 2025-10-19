// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6 text-gray-500">Oops! Page not found.</p>
      <Button onClick={() => router.push("/")}>Go Home</Button>
    </div>
  );
}
