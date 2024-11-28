import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categories/insumos" className="block">
          Insumo de Sushi
        </Link>
        <Link href="/categories/abarrotes" className="block">
          Abarrotes
        </Link>
        <Link href="/categories/plasticos" className="block">
          Plasticos y otros
        </Link>
        <Link href="/categories/queso" className="block">
          Queso
        </Link>
        <Link href="/categories/mariscos" className="block">
          Mariscos
        </Link>
        <Link href="/categories/pescados" className="block">
          Pescados
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemMenuMobile;
