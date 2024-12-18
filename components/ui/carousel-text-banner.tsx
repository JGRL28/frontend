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
    newTab: false,
  },
  {
    id: 2,
    title: "El salmon mas fresco de todo Iquique",
    description: "Entre 15 y 20 horas de frescura",
    link: "#",
    newTab: false,
  },
  {
    id: 3,
    title: "Los precios mas competitivos",
    description: "Cuidando el bolsillo de todos nuestros clientes",
    link: "#",
    newTab: false,
  },
  {
    id: 4,
    title: "Ubicanos en Iquique",
    description: "Av. Salvador Allende Gossens 3173, Iquique, Tarapacá, Chile",
    link: "https://www.google.cl/maps/place/Promar/@-20.2483152,-70.1354551,17z/data=!3m1!4b1!4m6!3m5!1s0x91521569a5ba605f:0xe0e6508814e581c6!8m2!3d-20.2483152!4d-70.1328802!16s%2Fg%2F11frncn__2?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    newTab: true,
  },
  {
    id: 5,
    title: "Ubicanos en Antofagasta",
    description: "Av. Argentina con Antonio Jose de Sucre",
    link: "https://www.google.cl/maps/@-23.6511513,-70.3930446,3a,75y,279.91h,75.38t/data=!3m7!1e1!3m5!1s-Qj_-W48thuJIweHKsPvEQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.61645250975559%26panoid%3D-Qj_-W48thuJIweHKsPvEQ%26yaw%3D279.907121506438!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    newTab: true,
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
            delay: 4500, //ms
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description, newTab }) => (
            <CarouselItem
              key={id}
              onClick={() => {
                if (newTab) {
                  window.open(link, "_blank"); // Abre el enlace en una nueva pestaña
                } else {
                  router.push(link); // Navega en la misma pestaña
                }
              }}
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
