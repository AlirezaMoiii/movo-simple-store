import { faker } from "@faker-js/faker";

import {
  User,
  Product,
  Comment,
  Like,
  Order,
  OrderItem,
  Address,
} from "./definations";

const uuids = [
  "6f1e9f0a-4d23-4d2c-87e4-1b32c7cdbd60",
  "c2d5f8ab-7e66-4a4f-9b22-5e4ec215e7b3",
  "a5f8c1d9-3f74-43e2-b5b7-2f8b9377b23e",
  "b97d1e46-0f8a-4fa0-8ca4-0976e1a3a124",
  "d9f71e82-0b25-4d51-b6e4-20db8a1f3c6d",
  "4c8d2a97-3d70-4ef9-8b2a-5d918b3f4a7e",
  "f1a2b8c3-29e4-4d13-9a7b-2d4e9f7a8c5e",
];

export const users: User[] = [
  {
    id: uuids[0],
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: "user",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const productss: Product[] = [
  {
    id: uuids[1],
    name: "Mac book pro 2023",
    description: "Apple macbook pro 2023 description",
    price: 2200,
    stock: 32,
    category_id: null,
    brand: "apple",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const comments: Comment[] = [
  {
    id: uuids[2],
    user_id: uuids[0],
    product_id: uuids[1],
    text: "Amazing Product!!!",
    created_at: new Date(),
    updated_at: undefined,
  },
];

export const likes: Like[] = [
  {
    id: uuids[3],
    user_id: uuids[0],
    product_id: uuids[1],
    created_at: new Date(),
  },
];

export const orders: Order[] = [
  {
    id: uuids[4],
    user_id: uuids[0],
    total_price: 480,
    status: "pending",
    created_at: new Date(),
  },
];

export const orderItems: OrderItem[] = [
  {
    id: uuids[5],
    order_id: uuids[4],
    product_id: uuids[1],
    quantity: 2,
    price: 800,
  },
];

export const addresses: Address[] = [
  {
    id: uuids[6],
    user_id: uuids[0],
    address_line: faker.address.direction(),
    city: faker.address.city(),
    postal_code: "2393209901",
    phone: "12324331",
    is_default: true,
    created_at: new Date(),
  },
];

export const products = [
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
