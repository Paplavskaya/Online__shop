import Instagram from '../../images/instagram_icon.svg';
import Facebook from '../../images/facebook_icon.svg';
import Pinterest from '../../images/pinterest_icon.svg';
import './SocialInfo.css'
import { ConfigProvider, Tooltip } from 'antd';

export const SocialInfo = () => {
    return <div className="contact-us__social">
                <ConfigProvider
                    theme={{
                        components: {
                            Tooltip: {
                                colorTextLightSolid: '#172542',
                                colorBgSpotlight: '#d9e4f1'
                            },
                        },
                    }}
                >
                    <Tooltip title="instagram">
                        <a className="social__instagram" href="#">
                            <Instagram />
                        </a>
                    </Tooltip>
                    <Tooltip title="facebook">
                        <a className="social__facebook" href="#">
                            <Facebook />
                        </a>
                    </Tooltip>
                    <Tooltip title="pinterest">
                        <a className="social__pinterest" href="#">
                            <Pinterest />
                        </a>
                    </Tooltip>
                </ConfigProvider>
            </div>
}