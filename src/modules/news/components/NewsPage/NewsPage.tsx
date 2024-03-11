import { useEffect, useState } from "react";
import { NewsPageStore } from "./stores/NewsPageStore";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import './NewsPage.css'

export const NewsPage = observer(() => {
    const [store] = useState(()=> new NewsPageStore());
    const {newsState, loadNews} = store;
    const {newsId} = useParams();

    useEffect(()=>{
        if(newsId){
            loadNews(newsId)
        }
    }, [newsId]);

    return <>
                {newsState &&
                    <div className="newsPage__wrapper">
                        <Breadcrumb className="breadCrumbs"
                            items={[
                                {
                                    href: '/',
                                    title: <HomeOutlined />,
                                },
                                {
                                    href: `/news`,
                                    title: 'Наши новости',
                                }, 
                                {
                                    title: <div>{newsState.title}</div>,
                                }, 
                             ]}
                        />
                        <div className="page__header">
                            <h2 className="page__title">{newsState.title}</h2>
                        </div>
                        <div className="newsPage__info">
                            <div className="newsPage__date"><CalendarOutlined style={{color:'#728eae'}}/> {newsState.date}</div>
                            <img src={newsState.img} className="newsPage__img"/>
                            <div className="newsPage__description">{newsState.description}</div>
                            {newsState.parts.map((part)=>
                                <div className="newsPart__item">
                                    <h2 className="newsPart__title">{part.partTitle}</h2>
                                    <div className="newsPage__description">{part.partInfo}</div>
                                    <img src={part.partImg}  className="newsPart__img"/>
                                </div>
                            )}
                        </div>
                        
                        
                    </div>
                }
            </>
})