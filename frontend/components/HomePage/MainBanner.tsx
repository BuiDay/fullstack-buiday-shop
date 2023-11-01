import React from 'react';
import MainBanner_1 from '../../assets/images/baiviet-uu-dai-tang-tai-nghe-airpods-pro.png'
import CatBanner_1 from '../../assets/images/2609_banner_500k_mua_TWS_no.jpg'
import CatBanner_2 from '../../assets/images/logitechg733lightspeed_4.jpg'
import CatBanner_3 from '../../assets/images/cover_baner_web.jpg'
import CatBanner_4 from '../../assets/images/e7f568665f728a2cd363.jpg'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/HomePage.module.scss'
const MainBanner = () => {
    return (
        <section className='home-wrapper-1 py-1'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={`${styles.main_banner} position-relative py-3`}>
                                <Image src={MainBanner_1} alt="MainBanner Image" width={400} height={400}
                                    className='img-fluid w-100 h-50 rounded-3'/>
                                <div className={`${styles.main_banner_content} position-absolute`}>
                                    {/* <h4>Siêu rẻ</h4>
                                    <h5>IPhone 13 Pro Max</h5>
                                    <p className='mt-md-4 mt-1'>Chỉ từ 14 triệu</p>
                                    <Link href="#" className='button mt-4'>Mua ngay</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex flex-wrap gap-1 justify-content-between align-content-between h-100 py-md-3 py-0">
                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_1} alt="CatBanner_1 Image" 
                                        className='img-fluid w-100 rounded-3'/>
                                    {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p className=''>Chỉ từ 18 triệu</p>
                                    </div> */}
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_2} alt="CatBanner_2 Image" 
                                        className='img-fluid rounded-3'/>
                                    {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy Ipad Air</h5>
                                        <p className=''>Chỉ từ 9 triệu</p>
                                    </div> */}
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_3} alt="CatBanner_3"
                                        className='img-fluid rounded-3'/>
                                    {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p className=''>Chỉ từ 5 triệu</p>
                                    </div> */}
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_4} alt="CatBanner_4"
                                        className='img-fluid rounded-3'/>
                                    {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>Free ENGRAVING</h4>
                                        <h5>Headphone 6</h5>
                                        <p className=''>Chỉ từ 1 triệu</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default MainBanner;