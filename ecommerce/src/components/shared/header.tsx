'use client';

import * as React from 'react';
import { ShoppingCart, Heart, Search, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { categories } from '@/lib/constants/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchInput = form.querySelector('input') as HTMLInputElement;
    if (searchInput.value) {
      router.push(`/search?q=${encodeURIComponent(searchInput.value)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Top Header */}
      <div className="bg-background border-b text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="flex items-center space-x-4">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                Blogs
              </Link>
            </nav>
            <nav className="flex items-center space-x-4">
              <Link href="/(auth)/Login" className="text-muted-foreground hover:text-primary transition-colors">
                Sign In
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link href="/(auth)/register" className="text-muted-foreground hover:text-primary transition-colors">
                Register
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20 gap-8">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
              EcoStore
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for products..."
                className="w-full pl-10"
                name="search"
              />
            </form>

            {/* Icons */}
            <nav className="flex items-center gap-6">
              <Link href="/wishlist" className="relative hover:opacity-80 transition-opacity">
                <Heart className="w-6 h-6" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0">
                  0
                </Badge>
              </Link>
              <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
                <ShoppingCart className="w-6 h-6" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0">
                  0
                </Badge>
              </Link>
              <Link href="/account" className="hover:opacity-80 transition-opacity">
                <User className="w-6 h-6" />
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <nav className="flex items-center h-12 border-b overflow-x-auto">
            {categories.map((category) => {
              const categoryPath = `/category/${category.toLowerCase().replace(/ /g, '-')}`;
              const isActive = pathname === categoryPath;
              
              return (
                <Link
                  key={category}
                  href={categoryPath}
                  className={`px-4 h-full flex items-center hover:bg-accent transition-colors ${
                    isActive ? 'bg-secondary text-secondary-foreground' : ''
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
