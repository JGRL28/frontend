import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "./separator";

const ItemMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="bg-white w-screen text-center font-bold text-xl border-b-2">
        <Link href="/category/abarrotes" className="block p-6">
          Abarrotes
        </Link>
        <Separator />
        <Link href="/category/plastico" className="block p-6">
          Plasticos y otros
        </Link>
        <Separator />
        <Link href="/category/congelados" className="block p-6">
          Congelados
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemMenuMobile;
