export type ProductType = {
    id: number,
    availabilityProduct: boolean,
    productName: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    price: number,
    imageProduct: {
        id: number,
        url: string,
    }
    category: {
        slug: string,
        categoryName: string;
    }
    
}