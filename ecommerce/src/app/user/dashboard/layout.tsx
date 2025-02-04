import { DashboardSidebar } from "@/components/dashboard/side-bar";
import React from "react";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto flex gap-6 py-6">
          <DashboardSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    )
  }