import { Carousel } from "antd"
import promo_vannaya from '../../../../common/images/promo_vannaya.jpg'
import promo_hranenie from '../../../../common/images/promo_hranenie.jpg'
import promo_posuda from '../../../../common/images/promo_posuda.png'
import promo_tekstil from '../../../../common/images/promo_tekstil.png'
import { useNavigate } from "react-router-dom";
import { RightOutlined } from '@ant-design/icons';
import './PromoCarousel.css'

export const PromoCarousel = () => {
    const navigete = useNavigate();
    
    const hendleVannayaClick = () => {
        navigete("/vannaya")
    }

    const hendlePosudaClick = () => {
        navigete("/posuda")
    }

    const hendleTekstilClick = () => {
        navigete("/tekstil")
    }

    const hendleHranenieClick = () => {
        navigete("/hranenie")
    }

    return <div className="promo__carousel">
                <Carousel autoplay pauseOnHover={true} autoplaySpeed={2500} className="promo__carousel__items">
                    <div className="promo__carousel__item">
                        <h3 className="promo__vannaya promo__item__info"  onClick={hendleVannayaClick}>
                            <div className="promo__info">
                                <h2 className="promo__info__title">Уют в каждом уголке</h2>
                                <span className="promo__info__call">идем выбирать <RightOutlined /></span>
                            </div>
                            <img src={promo_vannaya} alt="ванная" className="promo__info__img"/>
                        </h3>
                    </div>
                    <div className="promo__carousel__item">
                        <h3 className="promo__posuda promo__item__info" onClick={hendlePosudaClick}>
                            <div className="promo__info">
                                <h2 className="promo__info__title">Идеальная посуда для Ваших праздников</h2>
                                <span className="promo__info__call">идем выбирать <RightOutlined /></span>
                            </div>
                            <img src={promo_posuda} alt="посуда" className="promo__info__img"/>
                        </h3>
                    </div>
                    <div className="promo__carousel__item">
                        <h3 className="promo__tekstil  promo__item__info"  onClick={hendleTekstilClick}>
                            <div className="promo__info">
                                <h2 className="promo__info__title">Pадость пробуждения каждого дня</h2>
                                <span className="promo__info__call">идем выбирать <RightOutlined /></span>
                            </div>
                            
                            <img src={promo_tekstil} alt="текстиль" className="promo__info__img"/>
                        </h3>
                    </div>
                    <div className="promo__carousel__item">
                        <h3 className="promo__hranenie  promo__item__info"  onClick={hendleHranenieClick}>
                            <div className="promo__info">
                                <h2 className="promo__info__title">Живи с комфортом</h2>
                                <span className="promo__info__call">идем выбирать <RightOutlined /></span>
                            </div>
                            <img src={promo_hranenie} alt="хранение" className="promo__info__img"/>
                        </h3>
                    </div>
                </Carousel>
            </div>
}