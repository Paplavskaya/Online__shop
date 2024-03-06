import { ProductInCart } from "../../../../common/models/ProductInCart"
import { useNavigate } from "react-router-dom";
import { Button, Modal, notification } from 'antd';
import ButtonGroup from "antd/es/button/button-group";
import { MinusOutlined, PlusOutlined, DeleteOutlined, ExclamationCircleFilled, HeartOutlined } from '@ant-design/icons';
import './CartProduct.css'

type CartProductProps = {
    product: ProductInCart,
    deleteProduct: (productId: number) => void,
    increaseCount: (productId: number) => void,
    declineCount: (productId: number) => void,
}

const { confirm } = Modal;

export const CartProduct = ({product, deleteProduct, increaseCount, declineCount}:CartProductProps) => {
    const {id, images, title, count, category, price} = product
    const navigete = useNavigate();

    const increase = (id: number) => {
        increaseCount(id);
    };

    const decline = (id: number) => {
        declineCount(id);
    };

    const hendleProductClick = () => {
        navigete(`/${category}/${id}`)
    }

    const hendleDeleteProduct = (id: number) => {
        confirm({
            title: 'Вы действительно хотите удалить данный товар?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Удалить',
            cancelText: 'Закрыть',
            onOk() {
                deleteProduct(id);
                notification.success({
                    message: `${title} удален из корзины`,
                    duration: 1.5
                })
            },
            onCancel() {},
        });
    }

    return <div className="cart__item">
                <img className="cart__item__img"   onClick={hendleProductClick} src={images[0]}/>
                <div className="cart__item__info">
                    <h2 className="cart__item__title" onClick={hendleProductClick}>{title}</h2>
                    <div className="cart__item__price">{price} BUN</div>
                    <ButtonGroup className="cart__item__btns">
                        <Button className="cart__item__btn btn__decline" onClick={() => decline(id)} icon={<MinusOutlined />} />
                        <Button className="cart__item__btn">{count}</Button>
                        <Button className="cart__item__btn btn__increase" onClick={() => increase(id)} icon={<PlusOutlined />} />
                    </ButtonGroup>
                    <div className="cart__item__sum">{count*price} BUN</div>
                </div>

                <div className="cart__btns">
                    <Button icon={<DeleteOutlined />}
                        className="cart__btn__delete cart__btn"
                        onClick={() => hendleDeleteProduct(id)}
                    />
                    <Button icon={<HeartOutlined />}
                        className="cart__btn__wishlist cart__btn"
                    />
                </div>
            </div> 
}