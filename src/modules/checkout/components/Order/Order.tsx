import { useEffect, useState } from "react"
import cartStore from "../../../../common/stores/CartStore"
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Form, Button, Input, Breadcrumb, Select, Radio, RadioChangeEvent } from "antd";
import { HomeOutlined, CreditCardOutlined, WalletOutlined } from '@ant-design/icons';
import './Order.css'
import TextArea from "antd/es/input/TextArea";

type FieldsType = {
    username: string,
    email: string
}

export const Order = observer(() => {
    const navigate = useNavigate();
    const {isCartEmpty, totalPrice, cartState} = cartStore;
    const [valueDelivery, setValueDelivery] = useState('');   
    const [deliveryPrice, setDeliveryPrice] = useState(10);
    const [deliverySelect, setDeliverySelect] = useState('До двери'); 

    useEffect(()=> {
        if(isCartEmpty) {
            navigate('/cart')
        }
    }, [isCartEmpty])

    const handleOrderFinish = (values: FieldsType) => {
        navigate('/checkout/result', {
            state: {
                userData: values
            }
        })
    }

    const onChangeDelivery = (valueDelivery: string) => {
        if(valueDelivery === 'deliveryToTheDoor') {
            setDeliveryPrice(10)
            setDeliverySelect("До двери")
        } else {
            setDeliveryPrice(5)
            setDeliverySelect("До терминала")
        }
    }

    const onChange = (e: RadioChangeEvent) => {
        setValueDelivery(e.target.value);
        onChangeDelivery(e.target.value)
    }

    return <>
            {!isCartEmpty && <div className="order__wrapper"> 
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '../cart',
                            title: <div>Корзина покупок</div>,
                        },
                        {
                            title: <div>Оформление заказа</div>,
                        },  
                    ]}
                /> 
                <div className="page__header">
                    <h2 className="page__title">Оформление заказа</h2>
                </div>      
                <Form
                    className="order__form"
                    onFinish={(values: FieldsType)=>handleOrderFinish(values)}
                >
                    <div className="order__form__info">
                        <div className="form__info__personal">
                            <h2 className="form__title">Личные данные</h2>
                            <div className="personal__data">
                                <Form.Item
                                    className="form__item item__lastname"
                                    label="Фамилия"
                                    name="lastname"
                                    rules={[{ required: true, message: 'Введите Вашу фамилию!' }]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    className="form__item item__firstname"
                                    label="Имя"
                                    name="firstname"
                                    rules={[{ required: true, message: 'Введите Ваше имя!' }]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    className="form__item item__middlename"
                                    label="Отчество"
                                    name="middlename"
                                    rules={[{ required: true, message: 'Введите Ваше отчество!' }]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    className="form__item item__email"
                                    label="E-mail"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Введите правильно E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Введите Ваш E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    className="form__item item__tel"
                                    label="Телефон"
                                    name="tel"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите Ваш телефон!',
                                        },
                                    ]}
                                >
                                    <Input addonBefore="+375" placeholder="(29)300-00-00"/>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="form__info__select">
                            <div className="form__info__delivery">
                                <h2 className="form__title">Способы доставки</h2>
                                <Form.Item>
                                    <Radio.Group className="delivery__items" value={valueDelivery} onChange={onChange} defaultValue="deliveryToTheDoor">
                                        <Radio className="delivery__item" value="deliveryToTheDoor" checked>До двери</Radio>
                                        <Radio className="delivery__item" value="deliveryToTheTerminal">До терминала</Radio>
                                    </Radio.Group>  
                                </Form.Item>
                            </div>

                            <div className="form__info__payment">
                                <h2 className="form__title">Способы оплаты</h2>
                                <Form.Item>
                                    <Radio.Group className="payment__items">
                                        <Radio value="paymentOnline" className="payment__item"><CreditCardOutlined /> Оплата картой онлайн</Radio>
                                        <Radio value="paymentReceipt" className="payment__item"> <WalletOutlined /> Оплата при получении</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>

                        <div className="form__info__address">
                            <h2 className="form__title">Адрес доставки</h2>
                            <div className="address__items">
                                <Form.Item
                                    className="form__item"
                                    name="city"
                                    label="Город"
                                    rules={[{ required: true, message: 'Выберите город!' }]}
                                >
                                    <Select placeholder="Выберите город">
                                        <Select.Option value="minsk">Минск</Select.Option>
                                        <Select.Option value="vitebsk">Витебск</Select.Option>
                                        <Select.Option value="grodno">Гродно</Select.Option>
                                        <Select.Option value="gomel">Гомель</Select.Option>
                                        <Select.Option value="mogilev">Могилев</Select.Option>
                                        <Select.Option value="brest">Брест</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    className="form__item"
                                    label="Улица"
                                    name="street"
                                    rules={[{ required: true, message: 'Укажите улицу!' }]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    className="form__item"
                                    label="Дом"
                                    name="house"
                                    rules={[{ required: true, message: 'Укажите номер дома!' }]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    className="form__item"
                                    label="Квартира"
                                    name="apartment"
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="form__info__comment">
                            <h2 className="form__title">Комментарий к заказу</h2>
                            <Form.Item
                                className="form__item comment"
                                name="comment"
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>                        
                    </div>
                    
                    <div className="form__card">
                        <h2 className="form__title">Ваша корзина</h2>
                        {cartState.length > 0 && cartState.map((cartProduct)=>
                            <div className="form__card__item" key={cartProduct.id}>
                                <img className="card__item__img" src={cartProduct.images[0]}/>
                                <span className="card__item__title">{cartProduct.title}</span>
                                <div className="card__item__count">{cartProduct.count}</div>
                                <div className="card__item__sum">{cartProduct.count*cartProduct.price} BUN</div>
                            </div>
                        )}
                        <div className="card__items__total">
                            <span>Сумма заказа:</span>
                            <div>{totalPrice} BUN</div>
                        </div>                        
                        <div className="form__deliveryPrice">
                            <span>Доставка: <span style={{color:'#728eae'}}>{deliverySelect}</span></span>
                            <div>{deliveryPrice} BUN</div>
                        </div>
                        <div className="card__total">
                            <span>Итого:</span>
                            <div>{(deliveryPrice+Number(totalPrice)).toFixed(2)} BUN</div>
                        </div>
                        
                        <Form.Item className="form__card__btn">
                            <Button htmlType="submit" style={{backgroundColor:'#fad89d'}}>
                                Оформить заказ
                            </Button>
                        </Form.Item>
                    </div>                    
                </Form>
            </div>}
        </>
})