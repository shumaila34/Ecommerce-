"use client"

import { useState, useEffect } from "react"
import {CheckoutForm} from "./components/checkout-form"
import {OrderSummary} from "./components/order-summary"
import { CheckoutFormSkeleton } from "./components/checkout-form-skeleton"
import { OrderSummarySkeleton } from "./components/order-summary-skeleton"

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl text-center md:text-left">
        Checkout
      </h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">{isLoading ? <CheckoutFormSkeleton /> : <CheckoutForm />}</div>
        <div>{isLoading ? <OrderSummarySkeleton /> : <OrderSummary />}</div>
      </div>
    </div>
  )
}