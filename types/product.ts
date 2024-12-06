export type ProductType = {
    id: number,
    availabilityProduct: string,
    productName: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    priceProduct: number,
    // quantity: number,
    imageProduct: {
        id: number,
        url: string,
    }
    category: {
        slug: string,
        categoryName: string;
    }
    
}