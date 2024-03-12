import { makeAutoObservable } from "mobx";
import { Product } from "../../../models/Product";
import { ProductView } from "../../../models/ProductView";

class ViewProductsStore {

  viewProductsState: ProductView[] = this.getLocalStorageViewProducts() 

  constructor() {
    makeAutoObservable(this)
  }

  addToViewProducts = (product: Product) => {
    const  findProductIndex = this.viewProductsState.findIndex(({id})=> id === product.id )
    if(findProductIndex === -1){
      this.viewProductsState.push({...product, date:Date.now() })
    }
    this.setLocalStorageViewProducts(this.viewProductsState)
  }

  setLocalStorageViewProducts(products: ProductView[]) {
    localStorage.setItem('history', JSON.stringify(products))
  }

  getLocalStorageViewProducts() {
    const localStorageData = localStorage.getItem('history')
    return localStorageData ? JSON.parse(localStorageData) : []
  } 
  
}

const viewProductsStore = new ViewProductsStore()

export default viewProductsStore