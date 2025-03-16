"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "@/app/home/components/ProductCard";

// 🔹 API Endpoints
const CATEGORIES_API =
  "https://dax-project-ecommerce-production.up.railway.app/categories";
const PRODUCTS_API =
  "https://dax-project-ecommerce-production.up.railway.app/products";

export default function CategoryPage() {
  const { slug } = useParams();
  interface Category {
    id: number;
    name: string;
  }

  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    name: string;
    rating: number;
    reviews: number;
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await axios.get(CATEGORIES_API);

        setCategories(data?.data?.result);
      } catch (err) {
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  // 🔹 Fetch products based on the category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = PRODUCTS_API;

        if (slug !== "all") {
          url = `${PRODUCTS_API}?category=${slug}`;
        }

        const data = await axios.get(url);
        setProducts(data?.data?.result?.products); // backend wala l he
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  // 🔹 Loading and Error States
  if (loading) return <p className="text-center py-12">Loading...</p>;
  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;

  return (
    <main className="flex-1 bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {slug === "all"
            ? "All Products"
            : Array.isArray(slug)
              ? slug[0].replace("-", " ")
              : slug?.replace("-", " ")}
        </h1>

        {/* Display Categories */}
        <div className="flex gap-4 mb-6">
          {categories.map((category) => (
            <button key={category.id} className="px-4 py-2 bg-gray-200 rounded">
              {category.name}
            </button>
          ))}
        </div>

        {/* Display Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{ ...product, id: product.id.toString() }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
