import React,{useEffect,useState } from 'react';
import Link from 'next/link';
import styles from './HomePage.module.scss'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import MainBanner from '../../assets/images/main-banner-1.jpg'
import CatBanner_1 from '../../assets/images/catbanner-01.jpg'
import CatBanner_2 from '../../assets/images/catbanner-02.jpg'
import CatBanner_3 from '../../assets/images/catbanner-03.jpg'
import CatBanner_4 from '../../assets/images/catbanner-04.jpg'
import Service from '../../assets/images/service.png'
import Service_2 from '../../assets/images/service-02.png'
import Service_3 from '../../assets/images/service-03.png'
import Service_4 from '../../assets/images/service-04.png'
import Service_5 from '../../assets/images/service-05.png'
import Camera from '../../assets/images/camera.jpg'
import Headphone from '../../assets/images/headphone.jpg'
import Speaker from '../../assets/images/speaker.jpg'
import Laptop from '../../assets/images/laptop.jpg'
import SpecialProduct from '../SpecialProduct/SpecialProduct';
// import ProductCards from '../ProductCards/ProductCards';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay,FreeMode } from "swiper";
import dynamic from 'next/dynamic';

const ProductCards = dynamic(() => import('../ProductCards/ProductCards'))

interface IProps{
    mobile?:{
        data?:[]
    }
    laptop?:{
        data?:[]
    },
    tablet?:{
        data?:[]
    }
    products?:{
        data?:[]
    }
}

const Home:React.FC<IProps> = ({mobile,laptop,tablet,products}) => {

    return (    
        <>
            <section className='home-wrapper-1 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className={`${styles.main_banner} position-relative py-3`}>
                                <Image src={MainBanner} alt="MainBanner Image" 
                                    className='img-fluid rounded-3'/>
                                <div className={`${styles.main_banner_content} position-absolute`}>
                                    <h4>SUPERCHARNGED FOR PROS.</h4>
                                    <h5>IPhone 13 Pro Max</h5>
                                    <p className='mt-4'>Form 1000$ or 2000$</p>
                                    <Link href="#" className='button mt-4'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-content-between h-100 py-3">
                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_1} alt="CatBanner_1 Image" 
                                        className='img-fluid rounded-3'/>
                                    <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_2} alt="CatBanner_2 Image" 
                                        className='img-fluid rounded-3'/>
                                    <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy Ipad Air</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_3} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_4} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>Free ENGRAVING</h4>
                                        <h5>Headphone 6</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.home_wrapper_2} py-3`}>
                <div className="container-xxl">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service} alt="" />
                            <div>
                                <h6>Miễn phí giao hàng</h6>
                                <p>Các đơn trên 300k</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_2} alt="" />
                            <div>
                                <h6>Ưu đãi hàng ngày</h6>
                                <p>Tiết kiệm đến 25%</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_3} alt="" />
                            <div>
                                <h6>Hỗ trợ 24/7</h6>
                                <p>Yên tâm mua sắm</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_4} alt="" />
                            <div>
                                <h6>Giá cả phải chăng</h6>
                                <p>Thoải mái mua sắm</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_5} alt="" />
                            <div>
                                <h6>Thanh toán an toàn</h6>
                                <p>Không lo mất tiền</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-5`}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${styles.categories} d-flex flex-wrap align-items-center`}>
                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>12 Items</p>
                                    </div>
                                    <Image src={Camera} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>20 Items</p>
                                    </div>
                                    <Image src={Headphone} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Speaker</h6>
                                        <p>4 Items</p>
                                    </div>
                                    <Image src={Speaker} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Laptop</h6>
                                        <p>16 Items</p>
                                    </div>
                                    <Image src={Laptop} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Phone</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <Image src={require("../../assets/images/tab.jpg")} width={110} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Home App</h6>
                                        <p>17 Items</p>
                                    </div>
                                    <Image src={require("../../assets/images/homeapp.jpg")} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>TV</h6>
                                        <p>4 Items</p>
                                    </div>
                                    <Image src={require("../../assets/images/tv.jpg")} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Watch</h6>
                                        <p>14 Items</p>
                                    </div>
                                    <Image className='img-fluid' src={require("../../assets/images/watch-2.jpg")} alt="" width={80} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper home_wrapper_2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Điện thoại nổi bật nhất</h3>
                        </div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={true}
                            // freeMode={true}
                            loop={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, FreeMode, Navigation]}
                            className="mySwiper"
                        >
                        {
                            mobile?.data && mobile?.data.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index}><ProductCards key={index} data={item} grid={5}/></SwiperSlide>
                                )
                            })
                        }
                       </Swiper>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper home_wrapper_2 pb-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Laptop nổi bật nhất</h3>
                        </div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={true}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, FreeMode, Navigation]}
                            className="mySwiper"
                        >
                        {
                            laptop?.data && laptop?.data.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index}><ProductCards key={index} data={item} grid={5}/></SwiperSlide>
                                )
                            })
                        }
                       </Swiper>
                    </div>
                </div>
            </section>

            <section className={`${styles.famous_wrapper} home-wrapper-2 py-5`}>
                <div className="container-xxl">
                    <div className="row pt-4">
                        <div className="col-3">
                            <div className={`${styles.famous_card} p-3 bg-dark`}>
                                <div className={`${styles.famous_content} mb-3`}>
                                    <h5 className='text-white'>Big Screen</h5>
                                    <h6 className='text-white'>Smart Watch Series 8</h6>
                                    <p className='text-white'>Form $399</p>
                                </div>
                                <Image className='img-fluid' src={require('../../assets/images/apple-watch-series-8.png')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className={`${styles.famous_card} p-3`}>
                                <div className={`${styles.famous_content} mb-3`}>
                                    <h5>Studio Display</h5>
                                    <h6>600 nits of brightness</h6>
                                    <p>Form $399</p>
                                </div>
                                <Image className='img-fluid famous-img' src={require('../../assets/images/tab1.jpg')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className={`${styles.famous_card} p-3`}>
                                <div className={`${styles.famous_content} mb-3`}>
                                    <h5>Smartphone</h5>
                                    <h6>Iphone 13 Pro</h6>
                                    <p>Form $399</p>
                                </div>
                                <Image className='img-fluid famous-img' src={require('../../assets/images/png.monster-209.png')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className={`${styles.famous_card} p-3`}>
                                <div className={`${styles.famous_content} mb-3`}>
                                    <h5>Home Speaker</h5>
                                    <h6>Room-filling sound</h6>
                                    <p>Form $399</p>
                                </div>
                                <Image className='img-fluid famous-img' src={require('../../assets/images/favpng_jbl-clip-2-loudspeaker-enclosure-wireless-speaker.png')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`special-wrapper ${styles.home_wrapper_2} py-5`}>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={styles.section_heading}>Special Products</h3>
                        </div>
                        
                    </div>
                    <div className="row mt-3">
                         <Swiper
                            slidesPerView={3}
                            spaceBetween={15}
                            centeredSlides={true}
                            // freeMode={true}
                            loop={true}
                            autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}
                            modules={[Autoplay, FreeMode]}
                            className="mySwiper"
                        >
                        {
                            products?.data && products?.data.map((item,index)=>{
                                // const THREE_DAYS_IN_MS =Math.floor(Math.random()*200000000);
                                // const NOW_IN_MS = new Date().getTime();
                                // const timer = NOW_IN_MS + THREE_DAYS_IN_MS
                                return(
                                    <SwiperSlide key={index}><SpecialProduct data={item}/></SwiperSlide>
                                )
                            })
                        }
                       </Swiper>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper home_wrapper_2 pb-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Máy tính bảng nổi bật nhất</h3>
                        </div>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            centeredSlides={true}
                            // freeMode={true}
                            loop={true}
                            autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, FreeMode, Navigation]}
                            className="mySwiper"
                        >
                        {
                            tablet?.data && tablet?.data.map((item,index)=>{
                                return(
                                    <SwiperSlide key={index}><ProductCards key={index} data={item} grid={5}/></SwiperSlide>
                                )
                            })
                        }
                       </Swiper>
                    </div>
                </div>
            </section>

            <section className='marquee-wrapper py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee gradient={false} className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-01.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-02.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-03.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-04.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-05.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-06.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-07.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <Image src={require('../../assets/images/brand-08.png')} alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Latest Blogs</h3>
                        </div>
                       {/* <BlogCard />
                       <BlogCard />
                       <BlogCard />
                       <BlogCard /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;