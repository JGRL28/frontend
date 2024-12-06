export function formatPrice(price: number) {
  const priceFormated = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  const finalPrice = priceFormated.format(price);

  return finalPrice;
}
