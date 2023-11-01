import React, { memo } from 'react';
import styles from '../../styles/HomePage.module.scss'
import SpecialProduct from '../SpecialProduct/SpecialProduct';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay,FreeMode } from "swiper";

interface IProps{
    products?:{
        data?:[]
    }
}

const SpecialProducts = ({products}:IProps) => {
    return (
        <section className={`special-wrapper ${styles.home_wrapper_2} py-5`}>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 className={styles.section_heading}>Khuyến mãi đặc biệt</h3>
                </div>
                
            </div>
            <div className="row mt-3">
                 <Swiper
                    // slidesPerView={3}
                    // spaceBetween={15}
                    // centeredSlides={true}
                    // freeMode={true}
                    breakpoints={{
                        // when window width is >= 640px
                        680: {
                            slidesPerView: 2,
                            spaceBetween:10
                          },
                        768: {
                          slidesPerView: 2,
                          spaceBetween:10
                        },
                        1100: {
                            slidesPerView: 3,
                            spaceBetween:20
                          },
                        // when window width is >= 768px
                      }}
                    loop={true}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, FreeMode, Navigation]}
                    className="mySwiper"
                >
                {
                    products?.data && products?.data.map((item,index)=>{
                        const THREE_DAYS_IN_MS =Math.floor(Math.random()*200000000);
                        const NOW_IN_MS = new Date().getTime();
                        const timer = NOW_IN_MS + THREE_DAYS_IN_MS
                        return(
                            <SwiperSlide key={index}><SpecialProduct data={item} timer={timer}/></SwiperSlide>
                        )
                    })
                }
               </Swiper>
            </div>
        </div>
    </section>
    );
};

export default memo(SpecialProducts);