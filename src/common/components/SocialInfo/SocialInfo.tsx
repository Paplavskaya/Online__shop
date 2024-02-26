import icons_instagram from '../../images/icon_instagram.png';
import icons_facebook from '../../images/icon_facebook.png';
import icons_pinterest from '../../images/icon_pinterest.png';
import './SocialInfo.css'

export const SocialInfo = () => {
    return <div className="contact-us__social">
                <a className="social__instagram" href="#">
                    <img className="icons__instagram" alt="instagram" src={icons_instagram} style={{ width: '25px'}}/>
                </a>
                <a className="social__facebook" href="#">
                    <img className="icons__facebook" alt="facebook" src={icons_facebook} style={{ width: '25px'}}/>
                </a>
                <a className="social__pinterest" href="#">
                    <img className="icons__pinterest" alt="pinterest" src={icons_pinterest} style={{ width: '25px'}}/>
                </a>
            </div>
}