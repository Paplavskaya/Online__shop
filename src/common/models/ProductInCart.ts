import { Product } from "./Product"

export type ProductInCart = Product & {
    count: number
}