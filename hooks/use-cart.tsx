// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { ProductType } from "@/types/product";
// import { Toast } from "@/components/ui/toast";
// import { toast } from "./use-toast";

// interface CartStore {
//   items: ProductType[];
//   addItem: (data: ProductType) => void;
//   removeItem: (id: number) => void;
//   removeAll: () => void;
// }

// export const useCart = create(
//   persist<CartStore>(
//     (set, get) => ({
//       items: [],
//       addItem: (data: ProductType) => {
//         const currentItems = get().items;
//         const existingItem = currentItems.find((item) => item.id === data.id);

//         if (existingItem) {
//           return toast({
//             title: "El producto ya existe en el carrito",
//             variant: "destructive",
//           });
//         }

//         if (data.availabilityProduct === "Sin Stock") {
//           return toast({
//             title: `No hay stock de ${data.productName} en este momento 🛒`,
//             variant: "destructive",
//           });
//         }

//         set({
//           items: [...get().items, data],
//         });
//         toast({
//           title: "Producto añadido al carrito 🛒",
//         });
//       },
//       removeItem: (id: number) => {
//         set({ items: [...get().items.filter((item) => item.id !== id)] });
//         toast({
//           title: "Producto eliminado del carrito 🗑️",
//         });
//       },
//       removeAll: () => set({ items: [] }),
//     }),
//     {
//       name: "cart-storage",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { Toast } from "@/components/ui/toast";
import { toast } from "./use-toast";

interface CartStore {
  items: (ProductType & { quantity: number })[]; // Añadimos la propiedad quantity a los productos
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
  updateItemQuantity: (id: number, quantity: number) => void; // Nueva función para actualizar cantidad
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: "El producto ya existe en el carrito",
            variant: "destructive",
          });
        }

        if (data.availabilityProduct === "Sin Stock") {
          return toast({
            title: `No hay stock de ${data.productName} en este momento 🛒`,
            variant: "destructive",
          });
        }

        set({
          items: [...get().items, { ...data, quantity: 1 }], // Inicializamos la cantidad en 1
        });
        toast({
          title: "Producto añadido al carrito 🛒",
        });
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({
          title: "Producto eliminado del carrito 🗑️",
        });
      },
      removeAll: () => set({ items: [] }),
      updateItemQuantity: (id: number, quantity: number) => {
        // Verifica que la cantidad no sea menor a 1
        if (quantity < 1) return;

        set({
          items: get().items.map((item) =>
            item.id === id
              ? { ...item, quantity } // Actualiza la cantidad
              : item
          ),
        });
        toast({
          title: "Cantidad actualizada en el carrito 🛒",
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
