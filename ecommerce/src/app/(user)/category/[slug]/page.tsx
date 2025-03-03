'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/constants/data';
import { ProductCard } from '@/app/home/components/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams();
  
  // Handle "all" category specially
  if (slug === 'all') {
    return (
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">All Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Handle specific categories
  const categoryName = (slug as string).split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const categoryProducts = products.filter(product => 
    product.category && product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <main className="flex-1 bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
