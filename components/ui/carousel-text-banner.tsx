"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Card, CardContent } from "./card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24/48 horas",
    description: "Para todo Iquique y Alto Hospicio",
    link: "#",
  },
  {
    id: 2,
    title: "El salmon mas fresco de todo Iquique",
    description: "Entre 15 y 20 horas de frescura",
    link: "#",
  },
  {
    id: 3,
    title: "Los precios mas competitivos",
    description: "Cuidando el bolsillo de todos nuestros clientes",
    link: "#",
  },
  {
    id: 4,
    title: "La mejor atención que tendra",
    description: "Nos caracterizamos personalizar nuestra atención",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500, //ms
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
