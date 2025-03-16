"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryName =
    slug === "all"
      ? "All Products"
      : slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url =
          slug === "all"
            ? "https://dax-project-ecommerce-production.up.railway.app/products"
            : `https://dax-project-ecommerce-production.up.railway.app/products?category=${categoryName}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  return (
    <main className="flex-1 bg-gray-100 py-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          {categoryName}
        </h1>
        {loading && <p className="text-lg text-center">Loading...</p>}
        {error && <p className="text-lg text-center text-red-500">{error}</p>}
        {!loading && !error && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          !loading &&
          !error && <p className="text-lg text-gray-500">No products found.</p>
        )}
      </div>
    </main>
  );
}

export function ProductCard({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card className="group overflow-hidden rounded-lg bg-white text-black border border-gray-300 transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-52">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 rounded-full p-1 transition-all ${
              isFavorited
                ? "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
          </Button>
          {product.originalPrice && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg truncate">{product.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 font-medium">{product.rating}</span>
          </div>
          <span>({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-semibold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className={`w-full font-medium rounded-md border transition-all ${
            isAddedToCart
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-gray-100"
          }`}
          onClick={() => setIsAddedToCart(true)}
        >
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
