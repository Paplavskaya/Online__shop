import { observer } from "mobx-react-lite"
import viewProductsStore from "./stores/ViewProductsStore"
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ViewProducts.css'
import { useNavigate } from "react-router-dom";

export const ViewProducts = observer(() => {
    const {viewProductsState, setLocalStorageViewProducts} = viewProductsStore;
    const navigete = useNavigate();

    useEffect(()=>{
        setLocalStorageViewProducts(viewProductsState)
    }, [viewProductsState])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 425,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    
    return <>
                {viewProductsState && viewProductsState.length >0 &&
                    <div className="viewProducts__wrapper">
                        <h2 className="viewProducts__title">Вы недавно просматривали</h2>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {viewProductsState.map((viewProduct) => {
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