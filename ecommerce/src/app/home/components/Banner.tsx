'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BannerSlide } from '@/lib/types';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
     <Card className="w-full overflow-hidden relative group">
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-cover transition-transform duration-500"
          priority
        />
        <div className="absolute bottom-8 left-8 z-20 text-white">
          <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-lg mb-6">{slides[currentSlide].description}</p>
          <Button size="lg" variant="secondary"  >
            {slides[currentSlide].buttonText}
          </Button>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={goToNextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600 w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
     </Card>
    </section>

  );
}
