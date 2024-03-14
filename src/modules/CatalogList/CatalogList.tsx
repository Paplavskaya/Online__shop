import { useEffect } from "react";
import store from "../../common/stores/CatalogListStore";
import { observer } from "mobx-react-lite";
import './CatalogList.css';
import { CatalogItem } from "../../common/components/CatalogItem";
import { Breadcrumb, Select, Spin } from "antd";
import { useParams } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import { ViewProducts } from "../../common/components/ViewProducts";
import wishListStore from "../../common/stores/WishListStore";

export const CatalogList = observer(() => {
    const {
        loadingProducts,
        productsData,
        awaiting,
        sortIncrease,
        sortDecreasing,
        productsTotal,
        categoriesDataState
    } = store
    const {catalogId} = useParams();
    const {wishList} = wishListStore;

    useEffect(() => {
        if(catalogId){
            loadingProducts(catalogId)
        }
    },[catalogId])

    const handleChangeSort = (value: string) => {
        if(value === 'decreasing') {
            sortDecreasing(productsData!)
        } else {
            sortIncrease(productsData!)
        }
    };

    // if(awaiting) {
    //     return <h2>Loading...</h2>
    // }
    
    const categoryFind = categoriesDataState?.find(category => category.id === catalogId)

    const inWishListId = wishList && wishList.map(el => el.id)
    const productsDataInWL = productsData && productsData.map(e=>{e.inWishList = inWishListId.indexOf(e.id) >= 0; return e;})
    

    return <Spin spinning={awaiting}>

                <div className="catalogList__wrapper">
                    <Breadcrumb className="breadCrumbs"
                        items={[
                            {
                                href: '/',
                                title: <HomeOutlined />,
                            },
                            {
                                title: <div>{categoryFind?.name}</div>,
                            },  
                        ]}
                    />
                    <div className="catalogList__header">
                        <div className="catalogList__header__info">
                            <h2 className="catalogList__title">{categoryFind?.name}</h2>
                            <span className="catalogList__total">{productsTotal} товаров</span>
                        </div>
                        <div className="catalogList__header__sort">
                            <span className="header__sort__title">Сортировка:</span>
                            <Select
                                className="header__sort__select"
                                placeholder="По убыванию цены"
                                onChange={handleChangeSort}
                                options={[
                                    { value: 'decreasing', label: 'По убыванию цены'},
                                    { value: 'increase', label: 'По возврастанию цены'},
                                ]}
                            />
                        </div>
                    </div >
                    
                    <div className="catalogList__content">
                        <div className="catalogList__main">
                            <div className="catalogList__items">
                                {productsDataInWL && productsDataInWL.length > 0 && productsDataInWL.map((product)=>
                                    <CatalogItem 
                                        key={product.id}
                                        product={product}                                        
                                    />
                                )}
                            </div>
                        </div>
                    </div>                    
                    <ViewProducts/>
                </div>
            </Spin>
})