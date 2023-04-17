import React from 'react';
import styles from './SpecialProduct.module.scss'
import StarRatings from 'react-star-ratings';
import Link from 'next/link';
import CountdownTimer from '../Common/Countdown/CountdownTimer';
import Image from 'next/image';
import Slider from '../Common/Slider/Slider';

interface IProps{
    timer?:number,
    data?:any,
}

const SpecialProduct:React.FC<IProps> = ({timer,data}) => {
    return (
        <div className=''>
            <div className={`${styles.special_product_card}`} style={{minHeight:"350px",height:"100%"}}>
                <div className="d-flex">
                    <div>
                            <div style={{

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    borderRadius: "10px",
                                    maxWidth: '200px',
                                    width: "100%",
                                    backgroundColor: '#fff',
                                    padding: '0px 10px'
                                }}>
                                    {data && <Slider images={data.images && data.images.images} slidesPerView={2} navigate={false} width={200} height={180}/>}
                                </div>
                            </div>
                    </div>
                    <div className={`${styles.special_product_content}`}>
                        <h5 className={styles.brand}>{data?.brand}</h5>
                        <h6 className={styles.title}>{data?.title}</h6>
                        <StarRatings
                            rating={Math.floor(data.totalRating)}
                            // edit={false}
                            starDimension="15px"
                            starRatedColor="#ffd700"
                        />
                        <p className="price mt-2">
                            <span style={{fontSize:"18px"}} className="text-danger">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.discount)}</span>
                            <del style={{fontSize:"14px"}} className="text-drak ms-2">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data?.price)}</del>
                            {/* <strike>$200</strike> */}
                        </p>
                        <div className={`${styles.discount_till} d-flex align-items-center gap-2 mt-2`}>
                            <CountdownTimer targetDate={timer} />
                        </div>
                        <div className='prod-count mt-3'>
                            <p>Sản phẩm còn lại: 5</p>
                            <div className='progress mt-3'>
                                <div className={`${styles.progress_bar} w-75`} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        <Link href="#" className='button py-2 px-3 mt-3'>Mua ngay</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;