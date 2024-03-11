import { observer } from "mobx-react-lite"
import storeNews from "./stores/NewsListStore"
import { useEffect } from "react"
import { Breadcrumb, Spin } from "antd"
import { HomeOutlined } from '@ant-design/icons';
import './NewsList.css'
import { NewsListItem } from "../../../../common/components/NewsListItem";

export const NewsList = observer(() => {
    const {newsDataState, loadingNewsData, awaiting} = storeNews;
    
    useEffect(() => {
        loadingNewsData()
    },[])

    return <Spin spinning={awaiting}>
                <div className="newsList__wrapper">
                    <Breadcrumb className="breadCrumbs"
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                            {
                                title: "Наши новости",
                            },  
                        ]}
                    />
                    <div className="page__header">
                        <h2 className="page__title">Наши новости</h2>
                    </div>
                    <div className="newsList__items">
                            {newsDataState && newsDataState.length > 0 && newsDataState.map((news)=>
                                <NewsListItem
                                    key={news.id}
                                    news={news}
                                />
                            )}
                    </div>
                </div>
    </Spin>
})