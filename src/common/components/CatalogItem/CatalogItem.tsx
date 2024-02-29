import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { HeartOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { Product } from "../../models/Product";
import './CatalogItem.css'
import { useNavigate } from "react-router-dom";

type CategoryTypeProps = {
    product: Product
}

export const CatalogItem = ({product}: CategoryTypeProps) => {
    const {title, price, images, newStatus, id, category} = product
    const navigete = useNavigate();

    const hendleProductClick = () => {
        navigete(`/${category.id}/${id}`)
    }

    if(newStatus) {
        return <div key={id} className="catalogList__item">
                    <div className='catalogList__item__newStatus'>NEW</div>
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <ButtonGroup className='catalogList__item__btns'>
                        <Button className='catalogList__btn__favorites'><HeartOutlined /></Button>
                        <Button className='catalogList__btn__cart'><ShoppingCartOutlined /></Button>
                    </ButtonGroup>
                </div>
    } else {
        return <div key={product.id} className="catalogList__item">
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <ButtonGroup className='catalogList__item__btns'>
                        <Button className='catalogList__btn__favorites'><HeartOutlined /></Button>
                        <Button className='catalogList__btn__cart'><ShoppingCartOutlined /></Button>
                    </ButtonGroup>
                </div>
    }
}