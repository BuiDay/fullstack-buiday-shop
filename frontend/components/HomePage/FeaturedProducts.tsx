import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay,FreeMode } from "swiper";

import dynamic from 'next/dynamic';
const ProductCards = dynamic(() => import('../ProductCards/ProductCards'));

interface IProps{
    products?:{
        data?:[]
    }
    title?:string
}


const FeaturedProducts = ({products,title}:IProps) => {
    return (
        <section className='featured-wrapper home_wrapper_2 py-5'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 className='section-heading'>{title}</h3>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    centeredSlides={true}
                    // freeMode={true}
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

export default FeaturedProducts;