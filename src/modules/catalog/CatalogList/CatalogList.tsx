import { useEffect } from "react";
import { store } from "./stores/CatalogListStore";
import { observer } from "mobx-react-lite";
import './CatalogList.css';
import { Breadcrumb, Button, Select } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { Product } from "./models/CatalogData";
import ButtonGroup from "antd/es/button/button-group";
import { HeartOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

export const CatalogList = observer(() => {

    const {loadingData, productsData, awaiting, productsTotal, sortIncrease, sortDecreasing} = store

    useEffect(()=>{
        loadingData()
    },[])

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const handleSortIncrease= (productsData: Product[])=> {
        sortIncrease(productsData)
    }

    const handleSortDecreasing= (productsData: Product[])=> {
        sortDecreasing(productsData)
    }

    if(awaiting) {
        return <h2>Loading...</h2>
    }

    return <div className="catalogList__wrapper">
                
                <Breadcrumb className="catalogList__breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: 'Каталог',
                        },  
                    ]}
                />
                
                <div className="catalogList__header">
                    <div className="catalogList__header__info">
                        <h2 className="catalogList__header__title">Интерьер</h2>
                        <span className="catalogList__header__total">{productsTotal} товаров</span>
                    </div>
                    <div className="catalogList__header__sort">
                        <span className="header__sort__title">Сортировка:</span>
                        <Select
                            className="header__sort__select"
                            defaultValue="decreasing"
                            onChange={handleChange}
                            options={[
                                { value: 'decreasing', label: 'По убыванию цены'},
                                { value: 'increase', label: 'По возврастанию цены'},
                            ]}
                        />
                        <button onClick={()=>handleSortDecreasing(productsData!)}>По убыванию цены</button>
                        <button onClick={()=>handleSortIncrease(productsData!)}>По возврастанию цены</button>
                    </div>
                </div>
                <div className="catalogList__content">
                    <div className="catalogList__aside"></div>
                    <div className="catalogList__main">
                        <div className="catalogList__filterToggles"></div>
                        <div className="catalogList__items">
                            {productsData && productsData.length > 0 && productsData.map((product)=>{
                                const img = product.media.map(img => img.x2) 
                                     
                                return <div key={product.uuid} className="catalogList__item">
                                        <img className='catalogList__item__img'src={img[0]} />
                                        <div className='catalogList__item__brand'>{product.brand}</div>
                                        <div className='catalogList__item__title'>{product.name}</div>
                                        <div className='catalogList__item__price'>{product.price} BYN</div>
                                        <ButtonGroup className='catalogList__item__btns'>
                                            <Button className='catalogList__btn__favorites'><HeartOutlined /></Button>
                                            <Button className='catalogList__btn__cart'><ShoppingCartOutlined /></Button>
                                        </ButtonGroup>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="catalogList__pagination">
                    
                </div>
                <div className="ptoduct__viewed">
                    <div className="ptoduct__title">Вы недавно просматривали</div>
                    <div className="ptoduct__items"></div>
                </div>
            </div>
})