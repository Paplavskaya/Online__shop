import { Product } from "./Product"

export type ProductInWishList = Product & {
    count: number,
    inWishList: boolean
}