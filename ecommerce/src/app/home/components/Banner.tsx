"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BannerSlide } from "@/lib/types";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerProps {
  slides: BannerSlide[];
}

export function Banner({ slides }: BannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-cover absolute inset-0 rounded-xl"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        {/* Centered Content */}
        <div className="relative z-10 text-white text-center max-w-2xl px-6">
          <p className="text-5xl font-extrabold tracking-wide leading-tight mb-4">
            {slides[currentSlide].title}
          </p>
          <p className="text-lg mb-6 opacity-90">
            {slides[currentSlide].description}
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium rounded-md transition"
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full"
          onClick={goToNextSlide}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-6 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-500 w-5" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}
