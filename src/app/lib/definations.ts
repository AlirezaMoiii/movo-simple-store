//allowObjectTypes
export type Image = {
  id: string;
  url: string;
  alt?: string;
  type: "profile" | "product" | "banner";
  related_id: number; // user_id OR product_id
  related_type: "user" | "product";
  created_at?: Date;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
  created_at?: Date;
  updated_at?: Date;
};

export type Categories = {
  id: string;
  name: string;
  slug: string;
  created_at?: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id?: null | string;
  brand: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Comment = {
  id: string;
  user_id: string;
  product_id: string;
  text: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Like = {
  id: string;
  user_id: string;
  product_id: string;
  created_at?: Date;
};

export type Order = {
  id: string;
  user_id: string;
  total_price: number;
  status: "pending" | "paid" | "shipped" | "deliverd" | "canceld";
  created_at?: Date;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
};

export type Address = {
  id: string;
  user_id: string;
  address_line: string;
  city: string;
  postal_code: string;
  phone: string;
  is_default: boolean;
  created_at?: Date;
};
