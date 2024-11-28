import Link from "next/link";
import { buttonVariants } from "./button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-2xl text-primary">
        Consigue hasta un -25%
      </h2>
      <h3>-20% al gastar 100.000 pesos</h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Mas Información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
