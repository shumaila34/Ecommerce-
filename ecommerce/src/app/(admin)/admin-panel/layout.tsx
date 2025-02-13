"use client";

import { Inter } from "next/font/google";
import { useState, type ReactNode, useEffect } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header onMenuClick={toggleSidebar} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="pt-16 pb-16 lg:pl-64">
            <div className="px-4 py-8 max-w-7xl mx-auto">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
