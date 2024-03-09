import Viber from '../../images/viber_icon.svg';
import Telegram from '../../images/telegram_icon.svg';
import Whatsapp from '../../images/whatsapp_icon.svg';
import './MessagersInfo.css'
import { ConfigProvider, Tooltip } from 'antd';

export const MessagersInfo = () => {
    return <div className="contact-us__messagers">
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
                    <Tooltip title="viber">
                        <a className="messager__viber" href="#">
                            <Viber/>
                        </a>
                    </Tooltip>
                    <Tooltip title="telegram">
                        <a className="messager__telegram" href="#">
                            <Telegram />
                        </a>
                    </Tooltip>
                    <Tooltip title="whatsapp">
                        <a className="messager__whatsapp" href="#">
                            <Whatsapp />
                        </a>
                    </Tooltip>
                </ConfigProvider>
            </div>
}