import { makeAutoObservable, runInAction } from "mobx";
import { NewsItem } from "../../../../../common/models/NewsItem";

export class NewsPageStore {

    newsState: NewsItem | undefined = undefined;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadNews = async (newsId: string) => {
        try {
            const response = await fetch(`http://localhost:4000/news/${newsId}`);
            if(response.status === 200) {
                const data: NewsItem = await response.json();
                runInAction(() => {this.newsState = data})
            }

        } catch (error) {
            console.log(error)
        }
    }    
}