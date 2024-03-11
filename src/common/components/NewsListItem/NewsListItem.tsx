import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from '@ant-design/icons';
import { NewsItem } from "../../models/NewsItem";

type NewsListItemProps = {
    news: NewsItem
} 

export const NewsListItem = ({news}: NewsListItemProps) => {
    const navigete = useNavigate();

    const hendleNewsClick = () => {
        navigete(`/news/${news.id}`)
    }

    return <div key={news.id} className="newsList__item" onClick={hendleNewsClick}>
                <img src={news.img}  className="newsList__item__img"/>
                <h2 className="newsList__item__title">{news.title}</h2>
                <div><CalendarOutlined style={{color:'#728eae'}}/> {news.date}</div>
            </div>
}