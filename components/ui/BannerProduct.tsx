import Link from "next/link";
import { buttonVariants } from "./button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center text-picton-blue-950 dark:text-picton-blue-200">
        <p>Sumérgete en un servicio único</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Los Mejores Productos
        </h4>
        <p className="my-2 text-lg">Con la mejor atención </p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/ola-bg-promar.webp')] bg-center mt-5"></div>
    </>
  );
};

export default BannerProduct;
