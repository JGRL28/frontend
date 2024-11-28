import { Link } from "lucide-react";
import { buttonVariants } from "./button";

const BannerProduct = () => {
  return (
    <div className="mt-4 text-center">
      <p>Sumérgete en un servicio único</p>
      <h4 className="mt-2 text-5xl font-extrabold uppercase">
        Los Mejores Productos
      </h4>
      <p className="my-2 text-lg">Con la mejor atención </p>
      <Link href="#" className={buttonVariants()}>
        Comprar
      </Link>
    </div>
  );
};

export default BannerProduct;
