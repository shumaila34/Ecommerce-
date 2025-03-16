"use client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Product } from "@/lib/types"

// Helper functions for localStorage
const getStoredWishlist = (): Product[] => {
  if (typeof window === "undefined") return []

  const storedWishlist = localStorage.getItem("wishlist")
  return storedWishlist ? JSON.parse(storedWishlist) : []
}

const storeWishlist = (wishlist: Product[]) => {
  if (typeof window === "undefined") return
  localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

export function useWishlist() {
  const queryClient = useQueryClient()

  // Query to get wishlist items
  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getStoredWishlist,
    // Since this is client-side only, we can initialize with the stored data
    initialData: getStoredWishlist,
  })

  // Mutation to add item to wishlist
  const addToWishlist = useMutation({
    mutationFn: (product: Product) => {
      const currentWishlist = getStoredWishlist()

      // Check if product already exists in wishlist
      if (currentWishlist.some((item) => item.id === product.id)) {
        return currentWishlist
      }

      const newWishlist = [...currentWishlist, product]
      storeWishlist(newWishlist)
      return newWishlist
    },
    onSuccess: (newWishlist) => {
      queryClient.setQueryData(["wishlist"], newWishlist)
    },
  })

  // Mutation to remove item from wishlist
  const removeFromWishlist = useMutation({
    mutationFn: (productId: string) => {
      const currentWishlist = getStoredWishlist()
      const newWishlist = currentWishlist.filter((item) => item.id !== productId)

      storeWishlist(newWishlist)
      return newWishlist
    },
    onSuccess: (newWishlist) => {
      queryClient.setQueryData(["wishlist"], newWishlist)
    },
  })

  // Mutation to clear wishlist
  const clearWishlist = useMutation({
    mutationFn: () => {
      storeWishlist([])
      return []
    },
    onSuccess: (newWishlist) => {
      queryClient.setQueryData(["wishlist"], newWishlist)
    },
  })

  // Check if product is in wishlist
  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId)
  }

  return {
    wishlist,
    addToWishlist: addToWishlist.mutate,
    removeFromWishlist: removeFromWishlist.mutate,
    clearWishlist: clearWishlist.mutate,
    isInWishlist,
    isLoading: addToWishlist.isPending || removeFromWishlist.isPending || clearWishlist.isPending,
  }
}

