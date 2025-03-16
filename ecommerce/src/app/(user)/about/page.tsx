"use client";

import { Leaf, ShieldCheck, Truck, HeartHandshake } from "lucide-react";
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center shadow-lg">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-blue-800">
            About EcoStore
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-blue-600">
            We're dedicated to bringing you the finest organic and eco-friendly
            products while promoting sustainable living and environmental
            consciousness.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Organic Products",
                desc: "We source only the highest quality organic products.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assured",
                desc: "Strict quality checks ensure premium products.",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Quick and safe delivery to your doorstep.",
              },
              {
                icon: HeartHandshake,
                title: "Customer First",
                desc: "Your satisfaction is our priority.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-blue-200 transition-all duration-300 transform hover:scale-105 hover:border-blue-500"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                  {React.createElement(item.icon, {
                    className: "w-8 h-8 text-blue-600",
                  })}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-blue-900 text-center">
                  {item.title}
                </h3>
                <p className="text-blue-600 text-center mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 shadow-md">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-blue-600 leading-relaxed text-lg">
              <p>
                Founded in 2020, EcoStore began with a simple mission: to make
                sustainable and organic products accessible to everyone. We
                believe that every small choice towards eco-friendly products
                contributes to a better planet.
              </p>
              <p>
                Our team carefully selects each product, ensuring it meets our
                strict standards for quality, sustainability, and environmental
                impact. We work directly with organic farmers and eco-conscious
                manufacturers to bring you the best products at reasonable
                prices.
              </p>
              <p>
                Today, we're proud to serve thousands of customers who share our
                vision for a greener future. Our commitment to sustainability
                extends beyond our products to our packaging and delivery
                methods, making sure we minimize our environmental footprint at
                every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
