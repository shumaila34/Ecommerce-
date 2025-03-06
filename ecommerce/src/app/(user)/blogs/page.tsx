'use client';

import React from 'react';
import Link from 'next/link';

// Dummy blog data
const dummyBlogs = [
  {
    id: 1,
    title: "Latest Fashion Trends 2025",
    content: "Discover the hottest fashion trends that are taking the world by storm. From sustainable fashion to digital wardrobes, we explore what's next in the world of style.",
    image: "https://picsum.photos/800/400?random=1",
    date: "Feb 9, 2025",
    author: "Sarah Styles"
  },
  {
    id: 2,
    title: "Tech Gadgets Review",
    content: "Exploring the most innovative tech gadgets that will transform your life. We review the latest smartphones, wearables, and smart home devices to keep you informed.",
    image: "https://picsum.photos/800/400?random=2",
    date: "Feb 8, 2025",
    author: "Mike Tech"
  },
  {
    id: 3,
    title: "Home Decor Ideas",
    content: "Transform your living space with these amazing home decoration tips. Learn about color theory, furniture arrangement, and the latest interior design trends.",
    image: "https://picsum.photos/800/400?random=3",
    date: "Feb 7, 2025",
    author: "Emma Decor"
  },
  {
    id: 4,
    title: "Fitness & Wellness Guide",
    content: "Stay healthy and fit with our comprehensive wellness guide. From workout routines to nutrition advice, we've got everything you need for a healthier lifestyle.",
    image: "https://picsum.photos/800/400?random=4",
    date: "Feb 6, 2025",
    author: "John Fitness"
  },
  {
    id: 5,
    title: "Sustainable Living",
    content: "Learn how to make eco-friendly choices for a sustainable lifestyle. Discover tips for reducing waste, conserving energy, and living more sustainably.",
    image: "https://picsum.photos/800/400?random=5",
    date: "Feb 5, 2025",
    author: "Green Living"
  },
  {
    id: 6,
    title: "Travel Destinations 2025",
    content: "Explore the most breathtaking destinations for your next adventure. From hidden gems to popular spots, find inspiration for your next journey.",
    image: "https://picsum.photos/800/400?random=6",
    date: "Feb 4, 2025",
    author: "Travel Expert"
  }
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <div className="text-sm text-muted-foreground mb-3">
                <span>{blog.date}</span> • <span>{blog.author}</span>
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {blog.content}
              </p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-primary hover:underline inline-block"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
