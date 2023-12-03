import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid max-h-[800px] grid-cols-9 grid-rows-6 gap-6 p-8">
        <Link href="/" className="bg-yellow-500 row-span-6 col-span-6">
          <Image
            src="/moletom-never-stop-learning.png"
            alt=""
            width={760}
            height={760}
            quality={100}
          ></Image>
        </Link>
        <Link href="/" className="bg-yellow-500 row-span-3 col-span-3">
          <Image
            src="/moletom-java.png"
            alt=""
            width={400}
            height={400}
            quality={100}
          ></Image>
        </Link>
        <Link href="/" className="bg-yellow-500 row-span-3 col-span-3">
          <Image
            src="/moletom-ai-side.png"
            alt=""
            width={400}
            height={400}
            quality={100}
          ></Image>
        </Link>
      </div>
    </main>
  );
}
