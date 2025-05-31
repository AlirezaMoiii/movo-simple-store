import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: require });
export async function fetchSearchResults(query: string) {
  const data = await sql`
        SELECT * FROM products 
        WHERE products.name ILIKE ${"%" + query + "%"}
    `;

  return data;
}
