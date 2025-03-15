// 'use client';

// import { Leaf, Sun, Droplets } from 'lucide-react';

// export const NaturalQuality = () => {
//   return (
//     <section className="container mx-auto px-4 py-12 bg-gray-50">
//       <div className="text-center max-w-3xl mx-auto mb-12">
//         <h2 className="text-3xl font-bold mb-4">Natural Quality</h2>
//         <p className="text-muted-foreground">
//           We ensure that all our products meet the highest standards of quality and sustainability.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Leaf className="w-8 h-8 text-primary" />
//           </div>
//           <h3 className="font-bold mb-2">100% Organic</h3>
//           <p className="text-muted-foreground">All products are certified organic and sustainably sourced.</p>
//         </div>
//         <div className="text-center">
//           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Sun className="w-8 h-8 text-primary" />
//           </div>
//           <h3 className="font-bold mb-2">Natural Ingredients</h3>
//           <p className="text-muted-foreground">Made with pure and natural ingredients, free from harmful chemicals.</p>
//         </div>
//         <div className="text-center">
//           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Droplets className="w-8 h-8 text-primary" />
//           </div>
//           <h3 className="font-bold mb-2">Eco-Friendly</h3>
//           <p className="text-muted-foreground">Environmentally conscious products and packaging.</p>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import { Leaf, Sun, Droplets } from "lucide-react";

export const NaturalQuality = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Natural Quality
        </h2>
        <p className="text-gray-600">
          We ensure that all our products meet the highest standards of quality
          and sustainability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-bold mb-2 text-gray-800">100% Organic</h3>
          <p className="text-gray-600">
            All products are certified organic and sustainably sourced.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sun className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-bold mb-2 text-gray-800">Natural Ingredients</h3>
          <p className="text-gray-600">
            Made with pure and natural ingredients, free from harmful chemicals.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Droplets className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-bold mb-2 text-gray-800">Eco-Friendly</h3>
          <p className="text-gray-600">
            Environmentally conscious products and packaging.
          </p>
        </div>
      </div>
    </section>
  );
};
