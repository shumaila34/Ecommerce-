import { CheckoutForm } from "./components/checkout-form";
import { OrderSummary } from "./components/order-summary";

export default function CheckoutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl text-center md:text-left">
        Checkout
      </h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}