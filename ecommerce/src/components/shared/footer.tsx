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
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic
  };

  return (
    <footer className="bg-white text-blue-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="leading-relaxed">
              Elevate your shopping experience with premium products and
              top-notch service.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                { href: "https://facebook.com", icon: <Facebook /> },
                { href: "https://twitter.com", icon: <Twitter /> },
                { href: "https://instagram.com", icon: <Instagram /> },
                { href: "https://youtube.com", icon: <Youtube /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-transform transform hover:scale-110"
                >
                  {React.cloneElement(social.icon, { className: "w-6 h-6" })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {["About Us", "Contact Us", "All Products", "Login"].map(
                (link, index) => (
                  <Link
                    key={index}
                    href={`/${link.replace(/\s+/g, "").toLowerCase()}`}
                    className="block hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-500" />
                <span>123 Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-blue-500" />
                <a href="tel:+12345678900" className="hover:text-blue-500">
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-500" />
                <a
                  href="mailto:daxbazaar@gmail.com"
                  className="hover:text-blue-500"
                >
                  daxbazaar@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe for the latest updates and exclusive deals.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-3"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-100 border-gray-300 text-gray-700 placeholder-gray-500 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
              />
              <Button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 transition-all rounded-lg py-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center">
          <p>&copy; 2024 DaxBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
