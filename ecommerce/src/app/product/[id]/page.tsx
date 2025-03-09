// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { Product } from "@/lib/types";
// import { Button } from "@/components/ui/button";
// import { products } from "@/lib/constants/data";

// export default function ProductDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const product = products.find((p) => p.id === params.id); // Finding product by ID

//   if (!product) {
//     return notFound();
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Product Image */}
//         <div className="relative w-full md:w-1/2 aspect-square">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="w-full md:w-1/2 space-y-4">
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p className="text-lg text-muted-foreground">
//             ${product.price.toFixed(2)}
//           </p>
//           {product.oldPrice && (
//             <p className="text-sm text-red-500 line-through">
//               ${product.oldPrice.toFixed(2)}
//             </p>
//           )}

//           <Button className="w-full md:w-auto">Add to Cart</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/constants/data";
import { Heart, ShoppingCart } from "lucide-react"; // Import icons
import { useState } from "react";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105" // Add hover effect
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
            {product.oldPrice && (
              <p className="text-lg text-gray-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-md p-2">
              <button
                onClick={handleDecrement}
                className="text-gray-600 hover:text-indigo-600 px-2"
              >
                -
              </button>
              <span className="text-gray-800 px-3">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="text-gray-600 hover:text-indigo-600 px-2"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </Button>

            {/* Wishlist Button */}
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-700">
              {/* Add product description here, if available */}
              {product.description}
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}
