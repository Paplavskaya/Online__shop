import { useEffect, useState } from "react";
import { CatalogPageStores } from "./store/CatalogPageStore";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import { Button, Image } from 'antd';

export const CatalogPage = observer(() => {
    const [store] = useState(()=> new CatalogPageStores());
    const {loadProduct, productDataState} = store;
    const {productId} = useParams();

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    }, [productId]);
    
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
                            <div className="products_img">
                                <img src={productDataState.images[0]} alt="" />
                                <Image.PreviewGroup >
                                    {productDataState.images.map((img)=> <Image className="product_img" key={img} src={img} />)}
                                </Image.PreviewGroup>
                            </div>
                            <div className="product__info">
                                <h2 className="product__title">{productDataState.title}</h2>
                                <div className="product__stock">Осталось: {productDataState.stock}</div>
                                <div className="product__price">{productDataState.price}</div>
                                <Button><ShoppingCartOutlined /> В корзину</Button>
                                <div className="product__description">{productDataState.description}</div>
                                <div className="product__material">Материал товара: {productDataState.material}</div>
                                <div className="product__size">Параметры товара: {productDataState.sizeProduct}</div>
                            </div>

                        </div>
                </div>
                }
            </>  
})