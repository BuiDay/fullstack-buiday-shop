import React, { useEffect } from 'react';
import MainBanner_1 from '../../assets/images/baiviet-uu-dai-tang-tai-nghe-airpods-pro.png'
import CatBanner_1 from '../../assets/images/banner_1.png'
import CatBanner_2 from '../../assets/images/banner_2.png'
import CatBanner_3 from '../../assets/images/banner_3.png'
import CatBanner_4 from '../../assets/images/e7f568665f728a2cd363.jpg'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/HomePage.module.scss'
import { useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import appService from '@/redux/features/app/appService';
import { useAppDispatch } from "@/redux/hook";
import { getCategories } from '@/redux/features/app/appSilce';
import Banner_1 from '../../assets/images/TAOYAITAOYOU(1).png'
import Banner_2 from '../../assets/images/TAOYAITAOYOU(2).png'

const MainBanner = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: RootState) => state.app.categories || []);
    const handleCategories = async () => {
        try {
            const resCategories = await appService.apiGetCategories();
            if (resCategories)
                dispatch(getCategories(resCategories));
        } catch (error) {
            console.log(error)
        };
    }

    useEffect(() => {
        handleCategories();
    }, [])
    return (
        <section className='home-wrapper-1 py-1'>
            <div className="container-xxl mx-auto py-2">
                <div className="row w-100 py-1" style={{ height: "350px" }}>
                    <div className="col-md-2 col-12 p-1">
                        <div className={`${styles.main_menu} position-relative h-100`}>
                            <div className={`${styles.main_menu_content} shadow-sm`}>
                                {categories &&
                                    categories?.map((item: any, index: number) => {
                                        return (
                                            // <div key={index} className="dropdown categories">
                                            <div key={index} className="rudal">
                                                <Link
                                                    className="dropdown_item"
                                                    href={item.href ? `/${item.href}` : "#"}
                                                    prefetch={false}
                                                >
                                                    <Image
                                                        src={item.icon}
                                                        width={25}
                                                        height={25}
                                                        alt=""
                                                        className="dropdown_icon img fluid"
                                                    ></Image>
                                                    <span style={{fontSize:"14px"}}>{item.title}</span>
                                                </Link>
                                                <div className="dropdown_list list-brands" style={{ borderRadius: "5px" }}>
                                                    <p className="px-2 py-1 fw-bold" style={{ fontSize: "14px" }}>Chọn theo hãng</p>
                                                    {
                                                        item?.brands?.map((brand: { title: string, href: string }, index: number) => <>
                                                            <Link prefetch={false} className="dropdown_item" style={{ padding: "5px", paddingLeft: "15px", color: "#633bd4" ,fontSize:"14px"}} href={brand.href || "#"}>{brand.title}</Link>
                                                        </>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        );
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12 p-1" >
                        <div className={`${styles.main_banner} position-relative h-100`}>
                            <div style={{height:"100%"}}>
                                <Image src={Banner_2} alt="MainBanner Image" width={500} height={1000} className='img-fluid w-100 rounded-2' />
                            </div>
                            {/* <div className={`${styles.main_banner_content} position-absolute`}> */}
                                {/* <h4>Siêu rẻ</h4>
                                    <h5>IPhone 13 Pro Max</h5>
                                    <p className='mt-md-4 mt-1'>Chỉ từ 14 triệu</p>
                                    <Link href="#" className='button mt-4'>Mua ngay</Link> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="col-md-2 col-12 p-1">
                        <div className="d-flex flex-column gap-2 justify-content-center align-item-center py-0">
                            <div className={`${styles.small_banner} position-relative`}  style={{width:"87%"}}>
                                <Image src={CatBanner_1} alt="CatBanner_3"
                                    className='img-fluid rounded-4'/>
                                {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p className=''>Chỉ từ 5 triệu</p>
                                    </div> */}
                            </div>

                            <div className={`${styles.small_banner} position-relative`} style={{width:"87%"}}>
                                <Image src={CatBanner_2} alt="CatBanner_4"
                                    className='img-fluid rounded-4' />
                                {/* <div className={`${styles.small_banner_content} position-absolute`}>
                                        <h4>Free ENGRAVING</h4>
                                        <h5>Headphone 6</h5>
                                        <p className=''>Chỉ từ 1 triệu</p>
                                    </div> */}
                            </div>
                            <div className={`${styles.small_banner} position-relative`} style={{width:"87%"}}>
                                <Image src={CatBanner_3} alt="CatBanner_4"
                                    className='img-fluid rounded-4' />
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