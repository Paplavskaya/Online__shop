import { observer } from 'mobx-react-lite'
import './Main.css'
import { PromoCarousel } from './components/PromoCarousel'
import { NewProducts } from './components/NewProducts';
import storeNews from '../news/components/NewsList/stores/NewsListStore';
import { useEffect } from 'react';
import { NewsListItem } from '../../common/components/NewsListItem';
import { Link } from 'react-router-dom';

export const Main = observer(() => {
    const {newsDataState, loadingNewsData} = storeNews;

    useEffect(() => {
        loadingNewsData()
    },[])

    return <>
                <PromoCarousel /> 
                <NewProducts />
                <div className="main__news">
                    <Link to='/news' className="main__news__title">Наши новости</Link>
                    <div className="newsList__items">
                        {newsDataState && newsDataState.length > 0 && newsDataState.map((news)=>
                            <NewsListItem
                                key={news.id}
                                news={news}
                            />
                        )}
                    </div>
                </div>
                
            </>
})