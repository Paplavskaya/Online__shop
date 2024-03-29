import { Badge, Button, ConfigProvider } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { SearchOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    LoginOutlined
} from '@ant-design/icons';
import './HeaderBtns.css'
import { SearchProduct } from "../../../../common/components/SearchProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartStore from "../../../../common/stores/CartStore";
import { observer } from "mobx-react-lite";
import wishListStore from "../../../../common/stores/WishListStore";

export const HeaderBtns = observer(() => {
    const [isSearchActiv, setIsSearchActiv] = useState(false);
    const navigate = useNavigate();
    const {cartCounts} = cartStore;
    const {wishListCounts} = wishListStore;

    const hendleCartClick = () => {
        navigate('/cart')
    }

    const hendleWishlistClick = () => {
        navigate('/wishlist')
    }

    const hendleLoginClick = () => {
        navigate('/login')
    }
    
    return <>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorLinkActive: '#728eae',
                                colorLinkHover: '#728eae',
                            },
                        },
                 }}
                >
                    <ButtonGroup className='header__btns'>
                        <div className='header__search'>
                            <Button
                                className='header__btn'
                                type="link"
                                onClick={()=> setIsSearchActiv(true)}
                            >
                                <SearchOutlined/>
                                Поиск</Button>
                            <SearchProduct activ={isSearchActiv} setActiv={setIsSearchActiv}/>
                        </div>
                         
                        <Button
                            className='header__btn'
                            type="link"
                            onClick={hendleLoginClick}
                        >
                            <LoginOutlined />
                            Войти
                        </Button>
                        <Badge className="btn__cart__badge" count={wishListCounts} color='#fad89d'>
                            <Button
                                className='header__btn header__btn__cart'
                                type="link"
                                onClick={hendleWishlistClick}
                            >
                                <HeartOutlined />
                                <span className="btn__cart__span">Избранное</span>
                            </Button>
                        </Badge>

                        <Badge className="btn__cart__badge" count={cartCounts} color='#fad89d'>
                            <Button
                                className='header__btn header__btn__cart'
                                type="link"
                                onClick={hendleCartClick}
                            >
                                <ShoppingCartOutlined />
                                <span className="btn__cart__span">Корзина</span>
                            </Button>
                        </Badge>
                    </ButtonGroup>
                </ConfigProvider>                
            </>
})