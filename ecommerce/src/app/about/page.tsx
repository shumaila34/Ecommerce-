'use client';

import { Leaf, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About EcoStore</h1>
            <p className="text-xl text-muted-foreground">
              We're dedicated to bringing you the finest organic and eco-friendly products
              while promoting sustainable living and environmental consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic Products</h3>
              <p className="text-muted-foreground">
                We source only the highest quality organic products for our customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                Every product undergoes strict quality checks before reaching you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                We ensure quick and safe delivery of your orders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, EcoStore began with a simple mission: to make sustainable and organic products accessible to everyone.
                We believe that every small choice towards eco-friendly products contributes to a better planet.
              </p>
              <p>
                Our team carefully selects each product, ensuring it meets our strict standards for quality, sustainability,
                and environmental impact. We work directly with organic farmers and eco-conscious manufacturers to bring you
                the best products at reasonable prices.
              </p>
              <p>
                Today, we're proud to serve thousands of customers who share our vision for a greener future. Our commitment
                to sustainability extends beyond our products to our packaging and delivery methods, making sure we minimize
                our environmental footprint at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
