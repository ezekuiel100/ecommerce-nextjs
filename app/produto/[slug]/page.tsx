import Image from "next/image";

export default function PaginaProduto() {
  return (
    <div className="flex max-h[860px] justify-center items-center">
      <div className="">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={800}
          height={800}
        />
      </div>

      <div className="w-[400px]  px-12">
        <h2 className="text-3xl font-bold leading-tight">
          Moleton Never Stop Learning
        </h2>
        <p className="mt-2 text-zinc-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          accusantium amet aspernatur laboriosam.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="bg-violet-500 px-5 py-2.5 rounded-full font-semibold ">
            R$128
          </span>
          <span className="text-sm text-zinc-400">12X sem juros </span>
        </div>

        <div className="mt-8 space-y-4">
          <span>Tamanho:</span>
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

        <button
          type="button"
          className="mt-8 h-12 w-full flex items-center justify-center bg-emerald-600  rounded-full font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
