import React, { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay,FreeMode } from "swiper";
import ProductCards from '../ProductCards/ProductCards';

interface IProps{
    products?:{
        data?:[]
    }
    title?:string
}


const FeaturedProducts = ({products,title}:IProps) => {
    return (
        <section className='featured-wrapper home_wrapper_2 py-md-5 py-2'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h1 className='section-heading'>{title}</h1>
                </div>
                <Swiper
                    // centeredSlides={}
                    // freeMode={true}
                    breakpoints={{
                        // when window width is >= 640px
                        300: {
                            slidesPerView: 2,
                            spaceBetween:5
                          },
                        576: {
                            slidesPerView: 2,
                            spaceBetween:10
                          },
                        640: {
                          slidesPerView: 3,
                          spaceBetween:30
                        },
                        // when window width is >= 768px
                        1200: {
                            slidesPerView: 5,
                            spaceBetween:30
                          },
                      }}
                    loop={true}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, FreeMode, Navigation]}
                    className="mySwiper"
                >
                {
                    products?.data && products?.data.map((item,index)=>{
                        return(
                            <SwiperSlide key={index}><ProductCards key={index} data={item}/></SwiperSlide>
                        )
                    })
                }
               </Swiper>
            </div>
        </div>
    </section>
    );
};

export default memo(FeaturedProducts);