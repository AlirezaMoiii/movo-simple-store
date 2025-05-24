import { faker } from "@faker-js/faker";

import { User, Product, Comment, Like, Order, OrderItem, Address } from "./definations";

export const users: User[] = [
  {
    id: 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: "user",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Mac book pro 2023",
    description: "Apple macbook pro 2023 description",
    price: 2200,
    stock: 32,
    category_id: 3,
    brand: "apple",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    user_id: 1,
    product_id: 1,
    text: "Amazing Product!!!",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const likes: Like[] = [
  {
    id: 1,
    user_id: 1,
    product_id: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    product_id: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    product_id: 1,
    created_at: new Date(),
  },
];

export const orders: Order[] = [
  {
    id: 1,
    user_id: 1,
    total_price: 480,
    status: "pending",
    created_at: new Date(),
  },
];

export const orderItems: OrderItem[] = [
  {
    id: 1,
    order_id: 1,
    product_id: 1,
    quantity: 2,
    price: 800
  },
];


export const addresses: Address[] = [
  {
    id: 1,
    user_id: 1,
    address_line: faker.address.direction(),
    city: faker.address.city(),
    postal_code: "2393209901",
    phone: "12324331",
    is_default: true,
    created_at: new Date()
  },
];


export const productss = [
  {
    id: "B0C123456X",
    title:
      "Apple MacBook Pro 16-inch (2023) - M2 Pro chip, 16GB RAM, 512GB SSD - Space Gray",
    brand: "Apple",
    images: [
      "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81R8jv8vzQL._AC_SL1500_.jpg",
    ],
    price: {
      current: 2499.99,
      currency: "USD",
      original: 2699.99,
      discountPercentage: 7.41,
    },
    availability: "In Stock",
    seller: {
      name: "Amazon.com",
      isPrime: true,
      rating: 4.9,
    },
    description: [
      "Apple-designed M2 Pro chip for a giant leap in CPU, GPU, and machine learning performance.",
      "16.2-inch Liquid Retina XDR display for extreme dynamic range and contrast ratio.",
      "16GB of unified memory so everything you do is fast and fluid.",
      "512GB SSD storage for all your files and apps.",
      "Up to 22 hours of battery life.",
      "Six-speaker sound system with Spatial Audio.",
    ],
    features: [
      "M2 Pro Chip with 12-core CPU and 19-core GPU",
      "3 Thunderbolt 4 ports, HDMI, SDXC card slot, MagSafe 3",
      "Wi-Fi 6E, Bluetooth 5.3",
      "Backlit Magic Keyboard with Touch ID",
      "macOS Sonoma",
    ],
    ratings: {
      average: 4.8,
      totalReviews: 1342,
      breakdown: {
        "5_star": 1100,
        "4_star": 180,
        "3_star": 40,
        "2_star": 15,
        "1_star": 7,
      },
    },
    reviews: [
      {
        username: "techlover99",
        rating: 5,
        title: "Blazing fast and super smooth",
        body: "The M2 Pro chip is a beast! I use Final Cut Pro and the render times are almost cut in half. Worth every penny.",
        date: "2024-02-10",
      },
      {
        username: "jenniferQ",
        rating: 4,
        title: "Almost perfect",
        body: "Great performance and display. I wish it was a bit lighter though. Still the best laptop I've owned.",
        date: "2024-01-22",
      },
    ],
    questions: [
      {
        question: "Does this support dual external displays?",
        answer: "Yes, the M2 Pro supports up to two external displays.",
      },
      {
        question: "Can I upgrade the RAM later?",
        answer:
          "No, the RAM is soldered to the motherboard and cannot be upgraded.",
      },
    ],
    shipping: {
      eligibleForPrime: true,
      estimatedDelivery: "2025-05-22",
      shippingCost: "Free",
    },
    warranty: {
      type: "1-year limited warranty",
      extendedAvailable: true,
    },
  },
];

// USERS - PRODUCTS - CATEGORIES - COMMENTS - LIKES - ORDERS - ORDERITEM - ADDRESSES - ADMINS
