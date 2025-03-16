"use client";

import { Leaf, Sun, Droplets } from "lucide-react";

export const NaturalQuality = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-white text-black">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-5xl text-center font-extrabold text-blue-800 mb-6">
          Natural Quality
        </h2>
        <p className="text-lg text-gray-700">
          We ensure that all our products meet the highest standards of quality
          and sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: Leaf,
            title: "100% Organic",
            description:
              "All products are certified organic and sustainably sourced.",
          },
          {
            icon: Sun,
            title: "Natural Ingredients",
            description:
              "Made with pure and natural ingredients, free from harmful chemicals.",
          },
          {
            icon: Droplets,
            title: "Eco-Friendly",
            description: "Environmentally conscious products and packaging.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300"
          >
            {/* Icon Wrapper */}
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:scale-110">
              <item.icon className="w-9 h-9 text-blue-900" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
