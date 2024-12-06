import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  imagesProduct: {
    id: number;
    url: string;
  };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { imagesProduct } = props;

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          <CarouselItem key={imagesProduct.id}>
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagesProduct.url}`}
              alt="Image product"
              className="rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
