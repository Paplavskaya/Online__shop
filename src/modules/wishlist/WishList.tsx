import { useEffect } from "react";
import wishListStore from "../../common/stores/WishListStore"
import { Breadcrumb, Button, Empty, Modal } from "antd";
import { HomeOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { CatalogItem } from "../../common/components/CatalogItem";
import { observer } from "mobx-react-lite";

const { confirm } = Modal;

export const WishList = observer(() => {
    const {wishListState, clearWishList, setLocalStorageWL} = wishListStore;    

    useEffect(()=>{
        setLocalStorageWL(wishListState)
    }, [wishListState])

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
                </div>
                {wishListState.length > 0 ? 
                    <div className="wishList__product__info">
                        <div>
                            {wishListState.map((wishListProduct) => 
                                <CatalogItem 
                                    key={wishListProduct.id}
                                    product={wishListProduct}                                
                                />
                            )}
                        </div>
            
                        <div className="wishList__product__btn">
                            <Button className="wishList__product__clear" onClick={hendleClearWLClick}>Очистить избранное</Button>
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