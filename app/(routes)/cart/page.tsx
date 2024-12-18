// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { useCart } from "@/hooks/use-cart";
// import { formatPrice } from "@/lib/formatPrice";
// import CartItem from "./components/card-item";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";

// export default function Page() {
//   const { items, updateItemQuantity } = useCart();

//   const [form, setForm] = useState({
//     nombre: "",
//     rut: "",
//     telefono: "",
//     direccion: "",
//     ciudad: "city-1", // Valor por defecto
//   });

//   const handleInputChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleQuantityChange = (id, delta) => {
//     const newQuantity =
//       (items.find((item) => item.id === id)?.quantity || 1) + delta;
//     if (newQuantity > 0) {
//       updateItemQuantity(id, newQuantity);
//     }
//   };

//   const totalPrice = items.reduce(
//     (total, item) => total + item.priceProduct * item.quantity,
//     0
//   );

//   const isFormValid = () => {
//     return form.nombre.trim() && form.telefono.trim() && form.direccion.trim();
//   };

//   const generarMensaje = () => {
//     const productos = items
//       .map(
//         (item) =>
//           `${item.quantity} x ${item.productName} - ${formatPrice(
//             item.priceProduct * item.quantity
//           )}`
//       )
//       .join("\n");

//     const infoCliente = `
// *Información del Cliente*
// Nombre: ${form.nombre}
// RUT: ${form.rut}
// Teléfono: ${form.telefono}
// Dirección: ${form.direccion}
// Ciudad: ${form.ciudad === "city-1" ? "Iquique" : "Antofagasta"}`;

//     return `*Resumen del Pedido*\n\n${productos}\n\nTotal: ${formatPrice(
//       totalPrice
//     )}\n\n${infoCliente}`;
//   };

//   const urlWhatsApp = `https://wa.me/+56990767752?text=${encodeURIComponent(
//     generarMensaje()
//   )}`;

//   return (
//     <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//       <h1 className="mb-5 text-3xl font-bold">Carrito de Compras</h1>
//       <div className="grid sm:grid-cols-2 sm:gap-5">
//         <div>
//           {items.length === 0 && <p>No hay productos en el carrito</p>}
//           <ul>
//             {items.map((item) => (
//               <CartItem
//                 key={item.id}
//                 product={item}
//                 quantity={item.quantity}
//                 onIncrease={() => handleQuantityChange(item.id, 1)}
//                 onDecrease={() => handleQuantityChange(item.id, -1)}
//               />
//             ))}
//           </ul>
//         </div>
//         <div className="max-w-xl">
//           <div className="p-6 rounded-lg bg-slate-100">
//             <p className="mb-3 text-lg font-semibold">Resumen del pedido</p>
//             <Separator />
//             <div className="flex flex-col gap-6 my-6">
//               <Input
//                 type="text"
//                 name="nombre"
//                 placeholder="Nombre"
//                 value={form.nombre}
//                 onChange={handleInputChange}
//                 required
//               />
//               <Input
//                 type="text"
//                 name="rut"
//                 placeholder="RUT"
//                 value={form.rut}
//                 onChange={handleInputChange}
//               />
//               <Input
//                 type="tel"
//                 name="telefono"
//                 placeholder="Teléfono"
//                 value={form.telefono}
//                 onChange={handleInputChange}
//                 required
//               />
//               <Input
//                 type="text"
//                 name="direccion"
//                 placeholder="Dirección"
//                 value={form.direccion}
//                 onChange={handleInputChange}
//                 required
//               />
//               <p>¿Donde desea su pedido?</p>
//               <RadioGroup
//                 value={form.ciudad}
//                 onValueChange={(value) => setForm({ ...form, ciudad: value })}
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="city-1" id="city-1" />
//                   <Label htmlFor="city-1">Iquique</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="city-2" id="city-2" />
//                   <Label htmlFor="city-2">Antofagasta</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//             <Separator />
//             <div className="flex justify-between gap-5 my-4">
//               <p>Total del Pedido</p>
//               <p>{formatPrice(totalPrice)}</p>
//             </div>
//             <div className="flex items-center justify-center w-full mt-3">
//               <Button className="w-full" disabled={!isFormValid()}>
//                 <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
//                   Comprar
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/card-item";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Page() {
  const { items, updateItemQuantity } = useCart();

  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    telefono: "",
    direccion: "",
    ciudad: "city-1", // Valor por defecto
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (id, delta) => {
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

  const isFormValid = () => {
    return form.nombre.trim() && form.telefono.trim() && form.direccion.trim();
  };

  const generarMensaje = () => {
    const productos = items
      .map(
        (item) =>
          `${item.quantity} x ${item.productName} - ${formatPrice(
            item.priceProduct * item.quantity
          )}`
      )
      .join("\n");

    const infoCliente = `
*Información del Cliente*
Nombre: ${form.nombre}
RUT: ${form.rut}
Teléfono: ${form.telefono}
Dirección: ${form.direccion}
Ciudad: ${form.ciudad === "city-1" ? "Iquique" : "Antofagasta"}`;

    return `*Resumen del Pedido*\n\n${productos}\n\nTotal: ${formatPrice(
      totalPrice
    )}\n\n${infoCliente}`;
  };

  const getWhatsAppNumber = () => {
    if (form.ciudad === "city-1") {
      return "+56990767752"; // Número para Iquique
    } else if (form.ciudad === "city-2") {
      return "+56940317591"; // Número para Antofagasta
    }
    return "+56990767752"; // Número por defecto
  };

  const urlWhatsApp = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(
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
            <div className="flex flex-col gap-6 my-6">
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="rut"
                placeholder="RUT"
                value={form.rut}
                onChange={handleInputChange}
              />
              <Input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={form.direccion}
                onChange={handleInputChange}
                required
              />
              <p>¿Dónde desea su pedido?</p>
              <RadioGroup
                value={form.ciudad}
                onValueChange={(value) => setForm({ ...form, ciudad: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="city-1" id="city-1" />
                  <Label htmlFor="city-1">Iquique</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="city-2" id="city-2" />
                  <Label htmlFor="city-2">Antofagasta</Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Total del Pedido</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" disabled={!isFormValid()}>
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
