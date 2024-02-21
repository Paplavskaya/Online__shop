export type CatalogData = {
    total: number,
    skip: number,
    limit: number,
    products: Product[]
}


export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]    
}