import React from 'react';
import MainBanner_1 from '../../assets/images/main-banner-1.jpg'
import CatBanner_1 from '../../assets/images/catbanner-01.jpg'
import CatBanner_2 from '../../assets/images/catbanner-02.jpg'
import CatBanner_3 from '../../assets/images/catbanner-03.jpg'
import CatBanner_4 from '../../assets/images/catbanner-04.jpg'
import Image from 'next/image';
import Link from 'next/link';
import styles from './HomePage.module.scss'
const MainBanner = () => {
    return (
        <section className='home-wrapper-1 py-1'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className={`${styles.main_banner} position-relative py-3`}>
                                <Image src={MainBanner_1} alt="MainBanner Image" width={400} height={400}
                                    className='img-fluid w-100 rounded-3'/>
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
                                        className='img-fluid w-100 rounded-3'/>
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
                                    <Image src={CatBanner_3} alt="CatBanner_3"
                                        className='img-fluid rounded-3'/>
                                    <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className={`${styles.small_banner} position-relative`}>
                                    <Image src={CatBanner_4} alt="CatBanner_4"
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
    );
};

export default MainBanner;