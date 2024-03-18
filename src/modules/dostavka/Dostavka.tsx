import { Breadcrumb } from "antd"
import { HomeOutlined } from '@ant-design/icons';
import './Dostavka.css'
import { DostavkaInfo } from "./components";

export const Dostavka = () => {
    return <>
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: "Доставка",
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Доставка</h2>
                </div>
                <DostavkaInfo/>
    </>
}