"use client";

import { Apple, Play } from "lucide-react"; // Custom Play Store icon
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AppDownload = () => {
  return (
    <section className="container mx-auto px-4 py-10 bg-white">
      <Card className="bg-blue-100 rounded-xl shadow-md border border-blue-200">
        <CardContent className="grid md:grid-cols-2 gap-6 items-center p-8">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Shop Smarter with Our App
            </h2>
            <p className="text-gray-700 text-base mb-5">
              Get exclusive offers, real-time order tracking, and a personalized
              shopping experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 transition-all px-4 py-2 rounded-md shadow">
                <Apple className="w-4 h-4 text-white" /> {/* Smaller Icon */}
                <div className="text-left">
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </Button>
              <Button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 transition-all px-4 py-2 rounded-md shadow">
                <Play className="w-4 h-4 text-white" />{" "}
                {/* Custom Play Store Icon */}
                <div className="text-left">
                  <p className="text-[10px]">Get it on</p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80&w=400"
              alt="App preview"
              className="rounded-lg shadow-md w-60 h-auto"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
