import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { HeartOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { Product } from "../../models/Product";
import './CatalogItem.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalInCart } from "../ModalInCart";
import cartStore from "../../stores/CartStore";
import viewProductsStore from "../ViewProducts/stores/ViewProductsStore";

type CatalogItemProps = {
    product: Product
}

export const CatalogItem = ({product}: CatalogItemProps) => {
    const {title, price, images, newStatus, id, category} = product;
    const { addToCart } = cartStore;
    const { addToViewProducts } = viewProductsStore;
    const [open, setOpen] = useState(false);
    const navigete = useNavigate();

    const hendleProductClick = () => {
        navigete(`/${category.id}/${id}`)
        addToViewProducts(product)
    }

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
        setOpen(true);
    };
    
    if(newStatus) {
        return <div key={id} className="catalogList__item">
                    <div className='catalogList__item__newStatus'>NEW</div>
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <ButtonGroup className='catalogList__item__btns'>
                        <Button className='catalogList__btn__favorites'><HeartOutlined /></Button>
                        <Button className='catalogList__btn__cart' onClick={() => handleProductCartClick(product)}><ShoppingCartOutlined /></Button>
                    </ButtonGroup>
                    <ModalInCart product={product} open={open} setOpen={setOpen}/>
                </div>
    } else {
        return <div key={product.id} className="catalogList__item">
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <ButtonGroup className='catalogList__item__btns'>
                        <Button className='catalogList__btn__wishlist'><HeartOutlined /></Button>
                        <Button className='catalogList__btn__cart' onClick={() => handleProductCartClick(product)}><ShoppingCartOutlined /></Button>
                    </ButtonGroup>
                    <ModalInCart product={product} open={open} setOpen={setOpen}/>
                </div>
    }
}