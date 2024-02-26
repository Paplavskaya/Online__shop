import icon_viber from '../../images/icon_viber.png';
import icon_telegram from '../../images/icon_telegram.png';
import icon_whatsapp from '../../images/icon_whatsapp.png';
import './MessagersInfo.css'

export const MessagersInfo = () => {
    return <div className="contact-us__messagers">
                <a className="messager__viber" href="#">
                    <img className="icon__viber" alt="viber" src={icon_viber} style={{ width: '25px'}}/>
                </a>
                <a className="messager__telegram" href="#">
                    <img className="icon__telegram" alt="telegram" src={icon_telegram} style={{ width: '25px'}}/>
                </a>
                <a className="messager__whatsapp" href="#">
                    <img className="icon__whatsapp" alt="whatsapp" src={icon_whatsapp} style={{ width: '25px'}}/>
                </a>
            </div>
}