// 'use client';

// import * as React from 'react';
// import Link from 'next/link';
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// export function Footer() {
//   const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-200">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">About Us</h3>
//             <p className="text-gray-400 mb-4">
//               We are dedicated to providing the best shopping experience with quality products and excellent customer service.
//             </p>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <nav className="space-y-2">
//               <Link href="/about" className="block text-gray-400 hover:text-primary transition-colors">
//                 About Us
//               </Link>
//               <Link href="/contact" className="block text-gray-400 hover:text-primary transition-colors">
//                 Contact Us
//               </Link>
//               <Link href="/category/all" className="block text-gray-400 hover:text-primary transition-colors">
//                 All Products
//               </Link>
//               <Link href="/(auth)/Login" className="block text-gray-400 hover:text-primary transition-colors">
//                 Login
//               </Link>
//             </nav>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-primary" />
//                 <span className="text-gray-400">123 Street, City, Country</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-primary" />
//                 <span className="text-gray-400">+1 234 567 8900</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-primary" />
//                 <span className="text-gray-400">info@ecostore.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Newsletter</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter for updates and exclusive offers.
//             </p>
//             <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
//               <Input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-gray-800 border-gray-700 text-gray-200"
//               />
//               <Button type="submit">Subscribe</Button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; 2024 EcoStore. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
<footer className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-tl-3xl rounded-tr-3xl">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-700 mb-4">
              We are dedicated to providing the best shopping experience with
              quality products and excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-blue-200 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-blue-200 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/category/all"
                className="block text-gray-700 hover:text-blue-200 transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/(auth)/Login"
                className="block text-gray-700 hover:text-blue-200 transition-colors"
              >
                Login
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-100" />
                <span className="text-gray-700">123 Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-100" />
                <span className="text-gray-700">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-100" />
                <span className="text-gray-700">info@ecostore.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Newsletter
            </h3>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-2"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-gray-300 focus-visible:ring-blue-500"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-200">
          <p>© 2024 DaxBazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
