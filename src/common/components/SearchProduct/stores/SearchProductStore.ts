import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData } from "../../../models/CatalogData";

export class SearchProductStore {

    productsAllState: CatalogData | undefined = undefined
    awaiting: boolean = false 
    
    constructor() {
        makeAutoObservable(this)
    }

    loadingAllProducts = async () => {        
        try{
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch(`http://localhost:4000/products`);
                
            if(response.status === 200) {
                const data: CatalogData = await response.json();
                runInAction(() => {this.productsAllState = data})
            }
    
        }catch(error){
            console.log(error)
        }finally{
            runInAction(() => {this.awaiting = false}) 
        }
    }  
}