import { useEffect } from "react";
import { store } from "./stores/CatalogListStore";
import { observer } from "mobx-react-lite";
import './CatalogList.css';
import { Breadcrumb, Button, Select, Menu as AsideMenu, Rate} from "antd";
import { HomeOutlined } from '@ant-design/icons';
import ButtonGroup from "antd/es/button/button-group";
import { HeartOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import SubMenu from "antd/es/menu/SubMenu";
import DescriptionsItem from "antd/es/descriptions/Item";

export const CatalogList = observer(() => {

    const {loadingData, productsData, awaiting, productsTotal, sortIncrease, sortDecreasing} = store

    useEffect(()=>{
        loadingData()
    },[])

    const handleChange = (value: string) => {
        if(value === 'decreasing') {
            sortDecreasing(productsData!)
        } else {
            sortIncrease(productsData!)
        }
    };

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
                            placeholder="По убыванию цены"
                            onChange={handleChange}
                            options={[
                                { value: 'decreasing', label: 'По убыванию цены'},
                                { value: 'increase', label: 'По возврастанию цены'},
                            ]}
                        />
                    </div>
                </div>
                <div className="catalogList__content">
                    <div className="catalogList__filters">
                        <div className="catalogList__filter__categories">
                           
                            <div className="catalogList__filter__title">Категории</div>
                            {/* <AsideMenu
                                inlineIndent={8}
                                mode="inline"
                            >
                                <SubMenu key="sub1" title={<span>Интерьер</span>}>
                                    <SubMenu key="1" title={<span>Предметы интерьера</span>}>
                                        <AsideMenu.Item key="1.1">Аксессуары для дома</AsideMenu.Item>
                                        <AsideMenu.Item key="1.2">Вазы, цветы для интерьера</AsideMenu.Item>
                                        <AsideMenu.Item key="1.3">Свечи и подсвечники</AsideMenu.Item>
                                        <AsideMenu.Item key="1.4">Скульптуры</AsideMenu.Item>
                                        <AsideMenu.Item key="1.5">Текстиль для дома</AsideMenu.Item>
                                    </SubMenu>
                                    <AsideMenu.Item style={{fontSize: 16}} key="2">Товары для ванной</AsideMenu.Item>
                                    <SubMenu key="3" title={<span>Товары для кухни</span>}>
                                        <AsideMenu.Item key="3.1">Барная посуда</AsideMenu.Item>
                                        <AsideMenu.Item key="3.2">Бокалы, декантеры</AsideMenu.Item>
                                        <AsideMenu.Item key="3.3">Емкости для хранения</AsideMenu.Item>
                                        <AsideMenu.Item key="3.4">Кухонные приборы</AsideMenu.Item>
                                        <AsideMenu.Item key="3.5">Кухонный текстиль</AsideMenu.Item>
                                        <AsideMenu.Item key="3.6">Кухонная утварь</AsideMenu.Item>
                                        <AsideMenu.Item key="3.7">Сервировка стола</AsideMenu.Item>
                                        <AsideMenu.Item key="3.8">Столовая посуда</AsideMenu.Item>
                                        <AsideMenu.Item key="3.9">Столовые приборы</AsideMenu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </AsideMenu> */}
                        </div>
                        <div className="catalogList__filter__price">
                            <div className="catalogList__filter__title">Цена</div>
                        </div>
                        <div className="catalogList__filter__brand">
                            <div className="catalogList__filter__title">Бренд</div>
                        </div>
                    </div>
                    <div className="catalogList__main">
                        <div className="catalogList__filterToggles"></div>
                        <div className="catalogList__items">
                            {productsData && productsData.length > 0 && productsData.map((product)=>{
                                const {brand, title, rating, thumbnail, discountPercentage, price} = product  

                                return <div key={product.id} className="catalogList__item">
                                        <img className='catalogList__item__img' src={thumbnail} />
                                        <Rate className='catalogList__item__rating' disabled defaultValue={rating} />
                                        <div className='catalogList__item__title'>{title}</div>
                                        <div className='catalogList__item__price'>{price} BYN</div>
                                        <div className='catalogList__item__discont-price'>{(price*(1-discountPercentage/100)).toFixed(2)} BYN</div>
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