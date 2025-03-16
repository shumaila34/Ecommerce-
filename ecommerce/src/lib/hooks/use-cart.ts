"use client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Product } from "@/lib/types"

interface CartItem {
  product: Product
  quantity: number
}

// Helper functions for localStorage
const getStoredCart = (): CartItem[] => {
  if (typeof window === "undefined") return []

  const storedCart = localStorage.getItem("cart")
  return storedCart ? JSON.parse(storedCart) : []
}

const storeCart = (cart: CartItem[]) => {
  if (typeof window === "undefined") return
  localStorage.setItem("cart", JSON.stringify(cart))
}

export function useCart() {
  const queryClient = useQueryClient()

  // Query to get cart items
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getStoredCart,
    // Since this is client-side only, we can initialize with the stored data
    initialData: getStoredCart,
  })

  // Mutation to add item to cart
  const addToCart = useMutation({
    mutationFn: ({ product, quantity }: { product: Product; quantity: number }) => {
      const currentCart = getStoredCart()
      const existingItemIndex = currentCart.findIndex((item) => item.product.id === product.id)

      let newCart: CartItem[]

      if (existingItemIndex >= 0) {
        // Update existing item
        newCart = currentCart.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        // Add new item
        newCart = [...currentCart, { product, quantity }]
      }

      storeCart(newCart)
      return newCart
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart)
    },
  })

  // Mutation to remove item from cart
  const removeFromCart = useMutation({
    mutationFn: (productId: string) => {
      const currentCart = getStoredCart()
      const newCart = currentCart.filter((item) => item.product.id !== productId)

      storeCart(newCart)
      return newCart
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart)
    },
  })

  // Mutation to update item quantity
  const updateQuantity = useMutation({
    mutationFn: ({ productId, quantity }: { productId: string; quantity: number }) => {
      if (quantity <= 0) {
        return removeFromCart.mutateAsync(productId)
      }

      const currentCart = getStoredCart()
      const newCart = currentCart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))

      storeCart(newCart)
      return newCart
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart)
    },
  })

  // Mutation to clear cart
  const clearCart = useMutation({
    mutationFn: () => {
      storeCart([])
      return []
    },
    onSuccess: (newCart) => {
      queryClient.setQueryData(["cart"], newCart)
    },
  })

  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  // Calculate cart count
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return {
    cart,
    addToCart: addToCart.mutate,
    removeFromCart: removeFromCart.mutate,
    updateQuantity: updateQuantity.mutate,
    clearCart: clearCart.mutate,
    getCartTotal,
    getCartCount,
    isLoading: addToCart.isPending || removeFromCart.isPending || updateQuantity.isPending || clearCart.isPending,
  }
}

