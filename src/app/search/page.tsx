import { fetchSearchResults } from "../lib/data";
import Header from "../ui/search/Header";
import ProductCard from "../ui/common/ProductCard";

type PageProps = {
  searchParams?: {
    q?: string;
    page?: string;
  };
};

async function page(props: PageProps) {
  const { searchParams } = props;

  const query = searchParams?.q || "";
  // const page = searchParams?.page || "1";
  const data = await fetchSearchResults(query);

  return (
    <div className="w-full">
      <Header query={query} />

      {/* REFACTOR THIS */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 my-4">
        {data?.length ? (
          data.map((pr) => {
            return (
              <ProductCard
                key={pr.id}
                id={pr.id}
                title={pr.title}
                description={pr.description}
                img={pr.img}
              />
            );
          })
        ) : (
          <h1>We couldn't find anything</h1>
        )}
      </div>
    </div>
  );
}

export default page;
