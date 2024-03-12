import { useEffect, useState } from "react";
import wishListStore from "../../common/stores/WishListStore"
import { Breadcrumb, Button, Empty, Modal } from "antd";
import { HomeOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import { HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { Product } from "../../common/models/Product";
import cartStore from "../../common/stores/CartStore";
import './WishList.css'

const { confirm } = Modal;

export const WishList = observer(() => {
    const {wishListState, clearWishList, setLocalStorageWL, deleteProductInWishList} = wishListStore;
    const { addToCart } = cartStore;
    const [inWishList] = useState(true) 

    useEffect(()=>{
        setLocalStorageWL(wishListState)
    }, [wishListState])

    const hendleClearWLClick = () => {
        confirm({
            title: 'Вы действительно хотите очистить Избранное?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Очистить',
            cancelText: 'Закрыть',
            onOk() {
                clearWishList()
            },
            onCancel() {},
        })
    }

    const handleProductWLClick = (product: Product) => {                  
        deleteProductInWishList(product.id);
    };

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
    };

    return <div className="wishList__wrapper">
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: "Избранное",
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Избранное</h2>
                    <div className="wishList__product__btn">
                        <Button className="wishList__product__clear" onClick={hendleClearWLClick}>Очистить избранное</Button>
                    </div>
                </div>
                {wishListState.length > 0 ? 
                    <div className="wishList__product__info">
                        <div className="wishList__product__items">
                            {wishListState.map((wishListProduct) => 
                                <div key={wishListProduct.id} className="catalogList__item">
                                    <img className='catalogList__item__img' src={wishListProduct.images[0]}/>
                                    <div className='catalogList__item__title'>{wishListProduct.title}</div>
                                    <div className='catalogList__item__price'>{wishListProduct.price} BYN</div>
                                    <div className='catalogList__item__btns'>
                                        <button
                                            className={inWishList === false ? 'catalogList__btn__wishlist': 'catalogList__btn__wishlist inWishlist'}
                                            onClick={() => handleProductWLClick(wishListProduct)}
                                        >
                                            <HeartOutlined />
                                        </button>
                                        <button
                                            className='catalogList__btn__cart'
                                            onClick={() => handleProductCartClick(wishListProduct)}
                                        >
                                            <ShoppingCartOutlined />
                                        </button>
                                    </div>
                                </div>                                
                            )}
                        </div>
            
                        
             
                    </div> : <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={
                                    <div className="wishList__empty" style={{marginTop: 20, fontSize: 20, fontWeight: 600}}>
                                        Ваш лист избанного пуст
                                    </div>
                                }
                            />
                }
            </div>
})