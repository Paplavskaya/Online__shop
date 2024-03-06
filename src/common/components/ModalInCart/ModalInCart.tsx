import { Button, Modal } from "antd"
import { Product } from "../../models/Product";
import './ModalInCart.css'
import { useNavigate } from "react-router-dom";

type ModalInCartProps = {
    product: Product
    open:boolean
    setOpen: (open: boolean) => void
}

export const ModalInCart = ({open, setOpen, product}: ModalInCartProps) => {
    const {id, images, price, title} = product;
    const navigate = useNavigate();
    
    const handleCancel = () => {
        setOpen(false);
    };

    const hendleCartClick = () => {
        navigate('/cart');
        setOpen(false);
    }

    return <Modal
                className="modal__product"
                open={open}
                title="Вы добавили товар в корзину"
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="link"
                        onClick={hendleCartClick}
                        style={{backgroundColor: '#fad89d'}}
                    >
                        Перейти в корзину
                    </Button>,
                    <Button key="back" onClick={handleCancel}>
                        Продолжить покупки
                    </Button>,
                ]}
            >
                <div className="modal__product__info" key={id}>
                    <img className="modal__product__img" src={images[0]}/>
                    <div className="modal__product__title" >{title}</div>
                    <div className="modal__product__price">{price} BYN</div>
                </div>     
            </Modal>
}