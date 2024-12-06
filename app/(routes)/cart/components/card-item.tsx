// import { useCart } from "@/hooks/use-cart";
// import { formatPrice } from "@/lib/formatPrice";
// import { cn } from "@/lib/utils";
// import { ProductType } from "@/types/product";
// import { X } from "lucide-react";
// import { useRouter } from "next/navigation";

// interface CartItemProps {
//   product: ProductType;
// }

// const CartItem = (props: CartItemProps) => {
//   const { product } = props;
//   const router = useRouter();
//   const { removeItem } = useCart();

//   return (
//     <li className="flex py-6 border-b">
//       <div
//         onClick={() => router.push(`/product/${product.slug}`)}
//         className="cursor-pointer"
//       >
//         <img
//           src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.imageProduct.url}`}
//           alt="Product"
//           className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
//         />
//       </div>
//       <div className="flex justify-between flex-1 px-6">
//         <div>
//           <h2 className="text-lg font-bold">{product.productName}</h2>
//           <p className="font-bold">{formatPrice(product.priceProduct)}</p>
//           <div className="flex items-center justify-between gap-3">
//             <p className="px-2 py-1 text-picton-blue-200 bg-picton-blue-950 rounded-full dark:bg-picton-blue-200 dark:text-picton-blue-950 w-fit">
//               {product.category.categoryName}
//             </p>
//           </div>
//         </div>
//         {/* <div>
//           <button className="rounded-full px-2 bg-picton-blue-950 text-picton-blue-200 dark:bg-picton-blue-950 dark:text-picton-blue-200">
//             +
//           </button>
//           <p>Number</p>
//           <button className="rounded-full px-2 bg-picton-blue-950 text-picton-blue-200 dark:bg-picton-blue-950 dark:text-picton-blue-200">
//             -
//           </button>
//         </div> */}
//         <div>
//           <button
//             className={cn(
//               "rounded-full flex items-center justify-center bg-picton-blue-200 border shadow-md p-1 hover:scale-110 transition"
//             )}
//           >
//             <X size={20} onClick={() => removeItem(product.id)} />
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: ProductType;
  quantity: number; // Recibimos la cantidad del producto
  onIncrease: () => void; // Función para aumentar la cantidad
  onDecrease: () => void; // Función para disminuir la cantidad
}

const CartItem = (props: CartItemProps) => {
  const { product, quantity, onIncrease, onDecrease } = props;
  const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <div
        onClick={() => router.push(`/product/${product.slug}`)}
        className="cursor-pointer"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.imageProduct.url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">
            {formatPrice(product.priceProduct * quantity)}
          </p>{" "}
          {/* Precio total del producto */}
          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-picton-blue-200 bg-picton-blue-950 rounded-full dark:bg-picton-blue-200 dark:text-picton-blue-950 w-fit">
              {product.category.categoryName}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onDecrease}
            className="rounded-full px-2 bg-picton-blue-950 text-picton-blue-200 dark:bg-picton-blue-950 dark:text-picton-blue-200"
            disabled={quantity <= 1} // Deshabilitar si la cantidad es 1
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={onIncrease}
            className="rounded-full px-2 bg-picton-blue-950 text-picton-blue-200 dark:bg-picton-blue-950 dark:text-picton-blue-200"
          >
            +
          </button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-picton-blue-200 border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
