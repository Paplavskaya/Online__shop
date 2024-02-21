import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData, Product } from "../models/CatalogData"

class CatalogListStore {
    
    catalogListDataState: CatalogData | undefined = undefined
    categoriesState: string[] | undefined = undefined;
    awaiting: boolean = false

    get productsData () {
        return this.catalogListDataState?.products
    }

    get productsTotal () {
        let count = 0;
        this.catalogListDataState?.products.forEach((product)=>{
            if(product) {
                count +=1;
            }
        })
        return count
    }
    
    constructor() {
        makeAutoObservable(this)
    }

    // loadCategories = async () => {
    //     try {
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         if(response.status === 200) {
    //             const data: string[] = await response.json();
    //             runInAction(() => {this.categoriesState = data})
    //         }
    //     } catch(error) {
    //         console.log(error)
    //     }

    //     console.log(this.catalogListDataState)
    // }

    loadingData = async () => {
        try{
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch('https://dummyjson.com/products');
            
            if(response.status === 200) {
               const data: CatalogData = await response.json();
               runInAction(() => {this.catalogListDataState = data})
            }

        }catch(error){
            console.log(error)
        }finally{
            runInAction(() => {this.awaiting = false}) 
        }        
    }

    sortIncrease= (productsData: Product[])=> {
        productsData.sort((a, b)=> a.price - b.price)
    }

    sortDecreasing= (productsData: Product[])=> {
        productsData.sort((a, b)=> b.price - a.price)
    }
}

export const store = new CatalogListStore();