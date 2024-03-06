import { makeAutoObservable } from "mobx";
import { ProductInCart } from "../models/ProductInCart";
import { Product } from "../models/Product";

class CartStore {
    cartState: ProductInCart[] = []

    get cartCounts () {
        return this.cartState.reduce((acc, productIncart) => {
            return acc + productIncart.count
        }, 0)
    }

    get isCartEmpty () {
        return this.cartCounts === 0
    }

    get totalPrice() {
        return this.cartState.reduce((acc, productIncart) => {
            return acc + (productIncart.count*productIncart.price)
        }, 0).toFixed(2)
    }

    constructor() {
        makeAutoObservable(this)
    }

    addToCart = (product: Product) => {
        const  findProductIndex = this.cartState.findIndex(({id})=> id === product.id )
        if(findProductIndex === -1){
            this.cartState.push({...product, count: 1})
        } else {
            this.cartState[findProductIndex].count += 1 
        }
    }

    increaseCount = (productId: number) => {
        const findProductIndex = this.cartState.findIndex(({id})=> id === productId); 

        this.cartState[findProductIndex].count += 1
    }

    declineCount = (productId: number) => {
        const findProductIndex = this.cartState.findIndex(({id})=> id === productId);
         
        this.cartState[findProductIndex].count -= 1
        
        if (this.cartState[findProductIndex].count < 0) {
            this.cartState[findProductIndex].count = 0;
        }
    }

    deleteProduct = (productId: number) => {
        this.cartState = this.cartState.filter(({id}) => id !== productId)
    }

    clear = ()=> {
        this.cartState = []
    }
}

const cartStore = new CartStore()

export default cartStore