"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">Promar</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Tu proveedor confiable de insumos para sushi, productos
                      congelados, abarrotes y salmón fresco de calidad.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Haz tu pedido acá">
                Realiza tu pedido y nosotros llevaremos tu pedido.
              </ListItem>
              <ListItem href="/docs/installation" title="Preparaciones">
                Una lista de sugerencias, para ocaciones especiales.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Productos insignia"
              >
                Prueba nuestros productos mas vendidos y mejor valorados.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pedidos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Insumos de sushi",
    href: "/docs/primitives/alert-dialog",
    description:
      "Insumos básicos y herramientas para sushi, como arroz, nori, pescado fresco, salsa de soya y esterillas.",
  },
  {
    title: "Abarrotes",
    href: "/docs/primitives/hover-card",
    description:
      "Productos esenciales de abarrotes, como arroz, aceite, harina, especias, enlatados y más.",
  },
  {
    title: "Plasticos y otros",
    href: "/docs/primitives/progress",
    description:
      "Variedad de plásticos y bandejas ideales para almacenar, transportar y presentar alimentos.",
  },
  {
    title: "Quesos",
    href: "/docs/primitives/scroll-area",
    description:
      "Quesos frescos y maduros de alta calidad, ideales para todo tipo de preparaciones.",
  },
  {
    title: "Mariscos",
    href: "/docs/primitives/tabs",
    description:
      "Mariscos frescos y congelados, perfectos para preparar platos de calidad.",
  },
  {
    title: "Pescados",
    href: "/docs/primitives/tooltip",
    description:
      "Pescados frescos y congelados, ideales para una gran variedad de recetas.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>

          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
