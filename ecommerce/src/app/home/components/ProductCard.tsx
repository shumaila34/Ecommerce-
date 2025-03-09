// 'use client';

// import Image from 'next/image';
// import { Heart, Star } from 'lucide-react';
// import { Product } from '@/lib/types';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// interface ProductCardProps {
//   product: Product;
//   showDiscount?: boolean;
// }

// export function ProductCard({ product, showDiscount }: ProductCardProps) {
//   const discountPercentage = product.originalPrice
//     ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <Card className="group overflow-hidden">
//       <CardHeader className="p-0">
//         <div className="relative aspect-square">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover transition-transform group-hover:scale-105"
//           />
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
//           >
//             <Heart className="w-5 h-5" />
//           </Button>
//           {showDiscount && product.originalPrice && (
//             <Badge className="absolute top-2 left-2" variant="destructive">
//               {discountPercentage}% OFF
//             </Badge>
//           )}
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <h3 className="font-medium mb-2 line-clamp-1">{product.name}</h3>
//         <div className="flex items-center gap-2 mb-2">
//           <div className="flex items-center text-yellow-500">
//             <Star className="w-4 h-4 fill-current" />
//             <span className="ml-1 text-sm font-medium">{product.rating}</span>
//           </div>
//           <span className="text-sm text-muted-foreground">
//             ({product.reviews} reviews)
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-muted-foreground line-through">
//               ${product.originalPrice.toFixed(2)}
//             </span>
//           )}
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0">
//         <Button className="w-full">Add to Cart</Button>
//       </CardFooter>
//     </Card>
//   );
// }

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Next.js Router for navigation
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
    router.push(`/product/${product.id}`); // Navigate to Product Details Page
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden cursor-pointer" onClick={handleClick}>
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={(e) => e.stopPropagation()} // Prevent navigation on Heart click
          >
            <Heart className="w-5 h-5" />
          </Button>
          {showDiscount && product.originalPrice && (
            <Badge className="absolute top-2 left-2" variant="destructive">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={(e) => e.stopPropagation()}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
