import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { SearchProductStore } from "../../../../common/stores/SearchProductStore";
import Slider from "react-slick";
import { CatalogItem } from "../../../../common/components/CatalogItem";
import './NewProducts.css'
import wishListStore from "../../../../common/stores/WishListStore";

export const NewProducts = observer(() => {
    const [store] = useState(()=> new SearchProductStore());
    const {productsNew, loadingAllProducts} = store;
    const {wishList} = wishListStore;

    useEffect(() => {
        loadingAllProducts()
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1153,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    };

    const inWishListId = wishList && wishList.map(el => el.id)
    const productsNewInWL = productsNew && productsNew.map(e=>{e.inWishList = inWishListId.indexOf(e.id) >= 0; return e;})
    

    return <>
            {productsNewInWL && productsNewInWL.length >0 &&
                <div className="productsNew__wrapper">
                    <h2 className="productsNew__title">Наши новинки</h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {productsNewInWL.map((productNew) => 
                                <CatalogItem 
                                    key={productNew.id}
                                    product={productNew}
                                />
                            )}
                        </Slider>
                    </div>                        
                </div>
            } 
        </>
})