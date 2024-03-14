import { useEffect } from "react";
import wishListStore from "../../common/stores/WishListStore"
import { Breadcrumb, Button, Empty, Modal } from "antd";
import { HomeOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import { CatalogItem } from "../../common/components/CatalogItem";
import './WishList.css'


const { confirm } = Modal;

export const WishList = observer(() => {
    const {wishList, clearWishList, setLocalStorageWL} = wishListStore;
    
    useEffect(()=>{
        setLocalStorageWL(wishList)
    }, [wishList])

    const hendleClearWLClick = () => {
        confirm({
            title: 'Вы действительно хотите очистить Избранное?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Очистить',
            cancelText: 'Закрыть',
            onOk() {
                clearWishList()
            },
            onCancel() {},
        })
    }

    return <div className="wishList__wrapper">
                <Breadcrumb className="breadCrumbs"
                    items={[
                        {
                            href: '/',
                            title: <HomeOutlined />,
                        },
                        {
                            title: "Избранное",
                        },  
                    ]}
                />
                <div className="page__header">
                    <h2 className="page__title">Избранное</h2>
                    <div className="wishList__product__btn">
                        <Button className="wishList__product__clear" onClick={hendleClearWLClick}>Очистить избранное</Button>
                    </div>
                </div>
                {wishList.length > 0 ? 
                    <div className="wishList__product__info">
                        <div className="wishList__product__items">
                            {wishList.map((wishListProduct) => 
                                <CatalogItem 
                                key={wishListProduct.id}
                                product={wishListProduct}                                        
                                />                       
                            )}
                        </div>             
                    </div> : <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={
                                    <div className="wishList__empty" style={{marginTop: 20, fontSize: 20, fontWeight: 600}}>
                                        Ваш лист избанного пуст
                                    </div>
                                }
                            />
                }
            </div>
})