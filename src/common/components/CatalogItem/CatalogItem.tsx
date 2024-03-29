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
import wishListStore from "../../stores/WishListStore";

type CatalogItemProps = {
    product: Product
}

export const CatalogItem = ({product}: CatalogItemProps) => {
    const {title, price, images, newStatus, id, category, inWishList} = product;
    const { addToCart } = cartStore;
    const { addToViewProducts } = viewProductsStore;
    const [open, setOpen] = useState(false);
    const navigete = useNavigate();
    const {addToWishList, deleteProductInWishList} = wishListStore;

    const hendleProductClick = () => {
        navigete(`/${category.id}/${id}`)
        addToViewProducts(product)
    };

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
        setOpen(true);
    };

    const handleProductWLClick = (product: Product) => {
        if(inWishList === false){
            addToWishList(product);            
        } else {     
            deleteProductInWishList(product.id);
        }   
    };

    if(newStatus) {
        return <div key={id} className="catalogList__item">
                    <div className='catalogList__item__newStatus'>NEW</div>
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <div className='catalogList__item__btns'>
                        <button
                            className={inWishList === false ? 'catalogList__btn__wishlist': 'catalogList__btn__wishlist inWishlist'}
                            onClick={() => handleProductWLClick(product)}
                        >
                            <HeartOutlined />
                        </button>
                        <button
                            className='catalogList__btn__cart'
                            onClick={() => handleProductCartClick(product)}
                        >
                            <ShoppingCartOutlined />
                        </button>
                    </div>
                    <ModalInCart product={product} open={open} setOpen={setOpen}/>
                </div>
    } else {
        return <div key={product.id} className="catalogList__item">
                    <img className='catalogList__item__img' src={images[0]} onClick={hendleProductClick}/>
                    <div className='catalogList__item__title' onClick={hendleProductClick}>{title}</div>
                    <div className='catalogList__item__price'>{price} BYN</div>
                    <div className='catalogList__item__btns'>
                        <button
                            className={inWishList === false ? 'catalogList__btn__wishlist': 'catalogList__btn__wishlist inWishlist'}
                            onClick={() => handleProductWLClick(product)} 
                        >
                            <HeartOutlined />
                        </button>
                        <button
                            className='catalogList__btn__cart'
                            onClick={() => handleProductCartClick(product)}
                        >
                            <ShoppingCartOutlined />
                        </button>
                    </div>
                    <ModalInCart product={product} open={open} setOpen={setOpen}/>
                </div>
    }
}