"use client";
import { DashboardSidebar } from "../dashboard/components/side-bar";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {isLoading ? (
        <div className="hidden lg:block w-64 bg-white border-r p-4">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      ) : (
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      )}
      <div className="flex-1 ">
        <div className="sticky top-0 z-10 bg-white border-b p-4 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <main className="p-4 lg:p-6">
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-[400px] w-full" />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}
