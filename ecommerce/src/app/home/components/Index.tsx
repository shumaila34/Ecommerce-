"use client";

import { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { CategoryCard } from "./CategoryCard";
import { ProductCard } from "./ProductCard";
import { NaturalQuality } from "./NaturalQuality";
import {
  bannerSlides,
  featuredCategories,
  discountedProducts,
} from "@/lib/constants/data";

// Debugging: Check if data is correctly imported
console.log("bannerSlides:", bannerSlides);
console.log("featuredCategories:", featuredCategories);
console.log("discountedProducts:", discountedProducts);

// Static Product Data (Fallback)
const productsData = [
  {
    id: 1,
    name: "Fresh Apples (1kg)",
    price: 2.99,
    originalPrice: 3.99,
    rating: 4.5,
    reviews: 120,
    image: "/images/apple.jpg",
  },
  {
    id: 2,
    name: "Organic Bananas (1 Dozen)",
    price: 3.49,
    originalPrice: 4.49,
    rating: 4.7,
    reviews: 95,
    image: "/images/banana.jpg",
  },
  {
    id: 3,
    name: "Brown Eggs (12 Pack)",
    price: 5.99,
    originalPrice: 7.49,
    rating: 4.6,
    reviews: 75,
    image: "/images/eggs.jpg",
  },
];

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      {bannerSlides?.length > 0 ? (
        <Banner slides={bannerSlides} />
      ) : (
        <p className="text-center text-gray-500">No slides available.</p>
      )}

      {/* Featured Categories */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Featured Categories
        </h2>
        {featuredCategories?.length > 0 ? (
          <CategoryCard categories={featuredCategories} />
        ) : (
          <p className="text-center text-gray-500">No categories available.</p>
        )}
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available.
            </p>
          )}
        </div>
      </section>

      {/* Natural Quality Section */}
      <NaturalQuality />

      {/* Latest Products */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(discountedProducts) &&
          discountedProducts.length > 0 ? (
            discountedProducts
              .slice(0, 10)
              .map((product) => (
                <ProductCard key={product.id} product={product} showDiscount />
              ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No discounted products available.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
