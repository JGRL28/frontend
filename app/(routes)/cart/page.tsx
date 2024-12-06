// "use client";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { useCart } from "@/hooks/use-cart";
// import { formatPrice } from "@/lib/formatPrice";
// import CartItem from "./components/card-item";

// export default function Page() {
//   const { items, removeAll } = useCart();
//   const prices = items.map((product) => product.priceProduct);

//   const totalPrice = prices.reduce((total, price) => total + price, 0);
//   return (
//     <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px8">
//       <h1 className="mb-5 text-3xl font-bold">Carrito de Compras</h1>
//       <div className="grid sm:grid-cols-2 sm:gap-5">
//         <div>
//           {items.length === 0 && <p>No hay productos en el carrito</p>}
//           <ul>
//             {items.map((item) => (
//               <CartItem key={item.id} product={item} />
//             ))}
//           </ul>
//         </div>
//         <div className="max-w-xl">
//           <div className="p-6 rounded-lg bg-slate-100">
//             <p className="mb-3 text-lg font-semibold">Resumen del pedido</p>
//             <Separator />
//             <div className="flex justify-between gap-5 my-4">
//               <p>Total del Pedido</p>
//               <p>{formatPrice(totalPrice)}</p>
//             </div>
//             <div className="flex items-center justify-center w-full mt-3">
//               <Button className="w-full" onClick={() => console.log("Buy")}>
//                 Comprar
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/card-item";

export default function Page() {
  const { items, updateItemQuantity } = useCart();

  const handleQuantityChange = (id: number, delta: number) => {
    const newQuantity =
      (items.find((item) => item.id === id)?.quantity || 1) + delta;
    if (newQuantity > 0) {
      updateItemQuantity(id, newQuantity);
    }
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.priceProduct * item.quantity,
    0
  );

  // Función para generar el mensaje de WhatsApp
  const generarMensaje = () => {
    const productos = items
      .map(
        (item) =>
          `${item.quantity} x ${item.productName} - ${formatPrice(
            item.priceProduct * item.quantity
          )}`
      )
      .join("\n");
    return `*Resumen del Pedido*\n\n${productos}\n\nTotal: ${formatPrice(
      totalPrice
    )}`;
  };

  const urlWhatsApp = `https://wa.me/+56990767752?text=${encodeURIComponent(
    generarMensaje()
  )}`;

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Carrito de Compras</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                quantity={item.quantity}
                onIncrease={() => handleQuantityChange(item.id, 1)}
                onDecrease={() => handleQuantityChange(item.id, -1)}
              />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Resumen del pedido</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Total del Pedido</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full">
                <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
                  Comprar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
