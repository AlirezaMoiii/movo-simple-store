import postgres from "postgres";
import bcrypt from "bcryptjs";

import {
  users,
  products,
  comments,
  likes,
  orders,
  orderItems,
  addresses,
} from "@/app/lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: require });

async function seedUsers() {
  await sql`CREATE EXTENTION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255)
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at DATE
    )`;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPass = await bcrypt.hash(user.password, 10);
      return sql`
            INSERT INTO users (id, firstName, lastName, email, password, role)
            VALUES(${user.id}, ${user.firstName}, ${user.lastName}, ${user.email}, ${hashedPass}, ${user.role})
            ON CONFLICT (email) DO NOTHING
            `;
    })
  );
  return insertedUsers;
}

async function seedProducts() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS products(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL,
  category_id TEXT,
  brand TEXT NOT NULL,
  created_at DATE NOT NULL,
  )`;

  const insertedProducts = await Promise.all(
    products.map(
      (product) =>
        sql`
      INSERT INTO products (name, description, price, stock, category_id, brand)
      VALUES (${product.name}, ${product.description}, ${product.price}, ${product.stock}, ${product.category_id}, ${product.brand})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedProducts;
}

async function seedComments() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS comments(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  text TEXT NOT NULL,
  created_at DATE NOT NULL,
  )`;

  const insertedComments = await Promise.all(
    comments.map(
      (comment) =>
        sql`
      INSERT INTO comments (user_id, product_id, text)
      VALUES (${comment.user_id}, ${comment.product_id}, ${comment.text})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedComments;
}

async function seedLikes() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS likes(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  created_at DATE NOT NULL,
  )`;

  const insertedLikes = await Promise.all(
    likes.map(
      (like) =>
        sql`
      INSERT INTO likes (user_id, product_id, text)
      VALUES (${like.user_id}, ${like.product_id})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedLikes;
}

async function seedOrders() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS orders(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INT NOT NULL,
  total_price INT NOT NULL,
  status TEXT NOT NULL
  created_at DATE NOT NULL,
  )`;

  const insertedOrders = await Promise.all(
    orders.map(
      (order) =>
        sql`
      INSERT INTO orders (user_id, total_price, status)
      VALUES (${order.user_id}, ${order.total_price}, ${order.status})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedOrders;
}

async function seedOrderItems() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS order_items(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL
  price INT NOT NULL
  created_at DATE NOT NULL,
  )`;
  const insertedOrderItems = await Promise.all(
    orderItems.map(
      (item) =>
        sql`
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES (${item.order_id}, ${item.product_id}, ${item.quantity}, ${item.price})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedOrderItems;
}
async function seedAddresses() {
  await sql`CREATE EXTENTION IF NOT EXSITS "uuid-ossp"`;
  await sql`CREATE TABEL IF NOT EXSITS addresses(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
   user_id INT NOT NULL
   address_line TEXT
   city VARCHAR(100)
   postal_code INT 
   phone VARCHAR(100)
   is_default BOOLEAN DEFAULT TRUE
  created_at DATE NOT NULL,
  )`;

  const insertedAddresses = await Promise.all(
    addresses.map(
      (ad) =>
        sql`
      INSERT INTO addresses (user_id, address_line, city, postal_code,phone,is_default )
      VALUES (${ad.user_id}, ${ad.address_line}, ${ad.city}, ${ad.postal_code}, ${ad.phone}, ${ad.is_default})
      ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedAddresses;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedProducts(),
      seedLikes(),
      seedComments(),
      seedOrders(),
      seedOrderItems(),
      seedAddresses(),
    ]);
    if (process.env.NODE_ENV === "production") {
      return new Response("Not allowed in production", { status: 403 });
    }

    return Response.json({ message: "Database seeded succeessfullu" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
