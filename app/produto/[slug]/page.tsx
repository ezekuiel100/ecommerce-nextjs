import ButtonCart from "@/app/components/buttonCart";
import Image from "next/image";

async function getProduct(slug) {
  const res = await fetch(`http://localhost:3000/api/produto/${slug}`);
  const product = res.json();

  return product;
}

export async function generateMetadata({ params }) {
  const produto = await getProduct(params.slug);
  return {
    title: produto.title,
  };
}

export default async function PaginaProduto({ params }) {
  const produto = await getProduct(params.slug);

  return (
    <div className="flex max-h[860px] justify-center items-center">
      <div className="">
        <Image src={produto.image} alt="" width={800} height={800} />
      </div>

      <div className="w-[400px]  px-12">
        <h2 className="text-3xl font-bold leading-tight">{produto.title}</h2>
        <p className="mt-2 text-zinc-400">{produto.description}</p>

        <div className="mt-8 flex items-center gap-3">
          <span className="bg-violet-500 px-5 py-2.5 rounded-full font-semibold ">
            {"R$" + produto.price}
          </span>
          <span className="text-sm text-zinc-400">12X sem juros </span>
        </div>

        <div className="mt-8 space-y-4">
          <span>Tamanhos:</span>
          <div className="flex gap-2">
            <button className="flex items-center justify-center bg-zinc-800 w-10 h-9 border border-zinc-600 rounded-full">
              P
            </button>
            <button className="flex items-center justify-center bg-zinc-800 w-10 h-9 border border-zinc-600 rounded-full">
              M
            </button>
            <button className="flex items-center justify-center bg-zinc-800 w-10 h-9 border border-zinc-600 rounded-full">
              G
            </button>
            <button className="flex items-center justify-center bg-zinc-800 w-10 h-9 border border-zinc-600 rounded-full">
              GG
            </button>
          </div>
        </div>

        <ButtonCart />
      </div>
    </div>
  );
}
