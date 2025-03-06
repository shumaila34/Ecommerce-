"use client";

import { Apple, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// import { usePathname } from "next/navigation";

export const AppDownload = () => {
  // const pathname = usePathname();

  // Step 2: Hide the component on /dashboard
  // if (pathname === "/dashboard") return null;
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Shop Smarter with Our App
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get exclusive offers, real-time order tracking, and a personalized
              shopping experience. Download our app now!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 hover:bg-white hover:text-primary transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 hover:bg-white hover:text-primary transition-colors"
              >
                <PlayCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          <div className="hidden md:block p-8">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80&w=800"
                alt="App mockup"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
