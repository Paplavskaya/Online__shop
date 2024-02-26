import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../../../../common/models/Product";

export class CatalogPageStores {

    productDataState: Product | undefined = undefined;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadProduct = async (productId: string) => {
        try {
            const response = await fetch(`http://localhost:4000/products/${productId}`);
            if(response.status === 200) {
                const data: Product = await response.json();
                runInAction(() => {this.productDataState = data})
            }

        } catch (error) {
            console.log(error)
        }
    }
}