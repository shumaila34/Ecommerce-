'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { FeaturedCategory } from '@/lib/types';

interface CategoryCardProps {
  category: FeaturedCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`}>
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
  );
}
