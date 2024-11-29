import BannerDiscount from "@/components/ui/banner-discount";
import BannerProduct from "@/components/ui/BannerProduct";
import CarouselTextBanner from "@/components/ui/carousel-text-banner";
import ChooseCategory from "@/components/ui/choose-categotry";
import FeaturedProducts from "@/components/ui/featured-products";

//
export default function Home() {
  return (
    <main className="text-picton-blue-900 dark:text-picton-blue-200">
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
