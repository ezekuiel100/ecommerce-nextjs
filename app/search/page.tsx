import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function searchProduct(query) {
  const response = await fetch(
    `http://localhost:3000/api/produto/search?q=${query}`
  );
  const products = await response.json();

  return products;
}

async function SearchPage({ searchParams }) {
  const { q: query } = searchParams;

  if (!query) {
    redirect("/");
  }

  const products = await searchProduct(query);

  return (
    <div className="flex flex-col gap-6 p-8">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/produto/${product.slug}`}
              className="group relative bg-zinc-800 flex items-center justify-center"
            >
              <Image
                src={product.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={400}
                quality={100}
                alt=""
              ></Image>

              <div className="absolute flex gap-2 h-12 items-center bottom-10 right-28  rounded-full p-1 pl-5 border-2 border-zinc-500 bg-black/60">
                <span className="text-sm truncate">{product.title}</span>
                <span className="px-4 bg-violet-500 rounded-full h-full flex items-center justify-center font-semibold">
                  {`R$ ${product.price}`}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
