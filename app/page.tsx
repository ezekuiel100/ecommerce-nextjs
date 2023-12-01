import Link from "next/link";
import Header from "./components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid max-h-[860px] ">
        <Link href="/" className="bg-yellow-500 w-96 h-80">
          <Image
            src="/moletom-never-stop-learning.png"
            alt=""
            width={860}
            height={860}
            quality={100}
          ></Image>
        </Link>
      </div>
    </main>
  );
}
