import { observer } from "mobx-react-lite"
import viewProductsStore from "./stores/ViewProductsStore"
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ViewProducts.css'
import { useNavigate } from "react-router-dom";

export const ViewProducts = observer(() => {
    const {viewProducts, setLocalStorageViewProducts} = viewProductsStore;
    const navigete = useNavigate();

    useEffect(()=>{
        setLocalStorageViewProducts(viewProducts)
    }, [viewProducts])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1025,
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
    
    return <>
                {viewProducts && viewProducts.length > 3 &&
                    <div className="viewProducts__wrapper">
                        <h2 className="viewProducts__title">Вы недавно просматривали</h2>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {viewProducts.map((viewProduct) => {
                                    const hendleProductClick = () => {
                                        navigete(`/${viewProduct.category.id}/${viewProduct.id}`)
                                    }

                                    return <div key={viewProduct.id}  className="viewProduct__info">
                                                <img
                                                    className='viewProduct__img'
                                                    src={viewProduct.images[0]}
                                                    onClick={hendleProductClick}/>
                                                <div
                                                    className='viewProduct__title'
                                                    onClick={hendleProductClick}
                                                >
                                                    {viewProduct.title}
                                                </div>
                                            </div>
                                })}
                            </Slider>
                        </div>                        
                    </div>
                } 
            </>
})