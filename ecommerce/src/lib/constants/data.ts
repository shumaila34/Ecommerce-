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
    description: 'Juicy and ripe fresh tomatoes, perfect for salads, sauces, and sandwiches.',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.5,
    category: 'Fresh Vegetables',
    reviews: 0
  },
  {
    id: '2',
    name: 'Red Bell Pepper',
    description: 'Crisp and sweet red bell peppers, great for stir-fries, salads, and roasting.',
    price: 2.99,
    oldPrice: 3.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    rating: 4.8,
    category: 'Fresh Vegetables',
    reviews: 0
  },
  {
    id: '3',
    name: 'Fresh Strawberries',
    description: 'Sweet and juicy strawberries, ideal for desserts, smoothies, or snacking.',
    price: 6.99,
    oldPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: '4',
    name: 'Organic Bananas',
    description: 'Naturally ripened organic bananas, rich in potassium and energy-boosting nutrients.',
    price: 3.99,
    oldPrice: 4.99,
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: '5',
    name: 'Red Onions',
    description: 'Fresh and aromatic red onions, perfect for cooking, salads, and pickling.',
    price: 1.79,
    oldPrice: 2.99,
    image: 'https://images.unsplash.com/photo-1618512496248-a01c6df5cd31',
    rating: 4.3,
    category: 'Fresh Vegetables'
  },
  {
    id: '6',
    name: 'Fresh Carrots',
    description: 'Crunchy and nutritious fresh carrots, ideal for salads, soups, and snacking.',
    price: 2.49,
    oldPrice: 3.49,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    rating: 4.5,
    category: 'Fresh Vegetables'
  },
  {
    id: '7',
    name: 'Green Apples',
    description: 'Tart and refreshing green apples, great for eating fresh or making pies.',
    price: 4.99,
    oldPrice: 5.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    rating: 4.6,
    category: 'Fresh Fruits'
  },
  {
    id: '8',
    name: 'Fresh Broccoli',
    description: 'Nutritious and fresh broccoli, rich in vitamins and perfect for steaming or stir-frying.',
    price: 3.29,
    oldPrice: 4.29,
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c',
    rating: 4.4,
    category: 'Fresh Vegetables'
  },
  {
    id: '9',
    name: 'Orange Pack',
    description: 'Sweet and juicy oranges, packed with vitamin C and perfect for fresh juice.',
    price: 5.99,
    oldPrice: 7.99,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9',
    rating: 4.7,
    category: 'Fresh Fruits'
  },
  {
    id: '10',
    name: 'Fresh Cucumber',
    description: 'Cool and hydrating fresh cucumbers, great for salads and healthy snacks.',
    price: 1.99,
    oldPrice: 2.49,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e',
    rating: 4.3,
    category: 'Fresh Vegetables'
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
