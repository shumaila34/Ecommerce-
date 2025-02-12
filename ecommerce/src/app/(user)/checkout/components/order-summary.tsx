"use client"

import { Minus,Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const orderItems =[
    {
        id: 1,
        name: "Rainbow Chard",
        price: 7.07,
        image: "/placeholder.svg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Lettuce",
        price: 193.26,
        image: "/placeholder.svg",
        quantity: 1,
      },
]

export function OrderSummary(){
    const subtotal = orderItems.reduce((acc,item)=> acc + item.price *item.quantity, 0)
    const shipping = 0
    const discount = 0
    const total = subtotal + shipping - discount

    return (
      <div className="rounded-lg border bg-white">
        <h2 className="border-b p-4 text-lg font-semibold">Order Summary</h2>
        <div className="p-4">
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Item Price ${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
  
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
            <Input placeholder="Input your coupon code" className="w-full sm:w-auto" />
            <Button className="w-full sm:w-auto shrink-0 bg-emerald-500 hover:bg-emerald-600">Apply</Button>
          </div>
  
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Cost</span>
              <span className="font-medium">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium text-orange-500">${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-lg font-medium">TOTAL COST</span>
              <span className="text-lg font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    )
}