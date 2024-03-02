import { Button, ConfigProvider } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { SearchOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    LoginOutlined
} from '@ant-design/icons';
import './HeaderBtns.css'
import { SearchProduct } from "../../../../common/components/SearchProduct";
import { useState } from "react";

export const HeaderBtns = () => {
    const [isSearchActiv, setIsSearchActiv] = useState(false)
    
    return <>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorLinkActive: '#728eae',
                                colorLinkHover: '#728eae',
                            },
                        },
                 }}
                >
                    <ButtonGroup className='header__btns'>
                        <div className='header__search'>
                            <Button className='header__btn' type="link" onClick={()=> setIsSearchActiv(true)}><SearchOutlined/>Поиск</Button>
                            <SearchProduct activ={isSearchActiv} setActiv={setIsSearchActiv}/>
                        </div>
                         
                        <Button className='header__btn' type="link"><LoginOutlined />Войти</Button>
                        <Button className='header__btn' type="link"><HeartOutlined />Избранное</Button>
                        <Button className='header__btn' type="link"><ShoppingCartOutlined />Корзина</Button>
                    </ButtonGroup>
                </ConfigProvider>
               
                    
                
    </>
}