export type Product = {            
    id: number,
    title: string,
    description: string,
    material: string,
    sizeProduct: string,
    category: {
        id:string,
        name: string
    },
    newStatus: boolean,
    price: number,
    stock: number,
    images: string[]    
}