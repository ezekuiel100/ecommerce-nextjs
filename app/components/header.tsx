import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Cart from "./cart";
import SearchForm from "./search-form";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <div className="flex gap-5 items-center">
        <Link href="/" className="text-white text-2xl font-extrabold">
          devstore
        </Link>
        <SearchForm />
      </div>

      <div className="flex gap-5">
        <div className="flex gap-2">
          <ShoppingBag />
          <span>
            <Cart />
          </span>
        </div>
        <span>Conta</span>
      </div>
    </header>
  );
}

export default Header;
