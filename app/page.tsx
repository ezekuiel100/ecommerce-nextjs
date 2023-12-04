import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid max-h-[800px] grid-cols-9 grid-rows-6 gap-6 p-8 ">
        <Link
          href="/"
          className="group bg-zinc-800 row-span-6 col-span-6 flex items-center justify-center"
        >
          <Image
            src="/moletom-never-stop-learning.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={800}
            height={800}
            quality={100}
            alt=""
          ></Image>
        </Link>
        <Link
          href="/"
          className="group bg-zinc-800 row-span-3 col-span-3  flex items-center justify-center"
        >
          <Image
            src="/moletom-java.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={400}
            quality={100}
            alt=""
          ></Image>
        </Link>
        <Link
          href="/"
          className="group bg-zinc-800 row-span-3 col-span-3  flex items-center justify-center"
        >
          <Image
            src="/moletom-ai-side.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={400}
            quality={100}
            alt=""
          ></Image>
        </Link>
      </div>
    </main>
  );
}
