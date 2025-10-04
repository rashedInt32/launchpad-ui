import { TrendingUp, Users, Coffee, Award, Zap, Shield, Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import type { 
  CartItem, 
  FeaturedFood, 
  Restaurant, 
  RestaurantMenu, 
  Stat, 
  Testimonial, 
  AppStore, 
  AppFeature, 
  FooterLinks, 
  SocialLink, 
  ContactInfo,
  FeatureCard 
} from "@/lib/types/food";

export const cartItems: CartItem[] = [
  { id: 1, name: "Lamb Chops Handi", price: 22.99, quantity: 1, image: "🍖" },
  { id: 2, name: "Double Stack Pizza", price: 18.99, quantity: 2, image: "🍕" },
  { id: 3, name: "Chicken Burger", price: 12.99, quantity: 1, image: "🍔" }
];

export const featuredFoods: FeaturedFood[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    image: "/assets/food/pizza.jpg",
    rating: 4.8,
    deliveryTime: "25-30",
    price: 18.99
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: "/assets/food/burger.jpg",
    rating: 4.9,
    deliveryTime: "20-25",
    price: 12.99
  },
  {
    id: 3,
    name: "Pasta Carbonara",
    image: "/assets/food/pasta.jpg",
    rating: 4.7,
    deliveryTime: "30-35",
    price: 16.99
  }
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Mega Restaurant",
    cuisine: "Italian & Pizza",
    image: "🍕",
    rating: 4.8,
    reviews: 1250,
    deliveryTime: "25",
    deliveryFee: 2.99,
    featured: true,
    address: "Downtown Plaza"
  },
  {
    id: 2,
    name: "The Fast Food",
    cuisine: "Burgers & Fries",
    image: "🍔",
    rating: 4.6,
    reviews: 890,
    deliveryTime: "50",
    deliveryFee: 1.99,
    featured: false,
    address: "Main Street"
  },
  {
    id: 3,
    name: "Green Bakery",
    cuisine: "Healthy & Fresh",
    image: "🥗",
    rating: 4.9,
    reviews: 2100,
    deliveryTime: "45",
    deliveryFee: 3.49,
    featured: true,
    address: "Green Valley"
  },
  {
    id: 4,
    name: "Eat Frio",
    cuisine: "Mexican",
    image: "🌮",
    rating: 4.7,
    reviews: 675,
    deliveryTime: "25",
    deliveryFee: 2.49,
    featured: false,
    address: "Heritage District"
  },
  {
    id: 5,
    name: "Turkish Cuisine",
    cuisine: "Mediterranean",
    image: "🥙",
    rating: 4.5,
    reviews: 543,
    deliveryTime: "50",
    deliveryFee: 3.99,
    featured: false,
    address: "Old Town"
  },
  {
    id: 6,
    name: "Pizzario",
    cuisine: "Wood Fired Pizza",
    image: "🍕",
    rating: 4.8,
    reviews: 1890,
    deliveryTime: "45",
    deliveryFee: 2.99,
    featured: true,
    address: "City Center"
  }
];

export const restaurantMenus: Record<number, RestaurantMenu> = {
  1: {
    categories: [
      {
        name: "Pizza",
        items: [
          { id: 1, name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 18.99, image: "🍕", popular: true },
          { id: 2, name: "Pepperoni Pizza", description: "Pepperoni, mozzarella, tomato sauce", price: 22.99, image: "🍕", popular: false },
          { id: 3, name: "Quattro Stagioni", description: "Four seasons pizza with mixed toppings", price: 26.99, image: "🍕", popular: true }
        ]
      },
      {
        name: "Pasta",
        items: [
          { id: 4, name: "Spaghetti Carbonara", description: "Eggs, cheese, pancetta, black pepper", price: 16.99, image: "🍝", popular: true },
          { id: 5, name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and chili", price: 14.99, image: "🍝", popular: false }
        ]
      }
    ]
  },
  2: {
    categories: [
      {
        name: "Burgers",
        items: [
          { id: 6, name: "Classic Burger", description: "Beef patty, lettuce, tomato, onion", price: 12.99, image: "🍔", popular: true },
          { id: 7, name: "Cheese Burger", description: "Beef patty with melted cheese", price: 14.99, image: "🍔", popular: true },
          { id: 8, name: "Bacon Burger", description: "Beef patty with crispy bacon", price: 16.99, image: "🍔", popular: false }
        ]
      },
      {
        name: "Sides",
        items: [
          { id: 9, name: "French Fries", description: "Golden crispy fries", price: 4.99, image: "🍟", popular: true },
          { id: 10, name: "Onion Rings", description: "Crispy battered onion rings", price: 5.99, image: "🧅", popular: false }
        ]
      }
    ]
  },
  3: {
    categories: [
      {
        name: "Salads",
        items: [
          { id: 11, name: "Caesar Salad", description: "Romaine lettuce, croutons, parmesan", price: 13.99, image: "🥗", popular: true },
          { id: 12, name: "Greek Salad", description: "Feta cheese, olives, tomatoes, cucumber", price: 15.99, image: "🥗", popular: true }
        ]
      },
      {
        name: "Smoothies",
        items: [
          { id: 13, name: "Green Smoothie", description: "Spinach, banana, apple, ginger", price: 7.99, image: "🥤", popular: true },
          { id: 14, name: "Berry Blast", description: "Mixed berries, yogurt, honey", price: 8.99, image: "🥤", popular: false }
        ]
      }
    ]
  },
  4: {
    categories: [
      {
        name: "Tacos",
        items: [
          { id: 15, name: "Carnitas Tacos", description: "Slow-cooked pork with cilantro and onion", price: 11.99, image: "🌮", popular: true },
          { id: 16, name: "Chicken Tacos", description: "Grilled chicken with fresh salsa", price: 10.99, image: "🌮", popular: true }
        ]
      },
      {
        name: "Burritos",
        items: [
          { id: 17, name: "Beef Burrito", description: "Seasoned beef, rice, beans, cheese", price: 13.99, image: "🌯", popular: false },
          { id: 18, name: "Veggie Burrito", description: "Black beans, rice, vegetables, guac", price: 12.99, image: "🌯", popular: true }
        ]
      }
    ]
  },
  5: {
    categories: [
      {
        name: "Kebabs",
        items: [
          { id: 19, name: "Chicken Kebab", description: "Grilled chicken with spices", price: 17.99, image: "🥙", popular: true },
          { id: 20, name: "Lamb Kebab", description: "Tender lamb with herbs", price: 22.99, image: "🥙", popular: true }
        ]
      },
      {
        name: "Sides",
        items: [
          { id: 21, name: "Hummus", description: "Creamy chickpea dip with pita", price: 6.99, image: "🧆", popular: false },
          { id: 22, name: "Baklava", description: "Sweet pastry with nuts and honey", price: 5.99, image: "🍯", popular: true }
        ]
      }
    ]
  },
  6: {
    categories: [
      {
        name: "Wood Fired Pizza",
        items: [
          { id: 23, name: "Neapolitan Pizza", description: "Traditional Italian with San Marzano tomatoes", price: 24.99, image: "🍕", popular: true },
          { id: 24, name: "Truffle Pizza", description: "White sauce, truffle oil, arugula", price: 32.99, image: "🍕", popular: true },
          { id: 25, name: "Prosciutto Pizza", description: "Prosciutto di Parma, mozzarella, arugula", price: 28.99, image: "🍕", popular: false }
        ]
      }
    ]
  }
};

export const stats: Stat[] = [
  {
    id: 1,
    icon: TrendingUp,
    number: "1052+",
    label: "Online Orders",
    color: "text-orange-500"
  },
  {
    id: 2,
    icon: Users,
    number: "9800+",
    label: "Satisfied Customers",
    color: "text-green-500"
  },
  {
    id: 3,
    icon: Coffee,
    number: "3785+",
    label: "Cup of Teas",
    color: "text-blue-500"
  },
  {
    id: 4,
    icon: Award,
    number: "4.9",
    label: "Average Rating",
    color: "text-purple-500"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Terry",
    location: "New York City",
    avatar: "👨‍💼",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Pellentesque sed feugiat nisi. Best food delivery service ever!",
    orderCount: 45
  },
  {
    id: 2,
    name: "Jessica D Miller", 
    location: "New York City",
    avatar: "👩‍💻",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Always fresh and on time delivery.",
    orderCount: 32
  },
  {
    id: 3,
    name: "David Muller",
    location: "New York City", 
    avatar: "👨‍🎨",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna. Quis ipsum suspendisse ultrices gravida. Amazing variety of restaurants!",
    orderCount: 67
  },
  {
    id: 4,
    name: "Julia Tracker",
    location: "New York City",
    avatar: "👩‍🔬", 
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida eu arcu a pharetra. Cras varius semper pharetra. Pellentesque sed feugiat nisi. Super convenient and reliable!",
    orderCount: 23
  }
];

export const appStores: AppStore[] = [
  {
    id: 1,
    name: "iOS App Store",
    icon: "🍎",
    url: "https://www.apple.com/ios/app-store/",
    description: "Download for iPhone"
  },
  {
    id: 2,
    name: "Google Play Store", 
    icon: "📱",
    url: "https://play.google.com/store/apps?hl=en",
    description: "Download for Android"
  }
];

export const appFeatures: AppFeature[] = [
  {
    icon: Zap,
    title: "Quick Orders",
    description: "Order in just 3 taps"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe & encrypted transactions"
  },
  {
    icon: Star,
    title: "Real-time Tracking",
    description: "Track your order live"
  }
];

export const footerLinks: FooterLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Blog", href: "#blog" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Restaurant Partners", href: "#partners" },
    { name: "Delivery Partners", href: "#delivery" }
  ],
  legal: [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Refund Policy", href: "#refunds" }
  ]
};

export const socialLinks: SocialLink[] = [
  { name: "Facebook", icon: "📘", href: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: "🐦", href: "#", color: "hover:text-sky-400" },
  { name: "Instagram", icon: "📷", href: "#", color: "hover:text-pink-500" },
  { name: "YouTube", icon: "📺", href: "#", color: "hover:text-red-500" }
];

export const contactInfo: ContactInfo[] = [
  { icon: Phone, text: "+1 631 123 4567", href: "tel:+16311234567" },
  { icon: Mail, text: "hello@fooddelivery.com", href: "mailto:hello@fooddelivery.com" },
  { icon: MapPin, text: "123 Food Street, Delivery City, DC 12345", href: "#" },
  { icon: Clock, text: "24/7 Customer Support", href: "#" }
];

export const featureCards: FeatureCard[] = [
  {
    icon: "🚀",
    title: "Fast Delivery",
    description: "Average delivery time of 30 minutes or your order is free"
  },
  {
    icon: "🏆",
    title: "Quality Food",
    description: "Fresh ingredients from trusted restaurants and local chefs"
  },
  {
    icon: "💝",
    title: "Customer Care",
    description: "24/7 support team ready to help with any concerns"
  }
];