import React from 'react';

import styles from '../../styles/HomePage.module.scss'
import Image from 'next/image';

// import Service from '../../assets/images/service.png'
// import Service_2 from '../../assets/images/service-02.png'
// import Service_3 from '../../assets/images/service-03.png'
// import Service_4 from '../../assets/images/service-04.png'
// import Service_5 from '../../assets/images/service-05.png'

import ICON_1 from '../../assets/images/icon_1.png'
import ICON_2 from '../../assets/images/icon_2.png'

import dynamic from 'next/dynamic';
import { useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import MainBanner from './MainBanner';
import SpecialProducts from './SpecialProducts';
import FeaturedProducts from './FeaturedProducts';
import Category from './Category';
import MarqueeBrands from './MarqueeBrands';
import BlogCard from '../Common/BlogCard/BlogCard';

// const MarqueeBrands = dynamic(() => import('./MarqueeBrands'),{ssr:false, loading: () => <p>Loading...</p>,} );
// const SpecialProducts = dynamic(() => import('./SpecialProducts'),{ssr:false, loading: () => <p>Loading...</p>,});
// const FeaturedProducts = dynamic(() => import('./FeaturedProducts'),{ssr:false, loading: () => <p>Loading...</p>,});
// const MainBanner = dynamic(() => import('./MainBanner'),{ssr:false,loading: () => <p>Loading...</p>, });
// const Category = dynamic(() => import('./Category'),{ssr:false, loading: () => <p>Loading...</p>,});

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

const HomePage:React.FC<IProps> = () => {
    const {mobile,laptop,tablet,products,audio,watch,tivi}= useAppSelector((state: RootState) => state.products)
    return (    
        <>
            <MainBanner />
            {/* <SpecialProducts products={products} /> */}
            {/* <FeaturedProducts products={tablet} title='Máy tính bảng nổi bật nhất' /> */}
            <div style={{position:"relative"}}>
                <FeaturedProducts products={mobile} title='Iphone'/>
                <div className='' style={{position:"absolute",top:"-300px",left:"100px",width:"70px"}}>
                    <Image src={ICON_2} alt='' style={{width:"100%",height:"100%"}}/>
                </div>
                <div className='' style={{position:"absolute",top:"100px",right:"100px",width:"70px"}}>
                    <Image src={ICON_1} alt='' style={{width:"100%",height:"100%"}}/>
                </div>
            </div>
     
            {/* <section className={`p-lg-5 p-3`}>
                <div className="container-xxl">
                    <div className="d-flex justify-md-content-between justify-content-center align-items-center flex-wrap gap-4">
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service} alt="Service" />
                            <div>
                                <h6>Miễn phí giao hàng</h6>
                                <p>Các đơn trên 300k</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_2} alt="Service_2" />
                            <div>
                                <h6>Ưu đãi hàng ngày</h6>
                                <p>Tiết kiệm đến 25%</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_3} alt="Service_3" />
                            <div>
                                <h6>Hỗ trợ 24/7</h6>
                                <p>Yên tâm mua sắm</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_4} alt="Service_4" />
                            <div>
                                <h6>Giá cả phải chăng</h6>
                                <p>Thoải mái mua sắm</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <Image src={Service_5} alt="Service_5" />
                            <div>
                                <h6>Thanh toán an toàn</h6>
                                <p>Không lo mất tiền</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <FeaturedProducts products={watch} title='Apple Watch'/>
            {/* <Category /> */}

            <FeaturedProducts products={laptop} title='Macbook'/>
            <FeaturedProducts products={audio} title='Airpod'/>
{/* 
            // <section className={`${styles.famous_wrapper} home-wrapper-2 py-5`}>
            //     <div className="container-xxl">
            //         <div className="row pt-4">
            //             <div className="col-3">
            //                 <div className={`${styles.famous_card} p-3 bg-dark`}>
            //                     <div className={`${styles.famous_content} mb-3`}>
            //                         <h5 className='text-white'>Big Screen</h5>
            //                         <h6 className='text-white'>Smart Watch Series 8</h6>
            //                         <p className='text-white'>Form $399</p>
            //                     </div>
            //                     <Image className='img-fluid' src={require('../../assets/images/apple-watch-series-8.png')} alt="apple-watch-series" />
            //                 </div>
            //             </div>

            //             <div className="col-3">
            //                 <div className={`${styles.famous_card} p-3`}>
            //                     <div className={`${styles.famous_content} mb-3`}>
            //                         <h5>Studio Display</h5>
            //                         <h6>600 nits of brightness</h6>
            //                         <p>Form $399</p>
            //                     </div>
            //                     <Image className='img-fluid famous-img' src={require('../../assets/images/tab1.jpg')} alt="tab1" />
            //                 </div>
            //             </div>

            //             <div className="col-3">
            //                 <div className={`${styles.famous_card} p-3`}>
            //                     <div className={`${styles.famous_content} mb-3`}>
            //                         <h5>Smartphone</h5>
            //                         <h6>Iphone 13 Pro</h6>
            //                         <p>Form $399</p>
            //                     </div>
            //                     <Image className='img-fluid famous-img' src={require('../../assets/images/png.monster-209.png')} alt="monster" />
            //                 </div>
            //             </div>

            //             <div className="col-3">
            //                 <div className={`${styles.famous_card} p-3`}>
            //                     <div className={`${styles.famous_content} mb-3`}>
            //                         <h5>Home Speaker</h5>
            //                         <h6>Room-filling sound</h6>
            //                         <p>Form $399</p>
            //                     </div>
            //                     <Image className='img-fluid famous-img' src={require('../../assets/images/favpng_jbl-clip-2-loudspeaker-enclosure-wireless-speaker.png')} alt="speaker" />
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section> */}

{/*   
           <FeaturedProducts products={tivi} title='Ti vi nổi bật nhất'/> */}
            {/* <MarqueeBrands /> */}

            <section className='blog-wrapper home_wrapper_2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Tin tức công nghệ</h3>
                        </div>
                       <BlogCard />
                       <BlogCard />
                       <BlogCard />
                       <BlogCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;