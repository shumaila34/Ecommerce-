export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export interface BannerSlide {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export interface FeaturedCategory {
  name: string;
  image: string;
  items: string;
}

