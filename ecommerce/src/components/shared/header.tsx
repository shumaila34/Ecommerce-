"use client";

import type * as React from "react";
import { ShoppingCart, Heart, Search, User, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { categories } from "@/lib/constants/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/hooks/use-cart"
import { useWishlist } from "@/lib/hooks/use-wishlist"

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { getCartCount } = useCart()
  const { wishlist } = useWishlist()

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const searchInput = form.querySelector("input") as HTMLInputElement;
  //   if (searchInput.value) {
  //     router.push(`/search?q=${encodeURIComponent(searchInput.value)}`);
  //   }
  // };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.search.value.trim(); // Get input value
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-50 backdrop-blur-sm">
      {/* Top Header - Desktop Only */}
      <div className="bg-blue-50 text-sm py-1 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="flex items-center space-x-3">
              <Link
                href="/about"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <span className="mx-2 text-gray-500">|</span>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <span className="mx-2 text-gray-500">|</span>
              <Link
                href="/blogs"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Blogs
              </Link>
            </nav>
            <nav className="flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <span className="mx-2 text-gray-500">|</span>
              <Link
                href="/auth/register"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 md:h-20 justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold text-blue-600 hover:opacity-90 transition-opacity"
            >
              Daxbazar
            </Link>

            {/* Search (Hidden on Mobile) */}
            <form
              onSubmit={handleSearch}
              className="flex-1 hidden lg:flex relative"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Search for products..."
                className="w-full pl-10 bg-blue-50 border rounded-md focus-visible:ring-blue-600 border-gray-200"
                name="search"
              />
            </form>

            {/* Icons */}
            <nav className="flex items-center gap-4 md:gap-6">
              <Link
                href="/wishlist"
                className="relative hover:opacity-80 transition-opacity"
              >
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
              <Link
                href="/account"
                className="hover:opacity-80 transition-opacity hidden sm:block"
              >
                <User className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors" />
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] p-6"
                >
                  <nav className="flex flex-col space-y-4 mt-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Categories
                    </h2>
                    {categories &&
                      categories.map((category) => (
                        <Link
                          key={category}
                          href={`/category/${category
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    <h2 className="text-lg font-semibold mt-6 text-gray-800">
                      Pages
                    </h2>
                    <Link
                      href="/about"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/blogs"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/(auth)/Login"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/(auth)/register"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      Register
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </nav>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden my-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Search for products..."
                className="w-full pl-10 bg-blue-50 border rounded-md focus-visible:ring-blue-600 border-gray-200"
                name="search"
              />
            </form>
          </div>

          {/* Categories (Desktop) */}
          <nav className="hidden lg:flex items-center h-12 overflow-x-auto space-x-1">
            {categories &&
              categories.map((category) => {
                const categoryPath = `/category/${category
                  .toLowerCase()
                  .replace(/ /g, "-")}`;
                const isActive = pathname === categoryPath;

                return (
                  <Link
                    key={category}
                    href={categoryPath}
                    className={`px-3 h-9 rounded-md flex items-center text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-50 text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </Link>
                );
              })}
          </nav>
        </div>
      </div>
    </header>
  );
}
