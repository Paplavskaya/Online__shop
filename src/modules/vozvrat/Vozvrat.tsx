import { Breadcrumb } from "antd"
import { HomeOutlined } from '@ant-design/icons';
import { VozvratInfo } from "./components";

export const Vozvrat = () => {
    return <>
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: "Возврат товара",
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Возврат товара</h2>
                </div>
                <VozvratInfo/>
            </>
}