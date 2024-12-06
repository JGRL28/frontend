"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();

  return (
    <div className="flex item-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl text-picton-blue-900 dark:text-picton-blue-200">
      <h1 className="text-3xl  cursor-pointer" onClick={() => router.push("/")}>
        PRO
        <span className="font-bold">MAR</span>
      </h1>

      <div className="item-center justify-between hidden sm:flex ">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemMenuMobile />
      </div>
      <div className="flex item-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/favorite")}
        />
        <User
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/login")}
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
