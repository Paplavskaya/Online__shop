import { useEffect, useState } from "react";
import { CatalogPageStores } from "./stores/CatalogPageStore";
import { useParams } from "react-router-dom";
import { Breadcrumb, ConfigProvider, Modal, Tabs } from "antd";
import { HomeOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import { Button, Image } from 'antd';
import './CatalogPage.css';
import icon_viber from '../../common/images/icon_viber.png';
import icon_telegram from '../../common/images/icon_telegram.png';
import icon_whatsapp from '../../common/images/icon_whatsapp.png';
import { FormReview } from "./components/FormReview";
import { Dostavka } from "../dostavka";
import { Oplata } from "../oplata";
import { Vozvrat } from "../vozvrat";
import { ModalInCart } from "../../common/components/ModalInCart";
import { Product } from "../../common/models/Product";
import cartStore from "../../common/stores/CartStore";

export const CatalogPage = observer(() => {
    const [store] = useState(()=> new CatalogPageStores());
    const {loadProduct, productDataState} = store;
    const {productId} = useParams();
    const { addToCart } = cartStore;
    const [open, setOpen] = useState(false);
    const [isModalDostavkaOpen, setIsModalDostavkaOpen] = useState(false);
    const [isModalOplataOpen, setIsModalOplataOpen] = useState(false);
    const [isModalVozvratOpen, setIsModalVozvratOpen] = useState(false);

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    }, [productId]);

    const handleProductCartClick = (product: Product) => {
        addToCart(product);
        setOpen(true);
    };

    const showModalDostavka = () => {
        setIsModalDostavkaOpen(true);
    };
    
    const handleCancelDostavka = () => {
        setIsModalDostavkaOpen(false);
    };

    const showOplataModal = () => {
        setIsModalOplataOpen(true);
    };
    
    const handleOplataCancel = () => {
        setIsModalOplataOpen(false);
    };

    const showVozvratModal = () => {
        setIsModalVozvratOpen(true);
    };
    
    const handleVozvratCancel = () => {
        setIsModalVozvratOpen(false);
    };
    
    return <>
                {productDataState && <div className="product__wrapper">
                        <Breadcrumb className="breadCrumbs"
                            items={[
                                {
                                 href: '/',
                                    title: <HomeOutlined />,
                                },
                                {
                                    href: `/${productDataState.category.id}`,
                                    title: <div>{productDataState.category.name}</div>,
                                }, 
                                {
                                    title: <div>{productDataState.title}</div>,
                                }, 
                             ]}
                        />
                        
                        <div className="product__card">
                            <div className="product__imges">
                                <img className="product__img" src={productDataState.images[0]} alt="" />
                                <div className="product__imgs__grup">
                                    <Image.PreviewGroup>
                                        {productDataState.images.map((img)=> <Image className="product__img__grup" key={img} src={img} />)}
                                    </Image.PreviewGroup>
                                </div>
                            </div>
                            <div className="product__info">
                                <h2 className="product__title">{productDataState.title}</h2>
                                <div className="product__sub">
                                    <div className="product__stock"><span className="product__stock__info">Осталось: {productDataState.stock} шт.</span></div>

                                    <div className="product__messagers">
                                        <a className="messager__viber" href="#">
                                            <img className="icon__viber" alt="viber" src={icon_viber} />
                                        </a>
                                        <a className="messager__telegram" href="#">
                                            <img className="icon__telegram" alt="telegram" src={icon_telegram}/>
                                        </a>
                                        <a className="messager__whatsapp" href="#">
                                            <img className="icon__whatsapp" alt="whatsapp" src={icon_whatsapp}/>
                                        </a>
                                    </div>
                                </div>

                                <div className="product__price">{productDataState.price} BYN</div>

                                <Button className="product__btn" onClick={() => handleProductCartClick(productDataState)}><ShoppingCartOutlined /> В корзину</Button>
                                <ModalInCart product={productDataState} open={open} setOpen={setOpen}/>
                                
                                <div className="product__conditions">
                                    <div className="conditions__dostavka condition">
                                        <button className="conditions__btn" onClick={showModalDostavka}>
                                            <img src="https://mymisterdom.by/image/icon/card-services-4.svg" alt="доставка"/>
                                            <div className="conditions__title">Доставка</div>
                                        </button>  
                                        <Modal
                                            open={isModalDostavkaOpen}
                                            onCancel={handleCancelDostavka}
                                            footer={[
                                                <Button key="back" onClick={handleCancelDostavka}>
                                                    Закрыть
                                                </Button>,
                                            ]}
                                        >
                                            <Dostavka/>
                                        </Modal>                                     
                                    </div>
                                    <div className="conditions__oplata condition">
                                        <button className="conditions__btn" onClick={showOplataModal}>
                                            <img src="https://mymisterdom.by/image/icon/card-services-3.svg" alt="оплата"/>
                                            <div className="conditions__title">Оплата</div>
                                        </button>
                                        <Modal
                                            open={isModalOplataOpen}
                                            onCancel={handleOplataCancel}
                                            footer={[
                                            <Button key="back" onClick={handleOplataCancel}>
                                                Закрыть
                                            </Button>,
                                        ]}
                                        >
                                            <Oplata/>
                                        </Modal>
                                    </div>
                                    <div className="conditions__vozvrat condition">
                                        <button className="conditions__btn" onClick={showVozvratModal}>
                                            <img src="https://mymisterdom.by/image/icon/card-services-2.svg" alt="возврат"/>
                                            <div className="conditions__title">Возврат</div>
                                        </button>
                                        <Modal
                                            className="conditions__modal"
                                            open={isModalVozvratOpen}
                                            onCancel={handleVozvratCancel}
                                            footer={[
                                                <Button key="back" onClick={handleVozvratCancel}>
                                                    Закрыть
                                                </Button>,
                                            ]}
                                        >                                        
                                            <Vozvrat/>
                                        </Modal>
                                    </div>
                                </div>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                        Tabs: {
                                            inkBarColor: '#d9e4f1',
                                            lineWidthBold: 6,
                                            itemSelectedColor: '#728eae',
                                            itemActiveColor: '#728eae',
                                            itemHoverColor: '#728eae',
                                            titleFontSize: 24,
                                            itemColor: '#172542'
                                        },
                                        },
                                    }}
                                >
                                    <Tabs
                                        defaultActiveKey="1"
                                        style={{
                                            fontSize: '16px',
                                            color:'#172542'
                                        }}
                                        items={[
                                            {
                                                label: 'Описание',
                                                key: '1',
                                                children: (
                                                    <div className="product__descriptions">
                                                        <div className="product__description">{productDataState.description}</div>
                                                        <div className="product__material">Материал товара: {productDataState.material}</div>
                                                        <div className="product__size">Параметры товара: {productDataState.sizeProduct}</div>
                                                    </div>
                                                ),
                                            },
                                            {
                                                label: 'Отзыв о товаре',
                                                key: '2',
                                                children: (<FormReview/>),
                                            }
                                        ]}
                                    />
                                </ConfigProvider>
                            </div>
                        </div>
                </div>
                }
            </>  
})