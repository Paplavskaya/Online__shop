import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { SearchProductStore } from "../../../../common/stores/SearchProductStore";
import Slider from "react-slick";
import { CatalogItem } from "../../../../common/components/CatalogItem";
import './NewProducts.css'

export const NewProducts = observer(() => {
    const [store] = useState(()=> new SearchProductStore());
    const {productsNew, loadingAllProducts} = store;

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
            breakpoint: 1152,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          }
        ]
    };

    return <>
            {productsNew && productsNew.length >0 &&
                <div className="productsNew__wrapper">
                    <h2 className="productsNew__title">Наши новинки</h2>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {productsNew.map((productNew) => 
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