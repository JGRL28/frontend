"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { ResponseType } from "@/types/response";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 text-picton-blue-900 dark:text-picton-blue-200">
      <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { productName, id, imageProduct, slug, priceProduct } =
                product;
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      {product.availabilityProduct === "Sin Stock" && (
                        <div className="adsolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                          <p className="px-2 py-1 text-s text-white bg-red-500 rounded-md dark:bg-red-500 dark:text-picton-blue-950 w-fit">
                            {product.availabilityProduct}
                          </p>
                        </div>
                      )}
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageProduct.url}`}
                          alt="Image Featured"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold text-picton-blue-950 dark:text-picton-blue-200">
                          {productName}
                        </h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-picton-blue-200 text-lg bg-picton-blue-950 rounded-sm dark:bg-picton-blue-200 dark:text-picton-blue-950 w-fit">
                            {priceProduct}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
