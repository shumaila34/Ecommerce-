// 'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heart, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

export function ProductCard({ product, showDiscount }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" onClick={handleClick}>
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105 rounded-t-lg"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
          </Button>
          {showDiscount && product.originalPrice && (
            <Badge className="absolute top-2 left-2 bg-red-600 text-white">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2 line-clamp-1 text-gray-800">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-blue-600">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md" onClick={(e) => e.stopPropagation()}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}