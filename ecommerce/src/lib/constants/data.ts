import { BannerSlide, FeaturedCategory, Product } from '../types';

export const categories = [
  'Fresh Vegetables',
  'Fresh Fruits',
  'Meat & Fish',
  'Snacks',
  'Beverages',
  'Dairy',
  'Bakery',
  'Pantry'
] as const;

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.5,
    category: 'Fresh Vegetables'
  },
  {
    id: '2',
    name: 'Red Bell Pepper',
    price: 2.99,
    oldPrice: 3.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    rating: 4.8,
    category: 'Fresh Vegetables'
  },
  {
    id: '3',
    name: 'Fresh Strawberries',
    price: 6.99,
    oldPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: '4',
    name: 'Organic Bananas',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: '5',
    name: 'Red Onions',
    price: 1.79,
    oldPrice: 2.99,
    image: 'https://images.unsplash.com/photo-1618512496248-a01c6df5cd31',
    rating: 4.3,
    category: 'Fresh Vegetables'
  },
  {
    id: '6',
    name: 'Fresh Carrots',
    price: 2.49,
    oldPrice: 3.49,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    rating: 4.5,
    category: 'Fresh Vegetables'
  },
  {
    id: '7',
    name: 'Green Apples',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: '8',
    name: 'Fresh Broccoli',
    price: 3.29,
    oldPrice: 4.29,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.4,
    category: 'Fresh Vegetables'
  },
  {
    id: '9',
    name: 'Orange Pack',
    price: 5.99,
    oldPrice: 7.99,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: '10',
    name: 'Fresh Cucumber',
    price: 1.99,
    oldPrice: 2.49,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e',
    rating: 4.3,
    category: 'Fresh Vegetables'
  },
  {
    id: '11',
    name: 'Fresh Milk',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    rating: 4.8,
    category: 'Dairy'
  },
  {
    id: '12',
    name: 'Whole Chicken',
    price: 8.99,
    oldPrice: 10.99,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781',
    rating: 4.6,
    category: 'Meat & Fish'
  },
  {
    id: '13',
    name: 'Fresh Bread',
    price: 2.99,
    oldPrice: 3.49,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04',
    rating: 4.7,
    category: 'Bakery'
  },
  {
    id: '14',
    name: 'Potato Chips',
    price: 1.99,
    oldPrice: 2.49,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b',
    rating: 4.4,
    category: 'Snacks'
  },
  {
    id: '15',
    name: 'Cola Pack',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
    rating: 4.5,
    category: 'Beverages'
  },
  {
    id: '16',
    name: 'Fresh Eggs',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f',
    rating: 4.8,
    category: 'Dairy'
  },
  {
    id: '17',
    name: 'Salmon Fillet',
    price: 12.99,
    oldPrice: 15.99,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c',
    rating: 4.9,
    category: 'Meat & Fish'
  },
  {
    id: '18',
    name: 'Croissants',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    rating: 4.6,
    category: 'Bakery'
  },
  {
    id: '19',
    name: 'Mixed Nuts',
    price: 6.99,
    oldPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32',
    rating: 4.7,
    category: 'Snacks'
  },
  {
    id: '20',
    name: 'Orange Juice',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b',
    rating: 4.5,
    category: 'Beverages'
  },
  {
    id: '21',
    name: 'Yogurt Pack',
    price: 5.99,
    oldPrice: 7.99,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    rating: 4.6,
    category: 'Dairy'
  },
  {
    id: '22',
    name: 'Ground Beef',
    price: 9.99,
    oldPrice: 12.99,
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976',
    rating: 4.7,
    category: 'Meat & Fish'
  },
  {
    id: '23',
    name: 'Bagels',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb',
    rating: 4.4,
    category: 'Bakery'
  },
  {
    id: '24',
    name: 'Popcorn',
    price: 2.99,
    oldPrice: 3.99,
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f',
    rating: 4.3,
    category: 'Snacks'
  },
  {
    id: '25',
    name: 'Mineral Water',
    price: 1.99,
    oldPrice: 2.49,
    image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30',
    rating: 4.5,
    category: 'Beverages'
  }
];

export const bannerSlides: BannerSlide[] = [
  {
    title: "The Best Quality Products Guaranteed!",
    description: "Fresh vegetables & fruits at your doorstep",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    buttonText: "Shop Now"
  },
  {
    title: "Fresh & Healthy Organic Food",
    description: "Get up to 50% off on your first order",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200",
    buttonText: "Order Now"
  },
  {
    title: "Summer Vegetable Sale",
    description: "Free shipping on orders over $50",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=1200",
    buttonText: "Get Started"
  }
];

export const featuredCategories: FeaturedCategory[] = [
  {
    name: 'Fruits & Vegetables',
    items: '155 items',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Meat & Fish',
    items: '85 items',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Dairy',
    items: '92 items',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Beverages',
    items: '75 items',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Snacks',
    items: '127 items',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=300',
  },
  {
    name: 'Organic Food',
    items: '45 items',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=300',
  },
];

export const discountedProducts: Product[] = [
  {
    id: 'disc-1',
    name: 'Fresh Organic Tomatoes',
    price: 3.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.5,
    category: 'Fresh Vegetables'
  },
  {
    id: 'disc-2',
    name: 'Premium Red Bell Peppers',
    price: 2.49,
    oldPrice: 3.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    rating: 4.8,
    category: 'Fresh Vegetables'
  },
  {
    id: 'disc-3',
    name: 'Sweet Strawberries Pack',
    price: 5.99,
    oldPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: 'disc-4',
    name: 'Organic Banana Bunch',
    price: 2.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: 'disc-5',
    name: 'Red Onions Pack',
    price: 1.49,
    oldPrice: 2.99,
    image: 'https://images.unsplash.com/photo-1618512496248-a01c6df5cd31',
    rating: 4.3,
    category: 'Fresh Vegetables'
  },
  {
    id: 'disc-6',
    name: 'Fresh Carrot Bundle',
    price: 1.99,
    oldPrice: 3.49,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    rating: 4.5,
    category: 'Fresh Vegetables'
  },
  {
    id: 'disc-7',
    name: 'Green Apples Pack',
    price: 3.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: 'disc-8',
    name: 'Fresh Broccoli Head',
    price: 2.49,
    oldPrice: 4.29,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.4,
    category: 'Fresh Vegetables'
  },
  {
    id: 'disc-9',
    name: 'Sweet Orange Pack',
    price: 4.99,
    oldPrice: 7.99,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: 'disc-10',
    name: 'Fresh Cucumber Pack',
    price: 1.49,
    oldPrice: 2.49,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e',
    rating: 4.3,
    category: 'Fresh Vegetables'
  }
];
