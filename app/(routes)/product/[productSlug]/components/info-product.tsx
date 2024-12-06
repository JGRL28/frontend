import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProp = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProp) => {
  const { product } = props;
  const { addItem } = useCart();
  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="font-bold text-2xl">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-picton-blue-200 bg-picton-blue-950 rounded-full dark:bg-picton-blue-200 dark:text-picton-blue-950 w-fit">
            {product.category.categoryName}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.priceProduct)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-picton-blue-950"
          onClick={() => console.log("Add to loved products")}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
