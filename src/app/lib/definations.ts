//allowObjectTypes
export type Image = {
  id: number;
  url: string;
  alt?: string;
  type: "profile" | "product" | "banner";
  related_id: number; // user_id OR product_id
  related_type: "user" | "product";
  created_at?: Date;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
  created_at?: Date;
  updated_at?: Date;
};

export type Categories = {
  id: number;
  name: string;
  slug: string;
  created_at?: Date;
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  brand: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Comment = {
  id: number;
  user_id: number;
  product_id: number;
  text: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Like = {
  id: number;
  user_id: number;
  product_id: number;
  created_at?: Date;
};

export type Order = {
  id: number;
  user_id: number;
  total_price: number;
  status: "pending" | "paid" | "shipped" | "deliverd" | "canceld";
  created_at?: Date;
};

export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
};

export type Address = {
  id: number;
  user_id: number;
  address_line: string;
  city: string;
  postal_code: string;
  phone: string;
  is_default: boolean;
  created_at?: Date;
};
