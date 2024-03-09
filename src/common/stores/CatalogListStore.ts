import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData} from "../models/CatalogData"
import { CategoriesData, Category } from "../models/Category";

class CatalogListStore {
    
    productsDataState: CatalogData | undefined = undefined
    categoriesDataState:CategoriesData | undefined = undefined;
    awaiting: boolean = false    

    get categoriesNameData () {
        return this.categoriesDataState?.map((category: Category)=> category.name)
    }

    get productsTotal () {
        let count = 0;
        this.productsDataState?.forEach((product)=>{
            if(product) {
                count +=1;
            }
        })
        return count
    }

    get maxPrice () {
        const arrPrice = this.productsDataState?.map((product)=> product.price)
        const maxPrice = arrPrice?.reduce((acc, price) => acc < price ? price : acc);
        return maxPrice    
    } 

    get minPrice () {
        const arrPrice = this.productsDataState?.map((product)=> product.price)
        const maxPrice = arrPrice?.reduce((acc, price) => acc > price ? price : acc);
        return maxPrice
    } 
    
    constructor() {
        makeAutoObservable(this)
    }

    loadingCategories = async () => {
        try {
            const response = await fetch('http://localhost:4000/categories');
            if(response.status === 200) {
                const data: CategoriesData = await response.json();
                runInAction(() => {this.categoriesDataState = data})
            }
        } catch(error) {
            console.log(error)
        }
    }

    loadingProducts = async (catalogId?: string) => {
        
        try{
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch(`http://localhost:4000/products?category.id=${catalogId}`);
                
            if(response.status === 200) {
                const data: CatalogData = await response.json();
                runInAction(() => {this.productsDataState = data})
            }
    
        }catch(error){
            console.log(error)
        }finally{
            runInAction(() => {this.awaiting = false}) 
        }
    }    
  
    sortIncrease= (productsData: CatalogData)=> {
        productsData.sort((a, b)=> a.price - b.price)
    }

    sortDecreasing= (productsData: CatalogData)=> {
        productsData.sort((a, b)=> b.price - a.price)
    }
    
}

const store = new CatalogListStore();
export default store