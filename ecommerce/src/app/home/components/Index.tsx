'use client';

import Image from 'next/image';
import { Apple, PlayCircle, Leaf, Sun, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from './ProductCard';
import { Banner } from './Banner';
import { CategoryCard } from './CategoryCard';
import { products, bannerSlides, featuredCategories, discountedProducts } from '@/lib/constants/data';
import { NaturalQuality } from './NaturalQuality';

export default function HomePage() {
  // Get the first 10 products for each section
  const popularProducts = products.slice(0, 10);
  const latestProducts = discountedProducts.slice(0, 10);

  return (
    <main className="flex-1 bg-background">
      {/* Hero Section */}

      <Banner slides={bannerSlides} />

      {/* Featured Categories */}
      <CategoryCard categories={featuredCategories} />

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Natural Quality Section */}
      <NaturalQuality />

      {/* Latest Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDiscount />
          ))}
        </div>
      </section>

    </main>
  );
}
