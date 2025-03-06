'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FeaturedCategory } from '@/lib/types';

interface CategoryCardProps {
  categories: FeaturedCategory[];
}

export function CategoryCard({ categories }: CategoryCardProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
            key={index}
          >
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.items}</p>
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
