import { NavLink } from "react-router-dom"
import { Menu as AntdMenu} from 'antd';
import './Menu.css'

export const Menu = () => {
    return <AntdMenu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={[
                    {label:<NavLink to="/">Главная</NavLink>, key: 'home'},
                    {label:<NavLink to="/promotion">Акции</NavLink>, key: 'promotion'},
                    {label:<NavLink to="/catalog">Каталог</NavLink>, key: 'catalog'},
                    {label:<NavLink to="/brands">Бренды</NavLink>, key: 'brands'},
                ]}
                className="menu"
            />
}