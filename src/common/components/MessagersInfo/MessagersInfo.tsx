import Viber from '../../images/viber_icon.svg';
import Telegram from '../../images/telegram_icon.svg';
import Whatsapp from '../../images/whatsapp_icon.svg';
import './MessagersInfo.css'

export const MessagersInfo = () => {
    return <div className="contact-us__messagers">
                <a className="messager__viber" href="#">
                    <Viber/>
                </a>
                <a className="messager__telegram" href="#">
                    <Telegram />
                </a>
                <a className="messager__whatsapp" href="#">
                    <Whatsapp />
                </a>
            </div>
}