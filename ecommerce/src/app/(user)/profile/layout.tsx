"use client"
import { DashboardSidebar } from "../dashboard/components/side-bar";
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import type React from "react" 

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-auto">
        <div className="sticky top-0 z-10 bg-white border-b p-4 flex justify-between items-center">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}