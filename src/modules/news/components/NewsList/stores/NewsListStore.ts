import { makeAutoObservable, runInAction } from "mobx";
import { NewsData } from "../models/NewsData";

class NewsListStore {

    newsDataState: NewsData | undefined = undefined
    awaiting: boolean = false   

    constructor() {
        makeAutoObservable(this)
    }

    loadingNewsData = async () => {
        try{
            runInAction(() => {this.awaiting = true}) 
            const response = await fetch(`http://localhost:4000/news`);
                
            if(response.status === 200) {
                const data: NewsData = await response.json();
                runInAction(() => {this.newsDataState = data})
            }
    
        }catch(error){
            console.log(error)
        }finally{
            runInAction(() => {this.awaiting = false}) 
        }
    }
}

const storeNews = new NewsListStore();
export default storeNews