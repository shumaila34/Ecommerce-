"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/constants/data"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/hooks/use-cart"
import { useWishlist } from "@/lib/hooks/use-wishlist"

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return notFound()
  }

  const [quantity, setQuantity] = useState(1)
  const [addingToCart, setAddingToCart] = useState(false)
  const [updatingWishlist, setUpdatingWishlist] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = async () => {
    setAddingToCart(true)
    try {
      addToCart({ product, quantity })
      setMessage({
        text: `${quantity} × ${product.name} added to your cart`,
        type: "success",
      })

      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    } catch (error) {
      setMessage({
        text: "Failed to add to cart",
        type: "error",
      })
    } finally {
      setAddingToCart(false)
    }
  }

  const handleWishlistToggle = async () => {
    setUpdatingWishlist(true)
    try {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id)
        setMessage({
          text: `${product.name} removed from your wishlist`,
          type: "success",
        })
      } else {
        addToWishlist(product)
        setMessage({
          text: `${product.name} added to your wishlist`,
          type: "success",
        })
      }

      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    } catch (error) {
      setMessage({
        text: "Failed to update wishlist",
        type: "error",
      })
    } finally {
      setUpdatingWishlist(false)
    }
  }

  const inWishlist = isInWishlist(product.id)

  return (
    <div className="container mx-auto p-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
            {product.oldPrice && <p className="text-lg text-gray-500 line-through">${product.oldPrice.toFixed(2)}</p>}
          </div>

          <div className="flex items-center space-x-4">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-md p-2">
              <button
                onClick={handleDecrement}
                className="text-gray-600 hover:text-indigo-600 px-2"
                disabled={addingToCart}
              >
                -
              </button>
              <span className="text-gray-800 px-3">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="text-gray-600 hover:text-indigo-600 px-2"
                disabled={addingToCart}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <Button
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={handleAddToCart}
              disabled={addingToCart}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{addingToCart ? "Adding..." : "Add to Cart"}</span>
            </Button>

            {/* Wishlist Button */}
            <button
              className={`p-2 rounded-full ${inWishlist ? "bg-red-100" : "bg-gray-100"} hover:bg-gray-200`}
              onClick={handleWishlistToggle}
              disabled={updatingWishlist}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? "text-red-500 fill-red-500" : "text-gray-600"}`} />
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}