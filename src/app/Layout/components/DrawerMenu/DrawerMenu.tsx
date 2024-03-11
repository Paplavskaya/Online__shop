import { Button, Drawer } from "antd"
import {  useState } from "react";
import { NavLink } from "react-router-dom";
import burger_icon from '../../../../common/images/burger_icon.png';
import './DrawerMenu.css';
import { MessagersInfo } from "../../../../common/components/MessagersInfo";
import { SocialInfo } from "../../../../common/components/SocialInfo";
import { CategoriesData } from "../../../../common/components/CategoriesData";

export const DrawerMenu = () => {
    const [open, setOpen] = useState(false);
    
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
    setOpen(false);
    };

    return  <>
                <div className='vertical__menu'>
                    <Button type="primary" onClick={showDrawer}>
                        <img className="burger_icon" alt="боковое меню" src={burger_icon} style={{ width: '25px'}}/> 
                        <span>Каталог</span>
                    </Button>
                </div>
                <Drawer 
                    title="VD" 
                    onClose={onClose} 
                    open={open} 
                    placement={'left'}
                >
                    <div  className="drawer__items" onClick={onClose}> 
                        <NavLink className='menu__item' to="/">Главная</NavLink>
                        <CategoriesData/>
                    </div>

                    <div className="drawer__info" onClick={onClose}> 
                        <div className="drawer__info__items">
                            <NavLink className='menu__item' to="dostavka">Доставка</NavLink>
                            <NavLink className='menu__item' to="oplata">Оплата</NavLink>
                            <NavLink className='menu__item' to="vozvrat">Возврат</NavLink>
                            <NavLink className='menu__item' to="news">Новости</NavLink>
                            <NavLink className='menu__item' to="about_us">О нас</NavLink>
                        </div>
                        
                        <div className="drawer__contact__info">
                            <div>
                                <a href="tel:+375296554545" className="contact-us__tel">+375 (29) 655-45-45</a>
                                <p className="working__hours">Время работы: ПН-ВС с 09:00 до 21:00</p>
                                <div className="drawer__social">
                                    <span className="messagers__title">Свяжитесь с нами</span>
                                    <MessagersInfo />
                                    <span className="social__title">Мы в социальных сетях</span>
                                    <SocialInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
    </>
}