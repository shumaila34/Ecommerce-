'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-lg">
          This is your wishlist page. Here you can save all your favorite items for later.
          Currently, this is a placeholder page. The wishlist functionality will be implemented soon.
        </p>
        <p className="text-gray-500 mt-4">
          Features coming soon:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-500">
          <li>Save your favorite products</li>
          <li>Move items to cart</li>
          <li>Get notifications for price drops</li>
          <li>Share your wishlist with friends</li>
        </ul>
      </div>
    </div>
  );
}
