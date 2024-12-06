"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "../components/filters-controls-category";
import SkeletonSchema from "@/components/ui/skeletonSchema";
import ProductCard from "../components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterEnable, setFilterEnable] = useState("");
  const router = useRouter();

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterEnable === ""
      ? result
      : result.filter(
          (product: ProductType) => product.availabilityProduct === filterEnable
        ));

  console.log(router);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium ">
          Productos {result[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterEnable={setFilterEnable} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div>
    </div>
  );
}
