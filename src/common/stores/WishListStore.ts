import { makeAutoObservable } from "mobx";
import { Product } from "../models/Product";
import { ProductInCart } from "../models/ProductInCart";

class WishListStore {

    wishListState: ProductInCart[] = this.getLocalStorageWL()

    get wishListCounts () {
        return this.wishListState.reduce((acc, productIncart) => {
            return acc + productIncart.count
        }, 0)
    }

    constructor() {
        makeAutoObservable(this)
    }

    addToWishList = (product: Product) => {
        const  findProductIndex = this.wishListState.findIndex(({id})=> id === product.id )
        if(findProductIndex === -1){
            this.wishListState.push({...product, count: 1})
        }
        this.setLocalStorageWL(this.wishListState)
    }

    setLocalStorageWL(products: ProductInCart[]) {
        localStorage.setItem('wishList', JSON.stringify(products))
    }

    getLocalStorageWL() {
        const localStorageData = localStorage.getItem('wishList')
        return localStorageData ? JSON.parse(localStorageData) : []
    }

    deleteProductInWishList = (productId: number) => {
        this.wishListState = this.wishListState.filter(({id}) => id !== productId)
    }

    clearWishList = ()=> {
        this.wishListState = []
    }

}

const wishListStore = new WishListStore()
export default wishListStore