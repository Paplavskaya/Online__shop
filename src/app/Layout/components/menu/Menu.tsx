import { NavLink } from "react-router-dom"
import { Menu as AntdMenu} from 'antd';
import './Menu.css'

export const Menu = () => {
    return <AntdMenu
                mode="horizontal"
                items={[
                    {label:<NavLink className='menu__item' to="/">Главная</NavLink>, key: 'home'},
                    {label:<NavLink className='menu__item' to="/promotion">Акции</NavLink>, key: 'promotion'},
                    {label:<NavLink className='menu__item' to="/catalog">Каталог</NavLink>, key: 'catalog'},
                    {label:<NavLink className='menu__item' to="/brands">Бренды</NavLink>, key: 'brands'},
                ]}
                className="menu__items"
            />
}