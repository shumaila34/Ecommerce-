"use client";

import Image from "next/image";
import { default as Link } from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedCategory } from "@/lib/types";

interface CategoryCardProps {
  categories?: FeaturedCategory[] | null;
}

export function CategoryCard({ categories }: CategoryCardProps) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
          Featured Categories
        </h2>
        <p className="text-gray-500">No categories available</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
        Featured Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.name.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="group"
          >
            <Card className="overflow-hidden bg-white shadow-md rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative w-full h-40 md:h-48 lg:h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-t-lg group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center rounded-t-lg">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base opacity-80">
                      {category.items} items
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
