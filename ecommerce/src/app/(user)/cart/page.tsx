"use client"

import { useCart } from "@/lib/hooks/use-cart"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/products">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flow-root">
                <ul className="-my-6 divide-y">
                  {cart.map((item) => (
                    <li key={item.product.id} className="py-6 flex">
                      <div className="relative h-24 w-24 rounded-md overflow-hidden">
                        <Image
                          src={item.product.image || "/placeholder.svg"}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={`/product/${item.product.id}`} className="hover:text-indigo-600">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">${item.product.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity({ productId: item.product.id, quantity: item.quantity - 1 })
                              }
                              className="p-2 text-gray-600 hover:text-indigo-600"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 text-gray-800">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity({ productId: item.product.id, quantity: item.quantity + 1 })
                              }
                              className="p-2 text-gray-600 hover:text-indigo-600"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t px-6 py-4">
              <button onClick={() => clearCart()} className="text-sm text-red-500 hover:text-red-700">
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>${getCartTotal().toFixed(2)}</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>Calculated at checkout</div>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <div>Calculated at checkout</div>
              </div>
              <div className="border-t pt-4 flex justify-between font-medium">
                <div>Total</div>
                <div>${getCartTotal().toFixed(2)}</div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">Proceed to Checkout</Button>
            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


