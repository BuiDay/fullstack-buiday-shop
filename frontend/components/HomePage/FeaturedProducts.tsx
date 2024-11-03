import React, { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, FreeMode } from "swiper";
import ProductCards from '../ProductCards/ProductCards';
import { MdArrowForwardIos } from "react-icons/md";

interface IProps {
    products?: {
        data?: []
    }
    title?: string
}


const FeaturedProducts = ({ products, title }: IProps) => {
    return (
        <section className='featured-wrapper home_wrapper_2 py-md-3 py-2'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <h1 className='section-heading m-0' style={{ fontSize: "20px", fontWeight: "600",textTransform:"uppercase"}}>
                            <span className='' style={{ color: "#633bd4", padding: "6px 20px", borderRadius: "10px",border:"solid 2px #633bd4" }}>{title}</span>
                        </h1>
                    </div>
                    <div style={{ fontSize: "12px"}}>
                        <span style={{ color: "black", padding: "6px 10px", borderRadius: "5px",display:"flex",alignItems:"center",justifyContent:"end",gap:"5px" }}> <span> Xem thêm  </span>  <MdArrowForwardIos/></span>
                    </div>
                    <Swiper
                        // centeredSlides={}
                        // freeMode={true}
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            // when window width is >= 768px
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30
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
                        style={{ padding: "10px 0px" }}
                    >
                        {
                            products?.data && products?.data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}><ProductCards key={index} data={item} /></SwiperSlide>
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