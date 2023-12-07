import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";
import { api } from "@/data/api";

async function getFeturedProducts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await api("/produtos/featured");

  const produtos = await res.json();
  return produtos;
}

export default async function Home() {
  const [produtoDestaque, ...outrosProdutos] = await getFeturedProducts();

  return (
    <main>
      <div className=" grid max-h-[800px] grid-cols-9 grid-rows-6 gap-6 p-8 ">
        <Link
          href={`/produto/${produtoDestaque.slug}`}
          className="group relative bg-zinc-800 row-span-6 col-span-6 flex items-center justify-center"
        >
          <Image
            src={produtoDestaque.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={800}
            height={800}
            quality={100}
            alt=""
          ></Image>

          <div className="absolute flex gap-2 h-12 items-center bottom-28 right-28  rounded-full p-1 pl-5 border-2 border-zinc-500 bg-black/60">
            <span className="text-sm truncate">{produtoDestaque.title}</span>
            <span className="px-4 bg-violet-500 rounded-full h-full flex items-center justify-center font-semibold">
              {`R$ ${produtoDestaque.price}`}
            </span>
          </div>
        </Link>

        {outrosProdutos.map((produto: any) => {
          return (
            <Link
              key={produto.id}
              href={`/produto/${produto.slug}`}
              className="group relative bg-zinc-800 row-span-3 col-span-3  flex items-center justify-center"
            >
              <Image
                src={produto.image}
                className="group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={400}
                quality={100}
                alt=""
              ></Image>

              <div className="absolute flex gap-2 h-12 items-center bottom-10 right-28  rounded-full p-1 pl-5 border-2 border-zinc-500 bg-black/60">
                <span className="text-sm truncate">{produto.title}</span>
                <span className="px-4 bg-violet-500 rounded-full h-full flex items-center justify-center font-semibold">
                  {`R$ ${produto.price}`}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
