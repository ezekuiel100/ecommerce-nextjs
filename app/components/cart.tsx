"use client";

import { useCart } from "@/context/cart-context";

function Cart() {
  const { cartItem } = useCart();
  return <div>Cart({cartItem})</div>;
}

export default Cart;
