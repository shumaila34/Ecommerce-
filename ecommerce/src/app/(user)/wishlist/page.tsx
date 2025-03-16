"use client"

import { useWishlist } from "@/lib/hooks/use-wishlist"
import { useCart } from "@/lib/hooks/use-cart"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useState } from "react"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const handleAddToCart = (product) => {
    addToCart({ product, quantity: 1 })
    setMessage({
      text: `${product.name} added to your cart`,
      type: "success",
    })

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <Heart className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven't added any products to your wishlist yet.</p>
          <Link href="/">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Explore Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Message display */}
      {message && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md ${
            message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
        <button
          onClick={() => clearWishlist()}
          className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
        >
          <Trash2 className="w-4 h-4" />
          Clear Wishlist
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden group">
            <div className="relative aspect-square">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-red-50"
              >
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </button>
            </div>
            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 truncate">{product.name}</h3>
              </Link>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</p>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
