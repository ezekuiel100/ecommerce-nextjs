import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between p-8 ">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-white text-2xl font-extrabold">
          devstore
        </Link>

        <form className="flex items-center rounded-full bg-zinc-900 px-5 py-3 ring-2 ring-pink-500">
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos"
            className=" flex-1 bg-transparent outline-none placeholder:text-zinc-500 "
          />
        </form>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-2">
          <ShoppingBag />
          <span>Card (0)</span>
        </div>
        <span>Conta</span>
      </div>
    </header>
  );
}

export default Header;
