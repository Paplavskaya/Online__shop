import { Button, ConfigProvider, Input } from "antd"
import './SearchProduct.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { SearchProductStore } from "../../stores/SearchProductStore";
import { CloseOutlined } from '@ant-design/icons';

type SearchProductProps = {
    activ: boolean;
    setActiv: (isOpen: boolean) => void
}

export const SearchProduct = observer(({activ, setActiv}: SearchProductProps) => {
    const [store] = useState(()=> new SearchProductStore());
    const [velueSeach, setVelueSeach] = useState('')
    const {loadingAllProducts, productsAllState} = store
    const navigete = useNavigate();
    const [isSeachProductsOpen, setIsSeachProductsOpen] = useState(true)

    useEffect(() => {
        loadingAllProducts()
    },[])
    
    const seachProducts = productsAllState && productsAllState.filter((product) => {
        return product.title.toLowerCase().includes(velueSeach.toLowerCase())
    })
   
    const hendleChange = (event:any) => {
        setVelueSeach(event.target.value)
    }
    
    const hendleInputClick = () => {
        setIsSeachProductsOpen(true)
    }

    const hendleClosedBtnClick = () => {
        setActiv(false);
        setIsSeachProductsOpen(!isSeachProductsOpen)
        setVelueSeach('')
    }

    return <div className={activ?'search activ':'search'}>                
                <ConfigProvider
                    theme={{
                        components: {
                            Input: {
                                colorPrimary: '#fad89d',
                                colorPrimaryHover: '#fad89d',
                                colorPrimaryActive: '#fad89d',
                                colorBorder: '#fad89d'
                            }                            
                        },
                    }}
                >
                    <div className="search__btn"><Button className="search__closed__btn" onClick={hendleClosedBtnClick}><CloseOutlined /></Button></div>
                    <Input
                        className="search__input"
                        placeholder="Поиск товара по каталогу"
                        value={velueSeach}
                        onChange={hendleChange}
                        onClick={hendleInputClick}

                    />
                    
                </ConfigProvider>
                <div className="search__products">
                    {seachProducts && seachProducts.length > 0 ?
                        <>
                            {velueSeach && isSeachProductsOpen ?
                                seachProducts && seachProducts.map((product)=> {
                                    const {title, images, id, category} = product
                                    const hendleProductClick = () => {
                                        navigete(`/${category.id}/${id}`)
                                        setIsSeachProductsOpen(!isSeachProductsOpen)
                                        setActiv(false) 
                                        setVelueSeach('')                                     
                                    }
                                    return <div className="search__product" key={id} onClick={hendleProductClick}>
                                                <img className='search__product__img' src={images[0]}/>
                                                <div className='search__product__title'>{title}</div>
                                            </div>
                                })
                                : null 
                            }
                        </>: <div className="search__products__message">По Вашему запросу товаров нет</div>
                    }
                </div>
            </div>
})