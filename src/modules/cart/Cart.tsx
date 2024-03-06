import { observer } from "mobx-react-lite"
import cartStore from "../../common/stores/CartStore"
import { CartProduct } from './components/CartProduct'
import "./Cart.css"
import { Breadcrumb, Button, Empty, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { HomeOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

export const Cart = observer(() => {
    const {cartState, deleteProduct, increaseCount, declineCount, cartCounts, totalPrice, clear} = cartStore;
    const navigate = useNavigate();

    const hendleOrderClick = () => {
        navigate('/checkout/order')
    }

    const hendleClearClick = () => {
        confirm({
            title: 'Вы действительно хотите очистить корзину?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Очистить',
            cancelText: 'Закрыть',
            onOk() {
                clear()
            },
            onCancel() {},
        })
    }

    return <div className="cart__wrapper">
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: <div>Корзина покупок</div>,
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Корзина покупок</h2>
                </div>
                {cartState.length > 0 ? 
                    <div className="cart__product__info">
                        <div>
                            {cartState.map((cartProduct) => 
                                <CartProduct 
                                    key={cartProduct.id}
                                    product={cartProduct}
                                    deleteProduct={deleteProduct}
                                    increaseCount={increaseCount}
                                    declineCount={declineCount}
                                />
                            )}
                        </div>
                        <div className="cart__product__total">
                            <div className="total__count"><span>Товары:</span><span>{cartCounts} шт.</span></div>
                            <div className="total__price"><span>Итого:</span><span>{totalPrice} BUN</span></div>
                            <div className="cart__product__btn">
                                <Button className="cart__product__clear" onClick={hendleClearClick}>Очистить корзину</Button>
                                <Button className="cart__product__order" onClick={hendleOrderClick}>Оформить заказ</Button>
                            </div>
                        </div>   
                    </div> : <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description={
                                <div className="cart__empty" style={{marginTop: 20, fontSize: 20, fontWeight: 600}}>
                                    Ваша корзина покупок пуста
                                </div>
                            }
                        />
                }
            </div>
})