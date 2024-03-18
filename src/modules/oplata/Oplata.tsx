import { Breadcrumb } from "antd"
import { HomeOutlined } from '@ant-design/icons';
import './Oplata.css'
import { OplataInfo } from "./components";

export const Oplata = () => {
    return <>
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: "Оплата",
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Оплата</h2>
                </div>
                <OplataInfo/>
            </>
}