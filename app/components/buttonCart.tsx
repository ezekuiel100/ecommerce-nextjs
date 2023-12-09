"use client";

import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

function ButtonCart() {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={addToCart}
      type="button"
      className="mt-8 h-12 w-full flex items-center justify-center bg-emerald-600  rounded-full font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}

export default ButtonCart;
