import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: require });

// img
export async function fetchSearchResults(query: string) {
  const data = await sql`
        SELECT * FROM products 
        WHERE products.name ILIKE ${"%" + query + "%"}
    `;

  return data;
}

// Image / Category / Product / Comments / Likes
// fetchProductByID.ts
export async function fetchProductByID(id: string) {
  const [product] = await sql`
    SELECT * FROM products WHERE id = ${id}
  `;
  return product;
}

export async function fetchProductImages(productId: string) {
  const images = await sql`
    SELECT * FROM images 
    WHERE related_id = ${productId} AND related_type = 'product'
  `;
  return images;
}

export async function fetchProductComments(productId: string) {
  const comments = await sql`
    SELECT 
      comments.id,
      comments.text,
      comments.created_at,
      users.firstName,
      users.lastName,
      users.id as user_id
    FROM comments
    JOIN users ON comments.user_id = users.id
    WHERE comments.product_id = ${productId}
    ORDER BY comments.created_at DESC
  `;
  return comments;
}

export async function fetchProductLikeCount(productId: string) {
  const [count] = await sql`
    SELECT COUNT(*)::int as like_count FROM likes
    WHERE product_id = ${productId}
  `;
  return count.like_count;
}
