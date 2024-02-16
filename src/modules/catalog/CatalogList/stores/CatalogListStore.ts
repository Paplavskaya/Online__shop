import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData, Product } from "../models/CatalogData";

class CatalogListStore {
    
    catalogListDataState: CatalogData | undefined = undefined
    awaiting: boolean = false

    get productsData () {
        return this.catalogListDataState?.data
    }

    get productsTotal () {
        let count = 0;
        this.catalogListDataState?.data.forEach((product)=>{
            if(product) {
                count +=1;
            }
        })
        return count
    }
    
    constructor() {
        makeAutoObservable(this)
    }

    loadingData = async () => {
        try{
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch('https://fh.by/api/v2/catalog?hash=eyJNZW51QnVpbGRlciI6MzA0MSwiQ2F0ZWdvcnkiOjQ5N30%2F&page=1&sort=new');
            
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