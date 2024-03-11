import { Link } from "react-router-dom"
import { CategoriesData } from "../../../../common/components/CategoriesData"
import Location from '../../../../common/images/location.svg';
import Phone from '../../../../common/images/phone.svg';
import Time from '../../../../common/images/time.svg';
import './FooterContent.css'
import { MessagersInfo } from "../../../../common/components/MessagersInfo";
import { SocialInfo } from "../../../../common/components/SocialInfo";

export const FooterContent = () => {
    return <div className="footer__wrapper">
                <div className="footer__catalog">
                    <h2 className="footer__title">Каталог товаров</h2>
                    <ul className="footer__catalog__items">
                        <CategoriesData/>
                    </ul>
                    
                </div>
                <div className="footer__infoForBuyer">
                    <h2  className="footer__title">Покупателям</h2>
                    <ul className="footer__infoForBuyer__items">
                        <li><Link className='infoForBuyer__item' to="about_us">О нас</Link></li>
                        <li><Link className='infoForBuyer__item' to="dostavka">Доставка</Link></li>
                        <li><Link className='infoForBuyer__item' to="oplata">Оплата</Link></li>
                        <li><Link className='infoForBuyer__item' to="vozvrat">Возврат</Link></li>
                        <li><Link className='infoForBuyer__item' to="news">Новости</Link></li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <h2  className="footer__title">Контакт-центр</h2>
                    <ul className="footer__contacts__items">
                        <li className="footer__contacts__item">
                            <Location />
                            <p>
                                г. Минск, ул. Притыцкого, 74
                            </p>
                        </li>
                        <li className="footer__contacts__item">
                            <Phone />
                            <a href="tel:+375296554545" className="footer__contacts__tel">
                                +375 (29) 655-45-45
                            </a>
                        </li>
                        <li className="footer__contacts__item">
                            <Time />
                            <p>
                                ПН-ВС с 09:00 до 21:00
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="footer__social">
                    <div className="footer__messagers__info">
                        <h2  className="footer__title">Свяжитесь с нами</h2>
                        <MessagersInfo/>
                    </div>
                    <div className="footer__social__info">
                        <h2  className="footer__title">Мы в социальных сетях</h2>
                        <SocialInfo/>
                    </div>
                </div>
                
            </div>
}