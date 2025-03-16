"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const trendingSearches = [
    "Meat",
    "Fish",
    "Biscuits",
    "Vegetables",
    "Fruits",
    "Dairy",
  ];

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
    } else {
      setSuggestions(
        trendingSearches.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-blue-400"
        >
          Daxbazar
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="relative hidden md:flex w-[200px] lg:w-[300px]"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black shadow-md mt-1 rounded-md overflow-hidden">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-blue-400 hover:text-white cursor-pointer"
                  onClick={() => {
                    setSearchQuery(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-lg text-blue-500">
          <Link href="/about" className="hover:text-blue-700 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-700 transition">
            Contact
          </Link>
          <Link href="/blogs" className="hover:text-blue-700 transition">
            Blogs
          </Link>

          {/* Icons (Consistent Across Desktop & Mobile) */}
          <Link
            href="/sign-in"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <User className="w-5 h-5" /> <span>Sign In</span>
          </Link>

          <Button
            asChild
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition flex items-center"
          >
            <Link href="/register">
              <User className="w-5 h-5 mr-1" /> <span>Register</span>
            </Link>
          </Button>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 hover:text-blue-700 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-blue-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              3
            </span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-blue-500" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4 text-lg text-blue-500">
              <Link href="/about" className="flex items-center gap-2">
                About
              </Link>
              <Link href="/contact" className="flex items-center gap-2">
                Contact
              </Link>
              <Link href="/blogs" className="flex items-center gap-2">
                Blogs
              </Link>
              <Link href="/sign-in" className="flex items-center gap-2">
                <User className="w-5 h-5" /> Sign In
              </Link>
              <Button
                asChild
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition flex items-center"
              >
                <Link href="/register">
                  <User className="w-5 h-5 mr-1" /> Register
                </Link>
              </Button>
              <Link href="/cart" className="flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" /> Cart
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
