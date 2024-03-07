import Instagram from '../../images/instagram_icon.svg';
import Facebook from '../../images/facebook_icon.svg';
import Pinterest from '../../images/pinterest_icon.svg';
import './SocialInfo.css'

export const SocialInfo = () => {
    return <div className="contact-us__social">
                <a className="social__instagram" href="#">
                    <Instagram />
                </a>
                <a className="social__facebook" href="#">
                    <Facebook />
                </a>
                <a className="social__pinterest" href="#">
                    <Pinterest />
                </a>
            </div>
}